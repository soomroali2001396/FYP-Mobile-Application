import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
  const { price, time } = route.params; // price per person
  const [fromStation, setFromStation] = useState('Lorem Train Station');
  const [toStation, setToStation] = useState('Dolor Train Station');
  const [numPersons, setNumPersons] = useState('1'); // Default to 1 person
  const [totalPrice, setTotalPrice] = useState(price);

  // Update total price based on the number of persons
  const handleNumPersonsChange = (num) => {
    setNumPersons(num);
    const calculatedTotal = parseFloat(price) * parseInt(num || '1', 10);
    setTotalPrice(calculatedTotal.toFixed(2));
  };

  // Handle ticket purchase and navigate to Services screen
  const handleBuyTicket = () => {
    // Navigate to Services.js and pass the necessary information
    navigation.navigate('Plan', {
      from: fromStation,
      to: toStation,
      time: time,
      numPersons: numPersons,
      totalPrice: totalPrice
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket</Text>

      <TextInput
        style={styles.input}
        placeholder="From Station"
        value={fromStation}
        onChangeText={setFromStation}
      />

      <TextInput
        style={styles.input}
        placeholder="To Station"
        value={toStation}
        onChangeText={setToStation}
      />

      <Text style={styles.subtitle}>Time: {time}</Text>
      <Text style={styles.subtitle}>Price per person: {price}</Text>

      <TextInput
        style={styles.input}
        placeholder="Number of persons"
        keyboardType="numeric"
        value={numPersons}
        onChangeText={handleNumPersonsChange}
      />

      <Text style={styles.subtitle}>Total Price: {totalPrice}</Text>

      <TouchableOpacity style={styles.button} onPress={handleBuyTicket}>
        <Text style={styles.buttonText}>Buy Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F3EC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default PaymentScreen;
