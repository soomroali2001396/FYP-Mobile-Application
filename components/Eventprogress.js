
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
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper'; // ProgressBar component for metrics
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icon library for the button

export default function EventProgress({ route, navigation }) {
  // Destructure route params safely with a fallback
  const eventData = route?.params?.eventData || {
    eventName: 'Default Event',
    budget: 100000,
    eventDate: { from: '2024-12-15', to: '2024-12-16' },
  };

  const callerFile = route?.params?.callerFile || null;

  // Default services data
  const defaultServicesData = [
    { name: 'Venuservice', progress: 30, color: '#4CAF50' },
    { name: 'Decoration', progress: 20, color: '#4CAF50' },
    { name: 'Transportation', progress: 40, color: '#FF9800' },
    { name: 'Catering', progress: 10, color: '#FF9800' },
  ];

  // Services data for when called from Plan.js
  const planServicesData = [
    { name: 'Venue Booking', progress: 70, color: '#4CAF50' },
    { name: 'Theme Selection', progress: 50, color: '#FF9800' },
    { name: 'Invitation Design', progress: 20, color: '#FF9800' },
  ];

  // Determine services data based on callerFile
  const servicesData = callerFile === 'Plan.js' ? planServicesData : defaultServicesData;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, []);

  // Calculate overall progress
  const totalProgress = servicesData.reduce((total, service) => total + service.progress, 0) / servicesData.length;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Loading event progress...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Event Progress</Text>

      {/* Event Name */}
      <Text style={styles.eventName}>{eventData.eventName}</Text>

      {/* Budget */}
      <Text style={styles.budget}>Budget: PKR.{eventData.budget}</Text>

      {/* Event Date */}
      <Text style={styles.eventDate}>
        Event Date: {eventData.eventDate.from} - {eventData.eventDate.to}
      </Text>

      {/* Service Progress in Metrics */}
      <View style={styles.metricsContainer}>
        <Text style={styles.metricsHeader}>Service Progress:</Text>
        {servicesData.map((service, index) => (
          <View key={index} style={styles.metricItem}>
            <Text style={styles.metricName}>{service.name}</Text>
            <ProgressBar progress={service.progress / 100} color={service.color} style={styles.progressBar} />
            <Text style={styles.metricProgress}>{service.progress}%</Text>
          </View>
        ))}
      </View>

      {/* Color Legend */}
      <View style={styles.legendContainer}>
        <Text style={styles.legendHeader}>Color Legend:</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Completed Services (Green)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: '#FF9800' }]} />
          <Text style={styles.legendText}>Pending Services (Orange)</Text>
        </View>
      </View>

      {/* Navigate to Dashboard Button */}
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard.js
      >
        <MaterialCommunityIcons name="home" size={24} color="white" />
        <Text style={styles.navigateButtonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
    fontWeight: 'normal',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  budget: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  metricsContainer: {
    marginTop: 20,
  },
  metricsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  metricItem: {
    marginBottom: 15,
  },
  metricName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  metricProgress: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  legendContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  legendHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendColorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#555',
  },
  navigateButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 30,
  },
  navigateButtonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});