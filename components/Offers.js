// // import React from "react";
// // import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Platform } from "react-native";

// // const theme = {
// //   background: "#F9F3EC",
// //   text: "#000",
// //   cardBackground: "#FFF",
// //   cardShadow: "#CCC",
// //   buttonBackground: "#6A4E36",
// //   buttonText: "#FFF",
 
// // };

// // export default function App() {
// //   const mockData = [
// //     {
// //       id: "1",
// //       title: "Wedding 2024",
// //       date: "22 Nov, 2024",
// //       image: "https://cdn-ganmh.nitrocdn.com/yAyKiBPVPMXKQMHztHQiJNHZvbaKhuGt/assets/images/optimized/rev-db8387a/biyahwedding.com/wp-content/uploads/2021/09/SHAR2453-scaled.webp",
// //     },
// //     {
// //       id: "2",
// //       title: "Henna Event 2024",
// //       date: "20 Nov, 2024",
// //       image: "https://images.prismic.io/devcms/9173527e-99b9-48bd-8e55-38bba07214b7_5%2Bcool%2Bmehendi%2Bpose.jpg?auto=compress,format",
// //     },
// //     {
// //       id: "3",
// //       title: "Business Meeting",
// //       date: "10 Nov, 2023",
// //       image: "https://www.iobm.edu.pk/assets/images/ORIC-MoU-Signing-Picture-Updated.jpg",
// //     },
// //     {
// //       id: "4",
// //       title: "Annual Dinner",
// //       date: "10 March, 2024",
// //       image: "https://media1.clevescene.com/clevescene/imager/the-23-best-restaurants-on-clevelands-east-side/u/zoom/38273009/zoma.jpg?cb=1648286618",
// //     },
// //   ];

// //   return (
// //     <View style={[styles.container, { backgroundColor: theme.background }]}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Text style={[styles.headerText, { color: theme.text }]}>Special Offers</Text>
// //       </View>

// //       {/* Must See Section */}
// //       <Text style={[styles.sectionTitle, { color: theme.text }]}>Must see</Text>
// //       <FlatList
// //         horizontal
// //         data={mockData.slice(0, 2)}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity onPress={() => alert(`Clicked on ${item.title}`)}>
// //             <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
// //               <Image source={{ uri: item.image }} style={styles.cardImage} />
// //               <Text style={[styles.cardText, { color: theme.text }]}>{item.title}</Text>
// //             </View>
// //           </TouchableOpacity>
// //         )}
// //         showsHorizontalScrollIndicator={false}
// //       />

// //       {/* All Events Section */}
// //       <Text style={[styles.sectionTitle, { color: theme.text }]}>All events</Text>
// //       <FlatList
// //         data={mockData.slice(2)}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           <TouchableOpacity onPress={() => alert(`Clicked on ${item.title}`)}>
// //             <View style={[styles.listItem, { backgroundColor: theme.cardBackground }]}>
// //               <Image source={{ uri: item.image }} style={styles.listImage} />
// //               <View>
// //                 <Text style={[styles.listTitle, { color: theme.text }]}>{item.title}</Text>
// //                 <Text style={[styles.listDate, { color: theme.text }]}>{item.date}</Text>
// //               </View>
// //             </View>
// //           </TouchableOpacity>
// //         )}
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={{ paddingBottom: 20 }}
// //       />

