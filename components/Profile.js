// // import React, { useState,useEffect }  from 'react';

// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
// // import { MaterialCommunityIcons } from '@expo/vector-icons';
// // import { getUserSession } from '../ServiceAPIs/UserSession'; 
// // import { GetProfileData } from '../ServiceAPIs/UsersAPIs'; 

// // export default function ProfileScreen() {
// //   const [userId,setUserId] = useState('');
// //   const [userData, setUserData] = useState(null);
// //     // Fetch session data on component mount
// //     useEffect(() => {
// //       const fetchUserData = async () => {
// //         try {
// //           const session = await getUserSession();
// //           if (session) {
// //             setUserId(session.userId); // Set userId from session
// //             const data = await GetProfileData(session.userId); // Fetch user data by ID
// //             setUserData(data); // Store the fetched user data
// //           } else {
// //             console.warn('Session expired or not found.');
// //           }
// //         } catch (error) {
// //           console.error('Error retrieving user data:', error.message);
// //         }
// //       };
  
// //       fetchUserData(); // Call the fetch function
// //     }, []);

// //   const [isModalVisible, setModalVisible] = useState(false);

// //   // Function to handle showing and hiding the modal
// //   const toggleModal = () => {
// //     setModalVisible(!isModalVisible);
// //   };
// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* Header with Back Button */}
      

// //        <Text style={styles.profileText}>Profile {userId}</Text>

// //       {/* Profile Image */}
// //       <View style={styles.profileImageContainer}>
// //         <Image
// //           source={ require('../Images/default-icon.png') } // Replace with your default image URI
// //           style={styles.profileImage}
// //         />
// //         <TouchableOpacity style={styles.cameraIcon}>
// //           <MaterialCommunityIcons name="camera" size={24} color="#fff" />
// //         </TouchableOpacity>
// //       </View>

      
      

// //       {/* Menu Options */}
// //       <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
// //         <MaterialCommunityIcons name="account-circle" size={24} color="black" />
// //         <Text style={styles.menuText}>Personal Details</Text>
// //         <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
// //       </TouchableOpacity>

// //       {/* <TouchableOpacity style={styles.menuItem}>
// //         <MaterialCommunityIcons name="bank" size={24} color="black" />
// //         <Text style={styles.menuText}>Dashboard</Text>
// //         <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
// //       </TouchableOpacity> */}

// //       <TouchableOpacity style={styles.menuItem}>
// //         <MaterialCommunityIcons name="email-outline" size={24} color="black" />
// //         <Text style={styles.menuText}>Application Version
// //         </Text>
// //         <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
// //       </TouchableOpacity>

// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={isModalVisible}
// //         onRequestClose={toggleModal} // Close modal when back button is pressed
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalContainer}>
// //             {/* Modal Header */}
// //             <View style={styles.modalHeader}>
// //               <Text style={styles.modalTitle}>Personal Details</Text>
// //               <TouchableOpacity onPress={toggleModal}>
// //                 <MaterialCommunityIcons name="close" size={24} color="black" />
// //               </TouchableOpacity>
// //             </View>

// //             {/* Modal Content */}
// //             <View style={styles.modalContent}>
// //             <Text style={styles.detailLabel}>Full Name</Text>
// //         <Text style={styles.detailValue}>{userData?.userName || 'N/A'}</Text>

// //         <Text style={styles.detailLabel}>Email Address</Text>
// //         <Text style={styles.detailValue}>{userData?.userEmail || 'N/A'}</Text>

// //         <Text style={styles.detailLabel}>Mobile Number</Text>
// //         <Text style={styles.detailValue}>{userData?.userPhone || 'N/A'}</Text>

// //         <Text style={styles.detailLabel}>Location</Text>
// //         <Text style={styles.detailValue}>{userData?.userLocation || 'N/A'}</Text>

