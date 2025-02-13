import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoodCards = () => {
  return (
    <View>
      <Text style={styles.headings}>GoodCards</Text>
      <ScrollView horizontal style={styles.containerBox}>
         <View style={[styles.card, styles.Good]}>
                  <Text>Tap</Text>
         </View>
         <View style={[styles.card, styles.Good]}>
                  <Text>And</Text>
         </View>
         <View style={[styles.card, styles.Good]}>
                  <Text>Hold</Text>
         </View>
         <View style={[styles.card, styles.Good]}>
                  <Text>Me</Text>
         </View>
         <View style={[styles.card, styles.Good]}>
                  <Text>To</Text>
         </View>
         <View style={[styles.card, styles.Good]}>
                  <Text>Scroll</Text>
         </View>
         <View style={[styles.card, styles.Good]}>
                  <Text>More ..</Text>
         </View>
         <View style={[styles.card, styles.Good]}>
                  <Text>😎</Text>
         </View>
      </ScrollView>
    </View>
  );
};

export default GoodCards;

const styles = StyleSheet.create({
         headings:{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'black',
                  paddingHorizontal : 10,
                  marginTop:6,
          },
          containerBox: {
                  padding:8,
          },
          card: {
                  width: 100,
                  height:100,
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:4,
                  margin:8,
                  // color:'#000000',
          },
          Good: {
                  backgroundColor: '#CAD5E2',
                  elevation: 10,
                  shadowOffset:{
                           width: 0,
                           height: 1,
                  },
                  shadowColor:'#0e0aeb',
                  shadowOpacity: 0.5,
                  shadowRadius: 7,
          },
});
