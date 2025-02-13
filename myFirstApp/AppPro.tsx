import React from 'react';
import {View, Text, SafeAreaView,StyleSheet,useColorScheme} from 'react-native';

function AppPro(): React.JSX.Element {
         const isDarkMode = useColorScheme() === 'dark';
         return (
                  <View style={styles.Container}>
                           <SafeAreaView>
                           <Text style={isDarkMode ? styles.whiteText : styles.DarkText}>Hello!!</Text>
                           </SafeAreaView>
                  </View>
         );
}

const styles = StyleSheet.create({
         Container:{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent:'center',
         },
         whiteText: {
                  color: '#FFFFFF',
                  fontSize: 20,
                  fontWeight: '700',
         },
         DarkText: {
                  color: '#000000',
                  fontSize: 20,
                  fontWeight: '900',
         },
});
export default AppPro;
