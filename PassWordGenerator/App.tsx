import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
// form validation
import * as yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = yup.object().shape({
  passwordLength: yup.number().min(4,'must be minimum of 4 characters').max(16,'must be maximum of 16 characters').required('length is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [setsymbol, setSetsymbol] = useState(false);

  const generatePassword = (passwordLength: number) =>{
    let characterList = '';
    const UpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+';
    if(upperCase){
      characterList += UpperCaseChars;
    }
    if(lowerCase){
      characterList += lowerCaseChars;
    }
    if(numbers){
      characterList += numbersChars;
    }
    if(setsymbol){
      characterList += symbolChars;
    }
    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) =>{
    let result: string = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () =>{
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSetsymbol(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.Textheader}>PasswordGenerator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={passwordSchema}
       onSubmit={values => {
        generatePassword(Number(values.passwordLength))
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleBlur,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.password}>Password Length:</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errortext}>
                {errors.passwordLength}
              </Text>
            )}
            <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder="Ex. 8"
            keyboardType="numeric"
            />
          </View>
         </View>
         <View style={styles.inputWrapper}></View>
         <View style={styles.inputWrapper}></View>
         <View style={styles.inputWrapper}></View>
         <View style={styles.inputWrapper}></View>
         <View style={styles.formActions}>
          <TouchableOpacity>
            <Text>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Reset</Text>
          </TouchableOpacity>
         </View>
         </>
       )}
     </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
