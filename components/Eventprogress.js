
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { ProgressBar } from 'react-native-paper'; // ProgressBar component for metrics
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icon library for the button

// export default function EventProgress({ route, navigation }) {
//   const { eventData } = route.params;

//   // Services with their completion percentages
//   const servicesData = [
//     { name: 'Venuservice', progress: 30, color: '#4CAF50' }, // 30% complete (green)
//     { name: 'Decoration', progress: 20, color: '#4CAF50' },  // 20% complete (green)
//     { name: 'Transportation', progress: 40, color: '#FF9800' }, // 40% pending (orange)
//     { name: 'Catering', progress: 10, color: '#FF9800' },    // 10% pending (orange)
//   ];

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000); // Simulating loading state
//   }, []);

//   // Calculate overall progress
//   const totalProgress = servicesData.reduce((total, service) => total + service.progress, 0) / servicesData.length;

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Loading event progress...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Event Progress</Text>

//       {/* Event Name */}
//       <Text style={styles.eventName}>{eventData.eventName}</Text>

//       {/* Budget */}
//       <Text style={styles.budget}>Budget: PKR.{eventData.budget}</Text>

//       {/* Event Date */}
//       <Text style={styles.eventDate}>
//         Event Date: {eventData.eventDate.from} - {eventData.eventDate.to}
//       </Text>

//       {/* Service Progress in Metrics */}
//       <View style={styles.metricsContainer}>
//         <Text style={styles.metricsHeader}>Service Progress:</Text>
//         {servicesData.map((service, index) => (
//           <View key={index} style={styles.metricItem}>
//             <Text style={styles.metricName}>{service.name}</Text>
//             <ProgressBar progress={service.progress / 100} color={service.color} style={styles.progressBar} />
//             <Text style={styles.metricProgress}>{service.progress}%</Text>
//           </View>
//         ))}
//       </View>

//       {/* Color Legend */}
//       <View style={styles.legendContainer}>
//         <Text style={styles.legendHeader}>Color Legend:</Text>
//         <View style={styles.legendItem}>
//           <View style={[styles.legendColorBox, { backgroundColor: '#4CAF50' }]} />
//           <Text style={styles.legendText}>Completed Services (Green)</Text>
//         </View>
//         <View style={styles.legendItem}>
//           <View style={[styles.legendColorBox, { backgroundColor: '#FF9800' }]} />
//           <Text style={styles.legendText}>Pending Services (Orange)</Text>
//         </View>
//       </View>

//       {/* Navigate to Dashboard Button */}
//       <TouchableOpacity
//         style={styles.navigateButton}
//         onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard.js
//       >
//         <MaterialCommunityIcons name="home" size={24} color="white" />
//         <Text style={styles.navigateButtonText}>Go to Dashboard</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

 // Destructure route params safely with a fallback
  // const eventData = route?.params?.eventData || {
  //   eventName: 'Default Event',
  //   budget: 100000,
  //   eventDate: { from: '2024-12-15', to: '2024-12-16' },
  // };

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { ProgressBar } from 'react-native-paper'; // ProgressBar component for metrics
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icon library for the button

// export default function EventProgress({ route, navigation }) {
 

//   const callerFile = route?.params?.callerFile || null;

//   // Default services data
//   const defaultServicesData = [
//     { name: 'Venuservice', progress: 30, color: '#4CAF50' },
//     { name: 'Decoration', progress: 20, color: '#4CAF50' },
//     { name: 'Transportation', progress: 40, color: '#FF9800' },
//     { name: 'Catering', progress: 10, color: '#FF9800' },
//   ];

//   // Services data for when called from Plan.js
//   const planServicesData = [
//     { name: 'Venue Booking', progress: 70, color: '#4CAF50' },
//     { name: 'Theme Selection', progress: 50, color: '#FF9800' },
//     { name: 'Invitation Design', progress: 20, color: '#FF9800' },
//   ];

