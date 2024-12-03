// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { launchImageLibrary } from 'react-native-image-picker';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { PermissionsAndroid, Platform } from 'react-native';

// const SignUpScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [photoUri, setPhotoUri] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleImagePick = () => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.assets && response.assets.length > 0) {
//         setPhotoUri(response.assets[0].uri);
//       }
//     });
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || dob;
//     setShowDatePicker(false);
//     setDob(currentDate);
//   };

//   const formatDate = (date) => {
//     if (!date) return '';
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${day}/${month}/${year}`;
//   };

//   const handleSubmit = () => {
//     if (!name || !email || !password || !confirmPassword) {
//       Alert.alert('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Passwords do not match');
//       return;
//     }

//     // Format date of birth as YYYY-MM-DD
//     const year = dob.getFullYear();
//     const month = (dob.getMonth() + 1).toString().padStart(2, '0');
//     const day = dob.getDate().toString().padStart(2, '0');
//     const formattedDate = `${year}-${month}-${day}`;

//     // Handle sign-up logic here
//     Alert.alert('Sign-up successful!');
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.title}>Sign Up</Text>
//         <View style={styles.container}>
//           <TouchableOpacity style={styles.photoContainer} onPress={handleImagePick}>
//             {photoUri ? (
//               <Image source={{ uri: photoUri }} style={styles.photo} />
//             ) : (
//               <Image source={require('../Images/profile add.png')} style={styles.photo} />
//             )}
//           </TouchableOpacity>

//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={setEmail}
//           />

//           <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
//             <Text style={styles.datePickerText}>
//               {dob ? `Date of Birth: ${formatDate(dob)}` : 'Select Date of Birth'}
//             </Text>
//           </TouchableOpacity>

//           {showDatePicker && (
//             <DateTimePicker
//               value={dob}
//               mode="date"
//               display="default"
//               onChange={handleDateChange}
//             />
//           )}

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//           />

//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <View style={styles.buttonContent}>
//               <MaterialCommunityIcons name="check-circle" size={24} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   container: {
//     width: '100%',
//     maxWidth: 400,
//     padding: 70,
//     backgroundColor: '#f8f4ef',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     alignItems: 'center',
//   },
//   photoContainer: {
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   photo: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//   },
//   photoText: {
//     fontSize: 16,
//     color: '#888',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     marginBottom: 12,
//     paddingHorizontal: 40,
//   },
//   datePickerButton: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     marginBottom: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     backgroundColor: '#f9f9f9',
//   },
//   datePickerText: {
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#3CB043',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonIcon: {
//     marginRight: 2,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   buttonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// export default SignUpScreen;
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, PermissionsAndroid, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { launchImageLibrary } from 'react-native-image-picker';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';

// const SignUpScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [photoUri, setPhotoUri] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   useEffect(() => {
//     requestCameraRollPermission();
//   }, []);

//   const requestCameraRollPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//           {
//             title: 'Camera Roll Permission',
//             message: 'This app needs access to your camera roll.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           },
//         );
//         if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//           Alert.alert('Camera roll permission denied');
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     }
//   };

//   const handleImagePick = () => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       console.log(response); // Debug response
//       if (response.assets && response.assets.length > 0) {
//         setPhotoUri(response.assets[0].uri);
//       } else {
//         Alert.alert('No image selected');
//       }
//     });
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || dob;
//     setShowDatePicker(false);
//     setDob(currentDate);
//   };

//   const formatDate = (date) => {
//     if (!date) return '';
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${day}/${month}/${year}`;
//   };

//   const handleSubmit = () => {
//     if (!name || !email || !password || !confirmPassword) {
//       Alert.alert('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Passwords do not match');
//       return;
//     }

//     // Format date of birth as YYYY-MM-DD
//     const year = dob.getFullYear();
//     const month = (dob.getMonth() + 1).toString().padStart(2, '0');
//     const day = dob.getDate().toString().padStart(2, '0');
//     const formattedDate = `${year}-${month}-${day}`;

