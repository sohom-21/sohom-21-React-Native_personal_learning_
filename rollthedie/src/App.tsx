import { ImageSourcePropType, Image,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeeback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback :true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice  = ({imageUrl}:DiceProps) => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};
const App = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    switch (randomNum) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
    }
    ReactNativeHapticFeeback.trigger('impactLight', options);
  };
  return (
   <View style={styles.diceCenterContainer}>
    <Dice imageUrl={diceImage} />
    <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
   </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  headingText: {
    marginTop: 20,
    marginBottom: 20,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: 800,
  },
  diceContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  diceCenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
