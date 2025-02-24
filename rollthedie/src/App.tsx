import { ImageSourcePropType, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

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
  const [diceImage, setDiceImage] = useState(DiceOne) //TODO
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <View style={styles.headingText}>
          <Text style={styles.HeaderText}>Roll The Die</Text>
        </View>
        <View style={styles.diceCenterContainer}>
          <View style={styles.diceContainer}>
            <View>
              <Dice imageUrl={diceImage} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  diceContainer:{
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage:{
    width: 300,
    height: 200,
  },
  diceCenterContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
