
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  FlatList, 
  TouchableOpacity, 
  Modal, 
  TextInput, 
  ActivityIndicator, 
  Alert, 
  Animated, 
  Easing 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ServiceDecoration, BASE_URL } from '../../ServiceAPIs/UsersAPIs';
import DateTimePicker from '@react-native-community/datetimepicker';

const Decoration = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [promoModalVisible, setPromoModalVisible] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const navigation = useNavigation();

  const fadeAnim = useMemo(() => new Animated.Value(0), []); // Memoize fade animation value

  // Fetch products in a useEffect hook
  useEffect(() => {
    const fetchDecorations = async () => {
      try {
        const data = await ServiceDecoration();
        const transformedData = data.map((item) => ({
          id: item.serviceId,
          title: item.serviceName,
          price: item.servicePrice,
          image: `${BASE_URL}/services/images/${item.pictures[0]?.pictureUrl}`,
        }));
        setProducts(transformedData);
      } catch (error) {
        console.error('Error fetching decorations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDecorations();

    // Fade-in effect for promo modal when screen loads
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Memoize promo code application function
  const handleApplyPromoCode = useCallback(() => {
    if (promoCode === 'SAVE20') {
      const discount = 0.2;
      const randomProductIndex = Math.floor(Math.random() * products.length);
      const selectedProduct = products[randomProductIndex];
      const newPrice = selectedProduct.price * (1 - discount);

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === selectedProduct.id
            ? { ...product, price: newPrice.toFixed(2) }
            : product
        )
      );

      setPromoApplied(true);
      Alert.alert('Success', `Promo code applied to ${selectedProduct.title}. New price: Rs. ${newPrice.toFixed(2)}`);
      setPromoModalVisible(false);
    } else {
      Alert.alert('Invalid Promo Code', 'Please enter a valid promo code.');
    }
  }, [promoCode, products]);

  const handleCardClick = useCallback((product) => {
    setSelectedProduct(product);
    setLocationModalVisible(true);
  }, []);
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleAddToPlan = useCallback(() => {
    if (!location) {
      Alert.alert('Location Required', 'Please enter your location before adding to the plan.');
      return;
    }

    // Navigate to Plan.js and pass the decoration price as 'estimatedBudget'
    navigation.navigate('Plan', {
      estimatedBudget: selectedProduct.price,  // Passing price to Plan.js as 'estimatedBudget'
      location: location,
      date: date,
      time: time,
      product: selectedProduct,
    });

    setLocationModalVisible(false);
    setLocation('');
  }, [location, selectedProduct, navigation]);

  // Optimize ProductCard component with React.memo to prevent unnecessary re-renders
  const ProductCard = React.memo(({ product }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardClick(product)}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>Rs. {product.price}</Text>
    </TouchableOpacity>
  ));

  // Show loading indicator if data is still being fetched
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff3366" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.title}>Select a Decoration Option</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
        numColumns={2} // Display 2 items per row
      />

      {/* Promo Code Modal */}
      <Modal
        transparent
        visible={promoModalVisible}
        animationType="slide"
      >
        <Animated.View
          style={[styles.modalContainer, { opacity: fadeAnim }]}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeIcon} onPress={() => setPromoModalVisible(false)}>
              <MaterialCommunityIcons name="close" size={24} color="#333" />
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
        </Animated.View>
      </Modal>

      {/* Location Modal */}
      <Modal
        transparent
        visible={locationModalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeIcon} onPress={() => setLocationModalVisible(false)}>
              <MaterialCommunityIcons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Enter Your Location</Text>
            <TextInput
              style={styles.locationInput}
              placeholder="Enter Location"
              value={location}
              onChangeText={setLocation}
            />
            <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <MaterialCommunityIcons name="calendar" size={24} color="#3498db" />
                    <Text>{date.toDateString()}</Text>
                  </TouchableOpacity>
                  {showDatePicker && (
                    <DateTimePicker value={date} mode="date" display="default" onChange={onDateChange} />
                  )}
                </View>
                <View style={styles.dateTimeContainer}>
                  <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                    <MaterialCommunityIcons name="clock" size={24} color="#3498db" />
                    <Text>{time.toLocaleTimeString()}</Text>
                  </TouchableOpacity>
                  {showTimePicker && (
                    <DateTimePicker value={time} mode="time" display="default" onChange={onTimeChange} />
                  )}
                </View>
            <TouchableOpacity style={styles.addButton} onPress={handleAddToPlan}>
              <Text style={styles.addButtonText}>Add to Plan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EC',
    paddingTop: 20,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  productList: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    width: '48%',
    backgroundColor: '#C8B29E',
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    transform: [{ scale: 1 }],
    marginHorizontal: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    margin: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#1f1f1f',
    marginHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContent: {
    backgroundColor: '#F9F3EC',
    width: '80%',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  promoCodeInput: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationInput: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Decoration;
