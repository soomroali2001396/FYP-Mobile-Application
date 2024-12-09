
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// const events = [
//   { id: 1, title: 'Bharat & Nikkah', status: 'Pending', helpers: ['Alice'], date: '12/6/2024 - 12/7/2024', budget: '1000000', estimatedBudget: '500000', eventServices: 'Venue, Decoration, Transportation' },
//   { id: 2, title: 'Mehndi Function', status: 'Complete', helpers: ['Bob', 'Charlie'], date: '12/6/2024 - 12/7/2024', budget: '1000000', estimatedBudget: '500000', eventServices: 'Venue, Decoration, Transportation' },
//   { id: 3, title: 'Dholki', status: 'Pending', helpers: [], date: '12/6/2024 - 12/7/2024', budget: '2000000', estimatedBudget: '500000', eventServices: 'Venue, Decoration, Transportation' },
// ];

// export default function DashboardScreen() {
//   const navigation = useNavigation();
//   const userName = 'Ali';
//   const totalEvents = events.length;
//   const eventsInProgress = events.filter((event) => event.status === 'Pending').length;
//   const completedEvents = events.filter((event) => event.status === 'Complete').length;
//   const [isHelperModalVisible, setHelperModalVisible] = useState(false);
//   const ongoingEvents = events.filter((event) => event.status === 'Pending');

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Welcome Message */}
//         <Text style={styles.welcomeMessage}>Welcome, {userName}!</Text>

//         {/* Event Summary */}
//         <View style={styles.summaryContainer}>
//           <Text style={styles.summaryTitle}>Events Summary</Text>
//           <View style={styles.summaryRow}>
//             <SummaryItem
//               title="Total Events"
//               count={totalEvents}
//               icon="calendar-outline"
//               color="#6A4E36"
              
//             />
//             <SummaryItem
//               title="In Progress"
//               count={eventsInProgress}
//               icon="hourglass-outline"
//               color="#FFA500"
//             />
//             <SummaryItem
//               title="Completed"
//               count={completedEvents}
//               icon="checkmark-circle-outline"
//               color="#28A745"
//             />
//           </View>
//         </View>

//         {/* Create New Event Button */}
//         <TouchableOpacity style={styles.createEventButton} onPress={() => navigation.navigate('Plan')}>
//           <Ionicons name="add-circle-outline" size={24} color="white" />
//           <Text style={styles.createEventButtonText}>Create New Event</Text>
//         </TouchableOpacity>

//         {/* Ongoing Events */}
//         <Text style={styles.sectionTitle}>Ongoing Events</Text>
//         {ongoingEvents.map((event) => (
//    <TouchableOpacity 
//    key={event.id} 
//    style={styles.eventCard} 
//    onPress={() => 
//      navigation.navigate('Eventprogress', { 
//        eventData: { 
//          eventName: event.title, 
//          eventDate: event.date, 
//          budget: event.budget, 
//          estimatedBudget: event.estimatedBudget, 
//          services: event.eventServices, 
//          eventhelper: event.helpers
//        } 
//      })
//    }
//  >
//     <Text style={styles.eventTitle}>{event.title}</Text>
//     <Text style={styles.eventStatus}>Status: {event.status}</Text>
//   </TouchableOpacity>
// ))}

//         {/* Helper Management */}
//         <View style={styles.helperSection}>
//           <Text style={styles.sectionTitle}>Helper Management</Text>
//           <Text style={styles.helperSummary}>
//             {events.reduce((total, event) => total + event.helpers.length, 0)} helpers involved in events
//           </Text>
//           <TouchableOpacity
//             style={styles.manageHelpersButton}
//             onPress={() => setHelperModalVisible(true)}
//           >
//             <Text style={styles.manageHelpersButtonText}>Manage Helpers</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Helper Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={isHelperModalVisible}
//           onRequestClose={() => setHelperModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Helper Management</Text>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setHelperModalVisible(false);
//                   navigation.navigate('Helperform', { ongoingEvents });
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>Add New Helper</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setHelperModalVisible(false);
//                   navigation.navigate('Existinghelper', { ongoingEvents });
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>Adjust Existing Helper</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.modalCloseButton}
//                 onPress={() => setHelperModalVisible(false)}
//               >
//                 <Text style={styles.modalCloseButtonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Quick Links */}
//         <View style={styles.quickLinksContainer}>
//           <QuickLinkButton
//             title="Settings"
//             icon="settings-outline"
//             onPress={() => navigation.navigate('Profile')}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// function SummaryItem({ title, count, icon, color, onPress }) {
//   return (
//     <TouchableOpacity style={styles.summaryItem} onPress={onPress}>
//       <Ionicons name={icon} size={24} color={color} />
//       <Text style={[styles.summaryItemCount, { color }]}>{count}</Text>
//       <Text style={styles.summaryItemTitle}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

