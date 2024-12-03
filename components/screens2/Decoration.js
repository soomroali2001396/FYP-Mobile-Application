
// import React, { useState } from 'react';
// import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const App = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       image: require('../../Images/Item/item26.jpg'),
//       title: "Jasmine Setup Along Walkover",
//       price: 120000.60,
//       oldPrice: 160000.00,
//     },
//     {
//       id: 2,
//       image: require('../../Images/Item/item27.jpg'),
//       title: 'Rose+Jasmine Fresh Setup',
//       price: 75000.50,
//       oldPrice: 100000.00,
//     },
//   ]);

//   const [promoModalVisible, setPromoModalVisible] = useState(false);
//   const [promoCode, setPromoCode] = useState('');
//   const [promoApplied, setPromoApplied] = useState(false); // Track if promo is applied
//   const [appliedDeal, setAppliedDeal] = useState(''); // Store the name of the deal that received the discount
//   const [locationModalVisible, setLocationModalVisible] = useState(false); // Track location modal visibility
//   const [location, setLocation] = useState(''); // Store location details
//   const [selectedProductId, setSelectedProductId] = useState(null); // Track selected product ID
//   const navigation = useNavigation();
//   const handlePromoButtonClick = () => {
//     if (promoApplied) {
//       alert("Promo code already applied!");
//       return;
//     }

//     // Randomly select a product for the discount
//     const randomProductIndex = Math.floor(Math.random() * products.length);
//     const selectedProduct = products[randomProductIndex];

//     setAppliedDeal(selectedProduct.title); // Store the title of the selected deal
//     setPromoModalVisible(true);  // Show promo code modal
//   };

//   const handleApplyPromoCode = () => {
//     if (promoCode === 'SAVE20') {
//       const discount = 0.2;

//       // Randomly select a product and apply discount
//       const randomProductIndex = Math.floor(Math.random() * products.length);
//       const selectedProduct = products[randomProductIndex];

//       const newPrice = selectedProduct.price * (1 - discount);

//       // Apply discount to the selected product
//       setProducts(prevProducts =>
//         prevProducts.map(product =>
//           product.id === selectedProduct.id
//             ? { ...product, price: newPrice.toFixed(2) } // Apply discount
//             : product
//         )
//       );

//       setPromoApplied(true);  // Set promo as applied
//       alert(`Promo code applied on the ${selectedProduct.title}. New price: Rs. ${newPrice.toFixed(2)}`);
//       setPromoModalVisible(false);  // Close promo code modal
//     } else {
//       alert("Invalid Promo Code");
//     }
//   };

//   const handleLocationModalClose = () => {
//     setLocationModalVisible(false);  // Close location modal
//   };

//   const handleLocationModalOpen = (productId) => {
//     setSelectedProductId(productId);  // Store selected product ID
//     setLocationModalVisible(true);  // Open location modal
//   };

//   const ProductCard = ({ product }) => {
//     return (
//       <TouchableOpacity onPress={() => handleLocationModalOpen(product.id)} style={styles.card}>
//         <Text style={styles.dealText}>Deal</Text>
//         <Image source={product.image} style={styles.productImage} />
//         <Text style={styles.productTitle}>{product.title}</Text>
//         <Text style={styles.productPrice}>Rs. {product.price}</Text>
//         {product.oldPrice && (
//           <Text style={styles.oldPrice}>Rs. {product.oldPrice}</Text>
//         )}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Bridal Room Decoration</Text>
//         <Text style={styles.deliveryInfo}>15-30 mins/Room</Text>
//       </View>

//       <View style={styles.productList}>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </View>

//       <View style={styles.bottomPromo}>
//         <TouchableOpacity
//           style={styles.promoButton}
//           onPress={handlePromoButtonClick}
//         >
//           <Text style={styles.promoButtonText}>CLICK TO GET FLAT 20% OFF!</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Promo Code Modal */}
//       <Modal
//         visible={promoModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setPromoModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContent}>
//             {/* Close Button */}
//             <TouchableOpacity onPress={() => setPromoModalVisible(false)} style={styles.closeButton}>
//               <MaterialCommunityIcons name="close" size={24} color="white" />
//             </TouchableOpacity>

