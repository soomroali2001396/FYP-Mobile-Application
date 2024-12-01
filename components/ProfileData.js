import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const ProfileDisplay = () => {
  // Default image and name values
  const defaultImage = require('../Images/default-icon.png'); // Path to your local image
  const defaultFirstName = 'Zain';
  const defaultLastName = 'Mirza';

  const [profileImage, setProfileImage] = useState(defaultImage);
  const [firstName, setFirstName] = useState(defaultFirstName);
  const [lastName, setLastName] = useState(defaultLastName);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Image source={profileImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalCloseButton} onPress={toggleModal}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
          <Image source={profileImage} style={styles.modalImage} />
        </View>
      </Modal>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  modalCloseText: {
    color: 'white',
    fontSize: 16,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ProfileDisplay;
