import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Trigger scale animation
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start(() => {
      // After animation, navigate to the Service screen
      navigation.navigate('Services', { product });
    });
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.dealText}>Deal</Text>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title || 'No Title'}</Text>
        <Text style={styles.productPrice}>Rs. {product.price || '0.00'}</Text>
        {product.oldPrice && (
          <Text style={styles.oldPrice}>Rs. {product.oldPrice}</Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function App() {
  const products = [
    {
      image: require('../../Images/Item/item26.jpg'),
      title: "Jasmine Setup Along Walkover",
      price: '120000.60',
      oldPrice: '160000.00',
    },
    {
      image: require('../../Images/Item/item27.jpg'),
      title: 'Rose+Jasmine Fresh Setup',
      price: '75000.50',
      oldPrice: '100000.00',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bridal Room Decoration</Text>
        <Text style={styles.deliveryInfo}>15-30 mins/Room</Text>
      </View>

      <View style={styles.productList}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </View>

      <View style={styles.promoSection}>
        <Image source={require('../../Images/Item/item28.jpg')} style={styles.promoImage} />
        <Text style={styles.promoText}>Save big on your decoration</Text>
      </View>

      <View style={styles.bottomPromo}>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>FLAT 20% OFF!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>Decoration Setup with Big Savings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
  promoSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  promoImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomPromo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  promoButton: {
    backgroundColor: '#6A4E36',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  promoButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
