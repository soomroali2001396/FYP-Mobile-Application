// // import React from 'react';
// // import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView, StyleSheet, } from 'react-native';
// // import { useNavigation } from '@react-navigation/native'; 
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Importing MaterialCommunityIcons
// // // Sample data for cuisines, top shops, and categories
// // const cuisines = [
// //   { id: '1', name: 'Convention Centers', image: require('../Images/CC.png') },
// //   { id: '2', name: 'Banquet Halls', image: require('../Images/Hall.png') },
// //   { id: '3', name: 'Resorts', image: require('../Images/Resort.png') },
// //   { id: '4', name: 'Restaurants', image: require('../Images/Hotel.png') },
// // ];

// // const topShops = [
// //   { id: '1', name: 'On-Premise', Serve: '5-20 min', image: require('../Images/onpremise.png')  },
// //   { id: '2', name: 'Off-Premsie', Serve: '15-30 min', image: require('../Images/offpremise.png')  },
// // ];

// // const categories = [
// //   { id: '1', name: 'Transportation', image: require('../Images/car.png') },
// //   { id: '2', name: 'Decoration', image: require('../Images/decor.png')},
// //   { id: '3', name: 'Music Setup', image: require('../Images/music.png') },
// //   { id: '4', name: 'More', image: require('../Images/more.png')},
// // ];

// // const Services = () => {
// //   const navigation = useNavigation();
// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* Header with location */}
      
// //       <View style={styles.header}>
// //       <Text style={styles.headerText}>Special Services</Text>
// //       <Text style={styles.subHeaderText}>1/9 Harmain Tower Johar mor</Text>
// //     </View>
      

// //       {/* Search Bar */}
// //       <View style={styles.searchContainer}>
// //         <TextInput 
// //           style={styles.searchInput} 
// //           placeholder="Search for Services"
// //         />
// //       </View>

      
// //       {/* Cuisines Section */}
// //       <Text style={styles.sectionTitle}>Venu</Text>
// //       <FlatList
// //         data={cuisines}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={styles.cuisineItem}>
// //             <Image source={{ uri: item.image }} style={styles.cuisineImage} />
// //             <Text style={styles.cuisineText}>{item.name}</Text>
// //           </View>
// //         )}
// //       />

// //       {/* Top Shops Section */}
// //       <Text style={styles.sectionTitle}>Top Catering</Text>
// //       <FlatList
// //         data={topShops}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={styles.shopItem}>
// //             <Image source={{ uri: item.image }} style={styles.shopImage} />
// //             <Text style={styles.shopText}>{item.name}</Text>
// //             <Text style={styles.shopTime}>{item.time}</Text>
// //           </View>
// //         )}
// //       />

// //       {/* Shop Categories Section */}
// //       <Text style={styles.sectionTitle}>Shop categories</Text>
// //       <FlatList
// //         data={categories}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <View style={styles.categoryItem}>
// //             <Image source={{ uri: item.image }} style={styles.categoryImage} />
// //             <Text style={styles.categoryText}>{item.name}</Text>
// //           </View>
// //         )}
// //       />

