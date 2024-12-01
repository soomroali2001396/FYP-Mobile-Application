import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Button, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const foodData = [
  {
    id: '1',
    name: 'Crab Ramen',
    description: 'Spicy with garlic',
    price: '$24.00',
    image: 'https://yourimageurl.com/crab-ramen',
  },
  {
    id: '2',
    name: 'Chicken Slice',
    description: 'Real chicken',
    price: '$12.00',
    image: 'https://yourimageurl.com/chicken-slice',
  },
  {
    id: '3',
    name: 'Eggs Curry',
    description: 'Eggs in tomato and sauce',
    price: '$15.00',
    image: 'https://yourimageurl.com/eggs-curry',
  },
];

const MainPage = () => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const toggleSelectItem = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));
  };

  const addToCart = () => {
    const newCartItems = foodData.filter(item => selectedItems[item.id]);
    setCartItems(newCartItems);
  };

  const handleProceedToPurchase = () => {
    setModalVisible(true); // Open the modal to select dates
  };

  const handleConfirmDates = () => {
    // Close the modal and navigate with the selected dates
    setModalVisible(false);
    navigation.navigate('onpremise', { cartItems, fromDate, toDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delicious Food</Text>
      <FlatList
        data={foodData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleSelectItem(item)}>
            <View style={[styles.foodCard, selectedItems[item.id] && styles.selected]}>
              <Image source={{ uri: item.image }} style={styles.foodImage} />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
              </View>
              <View style={[styles.checkbox, selectedItems[item.id] && styles.checked]}>
                {selectedItems[item.id] && <Text style={styles.checkmark}>✔</Text>}
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      
      {/* Cart bar at the bottom */}
      {cartItems.length > 0 && (
        <View style={styles.cartBar}>
          <Text style={styles.cartText}>{`Items in Cart: ${cartItems.length}`}</Text>
          <Button
            title="Proceed to Purchase"
            onPress={handleProceedToPurchase}
          />
        </View>
      )}
      
      {/* Button to add selected items to cart with padding */}
      <View style={styles.buttonContainer}>
        <Button title="Add Selected to Cart" onPress={addToCart} />
      </View>

      {/* Modal for date selection */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Allotment Dates</Text>

            {/* From Date Picker */}
            <TouchableOpacity onPress={() => setShowFromPicker(true)}>
              <Text style={styles.dateText}>From: {fromDate.toDateString()}</Text>
            </TouchableOpacity>
            {showFromPicker && (
              <DateTimePicker
                value={fromDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowFromPicker(false);
                  if (selectedDate) setFromDate(selectedDate);
                }}
              />
            )}

            {/* To Date Picker */}
            <TouchableOpacity onPress={() => setShowToPicker(true)}>
              <Text style={styles.dateText}>To: {toDate.toDateString()}</Text>
            </TouchableOpacity>
            {showToPicker && (
              <DateTimePicker
                value={toDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowToPicker(false);
                  if (selectedDate) setToDate(selectedDate);
                }}
              />
            )}

            <Button title="Confirm" onPress={handleConfirmDates} />
            <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  foodCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selected: {
    backgroundColor: 'rgba(0, 128, 0, 0.2)',
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  foodInfo: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodPrice: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#008000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
  },
  cartBar: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  cartText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 350,
    left: 0,
    right: 0,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
