

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for close button

// export default function AddEventScreen({ navigation }) {
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState({ from: '', to: '' });
//   const [budget, setBudget] = useState('');
//   const [selectedService, setSelectedService] = useState('');
//   const [services, setServices] = useState([]);
//   const [showServiceModal, setShowServiceModal] = useState(false);
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);

//   const availableServices = [
//     { label: 'Venuservice', value: 'Venuservice', icon: 'rocket' },
//     { label: 'Catering', value: 'Catering', icon: 'cutlery' },
//     { label: 'Transportation', value: 'Transportation', icon: 'car' },
//     { label: 'Decoration', value: 'Decoration', icon: 'wrench' },
//   ];

//   const addService = (service) => {
//     if (service) {
//       if (!services.includes(service)) {
//         setServices([...services, service]);
//         setSelectedService(service); // Set selected service name
//         navigation.navigate(service); // Navigate to the selected service's specific screen
//       } else {
//         alert(`${service} is already added.`);
//       }
//       setShowServiceModal(false); // Close modal after selection
//     } else {
//       alert('Please select a service');
//     }
//   };

//   const finalizeEvent = () => {
//     if (!eventName || !budget || !eventDate.from || !eventDate.to) {
//       alert('Please fill in all fields before finalizing the event');
//     } else {
//       console.log('Event Finalized with details:', { eventName, eventDate, budget, services });
//     }
//   };

//   const formatDate = (date) => {
//     return date ? date.toLocaleDateString() : '';
//   };

//   const handleDateChange = (event, selectedDate, isStart) => {
//     const currentDate = selectedDate || event.date;
//     const formattedDate = formatDate(currentDate);

//     if (isStart) {
//       setEventDate((prevDate) => ({
//         ...prevDate,
//         from: formattedDate,
//       }));
//       setShowStartDatePicker(false);
//     } else {
//       setEventDate((prevDate) => ({
//         ...prevDate,
//         to: formattedDate,
//       }));
//       setShowEndDatePicker(false);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Create New Event</Text>

//       {/* Event Name Input */}
//       <View style={styles.inputWrapper}>
//         <Icon name="pencil" size={20} color="#4CAF50" style={styles.icon} />
//         <TextInput
//           placeholder="Enter Event Name"
//           value={eventName}
//           onChangeText={setEventName}
//           style={styles.input}
//         />
//       </View>

//       {/* Budget Input */}
//       <View style={styles.inputWrapper}>
//         <Icon name="dollar" size={20} color="#4CAF50" style={styles.icon} />
//         <TextInput
//           placeholder="Enter Event Budget"
//           keyboardType="numeric"
//           value={budget}
//           onChangeText={setBudget}
//           style={styles.input}
//         />
//       </View>

//       {/* Event Dates */}
//       <View style={styles.datePickerWrapper}>
//         <Text style={styles.label}>Event Dates</Text>
//         <Text style={styles.dateText}>
//           From: 
//           <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
//             <Text style={styles.dateSelectText}>{eventDate.from || 'Select Start Date'}</Text>
//           </TouchableOpacity>
//         </Text>
//         <Text style={styles.dateText}>
//           To: 
//           <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
//             <Text style={styles.dateSelectText}>{eventDate.to || 'Select End Date'}</Text>
//           </TouchableOpacity>
//         </Text>
//       </View>

//       {/* Start Date Picker */}
//       {showStartDatePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="default"
//           onChange={(event, selectedDate) => handleDateChange(event, selectedDate, true)}
//         />
//       )}

//       {/* End Date Picker */}
//       {showEndDatePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="default"
//           onChange={(event, selectedDate) => handleDateChange(event, selectedDate, false)}
//         />
//       )}

//       {/* Service Button */}
//       <TouchableOpacity onPress={() => setShowServiceModal(true)} style={styles.pickerButton}>
//         <Text style={styles.buttonText}>{selectedService ? selectedService : 'Select a Service'}</Text>
//       </TouchableOpacity>

//       {/* Modal for Service Selection */}
//       <Modal visible={showServiceModal} transparent={true} animationType="slide">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity onPress={() => setShowServiceModal(false)} style={styles.closeButton}>
//               <Ionicons name="close-circle" size={32} color="#4CAF50" />
//             </TouchableOpacity>
//             <Text style={styles.modalHeader}>Select a Service</Text>
//             {availableServices.map((service, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => addService(service.label)}
//                 style={styles.serviceOption}
//               >
//                 <View style={styles.serviceOptionContent}>
//                   <Icon
//                     name={service.icon}
//                     size={22}
//                     color="#4CAF50"
//                     style={styles.serviceIcon}
//                   />
//                   <Text style={styles.serviceOptionText}>{service.label}</Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </Modal>

