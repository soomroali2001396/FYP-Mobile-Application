
import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to the Main screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../Images/Icon.png')} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
