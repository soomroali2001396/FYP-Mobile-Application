// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Modal, Pressable, FlatList } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { BlurView } from 'expo-blur';

// export default function HomeScreen({ navigation }) {
//   const [historyVisible, setHistoryVisible] = useState(false);
//   const [history, setHistory] = useState([]);

//   const renderHistoryItem = ({ item }) => (
//     <View style={styles.historyItem}>
//       <Text style={styles.historyText}>+{item.amount}</Text>
//       <Text style={styles.historyDate}>{item.date}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
    
//       {/* Middle Section */}
//       <View style={styles.cardContainer}>
//         {/* Budget History Modal */}
//         <Modal
//           transparent={true}
//           animationType="slide"
//           visible={historyVisible}
//           onRequestClose={() => setHistoryVisible(false)}
//         >
//           <Pressable style={styles.modalBackground} onPress={() => setHistoryVisible(false)}>
//             <View style={styles.modalContainer}>
//               <TouchableOpacity style={styles.closeButton} onPress={() => setHistoryVisible(false)}>
//                 <Text style={styles.closeButtonText}>×</Text>
//               </TouchableOpacity>
//               <Text style={styles.historyTitle}>History</Text>
//               <FlatList
//                 data={history}
//                 renderItem={renderHistoryItem}
//                 keyExtractor={(item, index) => index.toString()}
//               />
//             </View>
//           </Pressable>
//         </Modal>

//         {/* Menu section */}
//         <View style={styles.menuContainer}>
//           {/* Large container */}
//           <ImageBackground
//             source={require('../Images/wedding.jpg')}
//             style={styles.largeContainerBackground}
//           >
//             <BlurView intensity={50} style={styles.blurContainer}>
//               <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Offers')}>
//                 <Text style={styles.menuText}>Special Offers</Text>
//               </TouchableOpacity>
//             </BlurView>
//           </ImageBackground>

//           {/* Small container */}
//           <ImageBackground
//   source={require('../Images/eventlogo.jpg')}
//   style={styles.smallContainerBackground}
//   imageStyle={styles.imageBackground}
// >
//   <TouchableOpacity
//     style={styles.menuItem}  // Ensure the TouchableOpacity covers the entire background
//     onPress={() => navigation.navigate('Plan')}  // Trigger navigation when the image is clicked
//     activeOpacity={0.7}  // Optional: gives a slight visual feedback on press
//   >
//     {/* You can optionally place content here like icons or anything else, but leave it empty for no text */}
//   </TouchableOpacity>
// </ImageBackground>

//           {/* Small container */}
//           <ImageBackground
//             source={require('../Images/Orange White Minimalist Simple Year End Big Sale Instagram Post.png')}
//             style={styles.smallContainerBackground}
//             imageStyle={styles.imageBackground}
//           >
//             <BlurView intensity={50} style={styles.blurContainer}>
//               <TouchableOpacity
//                 style={styles.menuItem}
//                 onPress={() => navigation.navigate('Services')} // Navigate to services.js
//               >
//                 <Text style={styles.smallcontainermenuText}>Special Services</Text>
//               </TouchableOpacity>
//             </BlurView>
//           </ImageBackground>