// //       {/* Promotion Banner */}
// //       <View style={styles.promoBanner}>
// //         <Text style={styles.promoText}>Save 25%!</Text>
// //         <Text style={styles.promoSubText}>Hurry! Limited time offers</Text>
// //         <Text style={styles.promoTime}>13:16</Text>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // // Styles for the components
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F9F3EC',
// //     padding: 10,
// //   },
// //   header: {
// //     marginVertical: 10,
// //   },
// //   headerText: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //   },
// //   subHeaderText: {
// //     color: '#666',
// //     fontSize: 14,
// //   },
// //   searchContainer: {
// //     marginVertical: 10,
// //   },
// //   searchInput: {
// //     backgroundColor: '#f2f2f2',
// //     borderRadius: 25,
// //     padding: 10,
// //     paddingLeft: 20,
// //   },
// //   sortingContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginVertical: 10,
// //   },
// //   sortButton: {
// //     paddingVertical: 8,
// //     paddingHorizontal: 20,
// //     backgroundColor: '#f2f2f2',
// //     borderRadius: 20,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //   },
// //   cuisineItem: {
// //     marginRight: 15,
// //     alignItems: 'center',
// //   },
// //   cuisineImage: {
// //     width: 70,
// //     height: 70,
// //     borderRadius: 35,
// //   },
// //   cuisineText: {
// //     marginTop: 5,
// //     fontSize: 12,
// //   },
// //   shopItem: {
// //     marginRight: 15,
// //     alignItems: 'center',
// //   },
// //   shopImage: {
// //     width: 50,
// //     height: 50,
// //   },
// //   shopText: {
// //     marginTop: 5,
// //     fontSize: 12,
// //   },
// //   shopTime: {
// //     fontSize: 10,
// //     color: '#666',
// //   },
// //   categoryItem: {
// //     marginRight: 15,
// //     alignItems: 'center',
// //   },
// //   categoryImage: {
// //     width: 50,
// //     height: 50,
// //   },
// //   categoryText: {
// //     marginTop: 5,
// //     fontSize: 12,
// //   },
// //   promoBanner: {
// //     marginTop: 20,
// //     backgroundColor: '#ffe6e6',
// //     borderRadius: 10,
// //     padding: 15,
// //     alignItems: 'center',
// //   },
// //   promoText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#ff4d4d',
// //   },
// //   promoSubText: {
// //     fontSize: 12,
// //     color: '#ff4d4d',
// //   },
// //   promoTime: {
// //     fontSize: 14,
// //     color: '#333',
// //   },
  
  
// // });

// // export default Services;


// import React from 'react';
// import { View, Text, TextInput, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// // Sample data for cuisines, top shops, and categories
// const cuisines = [
//   { id: '1', name: 'Convention Centers', image: require('../Images/CC.png') },
//   { id: '2', name: 'Banquet Halls', image: require('../Images/Hall.png') },
//   { id: '3', name: 'Resorts', image: require('../Images/Resort.png') },
//   { id: '4', name: 'Restaurants', image: require('../Images/Hotel.png') },
// ];

// const topShops = [
//   { id: '1', name: 'On-Premise', Serve: '5-20 min', image: require('../Images/onpremise.png') },
//   { id: '2', name: 'Off-Premise', Serve: '15-30 min', image: require('../Images/offpremise.png') },
// ];

// const categories = [
//   { id: '1', name: 'Transportation', image: require('../Images/car.png') },
//   { id: '2', name: 'Decoration', image: require('../Images/decor.png') },
//   { id: '3', name: 'Music Setup', image: require('../Images/music.png') },
//   { id: '4', name: 'More', image: require('../Images/more.png') },
// ];

// const Services = () => {
//   const navigation = useNavigation();

//   const navigateToScreen = () => {
//     navigation.navigate(item.name); // Assuming item.name matches screen name (e.g., "Item1")
//   };
  
//   return (
//     <View style={styles.container}>
//     <ScrollView style={styles.scrollcontainer}>
//       {/* Header with location */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Special Services</Text>
//         <Text style={styles.subHeaderText}>1/9 Harmain Tower Johar mor</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput 
//           style={styles.searchInput} 
//           placeholder="Search for Services"
//         />
//       </View>

//       {/* Cuisines Section */}
//       <Text style={styles.sectionTitle}>Venue</Text>
//       <FlatList
//         data={cuisines}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//             <TouchableOpacity onPress={navigateToScreen}>
//       <View style={styles.cuisineItem}>
//         <Image source={item.image} style={styles.cuisineImage} />
//         <Text style={styles.cuisineText}>{String(item.name)}</Text>
//       </View>
//     </TouchableOpacity>
//         )}
//       />