//   // Determine services data based on callerFile
//   const servicesData = (callerFile === 'Plan.js' || callerFile === 'Dashboard.js') 
//   ? planServicesData 
//   : defaultServicesData;

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000); // Simulate loading
//   }, []);

//   // Calculate overall progress
//   const totalProgress = servicesData.reduce((total, service) => total + service.progress, 0) / servicesData.length;

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//         <Text style={styles.loadingText}>Loading event progress...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Event Progress</Text>

//       {/* Event Name */}
//       <Text style={styles.eventName}>{eventData.eventName}</Text>

//       {/* Budget */}
//       <Text style={styles.budget}>Budget: PKR.{eventData.budget}</Text>

//       {/* Event Date */}
//       <Text style={styles.eventDate}>
//         Event Date: {eventData.eventDate.from} - {eventData.eventDate.to}
//       </Text>

//       {/* Service Progress in Metrics */}
//       <View style={styles.metricsContainer}>
//         <Text style={styles.metricsHeader}>Service Progress:</Text>
//         {servicesData.map((service, index) => (
//           <View key={index} style={styles.metricItem}>
//             <Text style={styles.metricName}>{service.name}</Text>
//             <ProgressBar progress={service.progress / 100} color={service.color} style={styles.progressBar} />
//             <Text style={styles.metricProgress}>{service.progress}%</Text>
//           </View>
//         ))}
//       </View>

//       {/* Color Legend */}
//       <View style={styles.legendContainer}>
//         <Text style={styles.legendHeader}>Color Legend:</Text>
//         <View style={styles.legendItem}>
//           <View style={[styles.legendColorBox, { backgroundColor: '#4CAF50' }]} />
//           <Text style={styles.legendText}>Completed Services (Green)</Text>
//         </View>
//         <View style={styles.legendItem}>
//           <View style={[styles.legendColorBox, { backgroundColor: '#FF9800' }]} />
//           <Text style={styles.legendText}>Pending Services (Orange)</Text>
//         </View>
//       </View>

//       {/* Navigate to Dashboard Button */}
//       <TouchableOpacity
//         style={styles.navigateButton}
//         onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard.js
//       >
//         <MaterialCommunityIcons name="home" size={24} color="white" />
//         <Text style={styles.navigateButtonText}>Go to Dashboard</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#888',
//     fontWeight: 'normal',
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   eventName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   budget: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   eventDate: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//   },
//   metricsContainer: {
//     marginTop: 20,
//   },
//   metricsHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   metricItem: {
//     marginBottom: 15,
//   },
//   metricName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   progressBar: {
//     height: 10,
//     borderRadius: 5,
//   },
//   metricProgress: {
//     fontSize: 14,
//     color: '#333',
//     marginTop: 5,
//   },
//   legendContainer: {
//     marginTop: 20,
//     paddingHorizontal: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   legendHeader: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   legendColorBox: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   legendText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   navigateButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     paddingVertical: 15,
//     borderRadius: 30,
//     marginTop: 30,
//   },
//   navigateButtonText: {
//     fontSize: 16,
//     color: 'white',
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
// // });
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // For edit icon

// export default function EventprogressScreen({ route, navigation }) {
//   const { eventData } = route.params;

//   // State for editable fields and helpers
//   const [showHelpers, setShowHelpers] = useState(false);
//   const [updatedEventData, setUpdatedEventData] = useState({ ...eventData });
//   const [editingField, setEditingField] = useState(null); // Track which field is being edited
//   const helpers = updatedEventData?.helpers || [];

//   const handleSave = () => {
//     // Save the updated data
//     console.log('Updated event data:', updatedEventData);
//     Alert.alert('Data Saved', 'Event data has been updated successfully!');
//   };

//   const handleEdit = (field) => {
//     setEditingField(field); // Set the field being edited
//   };

//   const handleChange = (field, value) => {
//     setUpdatedEventData({ ...updatedEventData, [field]: value });
//   };

