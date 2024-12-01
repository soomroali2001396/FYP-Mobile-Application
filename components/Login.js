import React, { useState } from 'react';
import { View, Text, TextInput,Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Main');
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleGoogleLogin = () => {
    alert('Google Login is not yet implemented');
  };
  
  const handlesignup = () => {
    navigation.navigate('Signup');
  };
  

  return (
    <View style={styles.container}>
       <View style={styles.titlecontainer}>
      <Image source={require('../Images/Icon.png')} style={styles.image} />
      <Text style={styles.ttitle}>Event Craft</Text>
      <Text style={styles.detail}>Combine elements like a calendar or a pencil with a checklist or a price tag.
      </Text>
    </View>
      

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.googleicon]} onPress={handleGoogleLogin}>
        <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="google" size={24} color="#4285F4" />
        <Text style={styles.buttonText}>Sign in with Google</Text>  
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.googleicon]} onPress={handlesignup}>
        <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="account" size={24} color="black" />
        <Text style={styles.buttonText}>Create an account</Text>  
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f4ef',
  },
  
  googleicon: {
    color : 'black',
    borderRadius: 20,       // Adjust the value for the desired roundness
    padding: 5,            // Adjust padding as needed
    elevation: 2,           // Optional: add shadow for Android
   
    shadowOffset: { width: 0, height: 2 }, // Optional: shadow offset
    shadowOpacity: 0.1,     // Optional: shadow opacity
    shadowRadius: 2,        // Optional: shadow radius
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  googleButton: {
    // backgroundColor: '#4285F4',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titlecontainer: {
  
    alignItems: 'center',
    bottom: 100,
    padding: 20,
    backgroundColor: '#f8f4ef',
    borderRadius: 8,
    shadowColor: 'white',
   
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  ttitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18, // Slightly larger font size for emphasis
    color: '#555',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif', // Use a system serif font for an elegant look
    lineHeight: 24, // Increased line height for readability
    letterSpacing: 0.5, // Slight letter spacing for elegance
  },
});

export default Login;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const Login = ({ navigation }) => {
//   const handleLogin = () => {
//     // Navigate to the main screen after clicking "Login"
//     navigation.navigate('Main');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f4ef',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#1f1f1f',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

// export default Login;
