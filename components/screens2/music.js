import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Card, Badge } from 'react-native-paper';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'Culture', image: require('../../Images/Item/item20.jpg') },
    { label: 'Festival', image: require('../../Images/Item/item21.jpg') },
    { label: 'Moments', image: require('../../Images/Item/item22.jpg') },
    { label: 'Marriages', image: require('../../Images/Item/item25.jpg') },
  ];

  const shops = [
    {
      name: 'Pop Music',
      time: '20-35 hours',
      badge: 70000,
      image: require('../../Images/Item/item23.jpg'),
    },
    {
      name: 'Bridal Setup',
      time: '10 hours',
      badge: 100000,
      image: require('../../Images/Item/item24.jpg'),
    },
    {
      name: 'Parties',
      time: '5-20 hours',
      badge: 200000,
      image: require('../../Images/Item/item25.jpg'),
    },
  ];

  const filterAndSort = (items, key) => {
    return items
      .filter(item => item[key].toLowerCase().includes(searchQuery.toLowerCase())) // Filter based on search query
      .sort((a, b) => a[key].localeCompare(b[key])); // Sort alphabetically by the key (label/name)
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Event Setups</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search setups..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryContainer}>
        {filterAndSort(categories, 'label').map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryLabel}>{category.label}</Text>
          </View>
        ))}
      </View>

      {/* Popular Shops Section */}
      <Text style={styles.sectionTitle}>Popular Setups</Text>
      <View style={styles.shopContainer}>
        {filterAndSort(shops, 'name').map((shop, index) => (
          <Card key={index} style={styles.shopCard}>
            <Image source={shop.image} style={styles.shopImage} />
            <Text style={styles.shopName}>{shop.name}</Text>
            <Text style={styles.shopTime}>{shop.time}</Text>
            {shop.badge && (
              <Badge style={styles.shopBadge}>{shop.badge}</Badge>
            )}
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    marginTop: 10,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
    borderRadius: 10,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    width: 80,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  shopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
  shopCard: {
    width: '48%', // Make the cards take up half of the screen width
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow effect on Android
  },
  shopImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  shopName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  shopTime: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  shopBadge: {
    backgroundColor: '#FF6347',
    color: '#fff',
    marginTop: 10,
  },
});