// function QuickLinkButton({ title, icon, onPress }) {
//   return (
//     <TouchableOpacity style={styles.quickLinkButton} onPress={onPress}>
//       <Ionicons name={icon} size={24} color="#6A4E36" />
//       <Text style={styles.quickLinkButtonText}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { getUserSession } from '../ServiceAPIs/UserSession'; 

const events = [
  { id: 1, title: 'Bharat & Nikkah', status: 'Pending', helpers: ['Alice'], date: '12/6/2024 - 12/7/2024', budget: '1000000', estimatedBudget: '500000', eventServices: 'Venue, Decoration, Transportation' },
  { id: 2, title: 'Mehndi Function', status: 'Complete', helpers: ['Bob', 'Charlie'], date: '12/6/2024 - 12/7/2024', budget: '1000000', estimatedBudget: '500000', eventServices: 'Venue, Decoration, Transportation' },
  { id: 3, title: 'Dholki', status: 'Pending', helpers: [], date: '12/6/2024 - 12/7/2024', budget: '2000000', estimatedBudget: '500000', eventServices: 'Venue, Decoration, Transportation' },
];

export default function DashboardScreen() {

  const [userName, setUserName] = useState('');
  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const session = await getUserSession(); // Use session utility function
        if (session) {
          setUserName(session.userName); // Set the userName from session
        } else {
          // Handle session expiration (optional: navigate to login)
          console.warn('Session expired or not found.');
        }
      } catch (error) {
        console.error('Error retrieving user session:', error.message);
      }
    };

    fetchUserSession(); // Call the fetch function
  }, []);
  const navigation = useNavigation();
  // const userName = 'Ali';
  const totalEvents = events.length;
  const eventsInProgress = events.filter((event) => event.status === 'Pending').length;
  const completedEvents = events.filter((event) => event.status === 'Complete').length;
  const [isHelperModalVisible, setHelperModalVisible] = useState(false);
  const ongoingEvents = events.filter((event) => event.status === 'Pending');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Welcome Message */}
        <Text style={styles.welcomeMessage}>Welcome, {userName || 'Guest'}</Text>

        {/* Event Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Events Summary</Text>
          <View style={styles.summaryRow}>
            <SummaryItem
              title="Total Events"
              count={totalEvents}
              icon="calendar-outline"
              color="#6A4E36"
              
            />
            <SummaryItem
              title="In Progress"
              count={eventsInProgress}
              icon="hourglass-outline"
              color="#FFA500"
            />
            <SummaryItem
              title="Completed"
              count={completedEvents}
              icon="checkmark-circle-outline"
              color="#28A745"
            />
          </View>
        </View>

        {/* Create New Event Button */}
        <TouchableOpacity style={styles.createEventButton} onPress={() => navigation.navigate('Plan')}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.createEventButtonText}>Create New Event</Text>
        </TouchableOpacity>

        {/* Ongoing Events */}
        <Text style={styles.sectionTitle}>Ongoing Events</Text>
        {ongoingEvents.map((event) => (
   <TouchableOpacity 
   key={event.id} 
   style={styles.eventCard} 
   onPress={() => 
     navigation.navigate('Eventprogress', { 
       eventData: { 
         eventName: event.title, 
         eventDate: event.date, 
         budget: event.budget, 
         estimatedBudget: event.estimatedBudget, 
         services: event.eventServices, 
         eventhelper: event.helpers
       } 
     })
   }
 >
    <Text style={styles.eventTitle}>{event.title}</Text>
    <Text style={styles.eventStatus}>Status: {event.status}</Text>
  </TouchableOpacity>
))}

        {/* Helper Management */}
        <View style={styles.helperSection}>
          <Text style={styles.sectionTitle}>Helper Management</Text>
          <Text style={styles.helperSummary}>
            {events.reduce((total, event) => total + event.helpers.length, 0)} helpers involved in events
          </Text>
          <TouchableOpacity
            style={styles.manageHelpersButton}
            onPress={() => setHelperModalVisible(true)}
          >
            <Text style={styles.manageHelpersButtonText}>Manage Helpers</Text>
          </TouchableOpacity>
        </View>

        {/* Helper Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isHelperModalVisible}
          onRequestClose={() => setHelperModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Helper Management</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setHelperModalVisible(false);
                  navigation.navigate('Helperform', { ongoingEvents });
                }}
              >
                <Text style={styles.modalButtonText}>Add New Helper</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setHelperModalVisible(false);
                  navigation.navigate('Existinghelper', { ongoingEvents });
                }}
              >
                <Text style={styles.modalButtonText}>Adjust Existing Helper</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setHelperModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Quick Links */}
        <View style={styles.quickLinksContainer}>
          <QuickLinkButton
            title="Settings"
            icon="settings-outline"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SummaryItem({ title, count, icon, color, onPress }) {
  return (
    <TouchableOpacity style={styles.summaryItem} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={[styles.summaryItemCount, { color }]}>{count}</Text>
      <Text style={styles.summaryItemTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

function QuickLinkButton({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.quickLinkButton} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#6A4E36" />
      <Text style={styles.quickLinkButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F3EC',
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#333',
  },
  summaryContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryItemCount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  summaryItemTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  createEventButton: {
    backgroundColor: '#6A4E36',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    margin: 16,
  },
  createEventButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    marginBottom: 8,
    color: '#333',
  },
  eventCard: {
    backgroundColor: '#C8B29E',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    shadowColor: '#C8B29E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventStatus: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  helperSection: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  helperSummary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  manageHelpersButton: {
    backgroundColor: '#F0F0F5',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  manageHelpersButtonText: {
    color: '#6A4E36',
    fontWeight: 'bold',
  },
  quickLinksContainer: {
    margin: 16,
    paddingBottom: 50,
  },
  quickLinkButton: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#6A4E36',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickLinkButtonText: {
    color: '#6A4E36',
    marginLeft: 8,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalButton: {
    backgroundColor: '#6A4E36',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalCloseButton: {
    backgroundColor: '#F0F0F5',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#6A4E36',
    fontWeight: 'bold',
  },
});
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const events = [
//   { id: 1, title: 'Bharat & Nikkah', status: 'Pending', helpers: ['Alice'] },
//   { id: 2, title: 'Mehndi Function', status: 'Complete', helpers: ['Bob', 'Charlie'] },
//   { id: 3, title: 'Dholki', status: 'Pending', helpers: [] },
// ];

// export default function DashboardScreen() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   // Retrieve email from route parameters
//   const userName = route.params?.email || 'User';

//   const totalEvents = events.length;
//   const eventsInProgress = events.filter((event) => event.status === 'Pending').length;
//   const completedEvents = events.filter((event) => event.status === 'Complete').length;
//   const [isHelperModalVisible, setHelperModalVisible] = useState(false);
//   const ongoingEvents = events.filter((event) => event.status === 'Pending');

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Welcome Message */}
//         <Text style={styles.welcomeMessage}>Welcome, {userName}!</Text>

//         {/* Event Summary */}
//         <View style={styles.summaryContainer}>
//           <Text style={styles.summaryTitle}>Event Summary</Text>
//           <View style={styles.summaryRow}>
//             <SummaryItem
//               title="Total Events"
//               count={totalEvents}
//               icon="calendar-outline"
//               color="#6A4E36"
//               onPress={() => navigation.navigate('Eventprogress')}
//             />
//             <SummaryItem
//               title="In Progress"
//               count={eventsInProgress}
//               icon="hourglass-outline"
//               color="#FFA500"
//             />
//             <SummaryItem
//               title="Completed"
//               count={completedEvents}
//               icon="checkmark-circle-outline"
//               color="#28A745"
//             />
//           </View>
//         </View>

//         {/* Create New Event Button */}
//         <TouchableOpacity style={styles.createEventButton} onPress={() => navigation.navigate('Plan')}>
//           <Ionicons name="add-circle-outline" size={24} color="white" />
//           <Text style={styles.createEventButtonText}>Create New Event</Text>
//         </TouchableOpacity>

//         {/* Ongoing Events */}
//         <Text style={styles.sectionTitle}>Ongoing Events</Text>
//         {ongoingEvents.map((event) => (
//           <View key={event.id} style={styles.eventCard}>
//             <Text style={styles.eventTitle}>{event.title}</Text>
//             <Text style={styles.eventStatus}>Status: {event.status}</Text>
//           </View>
//         ))}

//         {/* Helper Management */}
//         <View style={styles.helperSection}>
//           <Text style={styles.sectionTitle}>Helper Management</Text>
//           <Text style={styles.helperSummary}>
//             {events.reduce((total, event) => total + event.helpers.length, 0)} helpers involved in events
//           </Text>
//           <TouchableOpacity
//             style={styles.manageHelpersButton}
//             onPress={() => setHelperModalVisible(true)}
//           >
//             <Text style={styles.manageHelpersButtonText}>Manage Helpers</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Helper Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={isHelperModalVisible}
//           onRequestClose={() => setHelperModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Helper Management</Text>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setHelperModalVisible(false);
//                   navigation.navigate('Helperform');
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>Add New Helper</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setHelperModalVisible(false);
//                   navigation.navigate('Existinghelper');
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>Adjust Existing Helper</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.modalCloseButton}
//                 onPress={() => setHelperModalVisible(false)}
//               >
//                 <Text style={styles.modalCloseButtonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>

//         {/* Quick Links */}
//         <View style={styles.quickLinksContainer}>
//           <QuickLinkButton
//             title="Settings"
//             icon="settings-outline"
//             onPress={() => navigation.navigate('Profile')}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// function SummaryItem({ title, count, icon, color, onPress }) {
//   return (
//     <TouchableOpacity style={styles.summaryItem} onPress={onPress}>
//       <Ionicons name={icon} size={24} color={color} />
//       <Text style={[styles.summaryItemCount, { color }]}>{count}</Text>
//       <Text style={styles.summaryItemTitle}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

// function QuickLinkButton({ title, icon, onPress }) {
//   return (
//     <TouchableOpacity style={styles.quickLinkButton} onPress={onPress}>
//       <Ionicons name={icon} size={24} color="#6A4E36" />
//       <Text style={styles.quickLinkButtonText}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//   },
//   scrollContainer: {
//     paddingBottom: 16,
//   },
//   welcomeMessage: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     margin: 16,
//     color: '#333',
//   },
//   summaryContainer: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     margin: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   summaryTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//   },
//   summaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   summaryItem: {
//     alignItems: 'center',
//   },
//   summaryItemCount: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 4,
//   },
//   summaryItemTitle: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 4,
//   },
//   createEventButton: {
//     backgroundColor: '#6A4E36',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 12,
//     borderRadius: 8,
//     margin: 16,
//   },
//   createEventButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     marginLeft: 8,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     margin: 16,
//     marginBottom: 8,
//     color: '#333',
//   },
//   eventCard: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   eventTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   eventStatus: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   helperSection: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     margin: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   helperSummary: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 12,
//   },
//   manageHelpersButton: {
//     backgroundColor: '#F0F0F5',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   manageHelpersButtonText: {
//     color: '#6A4E36',
//     fontWeight: 'bold',
//   },
//   quickLinksContainer: {
//     margin: 16,
//     paddingBottom: 50,
//   },
//   quickLinkButton: {
//     backgroundColor: 'white',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   quickLinkButtonText: {
//     color: '#6A4E36',
//     fontWeight: 'bold',
//     marginTop: 8,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     marginHorizontal: 16,
//     borderRadius: 8,
//     padding: 16,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#333',
//   },
//   modalButton: {
//     backgroundColor: '#F0F0F5',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   modalButtonText: {
//     color: '#6A4E36',
//     fontWeight: 'bold',
//   },
//   modalCloseButton: {
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     backgroundColor: '#6A4E36',
//   },
//   modalCloseButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