//   if (!eventData) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>No event data available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* Dashboard Icon - Top Left */}
//       <TouchableOpacity style={styles.dashboardIcon} onPress={() => navigation.navigate('Dashboard')}>
//         <MaterialCommunityIcons name="view-dashboard" size={30} color="#6A4E36" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Event Progress</Text>

//       {/* Editable Event Details */}
//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Event Name:</Text>
//         {editingField === 'eventName' ? (
//           <TextInput
//             style={[styles.input, styles.editableField]}
//             value={updatedEventData?.eventName}
//             onChangeText={(text) => handleChange('eventName', text)}
//             autoFocus
//           />
//         ) : (
//           <TouchableOpacity onPress={() => handleEdit('eventName')}>
//             <Text style={styles.value}>{updatedEventData?.eventName || 'N/A'}</Text>
//             <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Event Date:</Text>
//         {editingField === 'eventDate' ? (
//           <TextInput
//             style={[styles.input, styles.editableField]}
//             value={updatedEventData?.eventDate}
//             onChangeText={(text) => handleChange('eventDate', text)}
//             autoFocus
//           />
//         ) : (
//           <TouchableOpacity onPress={() => handleEdit('eventDate')}>
//             <Text style={styles.value}>{updatedEventData?.eventDate || 'N/A'}</Text>
//             <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Budget:</Text>
//         {editingField === 'budget' ? (
//           <TextInput
//             style={[styles.input, styles.editableField]}
//             value={updatedEventData?.budget}
//             onChangeText={(text) => handleChange('budget', text)}
//             autoFocus
//           />
//         ) : (
//           <TouchableOpacity onPress={() => handleEdit('budget')}>
//             <Text style={styles.value}>{updatedEventData?.budget || 'N/A'}</Text>
//             <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Estimated Budget:</Text>
//         <Text style={styles.value}>{updatedEventData?.estimatedBudget || 'N/A'}</Text>
//       </View>

//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Services:</Text>
//         <Text style={styles.value}>{updatedEventData?.services || 'N/A'}</Text>
//       </View>

//       {/* Progress Bar Section */}
//       <View style={styles.progressContainer}>
//         <Text style={styles.label}>Progress:</Text>
//         <View style={styles.progressBar}>
//           <View
//             style={[
//               styles.progressFill,
//               { width: `${updatedEventData?.progressPercentage || 50}%` },
//             ]}
//           />
//         </View>
//         <Text style={styles.progressPercentage}>{updatedEventData?.progressPercentage || 50}%</Text>
//       </View>

//       {/* View Helpers Section */}
//       <TouchableOpacity
//         style={styles.viewHelpersButton}
//         onPress={() => setShowHelpers(!showHelpers)}
//       >
//         <Text style={styles.viewHelpersText}>
//           {showHelpers ? 'Hide Helpers' : 'View Helpers'}
//         </Text>
//       </TouchableOpacity>

//       {showHelpers && (
//         helpers.length > 0 ? (
//           <FlatList
//             data={helpers}
//             keyExtractor={(item, index) => `helper-${index}`}
//             renderItem={({ item }) => (
//               <View style={styles.helperItem}>
//                 <Text style={styles.helperName}>{item}</Text>
//               </View>
//             )}
//             style={styles.helperList}
//           />
//         ) : (
//           <Text style={styles.errorText}>No helpers available</Text>
//         )
//       )}

