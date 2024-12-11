import React, { useState, useRef } from 'react';
// import { View, Text, Image, PanResponder, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { View, Text, Image, PanResponder, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import ViewShot from 'react-native-view-shot';
import Slider from '@react-native-community/slider';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

const EditTemplateScreen = ({ route }) => {
  const { template } = route.params;
  const [texts, setTexts] = useState([]); // Store multiple texts
  const [textSize, setTextSize] = useState(20);
  const [fontWeight, setFontWeight] = useState('normal');
  const [fontStyle, setFontStyle] = useState('normal');
  const [textColor, setTextColor] = useState('#000');
  const viewShotRef = useRef();
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [isCustomVisible, setIsCustomVisible] = useState(false);
  const [isTextButton, setIsTextButton] = useState(false);
  

  // add the text previously i have added that if user tap on screen it will add text. 
  const handleAddText = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setTexts([
      ...texts,
      {
        x: locationX,
        y: locationY,
        text: 'Enter Text',
        isEditing: true,
        id: Date.now(),
      },
    ]);
  };

  const handleTextChange = (index, newText) => {
    const updatedTexts = texts.map((item, i) =>
      i === index ? { ...item, text: newText } : item
    );
    setTexts(updatedTexts);
  };

  const toggleEditing = (index) => {
    const updatedTexts = texts.map((item, i) =>
      i === index ? { ...item, isEditing: !item.isEditing } : item
    );
    setTexts(updatedTexts);
  };

  const handleDeleteText = (id) => {
    setTexts(texts.filter((text) => text.id !== id));
  };

  const handleTouchOutside = () => {
    const updatedTexts = texts.map((item) => ({ ...item, isEditing: false }));
    setTexts(updatedTexts);
  };

  const captureAndShareImage = async () => {
    try {
      const uri = await viewShotRef.current.capture({ format: 'jpg', quality: 0.9 });
      if (uri) {
        const isSharingAvailable = await Sharing.isAvailableAsync();
        if (isSharingAvailable) {
          await Sharing.shareAsync(uri);
        } else {
          Alert.alert('Error', 'Sharing is not available on this device.');
        }
      } else {
        Alert.alert('Error', 'Image capture failed.');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  
  return (
    
    <View style={styles.container} onPress={handleTouchOutside} activeOpacity={1}>
       <View style={styles.buttonTable}>
        <TouchableOpacity
          style={[styles.tableButton, 
            isColorPickerVisible && styles.activeButton
          ]}
          onPress={() => setIsColorPickerVisible(!isColorPickerVisible)}
        >
          <FontAwesome name="eyedropper" size={18} color="#F9F3EC" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tableButton,
            isCustomVisible && styles.activeButton
          ]}
          onPress={() => setIsCustomVisible(!isCustomVisible)}
        >
          <FontAwesome name="paint-brush" size={20} color="#F9F3EC" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tableButton}
          onPress={handleAddText}
        >
          <MaterialIcons name="text-fields" size={20} color="#F9F3EC" />
        </TouchableOpacity>
      </View>

      {/* Color Picker Options */}
      
      {isColorPickerVisible && (
        <View style={styles.colorPicker}>
          <TouchableOpacity onPress={() => setTextColor('#ff0000')}>
            <View style={[styles.colorButton, { backgroundColor: '#ff0000' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTextColor('#00ff00')}>
            <View style={[styles.colorButton, { backgroundColor: '#00ff00' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTextColor('#0000ff')}>
            <View style={[styles.colorButton, { backgroundColor: '#0000ff' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTextColor('white')}>
            <View style={[styles.colorButton, { backgroundColor: 'white' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTextColor('black')}>
            <View style={[styles.colorButton, { backgroundColor: 'black' }]} />
          </TouchableOpacity>
        </View>
      )}

     
       

      {/* Text Customization Options*/}
      {isCustomVisible && (
        <View style={styles.customContainer}>
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

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => setFontWeight(fontWeight === 'normal' ? 'bold' : 'normal')}>
              <Text style={[styles.button, { fontWeight: 'bold' }]}>B</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFontStyle(fontStyle === 'normal' ? 'italic' : 'normal')}>
              <Text style={[styles.button, { fontStyle: 'italic' }]}>I</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
       

      {/* Main Image with Tap Handler */}
      <TouchableOpacity activeOpacity={1}>
        <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
          <Image source={template} style={styles.templateImage} />
          {texts.map((textItem, index) => (
            <View
              key={textItem.id}
              style={[
                styles.textContainer,
                { left: textItem.x, top: textItem.y },
              ]}
              {...PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onPanResponderMove: (e, gestureState) => {
                  const updatedTexts = texts.map((item) =>
                    item.id === textItem.id
                      ? { ...item, x: gestureState.moveX, y: gestureState.moveY }
                      : item
                  );
                  setTexts(updatedTexts);
                },
              }).panHandlers}
            >
              {textItem.isEditing ? (
                <TextInput
                  style={[
                    styles.text,
                    { fontSize: textSize, fontStyle, fontWeight, color: textColor },
                  ]}
                  value={textItem.text}
                  onChangeText={(newText) => handleTextChange(index, newText)}
                  onBlur={() => toggleEditing(index)}
                  autoFocus
                />
              ) : (
                <Text
                  style={[
                    styles.text,
                    { fontSize: textSize, fontStyle, fontWeight, color: textColor },
                  ]}
                  onPress={() => toggleEditing(index)}
                >
                  {textItem.text}
                </Text>
              )}
              {textItem.isEditing && (
                <View
                  style={styles.dragButton}
                  {...PanResponder.create({
                    onStartShouldSetPanResponder: () => true,
                    onPanResponderMove: (e, gestureState) => {
                      const updatedTexts = texts.map((item) =>
                        item.id === textItem.id
                          ? { ...item, x: gestureState.moveX-15, y: gestureState.moveY-15 }
                          : item
                      );
                      setTexts(updatedTexts);
                    },
                  }).panHandlers}
                  
                >
                  <FontAwesome name="arrows" size={16} color="#fff" />
                </View>
              )}
              {/* Delete Button - Only shows when editing */}
              {textItem.isEditing && (
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteText(textItem.id)}
                >
                  <FontAwesome name="trash" size={16} color="#fff" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </ViewShot>
      </TouchableOpacity>

      {/* Export Button */}
      <TouchableOpacity onPress={captureAndShareImage} style={[styles.button, { margin: 10 }]}>    
        {/* <Entypo name="export" size={24} color="#fff" /> */}
      <Text style={{color:'white'}}>
        Export Image
      </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: 'rgba(106, 78, 54, 0.4)',
    padding: 15,
    // borderRadius: 10,
    borderColor: 'rgba(106, 78, 54, 0.3)',
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 60, // Button width, adjust for table layout
    height: 60, // Button height, adjust for table layout
  },
  colorPicker: {
    position: 'absolute',
    left: '14%',
    top: '30%',
    flexDirection: 'column',
    backgroundColor: '#F9F3EC',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
  customContainer: {
    position: 'absolute',
    left: 'center',
    top: '30%',
    backgroundColor: '#F9F3EC',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  templateImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 4,
  },
  deleteButton: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 3,
    zIndex: 10,
  },
  text: {
    color: '#000',
  },
  SideButton: {
    position: 'absolute',
    left: 1,
    top: '40%',
    backgroundColor: 'rgba(106, 78, 54, 0.7)',
    padding: 10,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
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
    justifyContent: 'space-around',
  },
  button: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: 'rgba(106, 78, 54, 0.7)',
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
    minWidth: 60,
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 2,
    borderColor: 'black',
    borderWidth: 1,
  },
  dragButton: {
    position: 'absolute',
    top: -10,
    left: -10,
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 3,
    zIndex: 10,
  },
  buttonTable: {
    flexDirection: 'row', // Arrange buttons horizontally; use 'column' for vertical
    flexWrap: 'wrap', // Allows wrapping to the next line if space runs out
    justifyContent: 'space-around', // Add space around buttons in the row
    width: '80%', // Width of the table, adjust as needed
    marginTop: '10%',
  },
  tableButton: {
    backgroundColor: 'rgba(106, 78, 54, 0.7)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 60, // Button width, adjust for table layout
    height: 60, // Button height, adjust for table layout
  },
  
  
});

export default EditTemplateScreen;