// //       {/* Footer */}
// //       <View style={[styles.footer, { backgroundColor: theme.footerBackground }]}>
// //         <TouchableOpacity
// //           style={[styles.footerButton, { backgroundColor: theme.buttonBackground }]}
// //           onPress={() => alert("Sorry, No More Events Found!")}
// //         >
// //           <Text style={[styles.footerButtonText, { color: theme.buttonText }]}>Explore</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   header: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: 20,
// //   },
// //   headerText: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginVertical: 10,
// //   },
// //   card: {
// //     width: 150,
// //     height: 200,
// //     borderRadius: 10,
// //     marginRight: 15,
// //     ...Platform.select({
// //       ios: {
// //         shadowOffset: { width: 0, height: 2 },
// //         shadowOpacity: 0.2,
// //         shadowRadius: 4,
// //       },
// //       android: {
// //         elevation: 3, // Android shadow
// //       },
// //     }),
// //   },
// //   cardImage: {
// //     width: "100%",
// //     height: "70%",
// //     borderTopLeftRadius: 10,
// //     borderTopRightRadius: 10,
// //   },
// //   cardText: {
// //     marginTop: 5,
// //     textAlign: "center",
// //     fontSize: 14,
// //     fontWeight: "600",
// //   },
// //   listItem: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     padding: 10,
// //     borderRadius: 10,
// //     marginVertical: 5,
// //     ...Platform.select({
// //       android: {
// //         elevation: 2,
// //       },
// //       ios: {
// //         shadowOffset: { width: 0, height: 1 },
// //         shadowOpacity: 0.1,
// //         shadowRadius: 2,
// //       },
// //     }),
// //   },
// //   listImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 10,
// //     marginRight: 10,
// //   },
// //   listTitle: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   listDate: {
// //     fontSize: 12,
// //     color: "#666",
// //   },
// //   footer: {
// //     padding: 15,
// //     borderRadius: 10,
// //     marginTop: 20,
// //     alignItems: "center",
// //   },
// //   footerButton: {
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   footerButtonText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// // });

// import React from "react";
// import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Platform } from "react-native";
// import * as Animatable from "react-native-animatable";

// const theme = {
//   background: "#F9F3EC", // Light gray background
//   text: "#333", // Darker text for readability
//   cardBackground: "#C8B29E",
//   cardShadow: "#D1D1D1", // Light shadow for cards
//   buttonBackground: "#1f1f1f", // Accent color for buttons
//   buttonText: "#FFF", // Button text color
//   headerBackground: "#6A4E36", // Header background
//   footerBackground: "#1f1f1f", // Footer background
// };

// export default function App() {
//   const mockData = [
//     {
//       id: "1",
//       title: "Wedding 2024",
//       date: "22 Nov, 2024",
//       image: "https://cdn-ganmh.nitrocdn.com/yAyKiBPVPMXKQMHztHQiJNHZvbaKhuGt/assets/images/optimized/rev-db8387a/biyahwedding.com/wp-content/uploads/2021/09/SHAR2453-scaled.webp",
//     },
//     {
//       id: "2",
//       title: "Henna Event 2024",
//       date: "20 Nov, 2024",
//       image: "https://images.prismic.io/devcms/9173527e-99b9-48bd-8e55-38bba07214b7_5%2Bcool%2Bmehendi%2Bpose.jpg?auto=compress,format",
//     },
//     {
//       id: "3",
//       title: "Business Meeting",
//       date: "10 Nov, 2023",
//       image: "https://www.iobm.edu.pk/assets/images/ORIC-MoU-Signing-Picture-Updated.jpg",
//     },
//     {
//       id: "4",
//       title: "Annual Dinner",
//       date: "10 March, 2024",
//       image: "https://media1.clevescene.com/clevescene/imager/the-23-best-restaurants-on-clevelands-east-side/u/zoom/38273009/zoma.jpg?cb=1648286618",
//     },
//   ];

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>
//       {/* Header */}
//       <View style={[styles.header, { backgroundColor: theme.headerBackground }]}>
//         <Text style={[styles.headerText, { color: theme.buttonText }]}>Special Offers</Text>
//       </View>

//       {/* Must See Section */}
//       <Text style={[styles.sectionTitle, { color: theme.text }]}>Must see</Text>
//       <FlatList
//         horizontal
//         data={mockData.slice(0, 2)}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => alert(`Clicked on ${item.title}`)}>
//             <Animatable.View animation="fadeIn" duration={500} style={[styles.card, { backgroundColor: theme.cardBackground }]}>
//               <Image source={{ uri: item.image }} style={styles.cardImage} />
//               <Text style={[styles.cardText, { color: theme.text }]}>{item.title}</Text>
//             </Animatable.View>
//           </TouchableOpacity>
//         )}
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* All Events Section */}
//       <Text style={[styles.sectionTitle, { color: theme.text }]}>All events</Text>
//       <FlatList
//         data={mockData.slice(2)}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => alert(`Clicked on ${item.title}`)}>
//             <Animatable.View animation="zoomIn" duration={500} style={[styles.listItem, { backgroundColor: theme.cardBackground }]}>
//               <Image source={{ uri: item.image }} style={styles.listImage} />
//               <View>
//                 <Text style={[styles.listTitle, { color: theme.text }]}>{item.title}</Text>
//                 <Text style={[styles.listDate, { color: theme.text }]}>{item.date}</Text>
//               </View>
//             </Animatable.View>
//           </TouchableOpacity>
//         )}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />

//       {/* Footer */}
//       <View style={[styles.footer, { backgroundColor: theme.footerBackground }]}>
//         <TouchableOpacity
//           style={[styles.footerButton, { backgroundColor: theme.buttonBackground }]}
//           onPress={() => alert("Sorry, No More Events Found!")}
//         >
//           <Text style={[styles.footerButtonText, { color: theme.buttonText }]}>Explore More</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     padding: 30,
//     backgroundColor: '#6A4E36',
//     height: 100,
//     paddingHorizontal: 20,
//     // flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
    
//   },
//   headerText: {
//     fontSize: 30,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginVertical: 10,
//     letterSpacing: 1,
//   },
//   card: {
//     width: 160,
//     height: 220,
//     borderRadius: 15,
//     marginRight: 15,
//     ...Platform.select({
//       ios: {
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.3,
//         shadowRadius: 8,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//     overflow: "hidden", // to prevent image overflow
//   },
//   cardImage: {
//     width: "100%",
//     height: "70%",
//     borderRadius: 15,
//   },
//   cardText: {
//     marginTop: 10,
//     textAlign: "center",
//     fontSize: 16,
//     fontWeight: "600",
//     lineHeight: 20,
//   },
//   listItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 12,
//     borderRadius: 15,
//     marginVertical: 8,
//     ...Platform.select({
//       android: {
//         elevation: 4,
//       },
//       ios: {
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//       },
//     }),
//   },
//   listImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 15,
//     marginRight: 15,
//   },
//   listTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   listDate: {
//     fontSize: 14,
//     color: "#777",
//   },
//   footer: {
//     padding: 20,
//     borderRadius: 15,
//     marginTop: 30,
//     alignItems: "center",
//   },
//   footerButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   footerButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
// import { ServiceVenue, ServiceCatering, ServiceAll, BASE_URL } from '../ServiceAPIs/UsersAPIs';
// import { useNavigation } from '@react-navigation/native';

// const RecommendedPackageScreen = () => {
//   const [servicesData, setServicesData] = useState({
//     venue: [],
//     catering: [],
//     transport: [],
//   });

//   const [budget, setBudget] = useState('');
//   const [packageName, setPackageName] = useState('');
//   const [recommendedPackage, setRecommendedPackage] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchServices = async () => {
//       setLoading(true);
//       try {
//         const venues = await ServiceVenue();
//         const catering = await ServiceCatering();
//         const transport = await ServiceAll(); // Assuming transport is part of all services or use a specific API

//         const transformData = (data) =>
//           data.map((item) => ({
//             id: item.serviceId,
//             title: item.serviceName,
//             price: item.servicePrice,
//             area: item.serviceArea,
//             city: item.serviceCity,
//             image: item.pictures.length
//               ? `${BASE_URL}/services/images/${item.pictures[0].pictureUrl}`
//               : 'https://via.placeholder.com/150',
//           }));

//         setServicesData({
//           venue: transformData(venues),
//           catering: transformData(catering),
//           transport: transformData(transport),
//         });
//       } catch (error) {
//         setError('Error fetching services');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   const handleBudgetChange = (text) => {
//     setBudget(text);
//     setRecommendedPackage(null);
//   };

//   const handlePackageNameChange = (text) => {
//     setPackageName(text);
//   };

//   const handleRecommendPackage = () => {
//     if (!budget || !packageName) {
//       setError('Please provide both your budget and package name');
//       return;
//     }

//     const budgetValue = parseFloat(budget);
//     if (isNaN(budgetValue) || budgetValue <= 0) {
//       setError('Please enter a valid budget');
//       return;
//     }

//     const getAffordableServices = (services) => {
//       return services.filter((service) => service.price <= budgetValue);
//     };

//     const recommendedVenue = getAffordableServices(servicesData.venue);
//     const recommendedCatering = getAffordableServices(servicesData.catering);
//     const recommendedTransport = getAffordableServices(servicesData.transport);

