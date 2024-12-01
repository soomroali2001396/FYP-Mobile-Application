
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const Eventadd = () => {
  const [modalVisible, setModalVisible] = useState(true); // Directly set to true to show modal initially
  const [eventName, setEventName] = useState('');
  const [eventBudget, setEventBudget] = useState('');
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState('Viewer');
  const [vendor, setVendor] = useState('Convention Center');
  const [vendorType, setVendorType] = useState('Hall');

  const handleCreateEvent = () => {
    // Log form data to console (or handle it as needed)
    console.log({
      eventName,
      eventBudget,
      username,
      userRole,
      vendor,
      vendorType
    });

    // Perform any further actions, e.g., send data to an API or save it

    // Optionally, close the modal after form submission
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✖</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Enter Event Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name of Event"
              value={eventName}
              onChangeText={setEventName}
            />

            <Text style={styles.label}>Enter Event Budget:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Budget of Event"
              value={eventBudget}
              onChangeText={setEventBudget}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Enter username:</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Enter username"
                value={username}
                onChangeText={setUsername}
              />
              <Picker
                selectedValue={userRole}
                style={styles.picker}
                onValueChange={(itemValue) => setUserRole(itemValue)}
              >
                <Picker.Item label="Viewer" value="Viewer" />
                <Picker.Item label="Editor" value="Editor" />
              </Picker>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Add Vendors:</Text>
            <View style={styles.row}>
              <Picker
                selectedValue={vendor}
                style={styles.picker}
                onValueChange={(itemValue) => setVendor(itemValue)}
              >
                <Picker.Item label="Liberty Hall" value="Liberty Hall" />
                <Picker.Item label="Sunset Gardens" value="Sunset Gardens" />
              </Picker>
              <Picker
                selectedValue={vendorType}
                style={styles.picker}
                onValueChange={(itemValue) => setVendorType(itemValue)}
              >
                <Picker.Item label="Hall" value="Hall" />
                <Picker.Item label="Catering" value="Catering" />
              </Picker>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addPictureText}>Add Picture +</Text>
            </TouchableOpacity>

            {/* Create Event button at the bottom of the form */}
            <TouchableOpacity style={styles.createButton} onPress={handleCreateEvent}>
              <Text style={styles.createButtonText}>Create Event</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'red',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  picker: {
    height: 50,
    flex: 1,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  addPictureText: {
    fontSize: 16,
    color: '#007BFF',
    marginVertical: 20,
  },
  createButton: {
    backgroundColor: '#00C851',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default function Eventadd() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    setModalVisible(true); // Show the modal when Add to Cart button is pressed
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Item1 Title</Text>
      </View>

      <FlatList
        data={eventData}
        renderItem={({ item }) => <EventCard item={item} onAddToCart={handleAddToCart} />}
        keyExtractor={(item) => item.id}
      />

      {/* Modal for adding events */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✖</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Enter Event Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name of Event"
              // Add state handlers here
            />

            <Text style={styles.label}>Enter Event Budget:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Budget of Event"
              // Add state handlers here
              keyboardType="numeric"
            />

            <Text style={styles.label}>Enter username:</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Enter username:"
                // Add state handlers here
              />
              <Picker
                selectedValue={userRole}
                style={styles.picker}
                onValueChange={(itemValue) => setUserRole(itemValue)}
              >
                <Picker.Item label="Helper" value="Helper" />
                <Picker.Item label="Editor" value="Editor" />
              </Picker>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Add Vendors:</Text>
            <View style={styles.row}>
              <Picker
                selectedValue={vendor}
                style={styles.picker}
                onValueChange={(itemValue) => setVendor(itemValue)}
              >
                <Picker.Item label="Liberty Hall" value="Liberty Hall" />
                <Picker.Item label="Sunset Gardens" value="Sunset Gardens" />
              </Picker>
              <Picker
                selectedValue={vendorType}
                style={styles.picker}
                onValueChange={(itemValue) => setVendorType(itemValue)}
              >
                <Picker.Item label="Hall" value="Hall" />
                <Picker.Item label="Catering" value="Catering" />
              </Picker>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            {/* Create Event button at the bottom of the form */}
            <TouchableOpacity style={styles.createButton} onPress={() => {
              // Handle create event action
              setModalVisible(false);
            }}>
              <Text style={styles.createButtonText}>Purchase</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
