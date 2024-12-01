import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// List of template image paths from the assets folder
const templateImages = [
  require('../../assets/Templates/template1.png'),
  require('../../assets/Templates/template2.png'),
  require('../../assets/Templates/template3.png'),
  require('../../assets/Templates/template4.png'),
  require('../../assets/Templates/template5.png'),
  require('../../assets/Templates/template6.png'),
  require('../../assets/Templates/template7.png'),
];

const TemplatesScreen = ({ navigation }) => {
  // Render each template in a grid layout
  const renderTemplate = ({ item }) => (
    <TouchableOpacity
      style={styles.templateContainer}
      onPress={() => navigation.navigate('edittemplate', { template: item })}
    >
      <Image source={item} style={styles.templateImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={templateImages}
        renderItem={renderTemplate}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  templateContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2, // Add border width
    borderColor: '#1e90ff', // Add border color
    borderRadius: 10, // Add border radius for rounded corners
    padding: 5, // Add padding to space out the image from the border
    backgroundColor: '#f8f8ff', // Add background color to the template container
  },
  templateImage: {
    width: 140,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8, // Optionally, make the image's corners slightly rounded too
  },
});

export default TemplatesScreen;

