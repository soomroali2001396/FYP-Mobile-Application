// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const Profile = ({ navigation }) => {
//   // Default values
//   const defaultImage = require('../Images/default-icon.png'); // Ensure the path is correct
//   const defaultFirstName = 'Zain';
//   const defaultLastName = 'Mirza';
//   const defaultPassword = '********'; // Hidden by default

//   const handleLogout = () => {
//     // Navigate back to the main screen
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//       <Image source={defaultImage} style={styles.image} />
//       <Text style={styles.input}>{defaultFirstName}</Text>
//       <Text style={styles.input}>{defaultLastName}</Text>
//       <Text style={styles.input}>{defaultPassword}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     width: '80%',
//     paddingHorizontal: 10,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     marginTop: 20,
//   },
//   logoutButton: {
//     backgroundColor: 'red',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   logoutText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default Profile;

import React, { useState }  from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to handle showing and hiding the modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={styles.container}>
      {/* Header with Back Button */}
      

      {/* Profile Label
       <Text style={styles.profileText}>Profile</Text> */}

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={ require('../Images/default-icon.png') } // Replace with your default image URI
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <MaterialCommunityIcons name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      
      

      {/* Menu Options */}
      <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
        <MaterialCommunityIcons name="account-circle" size={24} color="black" />
        <Text style={styles.menuText}>Personal Details</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="bank" size={24} color="black" />
        <Text style={styles.menuText}>Dashboard</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
        <Text style={styles.menuText}>Application Version
        </Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal} // Close modal when back button is pressed
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Personal Details</Text>
              <TouchableOpacity onPress={toggleModal}>
                <MaterialCommunityIcons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Modal Content */}
            <View style={styles.modalContent}>
              <Text style={styles.detailLabel}>Full Name</Text>
              <Text style={styles.detailValue}>Ali </Text>

              <Text style={styles.detailLabel}>Login Name</Text>
              <Text style={styles.detailValue}>soomroali396</Text>

              <Text style={styles.detailLabel}>Mobile Number</Text>
              <Text style={styles.detailValue}>●●●●●●●4819</Text>

              <Text style={styles.detailLabel}>Email Address</Text>
              <Text style={styles.detailValue}>s●●●●●●●@g●●●●●.com</Text>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#6A4E36',
    borderRadius: 25,
    padding: 5,
  },
  themeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  themeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Translucent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    marginTop: 20,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
