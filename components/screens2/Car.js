import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TrainScheduleScreen = ({ navigation }) => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  
  const schedules = [
    { id: '1', price: '$4.0' },
    { id: '2', price: '$5.0' },
    { id: '3', price: '$6.0' },
  ];

  const onTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedTime;
    setShowPicker(false);
    setSelectedTime(currentDate);
  };

  const handleScheduleSelect = (schedule) => {
    // Show confirmation alert
    Alert.alert(
      "Confirm Purchase",
      `You selected the schedule with price ${schedule.price}. Do you want to proceed?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Proceed",
          onPress: () => {
            // Navigate to the Payment screen upon confirmation
            // navigation.navigate('Payment', { price: schedule.price, time: selectedTime.toLocaleTimeString() });
            navigation.navigate('Payment', { price: schedule.price, time: selectedTime.toLocaleTimeString() });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Schedule</Text>
      
      <View style={styles.timePickerContainer}>
        <Button onPress={() => setShowPicker(true)} title="Select Time" />
        <Text style={styles.selectedTimeText}>
          Selected Time: {selectedTime.toLocaleTimeString()}
        </Text>
      </View>

      {showPicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onTimeChange}
        />
      )}

      <FlatList
        data={schedules}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => handleScheduleSelect(item)}
          >
            <Text style={styles.scheduleText}>Price/Hour: {item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F3EC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timePickerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  selectedTimeText: {
    fontSize: 18,
    marginTop: 10,
  },
  scheduleButton: {
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  scheduleText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default TrainScheduleScreen;