//     if (!recommendedVenue.length || !recommendedCatering.length || !recommendedTransport.length) {
//       setError('No services fit within your budget');
//       return;
//     }

//     const servicePackage = {  // Rename this to 'servicePackage'
//       name: packageName,
//       venue: recommendedVenue[0],
//       catering: recommendedCatering[0],
//       transport: recommendedTransport[0],
//       totalPrice:
//         recommendedVenue[0].price +
//         recommendedCatering[0].price +
//         recommendedTransport[0].price,
//     };

//     setRecommendedPackage(servicePackage);  // Use 'servicePackage' here
//     setError('');
//   };


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Your Package</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Package Name"
//         value={packageName}
//         onChangeText={handlePackageNameChange}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Your Budget"
//         value={budget}
//         keyboardType="numeric"
//         onChangeText={handleBudgetChange}
//       />
//       {error && <Text style={styles.errorText}>{error}</Text>}
//       <TouchableOpacity style={styles.button} onPress={handleRecommendPackage}>
//         <Text style={styles.buttonText}>Recommend Package</Text>
//       </TouchableOpacity>

//       {loading ? (
//         <Text>Loading services...</Text>
//       ) : recommendedPackage ? (
//         <View style={styles.packageContainer}>
//           <Text style={styles.packageName}>Package: {recommendedPackage.name}</Text>
//           <Text>Venue: {recommendedPackage.venue.title} - ${recommendedPackage.venue.price}</Text>
//           <Text>Catering: {recommendedPackage.catering.title} - ${recommendedPackage.catering.price}</Text>
//           <Text>Transport: {recommendedPackage.transport.title} - ${recommendedPackage.transport.price}</Text>
//           <Text style={styles.totalPrice}>Total Price: ${recommendedPackage.totalPrice}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9F3EC',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     backgroundColor: 'white',
//   },
//   button: {
//     backgroundColor: '#6A4E36',
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 15,
//   },
//   packageContainer: {
//     marginTop: 20,
//     backgroundColor: '#C8B29E',
//     padding: 15,
//     borderRadius: 10,
//   },
//   packageName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   totalPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });

// export default RecommendedPackageScreen;
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
// import { ServiceVenue, ServiceCatering, ServiceAll, BASE_URL } from '../ServiceAPIs/UsersAPIs';
// import { useNavigation } from '@react-navigation/native';

// const RecommendedPackageScreen = () => {
//   const [servicesData, setServicesData] = useState({
//     venue: [],
//     catering: [],
//     transport: [],
//     decoration: [],
//   });

//   const [budget, setBudget] = useState('');
//   const [packageName, setPackageName] = useState('');
//   const [numberOfGuests, setNumberOfGuests] = useState('');
//   const [recommendedPackages, setRecommendedPackages] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchServices = async () => {
//       setLoading(true);
//       try {
//         const venues = await ServiceVenue();
//         const catering = await ServiceCatering();
//         const transport = await ServiceAll();
//         const decoration = await ServiceAll();

//         const transformData = (data) =>
//           Array.isArray(data)
//             ? data.map((item) => ({
//                 id: item.serviceId,
//                 title: item.serviceName,
//                 price: item.servicePrice,
//                 area: item.serviceArea,
//                 city: item.serviceCity,
//                 image: item.pictures.length
//                   ? `${BASE_URL}/services/images/${item.pictures[0].pictureUrl}`
//                   : 'https://via.placeholder.com/150',
//                 capacity: item.serviceCapacity || 0,
//                 duration: item.duration ? new Date(item.duration) : new Date(),
//               }))
//             : [];

//         setServicesData({
//           venue: transformData(venues),
//           catering: transformData(catering),
//           transport: transformData(transport),
//           decoration: transformData(decoration),
//         });
//       } catch (error) {
//         setError('Error fetching services');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   const handleBudgetChange = (text) => {
//     setBudget(text);
//     setRecommendedPackages([]);
//   };

//   const handlePackageNameChange = (text) => {
//     setPackageName(text);
//   };

//   const handleNumberOfGuestsChange = (text) => {
//     setNumberOfGuests(text);
//     setRecommendedPackages([]);
//   };

//   const generatePackages = (budgetValue, guestCount) => {
//     let packages = [];
//     const numberOfPackages = 3;

