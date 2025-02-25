import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import type { JSX } from 'react';
type CurrencyButtonProps = PropsWithChildren<{
         name: string;
         Value: number;
         flag: string;
         symbol: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.flag}</Text>
      <Text style={styles.textStyle}>{props.name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
         buttonStyle:{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                  width: '100%',
                  alignItems: 'center',
                  // justifyContent: 'center',
         },
         textStyle:{
                  fontSize: 16,
         },
});
