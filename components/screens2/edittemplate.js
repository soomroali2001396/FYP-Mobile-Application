import React, { useState, useRef } from 'react';
import { View, Text, Image, PanResponder, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ViewShot from 'react-native-view-shot';
import Slider from '@react-native-community/slider'; // Import Slider from the community package
import { ScrollView } from 'react-native-gesture-handler';

const EditTemplateScreen = ({ route }) => {
  const { template } = route.params;
  const [textPosition, setTextPosition] = useState({ x: 50, y: 100 });
  const [inputText, setInputText] = useState('Your Event Text'); // State for user input text
  const [textSize, setTextSize] = useState(20); // State for text size
  const [fontWeight, setFontWeight] = useState('normal'); // State for bold
  const [fontStyle, setFontStyle] = useState('normal'); // State for italic
  const [fontFamily, setFontFamily] = useState(''); // State for font family
  const [textColor, setTextColor] = useState('#000'); // State for text color
  const viewShotRef = useRef();

  // PanResponder for dragging the text around
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        setTextPosition({
          x: gestureState.moveX,
          y: gestureState.moveY,
        });
      },
    })
  ).current;

  // Function to capture the final image with text
  const captureImage = () => {
    viewShotRef.current.capture().then(uri => {
      console.log("Image saved to", uri);
      alert("Image saved to: " + uri);
    });
  };

  return (
    <View style={styles.container}>
      {/* Screenshot component */}
      <ScrollView style={styles.scrollview}>
      <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
        <Image source={template} style={styles.templateImage} />
        <View
          {...panResponder.panHandlers} // Enables dragging
          style={[
            styles.textContainer,
            { left: textPosition.x, top: textPosition.y },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                fontSize: textSize,
                fontStyle: fontStyle, // Italic
                fontWeight: fontWeight, // Bold
                fontFamily: fontFamily, // Custom font
                color: textColor, // Font color
              },
            ]}
          >
            {inputText}
          </Text>
        </View>
      </ViewShot>

      {/* Text Input for custom user text */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your event text"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />

      {/* Slider to control text size */}
      <View style={styles.sliderContainer}>
        <Text>Adjust Text Size</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={50}
          value={textSize}
          onValueChange={(value) => setTextSize(value)}
        />
        <Text>Text Size: {Math.round(textSize)}</Text>
      </View>

      {/* Font Style and Color Buttons */}
      <View style={styles.buttonRow}>
        {/* Bold and Italic buttons */}
        <TouchableOpacity onPress={() => setFontWeight(fontWeight === 'normal' ? 'bold' : 'normal')}>
          <Text style={styles.button}>Bold</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFontStyle(fontStyle === 'normal' ? 'italic' : 'normal')}>
          <Text style={styles.button}>Italic</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        {/* Font Family Buttons */}
        {/* <TouchableOpacity onPress={() => setFontFamily('sans-serif')}>
          <Text style={styles.button}>Sans-serif</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFontFamily('Alexis')}>
          <Text style={styles.button}>Alexis</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFontFamily('Athena')}>
          <Text style={styles.button}>Athena</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFontFamily('Poptop')}>
          <Text style={styles.button}>Poptop</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.buttonRow}>
        {/* Font Color Buttons */}
        <TouchableOpacity onPress={() => setTextColor('#ff0000')}>
          <Text style={[styles.colorButton, { backgroundColor: '#ff0000' }]}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTextColor('#00ff00')}>
          <Text style={[styles.colorButton, { backgroundColor: '#00ff00' }]}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTextColor('#0000ff')}>
          <Text style={[styles.colorButton, { backgroundColor: '#0000ff' }]}></Text>
        </TouchableOpacity>
      </View>

      <Button title="Save Image" onPress={captureImage} />
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  templateImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 4,
  },
  scrollview:{
    paddingTop: 2,
    marginBottom:  30,
  },
  text: {
    color: '#000',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
  sliderContainer: {
    width: '80%',
    marginVertical: 20,
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#1e90ff',
    color: '#fff',
    borderRadius: 5,
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

export default EditTemplateScreen;

