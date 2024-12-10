// import React, { useState,useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Animated } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import {ServiceTransportation,BASE_URL } from '../../ServiceAPIs/UsersAPIs'; // Import the API function
// import {MaterialCommunityIcons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';


// export default function TransportSelection() {
//   const [transports, setTransports] = useState([]); // State for fetched transport data
//   const [selectedTransport, setSelectedTransport] = useState(null);
//   const [addModalVisible, setAddModalVisible] = useState(false);
//   const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
//   // const [budget, setBudget] = useState(1000); // Default budget
//   const [people, setPeople] = useState('');
//   const [isMaximized, setIsMaximized] = useState(false);
//   const [translateY] = useState(new Animated.Value(0));
//   const [calculatedBudget, setCalculatedBudget] = useState(0);
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showTimePicker, setShowTimePicker] = useState(false);
//   const navigation = useNavigation();

//   // Fetch transport data on component mount
//   useEffect(() => {
//     const fetchTransports = async () => {
//       try {
//         const data = await ServiceTransportation();
//         const transformedData = data.map((item) => ({
//           id: item.serviceId,
//           name: item.serviceName,
//           description: `Type: ${item.serviceType}, Capacity: ${item.serviceCapacity}, Price/Head: ${item.servicePrice}`,
//           type: item.serviceType,
//           address: item.serviceArea,
//           capacity: item.serviceCapacity,
//           price: item.servicePrice,
//           city: item.serviceCity,
//           rating: 4.5, // Hardcoded rating if not provided by API
//           image: `${BASE_URL}/services/images/${item.pictures[0]?.pictureUrl}`, // Use the image URL from API
//         }));
//         setTransports(transformedData);
//       } catch (error) {
//         console.error('Error fetching transport options:', error.message);
//       }
//     };

//     fetchTransports();
//   }, []);

//   const handleAddTransport = (transport) => {
//     setSelectedTransport(transport);
//     setAddModalVisible(true);
//   };

//   const handleViewDetails = (transport) => {
//     setSelectedTransport(transport);
//     setViewDetailsModalVisible(true);
//   };

//   const handlePlanSubmit = () => {
//     if (!people || isNaN(people) || parseInt(people) <= 0) {
//       alert('Please enter a valid number of people');
//       return;
//     }

//     // Calculate the budget for the venue
//     const price = selectedTransport.price;
//     const capacity = selectedTransport.capacity;

//     // Calculate the venue's budget based on number of people
//     const transportBudget = price  * parseInt(people);

//     // Calculate the total cost for the selected services
//     // const servicesBudget = Object.values(selectedVenue).reduce((sum, price) => sum + price, 0);

//     // Calculate the total budget
//     // const updatedBudget = parseFloat(venueBudget) + servicesBudget;
//     setCalculatedBudget(transportBudget);

//     // Pass the updated budget to Plan.js
//     navigation.navigate('Plan', {
//       estimatedBudget: transportBudget,
//       date: date,
//       time: time,
//       people: people,
//       transports: selectedTransport,
//     });
//   };

//   const toggleMaximize = () => {
//     setIsMaximized(!isMaximized);
//     Animated.timing(translateY, {
//       toValue: isMaximized ? 0 : -50, // Animation for maximize/minimize
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const minimizeModal = () => {
//     Animated.timing(translateY, {
//       toValue: 600, // Move modal down
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       setAddModalVisible(false);
//       setViewDetailsModalVisible(false);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Select a Transport</Text>
//       <FlatList
//         data={transports} // Display fetched transport data
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.transportCard}>
//             <Image source={{ uri: item.image }} style={styles.transportImage} />
//             <View style={styles.details}>
//               <Text style={styles.transportName}>{item.name}</Text>
//               {/* <Text style={styles.transportDescription}>{item.description}</Text> */}
//               <Text style={styles.transportCity}>City: {item.city}</Text>
//               <Text style={styles.transportRating}>Rating: {item.rating}</Text>
//               {/* View Details Button */}
//               <TouchableOpacity
//                 style={styles.viewDetailButton}
//                 onPress={() => handleViewDetails(item)}
//               >
//                 <Text style={styles.viewDetailText}>View Details</Text>
//               </TouchableOpacity>
//             </View>
//             {/* Add Button */}
//             <TouchableOpacity
//               style={styles.addButton}
//               onPress={() => handleAddTransport(item)}
//             >
//               <AntDesign name="plus" size={24} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//       {/* View Details Modal */}
//       {selectedTransport && (
//         <Modal visible={viewDetailsModalVisible} animationType="none" transparent onRequestClose={() => setViewDetailsModalVisible(false)}>
//           <Animated.View style={[styles.modalOverlay, isMaximized && styles.maximizedOverlay, { transform: [{ translateY }] }]}>
//             <View style={[styles.modalContent, isMaximized && styles.maximizedContent]}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>Transport Details</Text>
//                 <View style={styles.modalActions}>
//                   <TouchableOpacity onPress={minimizeModal} style={styles.modalActionButton}>
//                     <AntDesign name="minuscircle" size={24} color="#7f8c8d" />
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={toggleMaximize} style={styles.modalActionButton}>
//                     <AntDesign name={isMaximized ? 'shrink' : 'arrowsalt'} size={24} color="#7f8c8d" />
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={() => setViewDetailsModalVisible(false)} style={styles.modalActionButton}>
//                     <AntDesign name="closecircle" size={24} color="#e74c3c" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <ScrollView>
//                 <Text style={styles.modalDescription}>Description: {selectedTransport.description}</Text>
//                 <Text style={styles.modalDescription}>City: {selectedTransport.city}</Text>
//                 <Text style={styles.modalDescription}>Rating: {selectedTransport.rating}</Text>
//               </ScrollView>
//             </View>
//           </Animated.View>
//         </Modal>
//       )}