//           {/* Large container */}
//           <ImageBackground
//             source={require('../Images/Brown White Simple International Day Of Friendship Instagram Post.png')}
//             style={styles.largeContainerBackground}
//           >
//             <BlurView intensity={50} style={styles.blurContainer}>
//               <TouchableOpacity
//                 style={styles.menuItem}
//                 onPress={() => navigation.navigate('Team')}
//               >
//                 <Text style={styles.menuText}>Our Team</Text>
//               </TouchableOpacity>
//             </BlurView>
//           </ImageBackground>
//         </View>
//       </View>

    
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   greeting: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   welcome: {
//     fontSize: 16,
//     color: '#6A4E36',
//     marginRight: 45,
//   },
//   menuContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   largeContainerBackground: {
//     width: '100%',
//     height: 120, // Adjust the height as needed
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   smallContainerBackground: {
//     width: '48%',  // Takes up half of the row's width, adjust as needed
//     height: 150,   // Adjust height to fit your design
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden', // Makes sure the image fits within the rounded corners
//   },
//   blurContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   menuItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   menuText: {
//     color: '#6A4E36',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   smallcontainermenuText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   imageBackground: {
//     resizeMode: 'cover',
//     width: '100%',
//     height: '100%',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     width: 300,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   closeButtonText: {
//     fontSize: 24,
//     color: '#000',
//   },
//   historyTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   historyItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   historyText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   historyDate: {
//     fontSize: 14,
//     color: '#888',
//   },
// // });
// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Modal, Pressable, FlatList, Image, Text } from 'react-native';
// import { BlurView } from 'expo-blur';

// export default function HomeScreen({ navigation }) {
//   const [historyVisible, setHistoryVisible] = useState(false);
//   const [history, setHistory] = useState([]);

//   const renderHistoryItem = ({ item }) => (
//     <View style={styles.historyItem}>
//       <Text style={styles.historyText}>+{item.amount}</Text>
//       <Text style={styles.historyDate}>{item.date}</Text>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {/* Middle Section */}
//       <View style={styles.cardContainer}>
//         {/* Budget History Modal */}
//         <Modal
//           transparent={true}
//           animationType="slide"
//           visible={historyVisible}
//           onRequestClose={() => setHistoryVisible(false)}
//         >
//           <Pressable style={styles.modalBackground} onPress={() => setHistoryVisible(false)}>
//             <View style={styles.modalContainer}>
//               <TouchableOpacity style={styles.closeButton} onPress={() => setHistoryVisible(false)}>
//                 <Text style={styles.closeButtonText}>×</Text>
//               </TouchableOpacity>
//               <Text style={styles.historyTitle}>History</Text>
//               <FlatList
//                 data={history}
//                 renderItem={renderHistoryItem}
//                 keyExtractor={(item, index) => index.toString()}
//               />
//             </View>
//           </Pressable>
//         </Modal>

//         {/* Menu Section */}
//         <View style={styles.menuContainer}>
//           {/* Button 1 */}
//           <TouchableOpacity onPress={() => navigation.navigate('Offers')} activeOpacity={0.8}>
//             <Image
//               source={require('../Images/wedding.jpg')}
//               style={styles.imageButton}
//             />
//           </TouchableOpacity>

//           {/* Button 2 */}
//           <TouchableOpacity onPress={() => navigation.navigate('Plan')} activeOpacity={0.8}>
//             <Image
//               source={require('../Images/eventlogo.jpg')}
//               style={styles.imageButton}
//             />
//           </TouchableOpacity>

//           {/* Button 3 */}
//           <TouchableOpacity onPress={() => navigation.navigate('Services')} activeOpacity={0.8}>
//             <Image
//               source={require('../Images/Orange White Minimalist Simple Year End Big Sale Instagram Post.png')}
//               style={styles.imageButton}
//             />
//           </TouchableOpacity>

//           {/* Button 4 */}
//           <TouchableOpacity onPress={() => navigation.navigate('Team')} activeOpacity={0.8}>
//             <Image
//               source={require('../Images/Brown White Simple International Day Of Friendship Instagram Post.png')}
//               style={styles.imageButton}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//     padding: 16,
//   },
//   cardContainer: {
//     marginVertical: 20,
//   },
//   menuContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   imageButton: {
//     width: 160, // Adjust size to your preference
//     height: 160,
//     marginBottom: 20,
//     borderRadius: 20, // Rounded edges
//     overflow: 'hidden',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     width: 300,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   closeButtonText: {
//     fontSize: 24,
//     color: '#000',
//   },
//   historyTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   historyItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   historyText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   historyDate: {
//     fontSize: 14,
//     color: '#888',
//   },
// });
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Pressable, FlatList, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

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
    <LinearGradient colors={['#ffffff', '#f4f4f4']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.mainTitle}>EventCraft</Text>
        <Text style={styles.subtitle}>Presenting you seamlessly services</Text>
      </View>

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
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.historyTitle}>Transaction History</Text>
            <FlatList
              data={history}
              renderItem={renderHistoryItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Pressable>
      </Modal>

      {/* Menu Section */}
      <View style={styles.cardContainer}>
        <Text style={styles.sectionTitle}>Explore Services</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Offers')}
            activeOpacity={0.9}
          >
            <Image source={require('../Images/wedding.jpg')} style={styles.imageButton} />
            <Text style={styles.cardText}>Event Packages</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Plan')}
            activeOpacity={0.9}
          >
            <Image source={require('../Images/eventlogo.jpg')} style={styles.imageButton} />
            <Text style={styles.cardText}>Event Planning</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Services')}
            activeOpacity={0.9}
          >
            <Image source={require('../Images/Orange White Minimalist Simple Year End Big Sale Instagram Post.png')} style={styles.imageButton} />
            <Text style={styles.cardText}>Exclusive Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Team')}
            activeOpacity={0.9}
          >
            <Image source={require('../Images/Brown White Simple International Day Of Friendship Instagram Post.png')} style={styles.imageButton} />
            <Text style={styles.cardText}>Meet Our Team</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9F3EC',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor:'#F9F3EC',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  cardContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginBottom: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
    
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor:'#F9F3EC',
    
  },
  imageButton: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
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
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
});
