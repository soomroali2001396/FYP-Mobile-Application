// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Button, Alert } from 'react-native';
// import { Calendar } from 'react-native-calendars'; // Import Calendar from react-native-calendars
// import { Picker } from '@react-native-picker/picker'; // Correct import for Picker

// const EventSetupScreen = ({ navigation }) => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [budget, setBudget] = useState('');
//   const [eventType, setEventType] = useState('');
  
//   const [isDateModalVisible, setIsDateModalVisible] = useState(false);
//   const [isBudgetModalVisible, setIsBudgetModalVisible] = useState(false);
//   const [isEventTypeModalVisible, setIsEventTypeModalVisible] = useState(false);

//   // Handle "Next" button action
//   const handleNext = () => {
//     if (!startDate || !endDate || !budget || !eventType) {
//       Alert.alert('Validation Error', 'All fields are mandatory!');
//       return;
//     }
//     navigation.navigate('NextScreen', { startDate, endDate, budget, eventType });
//   };

//   // Handle selecting a start date
//   const handleDayPress = (day) => {
//     if (!startDate) {
//       // Set start date if not already selected
//       setStartDate(day.dateString);
//     } else if (startDate && !endDate) {
//       // Set end date if start date is already selected
//       setEndDate(day.dateString);
//     } else {
//       // Reset dates if both are selected (optional)
//       setStartDate(day.dateString);
//       setEndDate('');
//     }
//   };

//   // Format the calendar marked dates for range selection
//   const markedDates = startDate && endDate ? {
//     [startDate]: { selected: true, selectedColor: 'blue' },
//     [endDate]: { selected: true, selectedColor: 'blue' },
//     [`${startDate}_${endDate}`]: {
//       selected: true,
//       selectedColor: 'blue',
//       selectedTextColor: 'white',
//     },
//   } : startDate ? {
//     [startDate]: { selected: true, selectedColor: 'blue' },
//   } : {};

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Event Setup</Text>

//       {/* Grid of buttons */}
//       <View style={styles.grid}>
//         {/* Set Date Button */}
//         <TouchableOpacity style={styles.button} onPress={() => setIsDateModalVisible(true)}>
//           <Text style={styles.buttonText}>
//             {`Set Date: From ${startDate} To ${endDate}`}
//           </Text>
//         </TouchableOpacity>

//         {/* Set Budget Button */}
//         <TouchableOpacity style={styles.button} onPress={() => setIsBudgetModalVisible(true)}>
//           <Text style={styles.buttonText}>Set Budget</Text>
//         </TouchableOpacity>

//         {/* Set Event Type Button */}
//         <TouchableOpacity style={styles.button} onPress={() => setIsEventTypeModalVisible(true)}>
//           <Text style={styles.buttonText}>{eventType || 'Set Event Type'}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modal for setting Date (Start and End Date) */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isDateModalVisible}
//         onRequestClose={() => setIsDateModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Set Date Range</Text>

//             {/* Calendar for selecting dates */}
//             <Calendar
//               onDayPress={handleDayPress}
//               markedDates={markedDates}
//               markingType={'period'} // To show range selection
//               monthFormat={'yyyy MM'} // Display year and month
//             />

//             <View style={styles.modalButtonContainer}>
//               <Button title="Close" onPress={() => setIsDateModalVisible(false)} />
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Modal for setting Budget */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isBudgetModalVisible}
//         onRequestClose={() => setIsBudgetModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Set Budget</Text>
//             {/* TextInput for entering budget */}
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Budget"
//               keyboardType="numeric"
//               value={budget}
//               onChangeText={setBudget}
//             />
//             <View style={styles.modalButtonContainer}>
//               <Button title="Set Budget" onPress={() => setIsBudgetModalVisible(false)} />
//               <Button title="Close" onPress={() => setIsBudgetModalVisible(false)} />
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Modal for setting Event Type */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isEventTypeModalVisible}
//         onRequestClose={() => setIsEventTypeModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Set Event Type</Text>
//             {/* Picker for selecting event type */}
//             <Picker
//               selectedValue={eventType}
//               onValueChange={(itemValue) => setEventType(itemValue)} // Directly update the state
//             >
//               <Picker.Item label="Wedding Event" value="Wedding" />
//               <Picker.Item label="Business Event" value="Business" />
//             </Picker>
//             <View style={styles.modalButtonContainer}>
//               <Button title="Set Event Type" onPress={() => setIsEventTypeModalVisible(false)} />
//               <Button title="Close" onPress={() => setIsEventTypeModalVisible(false)} />
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Next Button */}
//       <Button title="Next" onPress={handleNext} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#6A4E36',
//     padding: 20,
//     margin: 10,
//     borderRadius: 10,
//     width: '40%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     width: '80%',
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
// });

