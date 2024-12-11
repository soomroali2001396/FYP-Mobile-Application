import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Modal, ScrollView, Animated,Alert } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { ServiceCatering,BASE_URL } from '../ServiceAPIs/UsersAPIs'; // Import the API function

export default function CateringSelection() {
  const [cateringOptions, setCateringOptions] = useState([]); // State for fetched catering data
  const [selectedCatering, setSelectedCatering] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
  const [budget, setBudget] = useState(1000); // Default budget
  const [people, setPeople] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [translateY] = useState(new Animated.Value(0));
  const [calculatedBudget, setCalculatedBudget] = useState(0);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const navigation = useNavigation();

  // Fetch catering data on component mount
  useEffect(() => {
    const fetchCatering = async () => {
      try {
        const data = await ServiceCatering();
        const transformedData = data.map((item) => ({
          id: item.serviceId,
          name: item.serviceName,
          description: `Type: ${item.serviceType}, Capacity: ${item.serviceCapacity}, Price: ${item.servicePrice}`,
          type: item.serviceType,
          address: item.serviceArea,
          capacity: item.serviceCapacity,
          price: item.servicePrice,
          city: item.serviceCity,
          rating: 4.5, // Hardcoded rating if not provided by API
          image: `${BASE_URL}/services/images/${item.pictures[0]?.pictureUrl}`, // Use the image URL from API
        }));
        setCateringOptions(transformedData);
      } catch (error) {
        console.error('Error fetching catering options:', error.message);
      }
    };

    fetchCatering();
  }, []);

  const handleAddCatering = (catering) => {
    setSelectedCatering(catering);
    setAddModalVisible(true);
  };

  const handleViewDetails = (catering) => {
    setSelectedCatering(catering);
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

    // Check if number of people exceeds venue capacity
    if (parseInt(people) > selectedCatering.capacity) {
      Alert.alert(
        'Invalid Number of People',
        `Number of people cannot exceed venue capacity of ${selectedCatering.capacity}`,
        [{ text: 'OK' }]
      );
      return;
    }

    // Calculate the budget for the venue
    const price = selectedCatering.price;
    const capacity = selectedCatering.capacity;

    // Calculate the venue's budget based on number of people
    const cateringBudget = (price / capacity) * parseInt(people);

    // Calculate the total cost for the selected services
    // const servicesBudget = Object.values(selectedVenue).reduce((sum, price) => sum + price, 0);

    // Calculate the total budget
    // const updatedBudget = parseFloat(venueBudget) + servicesBudget;
    setCalculatedBudget(cateringBudget);

    // Pass the updated budget to Plan.js
    navigation.navigate('Plan', {
      estimatedBudget: cateringBudget,
      date: date,
      time: time,
      people: people,
      catering: selectedCatering,
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
      <Text style={styles.title}>Select a Catering Option</Text>
      <FlatList
        data={cateringOptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cateringCard}>
            <Image source={{ uri: item.image }} style={styles.cateringImage} />
            <View style={styles.details}>
              <Text style={styles.cateringName}>{item.name}</Text>
              {/* <Text style={styles.cateringDescription}>{item.description}</Text> */}
              <Text style={styles.cateringLocation}>Location: {item.city}</Text>
              <Text style={styles.cateringRating}>Rating: {item.rating}</Text>
              <TouchableOpacity
                style={styles.viewDetailButton}
                onPress={() => handleViewDetails(item)}
              >
                <Text style={styles.viewDetailText}>View Details</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddCatering(item)}
            >
              <AntDesign name="plus" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* View Details Modal */}
      {selectedCatering && (
        <Modal visible={viewDetailsModalVisible} animationType="none" transparent onRequestClose={() => setViewDetailsModalVisible(false)}>
          <Animated.View style={[styles.modalOverlay, isMaximized && styles.maximizedOverlay, { transform: [{ translateY }] }]}>
            <View style={[styles.modalContent, isMaximized && styles.maximizedContent]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Catering Details</Text>
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
                <Text style={styles.modalDescription}>{selectedCatering.description}</Text>
                <Text style={styles.modalDescription}>Location: {selectedCatering.address}</Text>
                <Text style={styles.modalDescription}>Rating: {selectedCatering.rating}</Text>
                <View style={styles.commentContainer}>
                  {/* {renderComments(selectedCatering.comments)} */}
                </View>
              </ScrollView>
            </View>
          </Animated.View>
        </Modal>
      )}

      {/* Add Catering Modal */}
      {selectedCatering && (
        <Modal visible={addModalVisible} animationType="none" transparent onRequestClose={() => setAddModalVisible(false)}>
          <Animated.View style={[styles.modalOverlay, isMaximized && styles.maximizedOverlay, { transform: [{ translateY }] }]}>
            <View style={[styles.modalContent, isMaximized && styles.maximizedContent]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Add Catering</Text>
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
              <Text style={styles.modalDescription}>{selectedCatering.description}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter number of people"
                  keyboardType="numeric"
                  onChangeText={(text) => setPeople(text)}
                  value={people}
                />
                <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <MaterialCommunityIcons name="calendar" size={24} color="#3498db" />
                    <Text>{date.toDateString()}</Text>
                  </TouchableOpacity>
                  {showDatePicker && (
                    <DateTimePicker
                      value={date}
                      mode="date"
                      display="default"
                      onChange={onDateChange}
                    />
                  )}
                </View>

                {/* Time Selection */}
                <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                    <MaterialCommunityIcons name="clock" size={24} color="#3498db" />
                    <Text>{time.toLocaleTimeString()}</Text>
                  </TouchableOpacity>
                  {showTimePicker && (
                    <DateTimePicker
                      value={time}
                      mode="time"
                      display="default"
                      onChange={onTimeChange}
                    />
                  )}
                  </View>
                <TouchableOpacity style={styles.submitButton} onPress={handlePlanSubmit}>
                  <Text style={styles.submitButtonText}>Add to Plan</Text>
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
    backgroundColor: '#F9F3EC',
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cateringCard: {
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
  cateringImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  cateringName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f1f1f',
  },
  cateringDescription: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  cateringLocation: {
    fontSize: 14,
    color: '#fff',
  },
  cateringRating: {
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
  submitButton: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
});

// const renderComments = (comments) => {
//   return comments.map((comment) => (
//     <View key={comment.id} style={styles.commentContainer}>
//       <View style={styles.commentHeader}>
//         <MaterialCommunityIcons name="account-circle" size={36} color="#3498db" />
//         <Text style={styles.commentUsername}>{comment.username}</Text>
//       </View>
//       <Text style={styles.commentText}>{comment.text}</Text>
//       {comment.photos.length > 0 && (
//         <View style={styles.commentPhotosContainer}>
//           {comment.photos.map((photo, index) => (
//             <Image key={index} source={{ uri: photo }} style={styles.commentPhoto} />
//           ))}
//         </View>
//       )}
//     </View>
//   ));
// };