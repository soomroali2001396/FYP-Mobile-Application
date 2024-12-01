// TransportSelectionScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const TransportSelectionScreen = ({ navigation }) => {
  const transports = [
    { id: '1', name: 'Bus' },
    { id: '2', name: 'Car' },
  ];

  const handleTransportSelect = (transport) => {
    if (transport.name === 'Car') {
      navigation.navigate('Car');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Which type of transportation you want for your Event?</Text>
      <FlatList
        data={transports}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.transportButton}
            onPress={() => handleTransportSelect(item)}
          >
            <Text style={styles.transportText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
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
    fontWeight: 'bold',
  },
  transportButton: {
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  transportText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default TransportSelectionScreen;
