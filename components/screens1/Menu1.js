// // App.js
// import React from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const foodData = [
//   {
//     id: '1',
//     name: 'Crab Ramen',
//     description: 'Spicy with garlic',
//     price: '$24.00',
//     image: 'https://yourimageurl.com/crab-ramen', // Replace with actual image URL
//   },
//   {
//     id: '2',
//     name: 'Chicken Slice',
//     description: 'Real chicken',
//     price: '$12.00',
//     image: 'https://yourimageurl.com/chicken-slice', // Replace with actual image URL
//   },
//   {
//     id: '3',
//     name: 'Eggs Curry',
//     description: 'Eggs in tomato and sauce',
//     price: '$15.00',
//     image: 'https://yourimageurl.com/eggs-curry', // Replace with actual image URL
//   },
// ];

// const MainPage = () => {
//   const navigation = useNavigation();
 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Delicious Food</Text>
//       <FlatList
//         data={foodData}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate('Menu1cart', { item })}>
//             <View style={styles.foodCard}>
//               <Image source={{ uri: item.image }} style={styles.foodImage} />
//               <View style={styles.foodInfo}>
//                 <Text style={styles.foodName}>{item.name}</Text>
//                 <Text>{item.description}</Text>
//                 <Text style={styles.foodPrice}>{item.price}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// export default MainPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   foodCard: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   foodImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 10,
//   },
//   foodInfo: {
//     marginLeft: 15,
//     justifyContent: 'center',
//   },
//   foodName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   foodPrice: {
//     marginTop: 5,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const foodData = [
  {
    id: '1',
    name: 'Crab Ramen',
    description: 'Spicy with garlic',
    price: '$24.00',
    image: 'https://yourimageurl.com/crab-ramen', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'Chicken Slice',
    description: 'Real chicken',
    price: '$12.00',
    image: 'https://yourimageurl.com/chicken-slice', // Replace with actual image URL
  },
  {
    id: '3',
    name: 'Eggs Curry',
    description: 'Eggs in tomato and sauce',
    price: '$15.00',
    image: 'https://yourimageurl.com/eggs-curry', // Replace with actual image URL
  },
];

const MainPage = () => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState({});
  const [cartItems, setCartItems] = useState([]);

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
            onPress={() => navigation.navigate('onpremise', { cartItems })}
          />
        </View>
      )}
      
      {/* Button to add selected items to cart with padding */}
      <View style={styles.buttonContainer}>
        <Button title="Add Selected to Cart" onPress={addToCart} />
      </View>
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
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10,   // Add vertical padding
    position: 'absolute',
    bottom: 350,            // Adjust bottom position to avoid overlap
    left: 0,
    right: 0,
  },
});
