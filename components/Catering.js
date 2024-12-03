import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Modal, ScrollView, Animated } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const cateringOptions = [
  {
    id: '1',
    name: 'Outdoor Catering',
    description: 'Perfect for weddings and large outdoor events.',
    location: 'California',
    image: 'https://via.placeholder.com/200',
    rating: 4.8,
    comments: [
      {
        id: '1',
        username: 'susan_m',
        text: 'Great food and setup for outdoor events!',
        photos: ['https://via.placeholder.com/100'],
      },
      {
        id: '2',
        username: 'kevin_l',
        text: 'Highly recommend for outdoor parties.',
        photos: ['https://via.placeholder.com/100'],
      },
    ],
    photos: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
    category: 'Outdoor',
  },
  {
    id: '2',
    name: 'Indoor Catering',
    description: 'Ideal for conferences and indoor corporate events.',
    location: 'New York',
    image: 'https://via.placeholder.com/200',
    rating: 4.6,
    comments: [
      {
        id: '3',
        username: 'julia_b',
        text: 'Excellent service for indoor events.',
        photos: [],
      },
    ],
    photos: ['https://via.placeholder.com/400'],
    category: 'Indoor',
  },
];

export default function CateringSelection() {
  const [selectedCatering, setSelectedCatering] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
  const [budget, setBudget] = useState(1000); // Default budget
  const [people, setPeople] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [translateY] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  const handleAddCatering = (catering) => {
    setSelectedCatering(catering);
    setAddModalVisible(true);
  };

  const handleViewDetails = (catering) => {
    setSelectedCatering(catering);
    setViewDetailsModalVisible(true);
  };

  const handlePlanSubmit = () => {
    navigation.navigate('Plan', {
      catering: selectedCatering,
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

  const renderComments = (comments) => {
    return comments.map((comment) => (
      <View key={comment.id} style={styles.commentContainer}>
        <View style={styles.commentHeader}>
          <MaterialCommunityIcons name="account-circle" size={36} color="#3498db" />
          <Text style={styles.commentUsername}>{comment.username}</Text>
        </View>
        <Text style={styles.commentText}>{comment.text}</Text>
        {comment.photos.length > 0 && (
          <View style={styles.commentPhotosContainer}>
            {comment.photos.map((photo, index) => (
              <Image key={index} source={{ uri: photo }} style={styles.commentPhoto} />
            ))}
          </View>
        )}
      </View>
    ));
  };

  // Filter catering options by category
  const outdoorCatering = cateringOptions.filter(option => option.category === 'Outdoor');
  const indoorCatering = cateringOptions.filter(option => option.category === 'Indoor');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Catering Option</Text>

      {/* Outdoor Catering Section */}
      <Text style={styles.subtitle}>Outdoor Catering</Text>
      <FlatList
        data={outdoorCatering}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cateringCard}>
            <Image source={{ uri: item.image }} style={styles.cateringImage} />
            <View style={styles.details}>
              <Text style={styles.cateringName}>{item.name}</Text>
              <Text style={styles.cateringDescription}>{item.description}</Text>
              <Text style={styles.cateringLocation}>Location: {item.location}</Text>
              <Text style={styles.cateringRating}>Rating: {item.rating}</Text>
              <TouchableOpacity
                style={styles.viewDetailButton}
                onPress={() => handleViewDetails(item)}
              >
                <MaterialCommunityIcons name="eye" size={24} color="#fff" />
               
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

      {/* Indoor Catering Section */}
      <Text style={styles.subtitle}>Indoor Catering</Text>
      <FlatList
        data={indoorCatering}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cateringCard}>
            <Image source={{ uri: item.image }} style={styles.cateringImage} />
            <View style={styles.details}>
              <Text style={styles.cateringName}>{item.name}</Text>
              <Text style={styles.cateringDescription}>{item.description}</Text>
              <Text style={styles.cateringLocation}>Location: {item.location}</Text>
              <Text style={styles.cateringRating}>Rating: {item.rating}</Text>
              <TouchableOpacity
                style={styles.viewDetailButton}
                onPress={() => handleViewDetails(item)}
              >
                <MaterialCommunityIcons name="eye" size={24} color="#fff" />
                
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
                <Text style={styles.modalDescription}>Location: {selectedCatering.location}</Text>
                <Text style={styles.modalDescription}>Rating: {selectedCatering.rating}</Text>
                <View style={styles.commentContainer}>
                  {renderComments(selectedCatering.comments)}
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
                <TextInput
                  style={styles.input}
                  placeholder="Enter number of people"
                  keyboardType="numeric"
                  onChangeText={(text) => setPeople(text)}
                  value={people}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your budget"
                  keyboardType="numeric"
                  onChangeText={(text) => setBudget(text)}
                  value={budget.toString()}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handlePlanSubmit}>
                  <Text style={styles.submitButtonText}>Submit Plan</Text>
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
    padding: 20,
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
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cateringImage: {
    width: 100,
    height: 100,
  },
  details: {
    padding: 10,
    flex: 1,
  },
  cateringName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cateringDescription: {
    fontSize: 14,
    marginVertical: 5,
  },
  cateringLocation: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  cateringRating: {
    fontSize: 12,
    color: '#f39c12',
  },
  viewDetailButton: {
    backgroundColor: '#7f8c8d',
    padding: 4,
    borderRadius: 50,
    marginLeft: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDetailText: {
    color: '#fff',
    marginLeft: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentContainer: {
    marginVertical: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentUsername: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
    marginVertical: 5,
  },
  commentPhotosContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  commentPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  maximizedOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  maximizedContent: {
    width: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalActions: {
    flexDirection: 'row',
  },
  modalActionButton: {
    marginLeft: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
});