//     // Handle sign-up logic here
//     Alert.alert('Sign-up successful!');
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={styles.backButtonText}>{'<'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>Sign Up</Text>
//         <View style={styles.container}>
//           <TouchableOpacity style={styles.photoContainer} onPress={handleImagePick}>
//             {photoUri ? (
//               <Image source={{ uri: photoUri }} style={styles.photo} />
//             ) : (
//               <Image source={require('../Images/profile add.png')} style={styles.photo} />
//             )}
//           </TouchableOpacity>

//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={setEmail}
//           />

//           <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
//             <Text style={styles.datePickerText}>
//               {dob ? `Date of Birth: ${formatDate(dob)}` : 'Select Date of Birth'}
//             </Text>
//           </TouchableOpacity>

//           {showDatePicker && (
//             <DateTimePicker
//               value={dob}
//               mode="date"
//               display="default"
//               onChange={handleDateChange}
//             />
//           )}

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//           />

//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <View style={styles.buttonContent}>
//               <MaterialCommunityIcons name="check-circle" size={24} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   container: {
//     width: '100%',
//     maxWidth: 400,
//     padding: 70,
//     backgroundColor: '#f8f4ef',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     alignItems: 'center',
//   },
//   photoContainer: {
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   photo: {
//     width: 100,
//     height: 100,

//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//   },
//   datePickerButton: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     marginBottom: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     backgroundColor: '#f9f9f9',
//   },
//   datePickerText: {
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#3CB043',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonIcon: {
//     marginRight: 2,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   buttonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// export default SignUpScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Platform, PermissionsAndroid } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { launchImageLibrary } from 'react-native-image-picker';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';

// const SignUpScreen = () => {
//   const navigation = useNavigation(); // Access navigation prop
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dob, setDob] = useState(new Date());
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [photoUri, setPhotoUri] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   useEffect(() => {
//     requestCameraRollPermission();
//   }, []);

//   const requestCameraRollPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//           {
//             title: 'Camera Roll Permission',
//             message: 'This app needs access to your camera roll.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           },
//         );
//         if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//           Alert.alert('Camera roll permission denied');
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     }
//   };

//   const handleImagePick = () => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       console.log(response); // Debug response
//       if (response.assets && response.assets.length > 0) {
//         setPhotoUri(response.assets[0].uri);
//       } else {
//         Alert.alert('No image selected');
//       }
//     });
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || dob;
//     setShowDatePicker(false);
//     setDob(currentDate);
//   };

//   const formatDate = (date) => {
//     if (!date) return '';
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${day}/${month}/${year}`;
//   };

//   const handleSubmit = () => {
//     if (!name || !email || !password || !confirmPassword) {
//       Alert.alert('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Passwords do not match');
//       return;
//     }

//     // Format date of birth as YYYY-MM-DD
//     const year = dob.getFullYear();
//     const month = (dob.getMonth() + 1).toString().padStart(2, '0');
//     const day = dob.getDate().toString().padStart(2, '0');
//     const formattedDate = `${year}-${month}-${day}`;

//     // Handle sign-up logic here
//     Alert.alert('Sign-up successful!');
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.navigate('Login')} // Navigate to Signin screen
//         >
//           <Text style={styles.backButtonText}>{'<'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>Sign Up</Text>
//         <View style={styles.container}>
//           <TouchableOpacity style={styles.photoContainer} onPress={handleImagePick}>
//             {photoUri ? (
//               <Image source={{ uri: photoUri }} style={styles.photo} />
//             ) : (
//               <Image source={require('../Images/profile add.png')} style={styles.photo} />
//             )}
//           </TouchableOpacity>

//           <TextInput
//             style={styles.input}
//             placeholder="Name"
//             value={name}
//             onChangeText={setName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={setEmail}
//           />

//           <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
//             <Text style={styles.datePickerText}>
//               {dob ? `Date of Birth: ${formatDate(dob)}` : 'Select Date of Birth'}
//             </Text>
//           </TouchableOpacity>

//           {showDatePicker && (
//             <DateTimePicker
//               value={dob}
//               mode="date"
//               display="default"
//               onChange={handleDateChange}
//             />
//           )}

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//           />

//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <View style={styles.buttonContent}>
//               <MaterialCommunityIcons name="check-circle" size={24} color="#fff" style={styles.buttonIcon} />
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//     position: 'relative', // Make sure ScrollView is positioned relatively
//   },
//   backButton: {
//     position: 'absolute',
//     top: 12,
//     left: 5,
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#f8f4ef',
//     borderColor: 'black',
//     borderWidth: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1,
//   },
//   backButtonText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   container: {
//     width: '100%',
//     maxWidth: 400,
//     padding: 70,
//     backgroundColor: '#f8f4ef',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     alignItems: 'center',
//   },
//   photoContainer: {
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   photo: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//   },
//   datePickerButton: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     marginBottom: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     backgroundColor: '#f9f9f9',
//   },
//   datePickerText: {
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#3CB043',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonIcon: {
//     marginRight: 2,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   buttonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// export default SignUpScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Platform, PermissionsAndroid } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Signupusers } from '../ServiceAPIs/UsersAPIs'; // Import the API function

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPhone, setPhone] = useState('');
  const [userLocation, setLocation] = useState('');
  const [dob, setDob] = useState(new Date());
  const [userPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photoUri, setPhotoUri] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    requestCameraRollPermission();
  }, []);

  const requestCameraRollPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Camera Roll Permission',
            message: 'This app needs access to your camera roll.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Camera roll permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setPhotoUri(response.assets[0].uri);
      } else {
        Alert.alert('No image selected');
      }
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async () => {
    if (!userName || !userEmail || !userPassword || !confirmPassword) {
      Alert.alert('All fields are required');
      return;
    }

    if (userPassword !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    const formattedDate = formatDate(dob);
    const formdata = {
      userName,
      userEmail,
      userPassword,
      userPhone,
      userLocation,
      userDateOfBirth: formattedDate,
      userImage: photoUri, // Optional: Include photo URI if the backend supports it
    };
    
    // const users = {
    //     userName: formatDate.userName,
    //     userEmail: formatDate.userEmail,
    //     userPassword: formatDate.userPassword,
    //     userPhone: formatDate.userPhone,
    //     userLocation: formatDate.userLocation,
    //     userDateOfBirth: formatDate.userDateOfBirth,
    //     userImage: formatDate.userImage,
    // };
    // console.log(users);
    try {
      console.log('Submitting user:', formdata); // Before API call
      const response = await Signupusers(formdata);
      console.log('Received response:', response); // After API call
      
      Alert.alert('Sign-up Successful!', `Welcome, ${response.userName}`);
      navigation.navigate('Login');
    } catch (error) {
      console.error('API Error:', error); // Log the error for detailed debugging
      Alert.alert('Sign-up Failed', error.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.photoContainer} onPress={handleImagePick}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.photo} />
            ) : (
              <Image source={require('../Images/profile add.png')} style={styles.photo} />
            )}
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={userName}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={userEmail}
            onChangeText={setEmail}
          />
          {/* -----------New data----------- */}
          <TextInput
            style={styles.input}
            placeholder="Phone no"
            keyboardType="number"
            value={userPhone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            keyboardType="Text"
            value={userLocation}
            onChangeText={setLocation}
          />
          {/* ----------------------- */}
          <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.datePickerText}>
              {dob ? `Date of Birth: ${formatDate(dob)}` : 'Select Date of Birth'}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={userPassword}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name="check-circle" size={24} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    position: 'relative', // Make sure ScrollView is positioned relatively
  },
  backButton: {
    position: 'absolute',
    top: 12,
    left: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f4ef',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    width: '100%',
    maxWidth: 400,
    padding: 70,
    backgroundColor: '#f8f4ef',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: 'center',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  datePickerButton: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#f9f9f9',
  },
  datePickerText: {
    color: '#333',
  },
  button: {
    backgroundColor: '#3CB043',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonIcon: {
    marginRight: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUpScreen;
