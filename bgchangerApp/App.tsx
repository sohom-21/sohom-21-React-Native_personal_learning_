import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [ChangeBg, setChangeBg] = useState('#ffffff');
  const [isChangedBack, setIsChangedBack] = useState(false);

  const backgroundColor = () => {
    const hexRange  = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      const picker = Math.round(Math.floor(Math.random() * 16));
      hexColor += hexRange.charAt(picker);
    }
     setChangeBg(hexColor);
     setIsChangedBack(true);
  };

  const backgroundReturnColor = () => {
    if(isChangedBack){
      setChangeBg('#ffffff');
      setIsChangedBack(false);
    }
  };
  return (
    <>
    <StatusBar barStyle={'dark-content'} />
        <View style={[styles.container,{backgroundColor: ChangeBg}]}>
          <TouchableOpacity style={styles.button} onPress={backgroundColor}>
            <Text style={styles.buttonText}>Click ME to change BG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Nextbutton} onPress={backgroundReturnColor}>
            <Text style={styles.buttonText}>Click ME to make Bg Normal</Text>
         </TouchableOpacity>
        </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#0A3D62',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  Nextbutton: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#0A3D62',
    borderRadius: 10,
  },
});