//     for (let i = 0; i < numberOfPackages; i++) {
//       const recommendedVenue = servicesData.venue;
//       const recommendedCatering = servicesData.catering;
//       const recommendedTransport = servicesData.transport;
//       const recommendedDecoration = servicesData.decoration;

//       if (
//         recommendedVenue.length === 0 ||
//         recommendedCatering.length === 0 ||
//         recommendedTransport.length === 0 ||
//         recommendedDecoration.length === 0
//       ) {
//         continue;
//       }

//       // Select random services
//       const selectedVenue = recommendedVenue[Math.floor(Math.random() * recommendedVenue.length)];
//       const selectedCatering = recommendedCatering[Math.floor(Math.random() * recommendedCatering.length)];
//       const selectedTransport = recommendedTransport[Math.floor(Math.random() * recommendedTransport.length)];
//       const selectedDecoration = recommendedDecoration[Math.floor(Math.random() * recommendedDecoration.length)];

//       // Multiply price by number of guests for each service
//       const selectedServices = [
//         { ...selectedVenue, price: selectedVenue.price * guestCount },
//         { ...selectedCatering, price: selectedCatering.price * guestCount },
//         { ...selectedTransport, price: selectedTransport.price * guestCount },
//         { ...selectedDecoration, price: selectedDecoration.price * guestCount },
//       ];

//       const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0);

//       // Add all packages regardless of budget for fallback
//       packages.push({
//         name: `${packageName} ${i + 1}`,
//         services: selectedServices,
//         totalPrice: totalPrice,
//       });
//     }

//     // Filter packages within budget, but fallback to cheapest if none fit
//     const withinBudget = packages.filter((pkg) => pkg.totalPrice <= budgetValue);
//     if (withinBudget.length > 0) {
//       return withinBudget;
//     }

//     // Return the cheapest package if none are within budget
//     const cheapestPackage = packages.reduce((prev, curr) => (prev.totalPrice < curr.totalPrice ? prev : curr), packages[0]);
//     return [cheapestPackage];
//   };

//   const handleRecommendPackage = () => {
//     if (!budget || !packageName || !numberOfGuests) {
//       setError('Please provide budget, package name, and number of guests');
//       return;
//     }

//     const budgetValue = parseFloat(budget);
//     const guestCount = parseInt(numberOfGuests);

//     if (isNaN(budgetValue) || budgetValue <= 0) {
//       setError('Please enter a valid budget');
//       return;
//     }
//     if (isNaN(guestCount) || guestCount <= 0) {
//       setError('Please enter a valid number of guests');
//       return;
//     }