//       {/* Finalize Event Button */}
//       <TouchableOpacity onPress={finalizeEvent} style={styles.finalizeButton}>
//         <Text style={styles.buttonText}>Finalize Event</Text>
//       </TouchableOpacity>

//       {/* Services Added */}
//       <View style={styles.servicesList}>
//         <Text style={styles.servicesHeader}>Added Services:</Text>
//         {services.map((service, index) => (
//           <Text key={index} style={styles.serviceItem}>{service}</Text>
//         ))}
//       </View>
//     </ScrollView>
//   );
// // }
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for close button
// import { useNavigation } from '@react-navigation/native';

// export default function AddEventScreen({ navigation }) {
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState({ from: '', to: '' });
//   const [budget, setBudget] = useState('');
//   const [selectedService, setSelectedService] = useState('');
//   const [services, setServices] = useState([]);
//   const [showServiceModal, setShowServiceModal] = useState(false);
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);
//   const navigation = useNavigation();

//   const availableServices = [
//     { label: 'Venuservice', value: 'Venuservice', icon: 'rocket' },
//     { label: 'Catering', value: 'Catering', icon: 'cutlery' },
//     { label: 'Transportation', value: 'Transportation', icon: 'car' },
//     { label: 'Decoration', value: 'Decoration', icon: 'wrench' },
//   ];

//   const addService = (service) => {
//     if (service) {
//       if (!services.includes(service)) {
//         setServices([...services, service]);
//         setSelectedService(service); // Set selected service name
//         navigation.navigate(service); // Navigate to the selected service's specific screen
//       } else {
//         alert(`${service} is already added.`);
//       }
//       setShowServiceModal(false); // Close modal after selection
//     } else {
//       alert('Please select a service');
//     }
//   };

//   const finalizeEvent = () => {
//     if (!eventName || !budget || !eventDate.from || !eventDate.to) {
//       alert('Please fill in all fields before finalizing the event');
//     } else {
//       // Navigate to EventProgress screen with the event data
//       navigation.navigate('Eventprogress', {
//         eventData: { eventName, eventDate, budget, services },
//       });
//     }
//   };

//   const formatDate = (date) => {
//     return date ? date.toLocaleDateString() : '';
//   };

//   const handleDateChange = (event, selectedDate, isStart) => {
//     const currentDate = selectedDate || event.date;
//     const formattedDate = formatDate(currentDate);

//     if (isStart) {
//       setEventDate((prevDate) => ({
//         ...prevDate,
//         from: formattedDate,
//       }));
//       setShowStartDatePicker(false);
//     } else {
//       setEventDate((prevDate) => ({
//         ...prevDate,
//         to: formattedDate,
//       }));
//       setShowEndDatePicker(false);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Create New Event</Text>

//       {/* Event Name Input */}
//       <View style={styles.inputWrapper}>
//         <Icon name="pencil" size={20} color="#4CAF50" style={styles.icon} />
//         <TextInput
//           placeholder="Enter Event Name"
//           value={eventName}
//           onChangeText={setEventName}
//           style={styles.input}
//         />
//       </View>

//       {/* Budget Input */}
//       <View style={styles.inputWrapper}>
//         <Icon name="dollar" size={20} color="#4CAF50" style={styles.icon} />
//         <TextInput
//           placeholder="Enter Event Budget"
//           keyboardType="numeric"
//           value={budget}
//           onChangeText={setBudget}
//           style={styles.input}
//         />
//       </View>

//       {/* Event Dates */}
//       <View style={styles.datePickerWrapper}>
//         <Text style={styles.label}>Event Dates</Text>
//         <Text style={styles.dateText}>
//           From: 
//           <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
//             <Text style={styles.dateSelectText}>{eventDate.from || 'Select Start Date'}</Text>
//           </TouchableOpacity>
//         </Text>
//         <Text style={styles.dateText}>
//           To: 
//           <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
//             <Text style={styles.dateSelectText}>{eventDate.to || 'Select End Date'}</Text>
//           </TouchableOpacity>
//         </Text>
//       </View>

//       {/* Start Date Picker */}
//       {showStartDatePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="default"
//           onChange={(event, selectedDate) => handleDateChange(event, selectedDate, true)}
//         />
//       )}

//       {/* End Date Picker */}
//       {showEndDatePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="default"
//           onChange={(event, selectedDate) => handleDateChange(event, selectedDate, false)}
//         />
//       )}

//       {/* Service Button */}
//       <TouchableOpacity onPress={() => setShowServiceModal(true)} style={styles.pickerButton}>
//         <Text style={styles.buttonText}>{selectedService ? selectedService : 'Select a Service'}</Text>
//       </TouchableOpacity>

