

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import { MaterialCommunityIcons } from '@expo/vector-icons';

// // // Sample data for cuisines, top shops, and categories
// // const cuisines = [
// //   { id: '1', name: 'Convention Centers', image: require('../Images/CC.png') },
// //   { id: '2', name: 'Banquet Halls', image: require('../Images/Hall.png') },
// //   { id: '3', name: 'Resorts', image: require('../Images/Resort.png') },
// //   { id: '4', name: 'Restaurants', image: require('../Images/Hotel.png') },
// // ];

// // const topShops = [
// //   { id: '1', name: 'On-Premise', Serve: '5-20 min', image: require('../Images/onpremise.png') },
// //   { id: '2', name: 'Off-Premise', Serve: '15-30 min', image: require('../Images/offpremise.png') },
// // ];

// // const categories = [
// //   { id: '1', name: 'Transportation', image: require('../Images/car.png') },
// //   { id: '2', name: 'Decoration', image: require('../Images/decor.png') },
// //   { id: '3', name: 'Music Setup', image: require('../Images/music.png') },
// //   { id: '4', name: 'More', image: require('../Images/more.png') },
// // ];

// // const Services = () => {
// //   const navigation = useNavigation();
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [loading, setLoading] = useState(true); // Add loading state

// //   useEffect(() => {
// //     // Simulate a loading delay
// //     const timer = setTimeout(() => {
// //       setLoading(false);
// //     }, 2000); // Adjust the delay as needed

// //     return () => clearTimeout(timer); // Cleanup the timer
// //   }, []);

// //   const navigateToScreen = (Item1) => {
// //     navigation.navigate(Item1); // Use the provided screen name to navigate
// //   };

// //   const closeModal = () => {
// //     setModalVisible(false);
// //     setSelectedItem(null);
// //   };

// //   const handleEcardNavigation = () => {
// //     closeModal();
// //     navigateToScreen('templatesrc');
// //   };

// //   if (loading) {
// //     // Show loading indicator while data is being "loaded"
// //     return (
// //       <View style={styles.loaderContainer}>
// //         <ActivityIndicator size="large" color="#6A4E36" />
// //         <Text>Loading services...</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <ScrollView style={styles.scrollcontainer}>
// //         {/* Header with location */}
// //         <View style={styles.header}>
// //           <Text style={styles.headerText}>Special Services</Text>
// //           <Text style={styles.subHeaderText}>1/9 Harmain Tower Johar mor</Text>
// //         </View>

// //         {/* Search Bar */}
// //         <View style={styles.searchContainer}>
// //           <TextInput
// //             style={styles.searchInput}
// //             placeholder="Search for Services"
// //           />
// //         </View>

// //         {/* Venue Section */}
// //         <Text style={styles.sectionTitle}>Venue</Text>
// //         <FlatList
// //           data={cuisines}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           keyExtractor={(item) => item.id}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity
// //               onPress={() => {
// //                 if (item.id === '2') {
// //                   navigateToScreen('Item2');
// //                 } 
// //                 if (item.id === '3') {
// //                   navigateToScreen('Item3');
// //                 } 
// //                 if (item.id === '4') {
// //                   navigateToScreen('Item4');
// //                 } 
// //                 if (item.id === '1') {
// //                   navigateToScreen('Item1');
// //                 }
// //               }}
// //             >
// //               <View style={styles.cuisineItem}>
// //                 <Image source={item.image} style={styles.cuisineImage} />
// //                 <Text style={styles.cuisineText}>{item.name}</Text>
// //               </View>
// //             </TouchableOpacity>
// //           )}
// //         />

// //         {/* Top Shops Section */}
// //         <Text style={styles.sectionTitle}>Top Catering</Text>
// //         <FlatList
// //           data={topShops}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           keyExtractor={(item) => item.id}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity
// //               onPress={() => {
// //                 if (item.id === '2') {
// //                   navigateToScreen('offpremise');
// //                 } else {
// //                   navigateToScreen('onpremise');
// //                 }
// //               }}
// //             >
// //               <View style={styles.shopItem}>
// //                 <Image source={item.image} style={styles.shopImage} />
// //                 <Text style={styles.shopText}>{String(item.name)}</Text>
// //                 <Text style={styles.shopTime}>{String(item.Serve)}</Text>
// //               </View>
// //             </TouchableOpacity>
// //           )}
// //         />