// //         <Text style={styles.detailLabel}>Date of Birth</Text>
// //         <Text style={styles.detailValue}>
// //           {userData?.userDateOfBirth || 'N/A'}
// //         </Text>
// //             </View>
// //           </View>
// //         </View>
// //       </Modal>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F9F3EC',
// //     paddingHorizontal: 20,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginTop: 10,
// //   },
// //   profileText: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginTop: 10,
// //   },
// //   profileImageContainer: {
// //     alignItems: 'center',
// //     marginVertical: 20,
// //   },
// //   profileImage: {
// //     width: 140,
// //     height: 140,
// //     borderRadius: 70,
// //   },
// //   cameraIcon: {
// //     position: 'absolute',
// //     bottom: 10,
// //     right: 10,
// //     backgroundColor: '#6A4E36',
// //     borderRadius: 25,
// //     padding: 5,
// //   },
// //   themeSelectionContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginBottom: 20,
// //   },
// //   themeButton: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginHorizontal: 5,
// //   },
// //   menuItem: {
// //     backgroundColor: '#fff',
// //     padding: 15,
// //     borderRadius: 10,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 15,
// //   },
// //   menuText: {
// //     flex: 1,
// //     marginLeft: 10,
// //     fontSize: 16,
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0,0,0,0.5)', // Translucent overlay
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   modalContainer: {
// //     width: '80%',
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 20,
// //   },
// //   modalHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   modalTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   modalContent: {
// //     marginTop: 20,
// //   },
// //   detailLabel: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 5,
// //   },
// //   detailValue: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 15,
// //   },
// // });


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { getUserSession, clearUserSession } from '../ServiceAPIs/UserSession'; 
// import { GetProfileData } from '../ServiceAPIs/UsersAPIs'; 
// import { useNavigation } from '@react-navigation/native'; // For navigation

// export default function ProfileScreen() {
//   const [userId, setUserId] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation(); // Navigation hook

//   // Fetch session data on component mount
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const session = await getUserSession();
//         if (session) {
//           setUserId(session.userId); // Set userId from session
//           const data = await GetProfileData(session.userId); // Fetch user data by ID
//           setUserData(data); // Store the fetched user data
//         } else {
//           console.warn('Session expired or not found.');
//         }
//       } catch (error) {
//         console.error('Error retrieving user data:', error.message);
//       }
//     };

//     fetchUserData(); // Call the fetch function
//   }, []);

//   // Function to toggle the visibility of the modal
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       await clearUserSession(); // Clear session
//       navigation.reset({ index: 0, routes: [{ name: 'Login' }] }); // Navigate to Login
//     } catch (error) {
//       console.error('Error during logout:', error.message);
//     }
//   };

//   // Confirm Logout Dialog
//   const confirmLogout = () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { text: 'Yes', onPress: handleLogout }
//       ],
//       { cancelable: true }
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header with Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <MaterialCommunityIcons name="arrow-left" size={28} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.profileText}>Settings</Text>
//       </View>

//       {/* Profile Image */}
//       <View style={styles.profileImageContainer}>
//         <Image
//           source={require('../Images/default-icon.png')} // Replace with your default image URI
//           style={styles.profileImage}
//         />
//         <TouchableOpacity style={styles.cameraIcon}>
//           <MaterialCommunityIcons name="camera" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.userName}>{userData?.userName || 'N/A'}</Text>
//       <Text style={styles.userEmail}>{userData?.userEmail || 'N/A'}</Text>

//       {/* Menu Options */}
//       <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
//         <MaterialCommunityIcons name="account-circle" size={24} color="#6A4E36" />
//         <Text style={styles.menuText}>Personal Details</Text>
//         <MaterialCommunityIcons name="chevron-right" size={24} color="#6A4E36" />
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.menuItem}>
//         <MaterialCommunityIcons name="email-outline" size={24} color="#6A4E36" />
//         <Text style={styles.menuText}>Application Version</Text>
//         <MaterialCommunityIcons name="chevron-right" size={24} color="#6A4E36" />
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
//         <MaterialCommunityIcons name="logout" size={24} color="#fff" />
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>

//       <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={toggleModal}>
//   <View style={styles.modalOverlay}>
//     <View style={styles.modalContainer}>
//       <View style={styles.modalHeader}>
//         <Text style={styles.modalTitle}>Personal Details</Text>
//         <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
//           <MaterialCommunityIcons name="close" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView contentContainerStyle={styles.modalContent}>
//         <View style={styles.detailItem}>
//           <Text style={styles.detailLabel}>Full Name</Text>
//           <Text style={styles.detailValue}>{userData?.userName || 'N/A'}</Text>
//         </View>

//         <View style={styles.detailItem}>
//           <Text style={styles.detailLabel}>Email Address</Text>
//           <Text style={styles.detailValue}>{userData?.userEmail || 'N/A'}</Text>
//         </View>

//         <View style={styles.detailItem}>
//           <Text style={styles.detailLabel}>Mobile Number</Text>
//           <Text style={styles.detailValue}>{userData?.userPhone || 'N/A'}</Text>
//         </View>

