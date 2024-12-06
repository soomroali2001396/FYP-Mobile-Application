
// import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for close button
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';  // Make sure this line is included


// export default function AddEventScreen({ navigation }) {
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState({ from: '', to: '' });
//   const [budget, setBudget] = useState('');
//   const [selectedService, setSelectedService] = useState('');
//   const [services, setServices] = useState([]);
//   const [showServiceModal, setShowServiceModal] = useState(false);
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);
//   const [serviceToUpdate, setServiceToUpdate] = useState(null);

//   const availableServices = [
//     { label: 'Venuservice', value: 'Venuservice', icon: 'rocket' },
//     { label: 'Catering', value: 'Catering', icon: 'cutlery' },
//     { label: 'Transportation', value: 'Transportation', icon: 'car' },
//     { label: 'Decoration', value: 'Decoration', icon: 'wrench' },
//   ];

//   const addService = (service) => {
//     if (serviceToUpdate) {
//       const updatedServices = services.map((item) =>
//         item === serviceToUpdate ? service : item
//       );
//       setServices(updatedServices);
//       setServiceToUpdate(null);
//     } else {
//       if (!services.includes(service)) {
//         setServices([...services, service]);
//       } else {
//         alert(`${service} is already added.`);
//       }
//     }
  
//     setSelectedService(service);
//     setShowServiceModal(false);
  
//     // Navigate to the corresponding service page
//     switch (service) {
//       case 'Venuservice':
//         navigation.navigate('Venuservice');
//         break;
//       case 'Catering':
//         navigation.navigate('Catering');
//         break;
//       case 'Transportation':
//         navigation.navigate('Transportation');
//         break;
//       case 'Decoration':
//         navigation.navigate('Decoration');
//         break;
//       default:
//         break;
//     }
//   };

//   const deleteService = (service) => {
//     setServices(services.filter((item) => item !== service));
//   };

//   const selectServiceToUpdate = (service) => {
//     setServiceToUpdate(service);
//     setShowServiceModal(true);
//   };

//   const finalizeEvent = () => {
//     if (!eventName || !budget || !eventDate.from || !eventDate.to) {
//       alert('Please fill in all fields before finalizing the event');
//     } else {
//       navigation.navigate('Eventprogress', {
//         eventData: { eventName, eventDate, budget, services },
//       });
//     }
//   };

//   const formatDate = (date) => {
//     return date ? new Date(date).toLocaleDateString() : '';
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

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.serviceCard}>
//         <Text style={styles.serviceText}>{item}</Text>
//         <View style={styles.serviceActions}>
//           <TouchableOpacity onPress={() => deleteService(item)}>
//             <Icon name="trash" size={20} color="red" style={styles.deleteIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => selectServiceToUpdate(item)}>
//             <Icon name="edit" size={20} color="#2196F3" style={styles.editIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create New Event</Text>

//       {/* Event Name Input */}
//       <View style={styles.inputWrapper}>
//         <Icon name="pencil" size={20} color="#6A4E36" style={styles.icon} />
//         <TextInput
//           placeholder="Enter Event Name"
//           value={eventName}
//           onChangeText={setEventName}
//           style={styles.input}
//         />
//       </View>

//       {/* Event Budget Input */}
//       <View style={styles.inputWrapper}>
//         <Icon name="dollar" size={20} color="#6A4E36" style={styles.icon} />
//         <TextInput
//           placeholder="Enter Event Budget"
//           keyboardType="numeric"
//           value={budget}
//           onChangeText={setBudget}
//           style={styles.input}
//         />
//       </View>

//       {/* Event Date Pickers */}
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

//       {/* Add Service Button */}
//       <View style={styles.addServiceContainer}>
//         <TouchableOpacity onPress={() => setShowServiceModal(true)} style={styles.fab}>
//           <Text style={styles.fabText}>+</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modal for Service Selection */}
//       <Modal visible={showServiceModal} transparent={true} animationType="slide">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity onPress={() => setShowServiceModal(false)} style={styles.closeButton}>
//               <Ionicons name="close-circle" size={32} color="#6A4E36" />
//             </TouchableOpacity>
//             <Text style={styles.modalHeader}>Select a Service</Text>
//             <FlatList
//               contentContainerStyle={styles.servicesListContent}
//               data={availableServices}
//               keyExtractor={(item) => item.value}
//               renderItem={({ item }) => (
//                 <TouchableOpacity onPress={() => addService(item.label)} style={styles.serviceOption}>
//                   <View style={styles.serviceOptionContent}>
//                     <Icon name={item.icon} size={50} color="#6A4E36" style={styles.serviceIcon} />
//                     <Text style={styles.serviceOptionText}>{item.label}</Text>
//                   </View>
//                 </TouchableOpacity>
//               )}
//             />
//           </View>
//         </View>
//       </Modal>

//       {/* Added Services List */}
//       <View style={styles.servicesList}>
//         <Text style={styles.servicesHeader}>Added Services:</Text>
//         <FlatList
//           data={services}
//           keyExtractor={(item) => item}
//           renderItem={renderItem}
//         />
//       </View>