// //         {/* Shop Categories Section */}
// //         <Text style={styles.sectionTitle}>Shop Categories</Text>
// //         <FlatList
// //           data={categories}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           keyExtractor={(item) => item.id}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity
// //               onPress={() => {
// //                 if (item.id === '1') {
// //                   navigateToScreen('Transportation');
// //                 }
// //                 if (item.id === '2') {
// //                   navigateToScreen('Decoration');
// //                 }
// //                 if (item.id === '3') {
// //                   navigateToScreen('Music');
// //                 }
// //                 if (item.id === '4') {
// //                   setSelectedItem(item);
// //                   setModalVisible(true);
// //                 }
// //               }}
// //             >
// //               <View style={styles.categoryItem}>
// //                 <Image source={item.image} style={styles.categoryImage} />
// //                 <Text style={styles.categoryText}>{String(item.name)}</Text>
// //               </View>
// //             </TouchableOpacity>
// //           )}
// //         />

// //         {/* Promotion Banner */}
// //         <View style={styles.promoBanner}>
// //           <Text style={styles.promoText}>Save 50%!</Text>
// //           <Text style={styles.promoSubText}>Hurry! Limited time offers</Text>
// //           <Text style={styles.promoTime}>13:16</Text>
// //         </View>
// //       </ScrollView>

// //       {/* Back Button */}
// //       <TouchableOpacity
// //         style={styles.backButton}
// //         onPress={() => navigation.navigate('Menu')}
// //       >
// //         <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
// //       </TouchableOpacity>