// export default EventSetupScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddEventScreen({ navigation }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState({ from: '', to: '' });
  const [budget, setBudget] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [services, setServices] = useState([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const availableServices = [
    { label: 'Catering', value: 'Catering' },
    { label: 'Transport', value: 'Transport' },
    { label: 'Venue', value: 'Venue' },
  ];

  const addService = () => {
    if (selectedService) {
      setServices([...services, selectedService]);
      // Navigate to the selected service's specific screen
      navigation.navigate(selectedService);
      setShowServiceModal(false); // Close modal after selection
    } else {
      alert('Please select a service');
    }
  };

  const finalizeEvent = () => {
    if (!eventName || !budget || !eventDate.from || !eventDate.to) {
      alert('Please fill in all fields before finalizing the event');
    } else {
      console.log('Event Finalized with details:', { eventName, eventDate, budget, services });
    }
  };

  // Format date to locale date string
  const formatDate = (date) => {
    return date ? date.toLocaleDateString() : '';
  };

  // Handle date change for start and end date pickers
  const handleDateChange = (event, selectedDate, isStart) => {
    const currentDate = selectedDate || event.date;
    const formattedDate = formatDate(currentDate);

    if (isStart) {
      setEventDate((prevDate) => ({
        ...prevDate,
        from: formattedDate,
      }));
      setShowStartDatePicker(false);
    } else {
      setEventDate((prevDate) => ({
        ...prevDate,
        to: formattedDate,
      }));
      setShowEndDatePicker(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create New Event</Text>

      {/* Event Name Input */}
      <View style={styles.inputWrapper}>
        <Icon name="pencil" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          placeholder="Enter Event Name"
          value={eventName}
          onChangeText={setEventName}
          style={styles.input}
        />
      </View>

      {/* Budget Input */}
      <View style={styles.inputWrapper}>
        <Icon name="dollar" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          placeholder="Enter Event Budget"
          keyboardType="numeric"
          value={budget}
          onChangeText={setBudget}
          style={styles.input}
        />
      </View>

      {/* Event Dates */}
      <View style={styles.datePickerWrapper}>
        <Text style={styles.label}>Event Dates</Text>
        <Text style={styles.dateText}>
          From: 
          <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
            <Text style={styles.dateSelectText}>{eventDate.from || 'Select Start Date'}</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.dateText}>
          To: 
          <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
            <Text style={styles.dateSelectText}>{eventDate.to || 'Select End Date'}</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Start Date Picker */}
      {showStartDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleDateChange(event, selectedDate, true)}
        />
      )}

      {/* End Date Picker */}
      {showEndDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleDateChange(event, selectedDate, false)}
        />
      )}

      {/* Service Button */}
      <TouchableOpacity onPress={() => setShowServiceModal(true)} style={styles.pickerButton}>
        <Text style={styles.buttonText}>{selectedService ? selectedService : 'Select a Service'}</Text>
      </TouchableOpacity>

      {/* Modal for Service Selection */}
      <Modal visible={showServiceModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Select a Service</Text>
            {availableServices.map((service, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedService(service.label);
                  addService();
                }}
                style={styles.serviceOption}
              >
                <Text style={styles.serviceOptionText}>{service.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setShowServiceModal(false)} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Finalize Event Button */}
      <TouchableOpacity onPress={finalizeEvent} style={styles.finalizeButton}>
        <Text style={styles.buttonText}>Finalize Event</Text>
      </TouchableOpacity>

      {/* Services Added */}
      <View style={styles.servicesList}>
        <Text style={styles.servicesHeader}>Added Services:</Text>
        {services.map((service, index) => (
          <Text key={index} style={styles.serviceItem}>{service}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#555',
  },
  datePickerWrapper: {
    marginVertical: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  dateSelectText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  finalizeButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  servicesList: {
    marginVertical: 20,
  },
  servicesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  serviceItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  serviceOptionText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});

