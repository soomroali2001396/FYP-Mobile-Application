// // TransportSelectionScreen.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// const TransportSelectionScreen = ({ navigation }) => {
//   const transports = [
//     { id: '1', name: 'Bus' },
//     { id: '2', name: 'Car' },
//   ];

//   const handleTransportSelect = (transport) => {
//     if (transport.name === 'Car') {
//       navigation.navigate('Car');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.subtitle}>Which type of transportation you want for your Event?</Text>
//       <FlatList
//         data={transports}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.transportButton}
//             onPress={() => handleTransportSelect(item)}
//           >
//             <Text style={styles.transportText}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9F3EC',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   transportButton: {
//     backgroundColor: '#6A4E36',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   transportText: {
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default TransportSelectionScreen;
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TransportSelection() {
  const [transports, setTransports] = useState([
    { 
      id: 1, 
      name: "Luxury Bus", 
      description: "Type: Luxury, Capacity: 40, Price: $1000", 
      city: "New York", 
      rating: 4.5, 
      image: "https://via.placeholder.com/120" 
    },
    { 
      id: 2, 
      name: "Private Car", 
      description: "Type: Sedan, Capacity: 4, Price: $500", 
      city: "Los Angeles", 
      rating: 4.0, 
      image: "https://via.placeholder.com/120" 
    },
    { 
      id: 3, 
      name: "Minivan", 
      description: "Type: Van, Capacity: 8, Price: $700", 
      city: "Chicago", 
      rating: 4.3, 
      image: "https://via.placeholder.com/120" 
    },
    // Add more transport items as needed
  ]);

  const [selectedTransport, setSelectedTransport] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
  const [budget, setBudget] = useState(1000); // Default budget
  const [people, setPeople] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [translateY] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  const handleAddTransport = (transport) => {
    setSelectedTransport(transport);
    setAddModalVisible(true);
  };

  const handleViewDetails = (transport) => {
    setSelectedTransport(transport);
    setViewDetailsModalVisible(true);
  };

  const handlePlanSubmit = () => {
    navigation.navigate('Plan', {
      transport: selectedTransport,
      budget,
      people,
    });
    setAddModalVisible(false);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
    Animated.timing(translateY, {
      toValue: isMaximized ? 0 : -50, // Animation for maximize/minimize
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const minimizeModal = () => {
    Animated.timing(translateY, {
      toValue: 600, // Move modal down
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
        data={transports} // Display transport cards
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transportCard}>
            <Image source={{ uri: item.image }} style={styles.transportImage} />
            <View style={styles.details}>
              <Text style={styles.transportName}>{item.name}</Text>
              <Text style={styles.transportDescription}>{item.description}</Text>
              <Text style={styles.transportCity}>City: {item.city}</Text>
              <Text style={styles.transportRating}>Rating: {item.rating}</Text>
              {/* View Details Button */}
              <TouchableOpacity
                style={styles.viewDetailButton}
                onPress={() => handleViewDetails(item)}
              >
                <Text style={styles.viewDetailText}>View Details</Text>
              </TouchableOpacity>
            </View>
            {/* Add Button */}
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
        <Modal visible={viewDetailsModalVisible} animationType="none" transparent onRequestClose={() => setViewDetailsModalVisible(false)}>
          <Animated.View style={[styles.modalOverlay, isMaximized && styles.maximizedOverlay, { transform: [{ translateY }] }]}>
            <View style={[styles.modalContent, isMaximized && styles.maximizedContent]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Transport Details</Text>
                <View style={styles.modalActions}>
                  <TouchableOpacity onPress={minimizeModal} style={styles.modalActionButton}>
                    <AntDesign name="minuscircle" size={24} color="#7f8c8d" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleMaximize} style={styles.modalActionButton}>
                    <AntDesign name={isMaximized ? 'shrink' : 'arrowsalt'} size={24} color="#7f8c8d" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setViewDetailsModalVisible(false)} style={styles.modalActionButton}>
                    <AntDesign name="closecircle" size={24} color="#e74c3c" />
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView>
                <Text style={styles.modalDescription}>Description: {selectedTransport.description}</Text>
                <Text style={styles.modalDescription}>City: {selectedTransport.city}</Text>
                <Text style={styles.modalDescription}>Rating: {selectedTransport.rating}</Text>
              </ScrollView>
            </View>
          </Animated.View>
        </Modal>
      )}

      {/* Add Transport Modal */}
      {selectedTransport && (
        <Modal visible={addModalVisible} animationType="none" transparent onRequestClose={() => setAddModalVisible(false)}>
          <Animated.View style={[styles.modalOverlay, isMaximized && styles.maximizedOverlay, { transform: [{ translateY }] }]}>
            <View style={[styles.modalContent, isMaximized && styles.maximizedContent]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Enter Event Details</Text>
                <View style={styles.modalActions}>
                  <TouchableOpacity onPress={minimizeModal} style={styles.modalActionButton}>
                    <AntDesign name="minuscircle" size={24} color="#7f8c8d" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleMaximize} style={styles.modalActionButton}>
                    <AntDesign name={isMaximized ? 'shrink' : 'arrowsalt'} size={24} color="#7f8c8d" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setAddModalVisible(false)} style={styles.modalActionButton}>
                    <AntDesign name="closecircle" size={24} color="#e74c3c" />
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView>
                <Text style={styles.modalDescription}>{selectedTransport.description}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Number of People"
                  value={people}
                  onChangeText={setPeople}
                  keyboardType="numeric"
                />
                <Text style={styles.modalDescription}>Budget: {budget}</Text>
                <TouchableOpacity style={styles.button} onPress={handlePlanSubmit}>
                  <Text style={styles.buttonText}>Add to Plan</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Animated.View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
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
    backgroundColor: '#fff',
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
    fontWeight: 'bold',
    color: '#34495e',
  },
  transportDescription: {
    color: '#7f8c8d',
  },
  transportCity: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  transportRating: {
    fontSize: 14,
    color: '#2ecc71',
  },
  viewDetailButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 12,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 10,
  },
  maximizedOverlay: {
    alignItems: 'flex-start',
  },
  maximizedContent: {
    width: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
  },
  modalActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalActionButton: {
    marginLeft: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