//       {/* Top Shops Section */}
//       <Text style={styles.sectionTitle}>Top Catering</Text>
//       <FlatList
//         data={topShops}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.shopItem}>
//             <Image source={item.image} style={styles.shopImage} />
//             {/* Use String() to ensure value is a string */}
//             <Text style={styles.shopText}>{String(item.name)}</Text>
//             <Text style={styles.shopTime}>{String(item.Serve)}</Text>
//           </View>
//         )}
//       />

//       {/* Shop Categories Section */}
//       <Text style={styles.sectionTitle}>Shop Categories</Text>
//       <FlatList
//         data={categories}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.categoryItem}>
//             <Image source={item.image} style={styles.categoryImage} />
//             {/* Use String() to ensure value is a string */}
//             <Text style={styles.categoryText}>{String(item.name)}</Text>
//           </View>
//         )}
//       />

//       {/* Promotion Banner */}
//       <View style={styles.promoBanner}>
//         <Text style={styles.promoText}>Save 50%!</Text>
//         <Text style={styles.promoSubText}>Hurry! Limited time offers</Text>
//         <Text style={styles.promoTime}>13:16</Text>
//       </View>
//     </ScrollView>

//     <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.navigate('Home')}
//       >
//         <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Styles for the components
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end', // Ensures the button is positioned at the bottom
//   },
//   scrollcontainer: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//     padding: 10,
//   },
//   header: {
//     marginVertical: 10,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   subHeaderText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   searchContainer: {
//     marginVertical: 10,
//   },
//   searchInput: {
//     backgroundColor: '#f2f2f2',
//     borderRadius: 25,
//     padding: 10,
//     paddingLeft: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   cuisineItem: {
//     marginRight: 15,
//     alignItems: 'center',
//   },
//   cuisineImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//   },
//   cuisineText: {
//     marginTop: 5,
//     fontSize: 12,
//   },
//   shopItem: {
//     marginRight: 15,
//     alignItems: 'center',
//   },
//   shopImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 35,
//   },
//   shopText: {
//     marginTop: 5,
//     fontSize: 12,
//   },
//   shopTime: {
//     fontSize: 10,
//     color: '#666',
//   },
//   categoryItem: {
//     marginRight: 15,
//     alignItems: 'center',
//   },
//   categoryImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 30,
//   },
//   categoryText: {
//     marginTop: 5,
//     fontSize: 12,
//   },
//   promoBanner: {
//     marginTop: 20,
//     backgroundColor: '#ffe6e6',
//     borderRadius: 10,
//     padding: 15,
//     alignItems: 'center',
//   },
//   promoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#ff4d4d',
//   },
//   promoSubText: {
//     fontSize: 12,
//     color: '#ff4d4d',
//   },
//   promoTime: {
//     fontSize: 14,
//     color: '#333',
//   },
//   backButton: {
//     position: 'absolute',
//     bottom: 30, // Adjust this value as needed
//     left: '50%',
//     transform: [{ translateX: -30 }], // Adjust based on button size for centering
//     backgroundColor: '#6A4E36', // Button background color
//     borderRadius: 50, // Makes the button round
//     padding: 15, // Size of the button
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default Services;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Sample data for cuisines, top shops, and categories
const cuisines = [
  { id: '1', name: 'Convention Centers', image: require('../Images/CC.png') },
  { id: '2', name: 'Banquet Halls', image: require('../Images/Hall.png') },
  { id: '3', name: 'Resorts', image: require('../Images/Resort.png') },
  { id: '4', name: 'Restaurants', image: require('../Images/Hotel.png') },
];

const topShops = [
  { id: '1', name: 'On-Premise', Serve: '5-20 min', image: require('../Images/onpremise.png') },
  { id: '2', name: 'Off-Premise', Serve: '15-30 min', image: require('../Images/offpremise.png') },
];

