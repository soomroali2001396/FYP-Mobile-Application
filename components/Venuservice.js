import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Modal, ScrollView, Animated } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const venues = [
  {
    id: '1',
    name: 'Venue A',
    description: 'Spacious venue for all kinds of events.',
    city: 'New York',
    image: 'https://via.placeholder.com/200',
    rating: 4.5,
    comments: [
      {
        id: '1',
        username: 'john_doe',
        text: 'Amazing experience! Highly recommended.',
        photos: ['https://via.placeholder.com/100'],
      },
      {
        id: '2',
        username: 'jane_smith',
        text: 'Loved the ambiance and service.',
        photos: ['https://via.placeholder.com/100'],
      },
    ],
    photos: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: '2',
    name: 'Venue B',
    description: 'Cozy venue perfect for intimate gatherings.',
    city: 'Los Angeles',
    image: 'https://via.placeholder.com/200',
    rating: 4.3,
    comments: [
      {
        id: '3',
        username: 'mark_z',
        text: 'Perfect for a small get-together.',
        photos: [],
      },
    ],
    photos: ['https://via.placeholder.com/400'],
  },
];

export default function VenueSelection() {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
  const [budget, setBudget] = useState(1000); // Default budget
  const [people, setPeople] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [translateY] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  const handleAddVenue = (venue) => {
    setSelectedVenue(venue);
    setAddModalVisible(true);
  };

  const handleViewDetails = (venue) => {
    setSelectedVenue(venue);
    setViewDetailsModalVisible(true);
  };

  const handlePlanSubmit = () => {
    navigation.navigate('Plan', {
      venue: selectedVenue,
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Venue</Text>

      <FlatList
        data={venues}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.venueCard}>
            <Image source={{ uri: item.image }} style={styles.venueImage} />
            <View style={styles.details}>
              <Text style={styles.venueName}>{item.name}</Text>
              <Text style={styles.venueDescription}>{item.description}</Text>
              <Text style={styles.venueCity}>City: {item.city}</Text>
              <Text style={styles.venueRating}>Rating: {item.rating}</Text>
              {/* View Details Button */}
              <TouchableOpacity
                style={styles.viewDetailButton}
                onPress={() => handleViewDetails(item)}
              >
                <Text style={styles.viewDetailText}>View Details</Text>
              </TouchableOpacity>
            </View>
            {/* Add Button - Floating action button */}
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddVenue(item)}
            >
              <AntDesign name="plus" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* View Details Modal */}
      {selectedVenue && (
        <Modal visible={viewDetailsModalVisible} animationType="none" transparent onRequestClose={() => setViewDetailsModalVisible(false)}>
          <Animated.View style={[styles.modalOverlay, isMaximized && styles.maximizedOverlay, { transform: [{ translateY }] }]}>
            <View style={[styles.modalContent, isMaximized && styles.maximizedContent]}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Venue Details</Text>
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
                <Text style={styles.modalDescription}>{selectedVenue.description}</Text>
                <Text style={styles.modalDescription}>City: {selectedVenue.city}</Text>
                <Text style={styles.modalDescription}>Rating: {selectedVenue.rating}</Text>
                <View style={styles.commentContainer}>
                  {renderComments(selectedVenue.comments)}
                </View>
              </ScrollView>
            </View>
          </Animated.View>
        </Modal>
      )}

      {/* Add Venue Modal */}
      {selectedVenue && (
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
                <Text style={styles.modalDescription}>{selectedVenue.description}</Text>
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
  venueCard: {
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
  venueImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  venueName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2980b9',
  },
  venueDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  venueCity: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  venueRating: {
    fontSize: 14,
    color: '#f39c12',
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
    backgroundColor: '#27ae60',
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
    width: 320,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    maxHeight: '80%',
    elevation: 5,
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
    color: '#7f8c8d',
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
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

