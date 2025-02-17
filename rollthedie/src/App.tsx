import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import Roll from './components/Roll';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View style={styles.headingAppName}>
          <Text style={styles.HeadingappName}>App</Text>
          <View>
            <Roll />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  headingAppName:{
    alignItems:'flex-start',
    marginHorizontal: 20,
    marginTop:25,
  },
  HeadingappName:{
    fontSize: 32,
    fontWeight: 'bold',
  },
});