// //       {/* Modal for "More" category */}
// //       <Modal
// //         transparent={true}
// //         animationType="slide"
// //         visible={modalVisible}
// //         onRequestClose={closeModal}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <TouchableOpacity onPress={handleEcardNavigation} style={styles.ecardButton}>
// //               <Image source={require('../Images/Item/item19.jpg')} style={styles.icon} />
// //               <Text style={styles.buttonText}>E-card</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
// //               <Text>Close</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // // Styles for the components
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'flex-end', 
// //   },
// //   scrollcontainer: {
// //     flex: 1,
// //     backgroundColor: '#F9F3EC',
// //     padding: 10,
// //   },
// //   loaderContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F9F3EC',
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
// //   buttonText: {
// //     marginTop: 5,
// //     fontSize: 12,
// //     paddingLeft: 9,
// //     paddingBottom: 20
// //   },
// //   shopItem: {
// //     marginRight: 15,
// //     alignItems: 'center',
// //   },
// //   shopImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 35,
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
// //     borderRadius: 30,
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
// //   backButton: {
// //     position: 'absolute',
// //     bottom: 30, // Adjust this value as needed
// //     left: '50%',
// //     transform: [{ translateX: -30 }], // Adjust based on button size for centering
// //     backgroundColor: '#6A4E36', // Button background color
// //     borderRadius: 50, // Makes the button round
// //     padding: 15, // Size of the button
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   icon:{
// //     width: 50,
// //     height: 50,
// //     borderRadius: 35,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     width: 300,
// //     padding: 20,
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     alignItems: 'center',
// //   },
// // });

// // export default Services;
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Modal,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Animated
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native'; // For navigation

// const ServiceCard = ({ item, onViewDetails, onAdd, animatedStyle }) => (
//   <Animated.View style={[styles.card, animatedStyle]}>
//     <Image source={{ uri: item.image }} style={styles.cardImage} />
//     <View style={styles.cardContent}>
//       <Text style={styles.cardTitle}>{item.title}</Text>
//       <Text style={styles.cardDescription}>{item.description}</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.actionButton} onPress={() => onViewDetails(item)}>
//           <Icon name="info" size={18} color="#fff" />
//           <Text style={styles.buttonText}>Details</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButtonAdd} onPress={() => onAdd(item)}>
//           <Icon name="add" size={18} color="#fff" />
//           <Text style={styles.buttonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </Animated.View>
// );

// const ServicesDisplay = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
//   const [addModalVisible, setAddModalVisible] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('venue');
//   const [filteredData, setFilteredData] = useState({
//     venue: [
//       {
//         id: 1,
//         title: 'Banquet Hall',
//         description: 'Spacious and elegant for large events',
//         image: 'https://via.placeholder.com/500x300',
//         capacity: 300,
//         price: '$5000',
//         area: '5000 sq ft',
//         city: 'New York',
//         rating: 4.5,
//         comments: [
//           { username: 'JohnDoe', text: 'Great place!' },
//           { username: 'JaneSmith', text: 'Had a wonderful time.' },
//           { username: 'EventLover', text: 'Best venue in town!' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Outdoor Lawn',
//         description: 'Perfect for weddings and open-air events',
//         image: 'https://via.placeholder.com/500x300',
//         capacity: 200,
//         price: '$3000',
//         area: '4000 sq ft',
//         city: 'Los Angeles',
//         rating: 4.0,
//         comments: [
//           { username: 'Anna', text: 'Beautiful setting' },
//           { username: 'Mike', text: 'Amazing service.' },
//         ],
//       },
//     ],
//     catering: [
//       {
//         id: 1,
//         title: 'Buffet Service',
//         description: 'Wide range of dishes to suit all tastes',
//         image: 'https://via.placeholder.com/500x300',
//         capacity: 200,
//         price: '$2000',
//         area: '1000 sq ft',
//         city: 'San Francisco',
//         rating: 4.8,
//         comments: [
//           { username: 'FoodieFan', text: 'Delicious food!' },
//           { username: 'Sarah', text: 'Highly recommend this catering service.' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Live Counter',
//         description: 'Interactive food stations with fresh food made to order',
//         image: 'https://via.placeholder.com/500x300',
//         capacity: 150,
//         price: '$1500',
//         area: '800 sq ft',
//         city: 'Chicago',
//         rating: 4.3,
//         comments: [
//           { username: 'GourmetGuy', text: 'Great food variety!' },
//           { username: 'CateringLover', text: 'Fun experience.' },
//         ],
//       },
//     ],
//     otherServices: [
//       {
//         id: 1,
//         title: 'Photography',
//         description: 'Capture memories with professional photography',
//         image: 'https://via.placeholder.com/500x300',
//         capacity: 0,
//         price: '$1000',
//         area: 'N/A',
//         city: 'Miami',
//         rating: 4.7,
//         comments: [
//           { username: 'Shutterbug', text: 'Amazing photographer!' },
//           { username: 'HappyCouple', text: 'The best shots we’ve had.' },
//         ],
//       },
//       {
//         id: 2,
//         title: 'Decoration',
//         description: 'Elegant setups tailored to your theme',
//         image: 'https://via.placeholder.com/500x300',
//         capacity: 0,
//         price: '$800',
//         area: 'N/A',
//         city: 'Houston',
//         rating: 4.2,
//         comments: [
//           { username: 'DesignQueen', text: 'Beautiful decorations!' },
//           { username: 'EventPlanner', text: 'Very creative setups.' },
//         ],
//       },
//     ],
//   });

//   const [showComments, setShowComments] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   // For navigation
//   const navigation = useNavigation();

//   // Function to filter services based on search text and selected category
//   const filterData = () => {
//     const data = filteredData[selectedCategory];
//     return data.filter((service) =>
//       service.title.toLowerCase().includes(searchText.toLowerCase())
//     );
//   };

//   const handleSearchChange = (text) => {
//     setSearchText(text);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setSearchText(''); // Clear search text when changing category
//   };

//   const handleViewDetails = (item) => {
//     setSelectedService(item);
//     setViewDetailsModalVisible(true);
//   };

//   const handleAdd = (item) => {
//     setSelectedService(item);
//     setAddModalVisible(true); // Show the confirmation modal for adding the service
//   };

//   const handleConfirmAddToPlan = () => {
//     // Navigate to Plan.js after confirming the addition to the plan
//     navigation.navigate('Plan', { service: selectedService });
//     setAddModalVisible(false); // Close the modal
//   };

//   const handleCancelAddToPlan = () => {
//     setAddModalVisible(false); // Close the modal without adding
//   };

//   const toggleComments = () => {
//     setShowComments(!showComments);
//   };

//   const hoverIn = (itemId) => setHoveredItem(itemId);
//   const hoverOut = () => setHoveredItem(null);

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search Services..."
//           value={searchText}
//           onChangeText={handleSearchChange}
//         />
//         <View style={styles.categoryButtonsContainer}>
//           <TouchableOpacity
//             style={[styles.categoryButton, selectedCategory === 'venue' && styles.selectedCategoryButton]}
//             onPress={() => handleCategoryChange('venue')}
//           >
//             <Icon name="event" size={20} color="#fff" />
//             <Text style={styles.categoryButtonText}>Venue</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryButton, selectedCategory === 'catering' && styles.selectedCategoryButton]}
//             onPress={() => handleCategoryChange('catering')}
//           >
//             <Icon name="restaurant" size={20} color="#fff" />
//             <Text style={styles.categoryButtonText}>Catering</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.categoryButton, selectedCategory === 'otherServices' && styles.selectedCategoryButton]}
//             onPress={() => handleCategoryChange('otherServices')}
//           >
//             <Icon name="photo-camera" size={20} color="#fff" />
//             <Text style={styles.categoryButtonText}>Other Services</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <FlatList
//         data={filterData()}
//         renderItem={({ item }) => {
//           const isHovered = hoveredItem === item.id;
//           return (
//             <ServiceCard
//               item={item}
//               onViewDetails={handleViewDetails}
//               onAdd={handleAdd}  // Ensure the "Add" button triggers handleAdd
//               animatedStyle={{
//                 transform: [{ scale: isHovered ? 1.05 : 1 }],
//                 elevation: isHovered ? 10 : 2,
//                 shadowRadius: isHovered ? 10 : 2,
//               }}
//               onMouseEnter={() => hoverIn(item.id)}
//               onMouseLeave={hoverOut}
//             />
//           );
//         }}
//         keyExtractor={(item) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.verticalList}
//       />

//       {/* View Details Modal */}
//       {selectedService && (
//         <Modal visible={viewDetailsModalVisible} transparent onRequestClose={() => setViewDetailsModalVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>{selectedService.title}</Text>
//               <Image source={{ uri: selectedService.image }} style={styles.modalImage} />
//               <Text style={styles.modalText}>{selectedService.description}</Text>
//               <Text style={styles.modalText}>Capacity: {selectedService.capacity}</Text>
//               <Text style={styles.modalText}>Price: {selectedService.price}</Text>
//               <Text style={styles.modalText}>Area: {selectedService.area}</Text>
//               <Text style={styles.modalText}>City: {selectedService.city}</Text>
//               <Text style={styles.modalText}>Rating: {selectedService.rating}</Text>

//               <TouchableOpacity style={styles.closeModalButton} onPress={() => setViewDetailsModalVisible(false)}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       )}

//       {/* Add to Plan Confirmation Modal */}
//       <Modal visible={addModalVisible} transparent onRequestClose={() => setAddModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Do you want to add this service to your plan?</Text>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.actionButton} onPress={handleConfirmAddToPlan}>
//                 <Text style={styles.buttonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.actionButtonAdd} onPress={handleCancelAddToPlan}>
//                 <Text style={styles.buttonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9F3EC',
//   },
//   searchContainer: {
//     marginBottom: 15,
//   },
//   searchInput: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     elevation: 2,
//   },
//   categoryButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   categoryButton: {
//     backgroundColor: '#5f6368',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   selectedCategoryButton: {
//     backgroundColor: '#6A4E36',
//   },
//   categoryButtonText: {
//     color: '#fff',
//     marginLeft: 8,
//   },
//   verticalList: {
//     paddingTop: 10,
//   },
//   card: {
//     backgroundColor: '#C8B29E',
//     borderRadius: 10,
//     marginBottom: 20,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   cardImage: {
//     height: 150,
//     width: '100%',
//     resizeMode: 'cover',
//   },
//   cardContent: {
//     padding: 15,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cardDescription: {
//     fontSize: 14,
//     color: '#f',
//     marginBottom: 15,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   actionButton: {
//     backgroundColor: '#6A4E36',
//     padding: 15,
//     borderRadius: 25,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   actionButtonAdd: {
//     backgroundColor: '#1f1f1f',
//     padding: 15,
//     borderRadius: 25,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     marginLeft: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: 300,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   modalImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 10,
//   },
//   ratingContainer: {
//     marginBottom: 10,
//   },
//   toggleCommentsButton: {
//     backgroundColor: '#00796b',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   commentsSection: {
//     maxHeight: 150,
//     marginTop: 10,
//   },
//   commentItem: {
//     marginBottom: 10,
//   },
//   commentUsername: {
//     fontWeight: 'bold',
//   },
//   commentText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   closeModalButton: {
//     backgroundColor: '#00796b',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
// });

// export default ServicesDisplay;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Animated,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ServiceVenue, ServiceCatering, ServiceAll,BASE_URL } from '../ServiceAPIs/UsersAPIs'; // Import your API functions

const ServiceCard = ({ item, onViewDetails, onAdd, animatedStyle }) => (
  <Animated.View style={[styles.card, animatedStyle]}>
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.area}, {item.city}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => onViewDetails(item)}>
          <Icon name="info" size={18} color="#fff" />
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonAdd} onPress={() => onAdd(item)}>
          <Icon name="add" size={18} color="#fff" />
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Animated.View>
);
const ServicesDisplay = () => {
  const [servicesData, setServicesData] = useState({
    venue: [],
    catering: [],
    otherServices: [],
  });
  const [selectedService, setSelectedService] = useState(null);
  const [viewDetailsModalVisible, setViewDetailsModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('venue');

  // Fetch data on component load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const venues = await ServiceVenue();
        const catering = await ServiceCatering();
        const allServices = await ServiceAll();

        // Transform data
        const transformData = (data) =>
          data.map((item) => ({
            id: item.serviceId,
            title: item.serviceName,
            description: `Type: ${item.serviceType}, Capacity: ${item.serviceCapacity}, Price: $${item.servicePrice}`,
            capacity: item.serviceCapacity,
            price: item.servicePrice,
            area: item.serviceArea,
            city: item.serviceCity,
            rating: 4.5, // Assuming hardcoded rating
            image: item.pictures.length
              ? `${BASE_URL}/services/images/${item.pictures[0].pictureUrl}`
              : 'https://via.placeholder.com/150', // Placeholder if no image
          }));

        setServicesData({
          venue: transformData(venues),
          catering: transformData(catering),
          otherServices: transformData(allServices),
        });
      } catch (error) {
        console.error('Error fetching services:', error.message);
      }
    };

    fetchData();
  }, []);

  const filterData = () => {
    const data = servicesData[selectedCategory];
    return data.filter((service) =>
      service.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const handleViewDetails = (item) => {
    setSelectedService(item);
    setViewDetailsModalVisible(true);
  };

  const handleAdd = (item) => {
    setSelectedService(item);
    setAddModalVisible(true);
  };

  const handleConfirmAddToPlan = () => {
    // Navigate or perform actions after adding the service
    console.log('Service added to plan:', selectedService);
    setAddModalVisible(false);
  };

  const handleCancelAddToPlan = () => {
    setAddModalVisible(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchText(''); // Clear search when switching category
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Services..."
          value={searchText}
          onChangeText={handleSearchChange}
        />
        <View style={styles.categoryButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'venue' && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryChange('venue')}
          >
            <Icon name="event" size={20} color="#fff" />
            <Text style={styles.categoryButtonText}>Venue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'catering' && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryChange('catering')}
          >
            <Icon name="restaurant" size={20} color="#fff" />
            <Text style={styles.categoryButtonText}>Catering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === 'otherServices' && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryChange('otherServices')}
          >
            <Icon name="photo-camera" size={20} color="#fff" />
            <Text style={styles.categoryButtonText}>Other Services</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filterData()}
        renderItem={({ item }) => (
          <ServiceCard
            item={item}
            onViewDetails={handleViewDetails}
            onAdd={handleAdd}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* View Details Modal */}
      <Modal visible={viewDetailsModalVisible} transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedService && (
              <>
                <Text style={styles.modalTitle}>{selectedService.title}</Text>
                <Image source={{ uri: selectedService.image }} style={styles.modalImage} />
                <Text style={styles.modalText}>Capacity: {selectedService.capacity}</Text>
              <Text style={styles.modalText}>Price: {selectedService.price}</Text>
              <Text style={styles.modalText}>Area: {selectedService.area}</Text>
              <Text style={styles.modalText}>City: {selectedService.city}</Text>
              <Text style={styles.modalText}>Rating: {selectedService.rating}</Text>
                <TouchableOpacity
                  style={styles.closeModalButton}
                  onPress={() => setViewDetailsModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Add to Plan Modal */}
      <Modal visible={addModalVisible} transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Do you want to add this service to your plan?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={handleConfirmAddToPlan}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButtonAdd}
                onPress={handleCancelAddToPlan}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F3EC',
  },
  searchContainer: {
    marginBottom: 15,
  },
  searchInput: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  categoryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    backgroundColor: '#5f6368',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedCategoryButton: {
    backgroundColor: '#6A4E36',
  },
  categoryButtonText: {
    color: '#fff',
    marginLeft: 8,
  },
  verticalList: {
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#C8B29E',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  cardImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#f',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonAdd: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  ratingContainer: {
    marginBottom: 10,
  },
  toggleCommentsButton: {
    backgroundColor: '#00796b',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  commentsSection: {
    maxHeight: 150,
    marginTop: 10,
  },
  commentItem: {
    marginBottom: 10,
  },
  commentUsername: {
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
    color: '#555',
  },
  closeModalButton: {
    backgroundColor: '#00796b',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default ServicesDisplay;