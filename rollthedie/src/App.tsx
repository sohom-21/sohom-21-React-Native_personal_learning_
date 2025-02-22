import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dice from './components/Dice';

const App: React.FC = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View style={styles.headingAppName}>
          <Text style={styles.HeadingappName}>App</Text>
        </View>
        <View style={styles.RollContainer}>
          <Text>Roll</Text>
          <View style={styles.DieContainer}>
            <View>
              <Text>RollDie</Text>
            </View>
              <Dice />
            <TouchableOpacity>
              <Text>Click to Roll</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  headingAppName: {
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginTop: 25,
  },
  HeadingappName: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  real_Containner: {},
  RollContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2f2',
  },
  DieContainer: {
    margin: 12,
  },
});