//             <Text style={styles.modalTitle}>Enter Promo Code</Text>
//             <TextInput
//               style={styles.promoCodeInput}
//               placeholder="Enter Promo Code"
//               value={promoCode}
//               onChangeText={setPromoCode}
//             />
//             <TouchableOpacity style={styles.applyButton} onPress={handleApplyPromoCode}>
//               <Text style={styles.applyButtonText}>Apply Code</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Notification of applied promo */}
//       {promoApplied && (
//         <View style={styles.notification}>
//           <Text style={styles.notificationText}>
//             Promo applied 
//           </Text>
//         </View>
//       )}

//       {/* Location Modal */}
//       <Modal
//         visible={locationModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={handleLocationModalClose}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContent}>
//             {/* Close Button */}
//             <TouchableOpacity onPress={handleLocationModalClose} style={styles.closeButton}>
//               <MaterialCommunityIcons name="close" size={24} color="white" />
//             </TouchableOpacity>

//             <Text style={styles.modalTitle}>Enter Location Details</Text>
//             <Text style={styles.modalSubtitle}>Location for: {products.find(product => product.id === selectedProductId)?.title}</Text>
//             <TextInput
//               style={styles.locationInput}
//               placeholder="Enter your location"
//               value={location}
//               onChangeText={setLocation}
//             />
//             <Text style={styles.locationText}>Your location: {location}</Text>
//             <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Plan')}>
//               <Text style={styles.confirmButtonText}>Confirm</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F3EC',
//     padding: 10,
//   },
//   header: {
//     marginVertical: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   deliveryInfo: {
//     fontSize: 16,
//     color: '#888',
//   },
//   productList: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//   },
//   card: {
//     width: '48%',
//     borderRadius: 10,
//     backgroundColor: '#f9f9f9',
//     padding: 10,
//     marginBottom: 20,
//   },
//   dealText: {
//     backgroundColor: '#ff3366',
//     color: '#fff',
//     padding: 4,
//     borderRadius: 4,
//     fontSize: 12,
//     alignSelf: 'flex-start',
//   },
//   productImage: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'cover',
//     marginVertical: 10,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   productPrice: {
//     fontSize: 18,
//     color: '#333',
//   },
//   oldPrice: {
//     fontSize: 14,
//     color: '#999',
//     textDecorationLine: 'line-through',
//   },
//   bottomPromo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   promoButton: {
//     backgroundColor: '#6A4E36',
//     padding: 15,
//     borderRadius: 10,
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   promoButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     width: '80%',
//     borderRadius: 10,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 1,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalSubtitle: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   promoCodeInput: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   applyButton: {
//     backgroundColor: '#ff3366',
//     padding: 10,
//     borderRadius: 5,
//   },
//   applyButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   notification: {
//     marginTop: 20,
//     backgroundColor: '#ffcc00',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   notificationText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   locationInput: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   locationText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   confirmButton: {
//     backgroundColor: '#4C8E2E',
//     padding: 10,
//     borderRadius: 5,
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default App;
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: require('../../Images/Item/item26.jpg'),
      title: "Jasmine Setup Along Walkover",
      price: 120000.60,
      oldPrice: 160000.00,
    },
    {
      id: 2,
      image: require('../../Images/Item/item27.jpg'),
      title: 'Rose+Jasmine Fresh Setup',
      price: 75000.50,
      oldPrice: 100000.00,
    },
  ]);

  const [promoModalVisible, setPromoModalVisible] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false); // Track if promo is applied
  const [appliedDeal, setAppliedDeal] = useState(''); // Store the name of the deal that received the discount
  const [locationModalVisible, setLocationModalVisible] = useState(false); // Track location modal visibility
  const [location, setLocation] = useState(''); // Store location details
  const [selectedProductId, setSelectedProductId] = useState(null); // Track selected product ID
  const [alertMessage, setAlertMessage] = useState(''); // For custom alerts
  const [alertVisible, setAlertVisible] = useState(false); // Control alert modal visibility
  const navigation = useNavigation();

  const handlePromoButtonClick = () => {
    if (promoApplied) {
      setAlertMessage("Promo code already applied!");
      setAlertVisible(true);
      return;
    }

    // Randomly select a product for the discount
    const randomProductIndex = Math.floor(Math.random() * products.length);
    const selectedProduct = products[randomProductIndex];

    setAppliedDeal(selectedProduct.title); // Store the title of the selected deal
    setPromoModalVisible(true);  // Show promo code modal
  };

  const handleApplyPromoCode = () => {
    if (promoCode === 'SAVE20') {
      const discount = 0.2;

      // Randomly select a product and apply discount
      const randomProductIndex = Math.floor(Math.random() * products.length);
      const selectedProduct = products[randomProductIndex];

      const newPrice = selectedProduct.price * (1 - discount);

      // Apply discount to the selected product
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === selectedProduct.id
            ? { ...product, price: newPrice.toFixed(2) } // Apply discount
            : product
        )
      );

      setPromoApplied(true);  // Set promo as applied
      setAlertMessage(`Promo code applied on the ${selectedProduct.title}. New price: Rs. ${newPrice.toFixed(2)}`);
      setAlertVisible(true);  // Show success alert
      setPromoModalVisible(false);  // Close promo code modal
    } else {
      setAlertMessage("Invalid Promo Code");
      setAlertVisible(true);  // Show error alert
    }
  };

  const handleLocationModalClose = () => {
    setLocationModalVisible(false);  // Close location modal
  };

  const handleLocationModalOpen = (productId) => {
    setSelectedProductId(productId);  // Store selected product ID
    setLocationModalVisible(true);  // Open location modal
  };

  const ProductCard = ({ product }) => {
    return (
      <TouchableOpacity onPress={() => handleLocationModalOpen(product.id)} style={styles.card}>
        <Text style={styles.dealText}>Deal</Text>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>Rs. {product.price}</Text>
        {product.oldPrice && (
          <Text style={styles.oldPrice}>Rs. {product.oldPrice}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bridal Room Decoration</Text>
        <Text style={styles.deliveryInfo}>15-30 mins/Room</Text>
      </View>

      <View style={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>

      <View style={styles.bottomPromo}>
        <TouchableOpacity
          style={styles.promoButton}
          onPress={handlePromoButtonClick}
        >
          <Text style={styles.promoButtonText}>CLICK TO GET FLAT 20% OFF!</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Code Modal */}
      <Modal
        visible={promoModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPromoModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity onPress={() => setPromoModalVisible(false)} style={styles.closeButton}>
              <MaterialCommunityIcons name="close" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Enter Promo Code</Text>
            <TextInput
              style={styles.promoCodeInput}
              placeholder="Enter Promo Code"
              value={promoCode}
              onChangeText={setPromoCode}
            />
            <TouchableOpacity style={styles.applyButton} onPress={handleApplyPromoCode}>
              <Text style={styles.applyButtonText}>Apply Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Location Modal */}
      <Modal
        visible={locationModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleLocationModalClose}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity onPress={handleLocationModalClose} style={styles.closeButton}>
              <MaterialCommunityIcons name="close" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Enter Location Details</Text>
            <Text style={styles.modalSubtitle}>Location for: {products.find(product => product.id === selectedProductId)?.title}</Text>
            <TextInput
              style={styles.locationInput}
              placeholder="Enter your location"
              value={location}
              onChangeText={setLocation}
            />
            <Text style={styles.locationText}>Your location: {location}</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Plan')}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Custom Alert Modal */}
      <Modal
        visible={alertVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setAlertVisible(false)}
      >
        <View style={styles.alertBackground}>
          <View style={styles.alertContent}>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
            <TouchableOpacity onPress={() => setAlertVisible(false)} style={styles.closeButton}>
              <MaterialCommunityIcons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    padding: 10,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  deliveryInfo: {
    fontSize: 16,
    color: '#888',
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 20,
  },
  dealText: {
    backgroundColor: '#ff3366',
    color: '#fff',
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#333',
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  bottomPromo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  promoButton: {
    backgroundColor: '#ff3366',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  promoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    backgroundColor: '#ff3366',
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  promoCodeInput: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  applyButton: {
    backgroundColor: '#ff3366',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  locationInput: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#ff3366',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  alertBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  alertContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  alertMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default App;
