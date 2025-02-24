import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
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
              <Text>DICE</Text>
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
  diceCenterContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
