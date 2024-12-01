import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const teamMembers = [
  {
    name: 'Kazi Zain',
    title: 'Team Leader & Developer',
    image: require('../Images/Mirza.png'), // Local image
  },
  {
    name: 'Ali Kahful Wara',
    title: 'Full Stack Developer',
    image: require('../Images/Ali.png'), // Local image
  },
  {
    name: 'Zain Ul Abdin',
    title: 'Full Stack Developer',
    image: require('../Images/Zain.png'), // Local image
  },
];

export default function Team() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollcontainer}>
      <Text style={styles.header}>Meet Our Team</Text>
      <Text style={styles.description}>
      EventCraft leads web and mobile development for an event service provider, creating innovative platforms that streamline event management and enhance attendee engagement.
      </Text>
      <Text style={styles.description}>
      We empower event professionals with the tools needed to elevate the event experience and drive success in the digital age.
      </Text>
      <View style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <View key={index} style={styles.teamMember}>
            <Image source={member.image} style={styles.image} />
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.title}>{member.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Menu')}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'flex-end', // Ensures the button is positioned at the bottom
      },
  scrollcontainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F9F3EC',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  teamMember: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    color: '#888',
  },
  backButton: {
    position: 'absolute',
    bottom: 30, // Adjust this value as needed
    left: '50%',
    transform: [{ translateX: -30 }], // Adjust based on button size for centering
    backgroundColor: '#6A4E36', // Button background color
    borderRadius: 50, // Makes the button round
    padding: 15, // Size of the button
    alignItems: 'center',
    justifyContent: 'center',
  },
});