//       {/* Save Button */}
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.saveText}>Save Changes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#6A4E36',
//     textAlign: 'center',
//   },
//   dashboardIcon: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     zIndex: 10,
//   },
//   detailContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#D1A100',
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 12,
//     elevation: 5,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1f1f1f',
//   },
//   value: {
//     fontSize: 16,
//     fontWeight: 'normal',
//     color: '#1f1f1f',
//   },
//   input: {
//     width: '60%',
//     fontSize: 16,
//     borderColor: '#1f1f1f',
//     borderWidth: 1,
//     padding: 8,
//     borderRadius: 5,
//     color: '#1f1f1f',
//   },
//   editableField: {
//     borderColor: '#1f1f1f',
//     borderWidth: 2,
//     backgroundColor: '#f1f8e9',
//   },
//   progressContainer: {
//     marginVertical: 16,
//     alignItems: 'center',
//   },
//   progressBar: {
//     width: '100%',
//     height: 20,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 8,
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#C8B29E',
//     borderRadius: 10,
//   },
//   progressPercentage: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#6A4E36',
//   },
//   viewHelpersButton: {
//     backgroundColor: '#6A4E36',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     marginTop: 10,
//     elevation: 3,
//   },
//   viewHelpersText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   helperList: {
//     marginTop: 8,
//   },
//   helperItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#FFF',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//     elevation: 3,
//   },
//   helperName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   saveButton: {
//     backgroundColor: '#1f1f1f',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     marginTop: 10,
//     elevation: 3,
    
    
//   },
//   saveText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // For edit icon
// import moment from 'moment'; // For date formatting

// export default function EventprogressScreen({ route, navigation }) {
//   const { eventData, eventDate } = route.params; // Get eventDate from route.params

//   // State for editable fields and helpers
//   const [showHelpers, setShowHelpers] = useState(false);
//   const [updatedEventData, setUpdatedEventData] = useState({ ...eventData });
//   const [editingField, setEditingField] = useState(null); // Track which field is being edited
//   const helpers = updatedEventData?.helpers || [];

//   // State to manage editable date fields
//   const [startDate, setStartDate] = useState(eventDate?.from || ''); 
//   const [endDate, setEndDate] = useState(eventDate?.to || '');

//   // Function to calculate duration in days
//   const calculateDuration = (start, end) => {
//     if (start && end) {
//       const startMoment = moment(start);
//       const endMoment = moment(end);
//       if (startMoment.isValid() && endMoment.isValid()) {
//         return endMoment.diff(startMoment, 'days'); // Calculate difference in days
//       }
//     }
//     return null; // Return null if dates are invalid
//   };

//   const handleSave = () => {
//     // Save the updated data
//     console.log('Updated event data:', updatedEventData);
//     Alert.alert('Data Saved', 'Event data has been updated successfully!');
//   };

//   const handleEdit = (field) => {
//     setEditingField(field); // Set the field being edited
//   };

//   const handleChange = (field, value) => {
//     setUpdatedEventData({ ...updatedEventData, [field]: value });
//   };

//   if (!eventData) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>No event data available</Text>
//       </View>
//     );
//   }

//   const duration = calculateDuration(startDate, endDate); // Calculate event duration

//   return (
//     <View style={styles.container}>
//       {/* Dashboard Icon - Top Left */}
//       <TouchableOpacity style={styles.dashboardIcon} onPress={() => navigation.navigate('Dashboard')}>
//         <MaterialCommunityIcons name="view-dashboard" size={30} color="#6A4E36" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Event Progress</Text>

//       {/* Editable Event Details */}
//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Event Name:</Text>
//         {editingField === 'eventName' ? (
//           <TextInput
//             style={[styles.input, styles.editableField]}
//             value={updatedEventData?.eventName}
//             onChangeText={(text) => handleChange('eventName', text)}
//             autoFocus
//           />
//         ) : (
//           <TouchableOpacity onPress={() => handleEdit('eventName')}>
//             <Text style={styles.value}>{updatedEventData?.eventName || 'N/A'}</Text>
//             <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Duration (Start and End Date converted to Days) */}
//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Event Duration:</Text>
//         {editingField === 'eventDuration' ? (
//           <TextInput
//             style={[styles.input, styles.editableField]}
//             value={duration !== null ? duration.toString() : ''}
//             onChangeText={(text) => handleChange('eventDuration', text)}
//             autoFocus
//             keyboardType="numeric"
//           />
//         ) : (
//           <TouchableOpacity onPress={() => handleEdit('eventDuration')}>
//             <Text style={styles.value}>
//               {duration !== null ? `${duration} days` : 'N/A'}
//             </Text>
//             <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Budget */}
//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Budget:</Text>
//         {editingField === 'budget' ? (
//           <TextInput
//             style={[styles.input, styles.editableField]}
//             value={updatedEventData?.budget}
//             onChangeText={(text) => handleChange('budget', text)}
//             autoFocus
//           />
//         ) : (
//           <TouchableOpacity onPress={() => handleEdit('budget')}>
//             <Text style={styles.value}>{updatedEventData?.budget || 'N/A'}</Text>
//             <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Estimated Budget:</Text>
//         <Text style={styles.value}>{updatedEventData?.estimatedBudget || 'N/A'}</Text>
//       </View>

