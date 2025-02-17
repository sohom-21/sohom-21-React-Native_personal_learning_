import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Roll = () => {
  return (
    <View style={styles.RollContainer}>
      <Text>Roll</Text>
      <View style={styles.DieContainer}>
         <View >
            <Text>RollDie</Text>
         </View>
         <TouchableOpacity>
          <Text>Click to Roll</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
};

export default Roll;

const styles = StyleSheet.create({
         RollContainer:{},
         DieContainer:{},
});
