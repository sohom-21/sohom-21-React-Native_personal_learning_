import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style = {styles.headings}>FlatCards</Text>
      <View style={styles.containerBox}>
         <View style={[styles.card, styles.cardOne]}>
                  <Text >Red</Text>
         </View>
         <View style={[styles.card, styles.cardTwo]}>
                  <Text>green</Text>
         </View>
         <View style={[styles.card, styles.cardThree]}>
                  <Text>blue</Text>
         </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
         headings:{
             fontSize: 24,
             fontWeight: 'bold',
             color: 'black',
             paddingHorizontal : 10,
             marginTop:6,
         },
         containerBox: {
                  flex:1,
                  flexDirection:'row',
                  padding:8,
         },
         card:{
                  height: 100,
                  width: 100,
                  margin: 8,
                  borderRadius:4,
                  flex:1,
                  justifyContent:'center',
                  alignItems:'center',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.18), 0 6px 20px 0 rgba(0, 0, 0, 0.18)',
         },
         cardOne:{
                  backgroundColor: '#EF5354',
         },
         cardTwo:{
                  backgroundColor: '#50DBB4',
         },
         cardThree:{
                  backgroundColor: '#5DA3FA',
         },
});
export default FlatCards;