//       <View style={styles.detailContainer}>
//         <Text style={styles.label}>Services:</Text>
//         <Text style={styles.value}>{updatedEventData?.services || 'N/A'}</Text>
//       </View>

//       {/* Progress Bar Section */}
//       <View style={styles.progressContainer}>
//         <Text style={styles.label}>Progress:</Text>
//         <View style={styles.progressBar}>
//           <View
//             style={[
//               styles.progressFill,
//               { width: `${updatedEventData?.progressPercentage || 50}%` },
//             ]}
//           />
//         </View>
//         <Text style={styles.progressPercentage}>{updatedEventData?.progressPercentage || 50}%</Text>
//       </View>

//       {/* View Helpers Section */}
//       <TouchableOpacity
//         style={styles.viewHelpersButton}
//         onPress={() => setShowHelpers(!showHelpers)}
//       >
//         <Text style={styles.viewHelpersText}>
//           {showHelpers ? 'Hide Helpers' : 'View Helpers'}
//         </Text>
//       </TouchableOpacity>

//       {showHelpers && (
//         helpers.length > 0 ? (
//           <FlatList
//             data={helpers}
//             keyExtractor={(item, index) => `helper-${index}`}
//             renderItem={({ item }) => (
//               <View style={styles.helperItem}>
//                 <Text style={styles.helperName}>{item}</Text>
//               </View>
//             )}
//             style={styles.helperList}
//           />
//         ) : (
//           <Text style={styles.errorText}>No helpers available</Text>
//         )
//       )}

//       {/* Save Button */}
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.saveText}>Save Changes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#6A4E36',
//     textAlign: 'center',
//   },
//   dashboardIcon: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     zIndex: 10,
//   },
//   detailContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#D1A100',
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 12,
//     elevation: 5,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1f1f1f',
//   },
//   value: {
//     fontSize: 16,
//     fontWeight: 'normal',
//     color: '#1f1f1f',
//   },
//   input: {
//     width: '60%',
//     fontSize: 16,
//     borderColor: '#1f1f1f',
//     borderWidth: 1,
//     padding: 8,
//     borderRadius: 5,
//     color: '#1f1f1f',
//   },
//   editableField: {
//     borderColor: '#1f1f1f',
//     borderWidth: 2,
//     backgroundColor: '#f1f8e9',
//   },
//   progressContainer: {
//     marginVertical: 16,
//     alignItems: 'center',
//   },
//   progressBar: {
//     width: '100%',
//     height: 20,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 8,
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#C8B29E',
//     borderRadius: 10,
//   },
//   progressPercentage: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#6A4E36',
//   },
//   viewHelpersButton: {
//     backgroundColor: '#6A4E36',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     marginTop: 10,
//     elevation: 3,
//   },
//   viewHelpersText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   helperList: {
//     marginTop: 8,
//   },
//   helperItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#FFF',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//     elevation: 3,
//   },
//   helperName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   saveButton: {
//     backgroundColor: '#1f1f1f',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     marginTop: 10,
//     elevation: 3,
//   },
//   saveText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

