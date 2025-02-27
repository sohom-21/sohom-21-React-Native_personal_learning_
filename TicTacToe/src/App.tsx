import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';



type TicTac = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  const [playerTurn, setPlayerTurn] = useState(0);
  return (
    <SafeAreaView>
      <View style={styles.mainElement}>
      <View style={[styles.sectionContainer]}>
        <View style={styles.sectionDescription}>
          <Text style={styles.sectionTitle}>Player {playerTurn}'s Turn</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>GRid</Text>
        </View>
        <View>
          <Pressable></Pressable>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  mainElement:{
    backgroundColor:'#0F0F0F',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color:'#ffffff',
  },
  sectionDescription: {
    backgroundColor:'#d3c506',
    padding:16,
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