//         <View style={styles.detailItem}>
//           <Text style={styles.detailLabel}>Location</Text>
//           <Text style={styles.detailValue}>{userData?.userLocation || 'N/A'}</Text>
//         </View>
//       </ScrollView>
//     </View>
//   </View>
// </Modal>

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//   },
//   header: {
//     backgroundColor: '#6A4E36',
//     height: 100,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   profileText: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   profileImageContainer: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   profileImage: {
//     width: 140,
//     height: 140,
//     borderRadius: 70,
//     borderWidth: 2,
//     borderColor: '#6A4E36',
//   },
//   cameraIcon: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     backgroundColor: '#6A4E36',
//     borderRadius: 20,
//     padding: 8,
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#888',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   menuItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     elevation: 3,
//   },
//   menuText: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   logoutButton: {
//     backgroundColor: '#1f1f1f',
//   paddingVertical: 30, // Smaller padding
//   paddingHorizontal: 40, // Padding on the sides
//   borderRadius: 50, // Reduce border radius for a smaller shape
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginTop: 20,
//   alignSelf: 'center', // Center the button
//   width: 150, // Set a fixed width for the button
//   },
//   logoutText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)', // Darker background for better focus
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '90%', // Wider for better content visibility
//     backgroundColor: '#ffffff', // Pure white for clean design
//     borderRadius: 20, // Larger radius for a modern look
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 10, // Elevation for shadow on Android
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0', // Subtle divider
//     paddingBottom: 10,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333', // Slightly darker text for better contrast
//   },
//   closeButton: {
//     backgroundColor: '#6A4E36', // Same as header color
//     borderRadius: 20,
//     padding: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 32,
//     height: 32,
//   },
//   modalContent: {
//     paddingVertical: 10,
//   },
//   detailItem: {
//     marginBottom: 15, // Space between details
//   },
//   detailLabel: {
//     fontSize: 14,
//     color: '#666', // Subtle color for labels
//     marginBottom: 5,
//   },
//   detailValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Alert, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getUserSession, clearUserSession, removeUserSession } from '../ServiceAPIs/UserSession'; 
import { GetProfileData } from '../ServiceAPIs/UsersAPIs'; 
import { useNavigation } from '@react-navigation/native'; 
import QRCode from 'react-native-qrcode-svg'; // Import QR Code package

export default function ProfileScreen() {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isVersionModalVisible, setVersionModalVisible] = useState(false); // Modal for Application Version
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const session = await getUserSession();
        if (session) {
          setUserId(session.userId);
          const data = await GetProfileData(session.userId);
          setUserData(data);
        } else {
          console.warn('Session expired or not found.');
        }
      } catch (error) {
        console.error('Error retrieving user data:', error.message);
      }
    };
    fetchUserData();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleVersionModal = () => {
    setVersionModalVisible(!isVersionModalVisible);
  };

  const handleLogout = async () => {
    try {
      await removeUserSession();
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: handleLogout }
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.profileText}>Settings</Text>
      </View>

      <View style={styles.profileImageContainer}>
        <Image source={require('../Images/default-icon.png')} style={styles.profileImage} />
        <TouchableOpacity style={styles.cameraIcon}>
          <MaterialCommunityIcons name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.userName}>{userData?.userName || 'N/A'}</Text>
      <Text style={styles.userEmail}>{userData?.userEmail || 'N/A'}</Text>

      <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
        <MaterialCommunityIcons name="account-circle" size={24} color="#6A4E36" />
        <Text style={styles.menuText}>Personal Details</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#6A4E36" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={toggleVersionModal}>
        <MaterialCommunityIcons name="email-outline" size={24} color="#6A4E36" />
        <Text style={styles.menuText}>Application Version</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#6A4E36" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
        <MaterialCommunityIcons name="logout" size={24} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={isVersionModalVisible} onRequestClose={toggleVersionModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Application Details</Text>
              <TouchableOpacity onPress={toggleVersionModal} style={styles.closeButton}>
                <MaterialCommunityIcons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalContent}>
              <Text style={styles.detailLabel}>App Version</Text>
              <Text style={styles.detailValue}>1.0.0</Text>

              <Text style={styles.detailLabel}>Scan QR Code to Download</Text>
              <QRCode value="https://example.com/download" size={150} />

              <TouchableOpacity onPress={() => Linking.openURL('https://example.com/download')}>
                <Text style={styles.downloadLink}>Download the App</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={toggleModal}>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>Personal Details</Text>
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
          <MaterialCommunityIcons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.modalContent}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Full Name</Text>
          <Text style={styles.detailValue}>{userData?.userName || 'N/A'}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email Address</Text>
          <Text style={styles.detailValue}>{userData?.userEmail || 'N/A'}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Mobile Number</Text>
          <Text style={styles.detailValue}>{userData?.userPhone || 'N/A'}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Location</Text>
          <Text style={styles.detailValue}>{userData?.userLocation || 'N/A'}</Text>
        </View>
      </ScrollView>
    </View>
  </View>
</Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#6A4E36',
    height: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#6A4E36',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#6A4E36',
    borderRadius: 20,
    padding: 8,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#1f1f1f',
  paddingVertical: 30, // Smaller padding
  paddingHorizontal: 40, // Padding on the sides
  borderRadius: 50, // Reduce border radius for a smaller shape
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  alignSelf: 'center', // Center the button
  width: 150, // Set a fixed width for the button
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Darker background for better focus
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%', // Wider for better content visibility
    backgroundColor: '#ffffff', // Pure white for clean design
    borderRadius: 20, // Larger radius for a modern look
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10, // Elevation for shadow on Android
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Subtle divider
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Slightly darker text for better contrast
  },
  closeButton: {
    backgroundColor: '#6A4E36', // Same as header color
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  modalContent: {
    paddingVertical: 10,
  },
  detailItem: {
    marginBottom: 15, // Space between details
  },
  detailLabel: {
    fontSize: 14,
    color: '#666', // Subtle color for labels
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
