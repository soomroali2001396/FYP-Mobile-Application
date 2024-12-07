// UserSession.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Set session with the user data
export const setUserSession = async (userData) => {
  try {
    const sessionData = {
      userId: userData.userId,
      userName: userData.userName,
      userEmail: userData.userEmail,
      expiry: new Date().getTime() + 24 * 60 * 60 * 1000, // Expiry after 24 hours
    };
    await AsyncStorage.setItem('@user_session', JSON.stringify(sessionData));
  } catch (error) {
    console.error('Error setting session:', error);
  }
};

// Get session data
export const getUserSession = async () => {
  try {
    const sessionData = await AsyncStorage.getItem('@user_session');
    if (sessionData !== null) {
      const parsedSession = JSON.parse(sessionData);
      const currentTime = new Date().getTime();
      
      // If the session is expired, remove it
      if (parsedSession.expiry < currentTime) {
        await AsyncStorage.removeItem('@user_session');
        return null;
      }

      return parsedSession; // Return session data
    }
    return null;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
};

// Remove session
export const removeUserSession = async () => {
  try {
    await AsyncStorage.removeItem('@user_session');
  } catch (error) {
    console.error('Error removing session:', error);
  }
};