export default function EventprogressScreen({ route, navigation }) {
  const { eventData, eventDate } = route.params; // Get data from params

  const [updatedEventData, setUpdatedEventData] = useState({ ...eventData });
  const [editingField, setEditingField] = useState(null);
  const [startDate, setStartDate] = useState(eventDate?.from || '');
  const [endDate, setEndDate] = useState(eventDate?.to || '');

  const calculateDuration = (start, end) => {
    if (start && end) {
      const startMoment = moment(start);
      const endMoment = moment(end);
      if (startMoment.isValid() && endMoment.isValid()) {
        return endMoment.diff(startMoment, 'days');
      }
    }
    return null;
  };

  const handleEdit = (field) => setEditingField(field);

  const handleChange = (field, value) => {
    setUpdatedEventData({ ...updatedEventData, [field]: value });
  };

  const handleSave = () => {
    console.log('Updated event data:', updatedEventData);
    Alert.alert('Data Saved', 'Event data has been updated successfully!');
  };

  const duration = calculateDuration(startDate, endDate);

  if (!eventData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No event data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Dashboard Icon */}
      <TouchableOpacity style={styles.dashboardIcon} onPress={() => navigation.navigate('Dashboard')}>
        <MaterialCommunityIcons name="view-dashboard" size={30} color="#6A4E36" />
      </TouchableOpacity>

      <Text style={styles.title}>Event Progress</Text>

      {/* Editable Event Details */}
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Event Name:</Text>
        {editingField === 'eventName' ? (
          <TextInput
            style={[styles.input, styles.editableField]}
            value={updatedEventData?.eventName}
            onChangeText={(text) => handleChange('eventName', text)}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={() => handleEdit('eventName')}>
            <Text style={styles.value}>{updatedEventData?.eventName || 'N/A'}</Text>
            <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Event Duration:</Text>
        <Text style={styles.value}>
          {duration !== null ? `${duration} days` : 'N/A'}
        </Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Budget:</Text>
        {editingField === 'budget' ? (
          <TextInput
            style={[styles.input, styles.editableField]}
            value={updatedEventData?.budget}
            onChangeText={(text) => handleChange('budget', text)}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={() => handleEdit('budget')}>
            <Text style={styles.value}>{updatedEventData?.budget || 'N/A'}</Text>
            <MaterialCommunityIcons name="pencil" size={20} color="#1f1f1f" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Estimated Budget:</Text>
        <Text style={styles.value}>{updatedEventData?.estimatedBudget || 'N/A'}</Text>
      </View>

      {/* Services Section */}
      <View style={styles.servicesContainer}>
  <Text style={styles.label}>Services:</Text>
  {updatedEventData?.services && updatedEventData.services.length > 0 ? (
    <FlatList
      data={updatedEventData.services}
      keyExtractor={(_, index) => `service-${index}`} // Use index as a unique key
      renderItem={({ item, index }) => (
        <View style={styles.serviceCard}>
          {/* Generate a name based on the index */}
          <Text style={styles.serviceName}>Service {index + 1}</Text>
          <View style={styles.serviceProgressContainer}>
            <View style={styles.serviceProgressBar}>
              {/* Default to 0% progress if not available */}
              <View
                style={[
                  styles.serviceProgressFill,
                  { width: `${item?.progress || 0}%` },
                ]}
              />
            </View>
            <Text style={styles.serviceProgressText}>
              {item?.progress || 0}%
            </Text>
          </View>
        </View>
      )}
      style={styles.servicesList}
    />
  ) : (
    <Text style={styles.errorText}>No services available</Text>
  )}
</View>


      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6A4E36',
    textAlign: 'center',
  },
  dashboardIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D1A100',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  value: {
    fontSize: 16,
    color: '#1f1f1f',
  },
  input: {
    width: '60%',
    borderColor: '#1f1f1f',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  editableField: {
    backgroundColor: '#f1f8e9',
  },
  serviceCard: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  serviceProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceProgressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginRight: 10,
  },
  serviceProgressFill: {
    height: '100%',
    backgroundColor: '#76C7C0',
    borderRadius: 5,
  },
  serviceProgressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  saveText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