//       {/* Add Transport Modal */}
//       {selectedTransport && (
//         <Modal visible={addModalVisible} animationType="none" transparent onRequestClose={() => setAddModalVisible(false)}>
//           <Animated.View style={[styles.modalOverlay, isMaximized && styles.maximizedOverlay, { transform: [{ translateY }] }]}>
//             <View style={[styles.modalContent, isMaximized && styles.maximizedContent]}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>Enter Event Details</Text>
//                 <View style={styles.modalActions}>
//                   <TouchableOpacity onPress={minimizeModal} style={styles.modalActionButton}>
//                     <AntDesign name="minuscircle" size={24} color="#7f8c8d" />
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={toggleMaximize} style={styles.modalActionButton}>
//                     <AntDesign name={isMaximized ? 'shrink' : 'arrowsalt'} size={24} color="#7f8c8d" />
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={() => setAddModalVisible(false)} style={styles.modalActionButton}>
//                     <AntDesign name="closecircle" size={24} color="#e74c3c" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <ScrollView>
//                 <Text style={styles.modalDescription}>{selectedTransport.description}</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Number of People"
//                   value={people}
//                   onChangeText={setPeople}
//                   keyboardType="numeric"
//                 />
//                 <View style={styles.dateTimeContainer}>
//                   <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//                     <MaterialCommunityIcons name="calendar" size={24} color="#3498db" />
//                     <Text>{date.toDateString()}</Text>
//                   </TouchableOpacity>
//                   {showDatePicker && (
//                     <DateTimePicker
//                       value={date}
//                       mode="date"
//                       display="default"
//                       onChange={onDateChange}
//                     />
//                   )}
//                 </View>