//       {/* Modal for Service Selection */}
//       <Modal visible={showServiceModal} transparent={true} animationType="slide">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity onPress={() => setShowServiceModal(false)} style={styles.closeButton}>
//               <Ionicons name="close-circle" size={32} color="#4CAF50" />
//             </TouchableOpacity>
//             <Text style={styles.modalHeader}>Select a Service</Text>
//             {availableServices.map((service, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => addService(service.label)}
//                 style={styles.serviceOption}
//               >
//                 <View style={styles.serviceOptionContent}>
//                   <Icon
//                     name={service.icon}
//                     size={22}
//                     color="#4CAF50"
//                     style={styles.serviceIcon}
//                   />
//                   <Text style={styles.serviceOptionText}>{service.label}</Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </Modal>

//       {/* Finalize Event Button */}
//       <TouchableOpacity onPress={finalizeEvent} style={styles.finalizeButton}>
//         <Text style={styles.buttonText}>Finalize Event</Text>
//       </TouchableOpacity>

//       {/* Services Added */}
//       <View style={styles.servicesList}>
//         <Text style={styles.servicesHeader}>Added Services:</Text>
//         {services.map((service, index) => (
//           <Text key={index} style={styles.serviceItem}>{service}</Text>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//     textAlign: 'center',
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 12,
//     borderBottomWidth: 1,
//     padding: 10,
//     borderColor: '#ddd',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     color: '#555',
//   },
//   datePickerWrapper: {
//     marginVertical: 20,
//   },
//   dateText: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 10,
//   },
//   dateSelectText: {
//     color: '#4CAF50',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   pickerButton: {
//     backgroundColor: '#4CAF50',
//     padding: 12,
//     borderRadius: 5,
//     marginVertical: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   finalizeButton: {
//     backgroundColor: '#2196F3',
//     padding: 12,
//     borderRadius: 5,
//     marginVertical: 10,
//     alignItems: 'center',
//   },
//   servicesList: {
//     marginVertical: 20,
//   },
//   servicesHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   serviceItem: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     elevation: 5,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
    
//   },
//   modalHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//   },
//   serviceOption: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//     width: '100%',
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#f7f7f7',
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   serviceOptionContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   serviceIcon: {
//     marginRight: 15,
//   },
//   serviceOptionText: {
//     fontSize: 16,
//     color: '#333',
//   },
// });
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for close button
import { useNavigation } from '@react-navigation/native';

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
    { label: 'Venuservice', value: 'Venuservice', icon: 'rocket' },
    { label: 'Catering', value: 'Catering', icon: 'cutlery' },
    { label: 'Transportation', value: 'Transportation', icon: 'car' },
    { label: 'Decoration', value: 'Decoration', icon: 'wrench' },
  ];

  const addService = (service) => {
    if (service) {
      if (!services.includes(service)) {
        setServices([...services, service]);
        setSelectedService(service);
        navigation.navigate(service);
      } else {
        alert(`${service} is already added.`);
      }
      setShowServiceModal(false);
    } else {
      alert('Please select a service');
    }
  };

  const finalizeEvent = () => {
    if (!eventName || !budget || !eventDate.from || !eventDate.to) {
      alert('Please fill in all fields before finalizing the event');
    } else {
      navigation.navigate('Eventprogress', {
        eventData: { eventName, eventDate, budget, services },
      });
    }
  };

  const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString() : '';  // Format the Date object to string
  };

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

      <View style={styles.inputWrapper}>
        <Icon name="pencil" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          placeholder="Enter Event Name"
          value={eventName}
          onChangeText={setEventName}
          style={styles.input}
        />
      </View>

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

      {showStartDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleDateChange(event, selectedDate, true)}
        />
      )}

      {showEndDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleDateChange(event, selectedDate, false)}
        />
      )}

      <TouchableOpacity onPress={() => setShowServiceModal(true)} style={styles.pickerButton}>
        <Text style={styles.buttonText}>{selectedService ? selectedService : 'Select a Service'}</Text>
      </TouchableOpacity>

      <Modal visible={showServiceModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setShowServiceModal(false)} style={styles.closeButton}>
              <Ionicons name="close-circle" size={32} color="#4CAF50" />
            </TouchableOpacity>
            <Text style={styles.modalHeader}>Select a Service</Text>
            {availableServices.map((service, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => addService(service.label)}
                style={styles.serviceOption}
              >
                <View style={styles.serviceOptionContent}>
                  <Icon
                    name={service.icon}
                    size={22}
                    color="#4CAF50"
                    style={styles.serviceIcon}
                  />
                  <Text style={styles.serviceOptionText}>{service.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={finalizeEvent} style={styles.finalizeButton}>
        <Text style={styles.buttonText}>Finalize Event</Text>
      </TouchableOpacity>

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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 15,
  },
  serviceOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  serviceOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceIcon: {
    marginRight: 10,
  },
  serviceOptionText: {
    fontSize: 16,
    color: '#333',
  },
});
