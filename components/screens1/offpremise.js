// import React, { useState } from 'react'; // Import useState
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
// import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'; 

// const popularItems = [
//   {
//     id: '1',
//     name: 'Menu 1',
//     price: 'Rs. 2000/Head',
//     image: require('../../Images/Item/item17.png'), 
//   },
//   {
//     id: '2',
//     name: 'Menu 2',
//     price: 'Rs. 2500/Head',
//     image: require('../../Images/Item/item18.jpg'), 
//   },
// ];

// const CateringScreen = () => {
//   const navigation = useNavigation();
//   const [deliveryAddress, setDeliveryAddress] = useState(''); // State to handle user input

//   const renderPopularItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Image source={item.image} style={styles.itemImage} />
//       <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
//       <Text style={styles.itemPrice}>{item.price}</Text>
   
//     </View>
//   );

//   const renderRatingStars = (rating) => {
//     let stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <MaterialIcons
//           key={i}
//           name={i <= rating ? "star" : "star-border"}
//           size={16}
//           color="#FFD700"
//         />
//       );
//     }
//     return stars;
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.navigate('Services')}>
//           <MaterialIcons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <View style={styles.headerInfo}>
//           <Image
//             source={{ uri: 'https://link-to-restaurant-logo.com' }}
//             style={styles.restaurantLogo}
//           />
//           <View>
//             <Text style={styles.restaurantName}>Karachi's Catering</Text>
//             <View style={styles.ratingContainer}>
//               {renderRatingStars(4)}
//               <Text style={styles.ratingText}>4.0 (200+ ratings)</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity>
//             <MaterialIcons name="favorite-border" size={24} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <MaterialIcons name="share" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Delivery Address Input Section */}
//       <View style={styles.onPremiseInfo}>
//         <Text style={styles.infoTitle}>Setup Address</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter delivery address"
//           value={deliveryAddress}
//           onChangeText={setDeliveryAddress}
//         />
//         <Text style={styles.infoText}>Arranging Capacity: 100-500 People</Text>
//       </View>

//       {/* Popular Items Section */}
//       <Text style={styles.popularTitle}>Popular</Text>
//       <FlatList
//         data={popularItems}
//         renderItem={renderPopularItem}
//         keyExtractor={(item) => item.id}
//         horizontal
//         contentContainerStyle={styles.popularList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f3ec',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 15,
//   },
//   headerInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   restaurantLogo: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   restaurantName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingText: {
//     fontSize: 14,
//     color: '#888',
//     marginLeft: 5,
//   },
//   headerIcons: {
//     flexDirection: 'row',
//   },
//   onPremiseInfo: {
//     padding: 15,
//     backgroundColor: '#e6f7ff',
//     marginBottom: 10,
//   },
//   infoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 3,
//   },
//   popularTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     paddingLeft: 15,
//     marginVertical: 10,
//   },
//   popularList: {
//     paddingLeft: 15,
//   },
//   itemContainer: {
//     width: 150,
//     marginRight: 15,
//   },
//   itemImage: {
//     width: 150,
//     height: 120,
//     borderRadius: 10,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: '#888',
//     marginTop: 3,
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     backgroundColor: '#fff',
//     padding: 5,
//     borderRadius: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
// });

// export default CateringScreen;
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const popularItems = [
  {
    id: '1',
    name: 'Menu 1',
    price: 'Rs. 2000/Head',
    image: require('../../Images/Item/item17.png'),
  },
  {
    id: '2',
    name: 'Menu 2',
    price: 'Rs. 2500/Head',
    image: require('../../Images/Item/item18.jpg'),
  },
];

const CateringScreen = () => {
  const navigation = useNavigation();
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleMenuPress = (item) => {
    if (item.id === '1') {
      navigation.navigate('Menu3'); // Navigate to 'Menu1Screen' or any other screen you want for Menu 1
    } 
    if (item.id === '2') {
        navigation.navigate('Menu4'); // Navigate to 'Menu1Screen' or any other screen you want for Menu 1
      } 
  };

  const renderPopularItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleMenuPress(item)}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderRatingStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialIcons
          key={i}
          name={i <= rating ? 'star' : 'star-border'}
          size={16}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image
            source={{ uri: 'https://link-to-restaurant-logo.com' }}
            style={styles.restaurantLogo}
          />
          <View>
            <Text style={styles.restaurantName}>Karachi's Catering</Text>
            <View style={styles.ratingContainer}>
              {renderRatingStars(4)}
              <Text style={styles.ratingText}>4.0 (200+ ratings)</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="favorite-border" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="share" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Delivery Address Input Section */}
      <View style={styles.onPremiseInfo}>
        <Text style={styles.infoTitle}>Setup Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter delivery address"
          value={deliveryAddress}
          onChangeText={setDeliveryAddress}
        />
        <Text style={styles.infoText}>Arranging Capacity: 100-500 People</Text>
      </View>

      {/* Popular Items Section */}
      <Text style={styles.popularTitle}>Popular</Text>
      <FlatList
        data={popularItems}
        renderItem={renderPopularItem}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.popularList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f3ec',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#888',
    marginLeft: 5,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  onPremiseInfo: {
    padding: 15,
    backgroundColor: '#e6f7ff',
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 3,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginVertical: 10,
  },
  popularList: {
    paddingLeft: 15,
  },
  itemContainer: {
    width: 150,
    marginRight: 15,
  },
  itemImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default CateringScreen;
