import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'; // For accessing passed parameters
import emailjs from 'emailjs-com'; // Import EmailJS
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons

export default function Existinghelper() {
const navigation = useNavigation(); // Use navigation hook
  const route = useRoute();

  const { ongoingEvents } = route.params; // Get ongoing events passed from the previous screen

  const [helperName, setHelperName] = useState('');
  const [helperEmail, setHelperEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSubmit = async () => {
    if (!helperName || !helperEmail || !selectedEvent) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Prepare the email content
    const emailContent = {
      to_email: helperEmail,
      subject: 'Invitation to Join as a Helper',
      message: `Hello ${helperName},\n\nYou have been invited to join the event "${selectedEvent.title}" as a helper.\n\nWe appreciate your support!`,
      from_name: helperName,
      reply_to: 'no-reply@yourdomain.com',
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_z3nqews', // Your EmailJS service ID
        'template_e00fphx', // Your EmailJS template ID
        emailContent,
        'LpIfGOa0Y4BdvnEVV' // Your EmailJS user ID
      );
      console.log('Email sent successfully:', response);
      Alert.alert('Success', 'The invitation email has been sent to the helper!');
    } catch (error) {
      console.log('Error sending email:', error);
      Alert.alert('Error', 'There was an issue sending the email');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Evolving Helper's Role</Text>

      {/* Helper Name Input */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="account" size={24} color="#6A4E36" />
        <TextInput
          style={styles.input}
          placeholder="Enter Helper Name"
          value={helperName}
          onChangeText={setHelperName}
        />
      </View>

      {/* Helper Email Input */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email" size={24} color="#6A4E36" />
        <TextInput
          style={styles.input}
          placeholder="Enter Helper's Email"
          value={helperEmail}
          onChangeText={setHelperEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Event Selection */}
      <Text style={styles.label}>Select Event</Text>
      {ongoingEvents.length > 0 ? (
        ongoingEvents.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={[
              styles.eventOption,
              selectedEvent?.id === event.id && styles.selectedEvent, // Apply selected style if event is selected
            ]}
            onPress={() => setSelectedEvent(event)}
          >
            <Text style={styles.eventTitle}>{event.title}</Text>
            {selectedEvent?.id === event.id && (
              <MaterialCommunityIcons
                name="check-circle"
                size={24}
                color="#6A4E36"
              />
            )}
          </TouchableOpacity>
        ))
      ) : (
        <Text>No ongoing events</Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        style={[styles.submitButton, (helperName && helperEmail && selectedEvent) ? {} : styles.disabledButton]}
        onPress={handleSubmit}
        disabled={!helperName || !helperEmail || !selectedEvent}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A4E36',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#6A4E36',
  },
  eventOption: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 16,
    color: '#6A4E36',
  },
  selectedEvent: {
    backgroundColor: '#FFD700', // Yellow color for selected event
    borderColor: '#FFD700', // Same border color as selected event
  },
  submitButton: {
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#B8B8B8',
  },
  backButton: {
    position: 'absolute',
    bottom: -100, // Adjust this value as needed
    left: '50%',
    transform: [{ translateX: -30 }], // Adjust based on button size for centering
    backgroundColor: '#6A4E36', // Button background color
    borderRadius: 50, // Makes the button round
    padding: 15, // Size of the button
    alignItems: 'center',
    justifyContent: 'center',
  },
});