const categories = [
  { id: '1', name: 'Transportation', image: require('../Images/car.png') },
  { id: '2', name: 'Decoration', image: require('../Images/decor.png') },
  { id: '3', name: 'Music Setup', image: require('../Images/music.png') },
  { id: '4', name: 'More', image: require('../Images/more.png') },
];

const Services = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const navigateToScreen = (Item1) => {
    navigation.navigate(Item1); // Use the provided screen name to navigate
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleEcardNavigation = () => {
    closeModal();
    navigateToScreen('templatesrc');
  };

  if (loading) {
    // Show loading indicator while data is being "loaded"
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6A4E36" />
        <Text>Loading services...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollcontainer}>
        {/* Header with location */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Special Services</Text>
          <Text style={styles.subHeaderText}>1/9 Harmain Tower Johar mor</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for Services"
          />
        </View>

        {/* Venue Section */}
        <Text style={styles.sectionTitle}>Venue</Text>
        <FlatList
          data={cuisines}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.id === '2') {
                  navigateToScreen('Item2');
                } 
                if (item.id === '3') {
                  navigateToScreen('Item3');
                } 
                if (item.id === '4') {
                  navigateToScreen('Item4');
                } 
                if (item.id === '1') {
                  navigateToScreen('Item1');
                }
              }}
            >
              <View style={styles.cuisineItem}>
                <Image source={item.image} style={styles.cuisineImage} />
                <Text style={styles.cuisineText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Top Shops Section */}
        <Text style={styles.sectionTitle}>Top Catering</Text>
        <FlatList
          data={topShops}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.id === '2') {
                  navigateToScreen('offpremise');
                } else {
                  navigateToScreen('onpremise');
                }
              }}
            >
              <View style={styles.shopItem}>
                <Image source={item.image} style={styles.shopImage} />
                <Text style={styles.shopText}>{String(item.name)}</Text>
                <Text style={styles.shopTime}>{String(item.Serve)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Shop Categories Section */}
        <Text style={styles.sectionTitle}>Shop Categories</Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.id === '1') {
                  navigateToScreen('Transportation');
                }
                if (item.id === '2') {
                  navigateToScreen('Decoration');
                }
                if (item.id === '3') {
                  navigateToScreen('Music');
                }
                if (item.id === '4') {
                  setSelectedItem(item);
                  setModalVisible(true);
                }
              }}
            >
              <View style={styles.categoryItem}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{String(item.name)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Promotion Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>Save 50%!</Text>
          <Text style={styles.promoSubText}>Hurry! Limited time offers</Text>
          <Text style={styles.promoTime}>13:16</Text>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Menu')}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
      </TouchableOpacity>

      {/* Modal for "More" category */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleEcardNavigation} style={styles.ecardButton}>
              <Image source={require('../Images/Item/item19.jpg')} style={styles.icon} />
              <Text style={styles.buttonText}>E-card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    padding: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F3EC',
  },
  header: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#666',
    fontSize: 14,
  },
  searchContainer: {
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    padding: 10,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cuisineItem: {
    marginRight: 15,
    alignItems: 'center',
  },
 
  cuisineImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  cuisineText: {
    marginTop: 5,
    fontSize: 12,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
    paddingLeft: 9,
    paddingBottom: 20
  },
  shopItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  shopImage: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  shopText: {
    marginTop: 5,
    fontSize: 12,
  },
  shopTime: {
    fontSize: 10,
    color: '#666',
  },
  categoryItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
  },
  promoBanner: {
    marginTop: 20,
    backgroundColor: '#ffe6e6',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4d4d',
  },
  promoSubText: {
    fontSize: 12,
    color: '#ff4d4d',
  },
  promoTime: {
    fontSize: 14,
    color: '#333',
  },
  backButton: {
    position: 'absolute',
    bottom: 30, // Adjust this value as needed
    left: '50%',
    transform: [{ translateX: -30 }], // Adjust based on button size for centering
    backgroundColor: '#6A4E36', // Button background color
    borderRadius: 50, // Makes the button round
    padding: 15, // Size of the button
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Services;