//                 {/* Time Selection */}
//                 <View style={styles.dateTimeContainer}>
//                   <TouchableOpacity onPress={() => setShowTimePicker(true)}>
//                     <MaterialCommunityIcons name="clock" size={24} color="#3498db" />
//                     <Text>{time.toLocaleTimeString()}</Text>
//                   </TouchableOpacity>
//                   {showTimePicker && (
//                     <DateTimePicker
//                       value={time}
//                       mode="time"
//                       display="default"
//                       onChange={onTimeChange}
//                     />
//                   )}
//                   </View>
//                 {/* <Text style={styles.modalDescription}>Budget: {budget}</Text> */}
//                 <TouchableOpacity style={styles.button} onPress={handlePlanSubmit}>
//                   <Text style={styles.buttonText}>Add to Plan</Text>
//                 </TouchableOpacity>
//               </ScrollView>
//             </View>
//           </Animated.View>
//         </Modal>
//       )}
//     </View>
//   );
// }
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ServiceTransportation, BASE_URL } from '../../ServiceAPIs/UsersAPIs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TransportSelection() {
  const [transports, setTransports] = useState([]);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
  const [people, setPeople] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [translateY] = useState(new Animated.Value(0));
  const [calculatedBudget, setCalculatedBudget] = useState(0);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTransports = async () => {
      try {
        const data = await ServiceTransportation();
        const transformedData = data.map((item) => ({
          id: item.serviceId,
          name: item.serviceName,
          description: `Type: ${item.serviceType}, Capacity: ${item.serviceCapacity}, Price/Head: ${item.servicePrice}`,
          type: item.serviceType,
          address: item.serviceArea,
          capacity: item.serviceCapacity,
          price: item.servicePrice,
          city: item.serviceCity,
          rating: 4.5,
          image: `${BASE_URL}/services/images/${item.pictures[0]?.pictureUrl}`,
        }));
        setTransports(transformedData);
      } catch (error) {
        console.error('Error fetching transport options:', error.message);
      }
    };

    fetchTransports();
  }, []);

  const handleAddTransport = (transport) => {
    setSelectedTransport(transport);
    setAddModalVisible(true);
  };

  const handleViewDetails = (transport) => {
    setSelectedTransport(transport);
    setViewDetailsModalVisible(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handlePlanSubmit = () => {
    if (!people || isNaN(people) || parseInt(people) <= 0) {
      alert('Please enter a valid number of people');
      return;
    }

    const transportBudget = selectedTransport.price * parseInt(people);
    setCalculatedBudget(transportBudget);

    navigation.navigate('Plan', {
      estimatedBudget: transportBudget,
      date: date,
      time: time,
      people: people,
      transports: selectedTransport,
    });
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
    Animated.timing(translateY, {
      toValue: isMaximized ? 0 : -50,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const minimizeModal = () => {
    Animated.timing(translateY, {
      toValue: 600,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setAddModalVisible(false);
      setViewDetailsModalVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Transport</Text>
      <FlatList
        data={transports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transportCard}>
            <Image source={{ uri: item.image }} style={styles.transportImage} />
            <View style={styles.details}>
              <Text style={styles.transportName}>{item.name}</Text>
              <Text style={styles.transportCity}>City: {item.city}</Text>
              <Text style={styles.transportRating}>Rating: {item.rating}</Text>
              <TouchableOpacity
                style={styles.viewDetailButton}
                onPress={() => handleViewDetails(item)}
              >
                <Text style={styles.viewDetailText}>View Details</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddTransport(item)}
            >
              <AntDesign name="plus" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* View Details Modal */}
      {selectedTransport && (
        <Modal
          visible={viewDetailsModalVisible}
          animationType="fade"
          transparent
          onRequestClose={() => setViewDetailsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Transport Details</Text>
              <ScrollView>
                <Text style={styles.modalDescription}>Description: {selectedTransport.description}</Text>
                <Text style={styles.modalDescription}>City: {selectedTransport.city}</Text>
                <Text style={styles.modalDescription}>Rating: {selectedTransport.rating}</Text>
              </ScrollView>
              <TouchableOpacity onPress={() => setViewDetailsModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* Add Transport Modal */}
      {selectedTransport && (
        <Modal
          visible={addModalVisible}
          animationType="fade"
          transparent
          onRequestClose={() => setAddModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Enter Event Details</Text>
              <ScrollView>
                <Text style={styles.modalDescription}>{selectedTransport.description}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Number of People"
                  value={people}
                  onChangeText={setPeople}
                  keyboardType="numeric"
                />
                <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <MaterialCommunityIcons name="calendar" size={24} color="#3498db" />
                    <Text>{date.toDateString()}</Text>
                  </TouchableOpacity>
                  {showDatePicker && (
                    <DateTimePicker value={date} mode="date" display="default" onChange={onDateChange} />
                  )}
                </View>
                <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                    <MaterialCommunityIcons name="clock" size={24} color="#3498db" />
                    <Text>{time.toLocaleTimeString()}</Text>
                  </TouchableOpacity>
                  {showTimePicker && (
                    <DateTimePicker value={time} mode="time" display="default" onChange={onTimeChange} />
                  )}
                </View>
                <TouchableOpacity style={styles.button} onPress={handlePlanSubmit}>
                  <Text style={styles.buttonText}>Add to Plan</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  transportCard: {
    flexDirection: 'row',
    backgroundColor: '#C8B29E',
    marginBottom: 20,
    borderRadius: 15,
    elevation: 6,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 15,
    position: 'relative',
  },
  transportImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  transportName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f1f1f',
  },
  transportDescription: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  transportCity: {
    fontSize: 14,
    color: '#fff',
  },
  transportRating: {
    fontSize: 14,
    color: '#00A5A8',
    fontWeight: 'bold',
  },
  viewDetailButton: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  viewDetailText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  commentContainer: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentUsername: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2980b9',
  },
  commentText: {
    fontSize: 14,
    marginTop: 5,
    color: '#34495e',
  },
  commentPhotosContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  commentPhoto: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  maximizedOverlay: {
    justifyContent: 'flex-start',
  },
  modalContent: {
    backgroundColor: '#F9F3EC',
    width: '80%',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  maximizedContent: {
    width: '90%',
    height: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
  },
  modalActionButton: {
    marginLeft: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#34495e',
  },
  modalDescription: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 20,
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingLeft: 15,
    backgroundColor: '#ecf0f1',
  },
  button: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
