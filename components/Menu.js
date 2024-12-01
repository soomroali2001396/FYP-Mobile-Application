import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Modal, Pressable, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function HomeScreen({ navigation }) {
  const [historyVisible, setHistoryVisible] = useState(false);
  const [history, setHistory] = useState([]);

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>+{item.amount}</Text>
      <Text style={styles.historyDate}>{item.date}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
    
      {/* Middle Section */}
      <View style={styles.cardContainer}>
        {/* Budget History Modal */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={historyVisible}
          onRequestClose={() => setHistoryVisible(false)}
        >
          <Pressable style={styles.modalBackground} onPress={() => setHistoryVisible(false)}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setHistoryVisible(false)}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Text style={styles.historyTitle}>History</Text>
              <FlatList
                data={history}
                renderItem={renderHistoryItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </Pressable>
        </Modal>

        {/* Menu section */}
        <View style={styles.menuContainer}>
          {/* Large container */}
          <ImageBackground
            source={require('../Images/wedding.jpg')}
            style={styles.largeContainerBackground}
          >
            <BlurView intensity={50} style={styles.blurContainer}>
              <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Offers')}>
                <Text style={styles.menuText}>Special Offers</Text>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>

          {/* Small container */}
          <ImageBackground
  source={require('../Images/eventlogo.jpg')}
  style={styles.smallContainerBackground}
  imageStyle={styles.imageBackground}
>
  <TouchableOpacity
    style={styles.menuItem}  // Ensure the TouchableOpacity covers the entire background
    onPress={() => navigation.navigate('Plan')}  // Trigger navigation when the image is clicked
    activeOpacity={0.7}  // Optional: gives a slight visual feedback on press
  >
    {/* You can optionally place content here like icons or anything else, but leave it empty for no text */}
  </TouchableOpacity>
</ImageBackground>

          {/* Small container */}
          <ImageBackground
            source={require('../Images/Orange White Minimalist Simple Year End Big Sale Instagram Post.png')}
            style={styles.smallContainerBackground}
            imageStyle={styles.imageBackground}
          >
            <BlurView intensity={50} style={styles.blurContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Services')} // Navigate to services.js
              >
                <Text style={styles.smallcontainermenuText}>Special Services</Text>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>

          {/* Large container */}
          <ImageBackground
            source={require('../Images/Brown White Simple International Day Of Friendship Instagram Post.png')}
            style={styles.largeContainerBackground}
          >
            <BlurView intensity={50} style={styles.blurContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Team')}
              >
                <Text style={styles.menuText}>Our Team</Text>
              </TouchableOpacity>
            </BlurView>
          </ImageBackground>
        </View>
      </View>

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  welcome: {
    fontSize: 16,
    color: '#6A4E36',
    marginRight: 45,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  largeContainerBackground: {
    width: '100%',
    height: 120, // Adjust the height as needed
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  smallContainerBackground: {
    width: '48%',  // Takes up half of the row's width, adjust as needed
    height: 150,   // Adjust height to fit your design
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden', // Makes sure the image fits within the rounded corners
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  menuText: {
    color: '#6A4E36',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smallcontainermenuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageBackground: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  historyText: {
    fontSize: 16,
    color: '#000',
  },
  historyDate: {
    fontSize: 14,
    color: '#888',
  },
});
