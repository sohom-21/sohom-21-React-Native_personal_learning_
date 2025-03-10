import React, { useState } from 'react';
import type { JSX } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';

//Constants
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';
import Toast from 'react-native-toast-message';
const App = (): JSX.Element => {
  const [inputvalue ,setInputvalue] = useState('');
  const [resultvalue ,setResultvalue] = useState('');
  const [targetCurrency ,setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency)=>{
    if(!inputvalue){
      return Toast.show({
        type: 'error',
        text1: 'Enter a value to Convert',
      });
    }
    const inputAmount = parseFloat(inputvalue);
    if (!isNaN(inputAmount)){
      const ConvertedValue = inputAmount * targetValue.Value;
      const result = `${targetValue.symbol} ${ConvertedValue.toFixed(2)}`;
      setResultvalue(result);
      setTargetCurrency(targetValue.name);
    }else{
      return Toast.show({
        type: 'error',
        text1: 'Enter a valid value',
      });
    }
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputvalue}
              clearButtonMode="always"
              onChangeText={setInputvalue}
              keyboardType="number-pad"
              placeholder="Enter Amount in Rupees"
            />
          </View>
          {resultvalue && <Text style={styles.resultTxt}>{resultvalue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}>
                  <CurrencyButton {...item}/>
                </Pressable>
            )}
          />
        </View>
      </View>
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