//     const packages = generatePackages(budgetValue, guestCount);
//     if (packages.length === 0) {
//       setError('No suitable packages found within the budget');
//     } else {
//       setRecommendedPackages(packages);
//       setError('');
//     }
//   };

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('en-PK', {
//       style: 'currency',
//       currency: 'PKR',
//     }).format(value);
//   };

//   const handlePackageClick = (packageItem) => {
//     Alert.alert(
//       'Create Plan',
//       `Do you want to create a plan for ${packageItem.name}?`,
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Yes',
//           onPress: () => {
//             // You can add the logic to create the plan here
//             console.log('Plan created for', packageItem.name);
//             // For example, navigate to a new screen or save it to the database
//             navigation.navigate('CreatePlanScreen', { packageDetails: packageItem });
//           },
//         },
//       ]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>We are here to Recommend your plan</Text>
//       <Text style={styles.subtitle}>Fill the details below</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Package Name"
//         value={packageName}
//         onChangeText={handlePackageNameChange}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Your Budget"
//         value={budget}
//         keyboardType="numeric"
//         onChangeText={handleBudgetChange}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Number of Guests"
//         value={numberOfGuests}
//         keyboardType="numeric"
//         onChangeText={handleNumberOfGuestsChange}
//       />
//       {error && <Text style={styles.errorText}>{error}</Text>}
//       <TouchableOpacity style={styles.button} onPress={handleRecommendPackage}>
//         <Text style={styles.buttonText}>Recommend Package</Text>
//       </TouchableOpacity>

//       {loading ? (
//         <Text>Loading services...</Text>
//       ) : recommendedPackages.length > 0 ? (
//         <ScrollView style={styles.packageList}>
//           {recommendedPackages.map((packageItem, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.packageContainer}
//               onPress={() => handlePackageClick(packageItem)}
//             >
//               <Text style={styles.packageName}>Package {index + 1}: {packageItem.name}</Text>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.serviceList}>
//                 {packageItem.services.map((service, idx) => (
//                   <View key={idx} style={styles.serviceContainer}>
//                     <Image source={{ uri: service.image }} style={styles.serviceImage} />
//                     <Text>{service.title}</Text>
//                     <Text>Price: {formatCurrency(service.price)}</Text>
//                     <Text>Capacity: {service.capacity}</Text>
//                   </View>
//                 ))}
//               </ScrollView>
//               <Text style={styles.totalPrice}>Total Price: {formatCurrency(packageItem.totalPrice)}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9F3EC',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     backgroundColor: 'white',
//   },
//   button: {
//     backgroundColor: '#6A4E36',
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   packageList: {
//     marginTop: 20,
//   },
//   packageContainer: {
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: '#C8B29E',
//     borderRadius: 10,
//   },
//   packageName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   serviceList: {
//     marginBottom: 10,
//   },
//   serviceContainer: {
//     marginRight: 15,
//     alignItems: 'center',
//   },
//   serviceImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   totalPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });

// export default RecommendedPackageScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert, Modal, Dimensions } from 'react-native';
import { ServiceVenue, ServiceCatering, ServiceAll, BASE_URL } from '../ServiceAPIs/UsersAPIs';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const RecommendedPackageScreen = () => {
  const [servicesData, setServicesData] = useState({
    venue: [],
    catering: [],
    transport: [],
    decoration: [],
  });

  const [budget, setBudget] = useState('');
  const [packageName, setPackageName] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [recommendedPackages, setRecommendedPackages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const venues = await ServiceVenue();
        const catering = await ServiceCatering();
        const transport = await ServiceAll();
        const decoration = await ServiceAll();

        const transformData = (data) =>
          Array.isArray(data)
            ? data.map((item) => ({
                id: item.serviceId,
                title: item.serviceName,
                price: item.servicePrice,
                area: item.serviceArea,
                city: item.serviceCity,
                image: item.pictures.length
                  ? `${BASE_URL}/services/images/${item.pictures[0].pictureUrl}`
                  : 'https://via.placeholder.com/150',
                capacity: item.serviceCapacity || 0,
                duration: item.duration ? new Date(item.duration) : new Date(),
              }))
            : [];

        setServicesData({
          venue: transformData(venues),
          catering: transformData(catering),
          transport: transformData(transport),
          decoration: transformData(decoration),
        });
      } catch (error) {
        setError('Error fetching services');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleBudgetChange = (text) => {
    setBudget(text);
    setRecommendedPackages([]);
  };

  const handlePackageNameChange = (text) => {
    setPackageName(text);
  };

  const handleNumberOfGuestsChange = (text) => {
    setNumberOfGuests(text);
    setRecommendedPackages([]);
  };

  const generatePackages = (budgetValue, guestCount) => {
    let packages = [];
    const numberOfPackages = 3;

    for (let i = 0; i < numberOfPackages; i++) {
      const recommendedVenue = servicesData.venue;
      const recommendedCatering = servicesData.catering;
      const recommendedTransport = servicesData.transport;
      const recommendedDecoration = servicesData.decoration;

      if (
        recommendedVenue.length === 0 ||
        recommendedCatering.length === 0 ||
        recommendedTransport.length === 0 ||
        recommendedDecoration.length === 0
      ) {
        continue;
      }

      // Select random services
      const selectedVenue = recommendedVenue[Math.floor(Math.random() * recommendedVenue.length)];
      const selectedCatering = recommendedCatering[Math.floor(Math.random() * recommendedCatering.length)];
      const selectedTransport = recommendedTransport[Math.floor(Math.random() * recommendedTransport.length)];
      const selectedDecoration = recommendedDecoration[Math.floor(Math.random() * recommendedDecoration.length)];

      // Multiply price by number of guests for each service
      const selectedServices = [
        { ...selectedVenue, price: selectedVenue.price * guestCount },
        { ...selectedCatering, price: selectedCatering.price * guestCount },
        { ...selectedTransport, price: selectedTransport.price * guestCount },
        { ...selectedDecoration, price: selectedDecoration.price * guestCount },
      ];

      const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0);

      // Add all packages regardless of budget for fallback
      packages.push({
        name: `${packageName} ${i + 1}`,
        services: selectedServices,
        totalPrice: totalPrice,
      });
    }

    // Filter packages within budget
    const withinBudget = packages.filter((pkg) => pkg.totalPrice <= budgetValue);
    return withinBudget;
  };

  const handleRecommendPackage = () => {
    if (!budget || !packageName || !numberOfGuests) {
      setError('Please provide budget, package name, and number of guests');
      return;
    }

    const budgetValue = parseFloat(budget);
    const guestCount = parseInt(numberOfGuests);

    if (isNaN(budgetValue) || budgetValue <= 0) {
      setError('Please enter a valid budget');
      return;
    }
    if (isNaN(guestCount) || guestCount <= 0) {
      setError('Please enter a valid number of guests');
      return;
    }

    const packages = generatePackages(budgetValue, guestCount);
    if (packages.length === 0) {
      setError('No suitable packages found within the budget');
    } else {
      setRecommendedPackages(packages);
      setError('');
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
    }).format(value);
  };

  const handlePackageClick = (packageItem) => {
    Alert.alert(
      'Create Plan',
      `Do you want to create a plan for ${packageItem.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Navigate to the Create Plan screen or any action you want
            // navigation.navigate('Plan', { packageDetails: packageItem });
            navigation.navigate('Plan');
          },
        },
      ]
    );
  };

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We are here to Recommend your plan</Text>
      <Text style={styles.subtitle}>Fill the details below</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Package Name"
        value={packageName}
        onChangeText={handlePackageNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Budget"
        value={budget}
        keyboardType="numeric"
        onChangeText={handleBudgetChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Number of Guests"
        value={numberOfGuests}
        keyboardType="numeric"
        onChangeText={handleNumberOfGuestsChange}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleRecommendPackage}>
        <Text style={styles.buttonText}>Recommend Package</Text>
      </TouchableOpacity>

      {loading ? (
        <Text>Loading services...</Text>
      ) : recommendedPackages.length > 0 ? (
        <ScrollView style={styles.packageList}>
          {recommendedPackages.map((packageItem, index) => (
            <View key={index} style={styles.packageContainer}>
              <Text style={styles.packageName}>Package {index + 1}: {packageItem.name}</Text>
              
              {/* Scrollable services within the card */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.serviceList}>
                {packageItem.services.map((service, idx) => (
                  <View key={idx} style={styles.serviceContainer}>
                    <Image source={{ uri: service.image }} style={styles.serviceImage} />
                    <Text>{service.title}</Text>
                    <Text>Price: {formatCurrency(service.price)}</Text>
                    <Text>Capacity: {service.capacity}</Text>
                  </View>
                ))}
              </ScrollView>

              <Text style={styles.totalPrice}>Total Price: {formatCurrency(packageItem.totalPrice)}</Text>

              {/* Exclamation Icon in the bottom-right corner */}
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handlePackageClick}
              >
                <Text style={styles.iconText}>!</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      ) : null}

      {/* Modal for additional details */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalContent}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close</Text>
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
    padding: 20,
    backgroundColor: '#F9F3EC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#6A4E36',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6A4E36',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  packageList: {
    marginTop: 20,
  },
  packageContainer: {
    backgroundColor: '#F9F3EC',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#6A4E36',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceList: {
    marginBottom: 10,
  },
  serviceContainer: {
    marginRight: 10,
    alignItems: 'center',
    width: width / 3, // Adjusted width for responsiveness
    backgroundColor: '#F9F3EC',
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'gray',
    padding: 5, // Adjust the padding to control the size of the circle
    borderRadius: 25, // Make sure the borderRadius is half of the padding for a perfect circle
    width: 35, // Set the width of the circle
    height: 35, // Set the height of the circle
    justifyContent: 'center', // Center the icon inside the circle
    alignItems: 'center', // Center the icon inside the circle
  },
  iconText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
  },
  modalButton: {
    backgroundColor: '#6A4E36',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RecommendedPackageScreen;
