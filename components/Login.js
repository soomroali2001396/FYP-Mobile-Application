import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';

import { loginUsers } from '../ServiceAPIs/UsersAPIs'; // Import the API function
import { setUserSession,getUserSession } from '../ServiceAPIs/UserSession'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const buttonScale = new Animated.Value(1);

  const handleLogin = async () => {
    // navigation.navigate('Main'); // only for development 
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
  
    try {
      const response = await loginUsers(email, password);
      console.log('Login successful:', response);
      // Store user session data
      const { userId, userName, userEmail } = response;
      await setUserSession({
        userId,
        userName,
        userEmail,
        userPassword: response.userPassword,
        userPhone: response.userPhone,
        userLocation: response.userLocation,
        userDateOfBirth: response.userDateOfBirth,
        userImage: response.userImage,
      });
      console.log(getUserSession());
      navigation.navigate('Main');
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };
  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     alert('Please enter both email and password.');
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     // Simulate API call delay
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     navigation.navigate('Main');
  //   } catch (error) {
  //     alert(`Login failed: ${error.message}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const animateButtonPress = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('../Images/Icon.png')} style={styles.image} />
        <Text style={styles.title}>Event Craft</Text>
        <Text style={styles.detail}>
          Combine elements like a calendar or a pencil with a checklist or a price tag.
        </Text>
      </View>

      <View style={styles.inputContainer}>
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
      </View>

      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            animateButtonPress();
            handleLogin();
          }}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Login</Text>}
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupText}>Create an account</Text>
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
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
    elevation: 2,
  },
  button: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupButton: {
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
});

export default Login;