//       {/* Finalize Button */}
//       <TouchableOpacity onPress={finalizeEvent} style={styles.finalizeButton}>
//         <Text style={styles.buttonText}>Finalize Event</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9F3EC',
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
//     paddingBottom: 5,
//     borderColor: '#ccc',
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
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   datePickerWrapper: {
//     marginVertical: 10,
//   },
//   dateText: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 10,
//   },
//   dateSelectText: {
//     color: '#6A4E36',
//     fontWeight: 'bold',
//   },
//   addServiceContainer: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   fab: {
//     backgroundColor: '#6A4E36',
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fabText: {
//     fontSize: 30,
//     color: '#fff',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     width: '80%',
//     borderRadius: 10,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   modalHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#333',
//     textAlign: 'center',
//   },
//   servicesListContent: {
//     paddingBottom: 20,
//   },
//   serviceOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
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
//   servicesList: {
//     marginTop: 20,
//   },
//   servicesHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   serviceCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#F9F3EC',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 5,
//     shadowColor: '#ccc',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   serviceText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   serviceActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   deleteIcon: {
//     marginRight: 10,
//   },
//   editIcon: {
//     marginRight: 10,
//   },
//   finalizeButton: {
//     backgroundColor: '#1f1f1f',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     marginTop: 10,
//     elevation: 3,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for close button
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';  // Make sure this line is included

export default function AddEventScreen({ navigation }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState({ from: '', to: '' });
  const [budget, setBudget] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [services, setServices] = useState([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [serviceToUpdate, setServiceToUpdate] = useState(null);

  const availableServices = [
    { label: 'Venuservice', value: 'Venuservice', icon: 'rocket' },
    { label: 'Catering', value: 'Catering', icon: 'cutlery' },
    { label: 'Transportation', value: 'Transportation', icon: 'car' },
    { label: 'Decoration', value: 'Decoration', icon: 'wrench' },
  ];

  const addService = (service) => {
    if (serviceToUpdate) {
      const updatedServices = services.map((item) =>
        item === serviceToUpdate ? service : item
      );
      setServices(updatedServices);
      setServiceToUpdate(null);
    } else {
      if (!services.includes(service)) {
        setServices([...services, service]);
      } else {
        alert(`${service} is already added.`);
      }
    }
  
    setSelectedService(service);
    setShowServiceModal(false);
  
    // Navigate to the corresponding service page
    switch (service) {
      case 'Venuservice':
        navigation.navigate('Venuservice');
        break;
      case 'Catering':
        navigation.navigate('Catering');
        break;
      case 'Transportation':
        navigation.navigate('Transportation');
        break;
      case 'Decoration':
        navigation.navigate('Decoration');
        break;
      default:
        break;
    }
  };

  const deleteService = (service) => {
    setServices(services.filter((item) => item !== service));
  };

  const selectServiceToUpdate = (service) => {
    setServiceToUpdate(service);
    setShowServiceModal(true);
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
    return date ? new Date(date).toLocaleDateString() : '';
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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.serviceCard}>
        <Text style={styles.serviceText}>{item}</Text>
        <View style={styles.serviceActions}>
          <TouchableOpacity onPress={() => deleteService(item)}>
            <Icon name="trash" size={20} color="red" style={styles.deleteIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectServiceToUpdate(item)}>
            <Icon name="edit" size={20} color="#2196F3" style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Event</Text>

      {/* Event Name Input */}
      <View style={styles.inputWrapper}>
        <Icon name="pencil" size={20} color="#6A4E36" style={styles.icon} />
        <TextInput
          placeholder="Enter Event Name"
          value={eventName}
          onChangeText={setEventName}
          style={styles.input}
        />
      </View>

      {/* Event Budget Input */}
      <View style={styles.inputWrapper}>
        <Icon name="dollar" size={20} color="#6A4E36" style={styles.icon} />
        <TextInput
          placeholder="Enter Event Budget"
          keyboardType="numeric"
          value={budget}
          onChangeText={setBudget}
          style={styles.input}
        />
      </View>

      {/* Event Date Pickers */}
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

      {/* Add Service Button */}
      <View style={styles.addServiceContainer}>
        <TouchableOpacity onPress={() => setShowServiceModal(true)} style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Service Selection */}
      <Modal visible={showServiceModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setShowServiceModal(false)} style={styles.closeButton}>
              <Ionicons name="close-circle" size={32} color="#6A4E36" />
            </TouchableOpacity>
            <Text style={styles.modalHeader}>Select a Service</Text>
            <FlatList
              contentContainerStyle={styles.servicesListContent}
              data={availableServices}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => addService(item.label)} style={styles.serviceOption}>
                  <View style={styles.serviceOptionContent}>
                    <Icon name={item.icon} size={50} color="#6A4E36" style={styles.serviceIcon} />
                    <Text style={styles.serviceOptionText}>{item.label}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Added Services List */}
      <View style={styles.servicesList}>
        <Text style={styles.servicesHeader}>Added Services:</Text>
        <FlatList
          data={services}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
      </View>

      {/* Finalize Button */}
      <TouchableOpacity onPress={finalizeEvent} style={styles.finalizeButton}>
        <Text style={styles.buttonText}>Finalize Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F3EC',
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
    paddingBottom: 5,
    borderColor: '#ccc',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  datePickerWrapper: {
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  dateSelectText: {
    color: '#6A4E36',
    fontWeight: 'bold',
  },
  addServiceContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  fab: {
    backgroundColor: '#6A4E36',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    fontSize: 30,
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  servicesListContent: {
    paddingBottom: 20,
  },
  serviceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  serviceOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceIcon: {
    marginRight: 15,
  },
  serviceOptionText: {
    fontSize: 16,
    color: '#333',
  },
  servicesList: {
    marginTop: 20,
  },
  servicesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  serviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F3EC',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  serviceText: {
    fontSize: 16,
    color: '#333',
  },
  serviceActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteIcon: {
    marginRight: 10,
  },
  editIcon: {
    marginRight: 10,
  },
  finalizeButton: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});


