import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// form validation
import * as yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = yup.object().shape({
  passwordLength: yup.number()
    .min(4, 'must be minimum of 4 characters')
    .max(16, 'must be maximum of 16 characters')
    .required('length is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [setsymbol, setSetsymbol] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characterList = '';
    const UpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+';
    if (upperCase) {
      characterList += UpperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += numbersChars;
    }
    if (setsymbol) {
      characterList += symbolChars;
    }
    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result: string = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSetsymbol(false);
  };

  return (
    <ScrollView
      style={styles.Entirecontainer}
      keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.Textheader}>PasswordGenerator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              generatePassword(Number(values.passwordLength));
              console.log(Number(values.passwordLength));
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              // handleBlur,
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
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="number-pad"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textheader}>Include Lowercase</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={lowerCase}
                      onPress={() => {
                        setLowerCase(!lowerCase);
                      }}
                      fillColor="#29AB87"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textheader}>
                    Include Uppercase Letters
                  </Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={upperCase}
                      onPress={() => {
                        setUpperCase(!upperCase);
                      }}
                      fillColor="#02aacc"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textheader}>Include Numbers</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={numbers}
                      onPress={() => {
                        setNumbers(!numbers);
                      }}
                      fillColor="#C9A0DC"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textheader}>Include Symbols</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={setsymbol}
                      onPress={() => {
                        setSetsymbol(!setsymbol);
                      }}
                      fillColor="#FC80A5"
                    />
                  </View>
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={()=>{
                      handleSubmit();
                    }}
                    style={styles.generateButton}>
                    <Text style={styles.buttonText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                   onPress={()=>{
                    handleReset();
                    resetPassword();
                   }}
                   style={styles.resetButton}>
                    <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={styles.generatedPasswordContainer}>
            <Text style={styles.PassText}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  Entirecontainer: {
    backgroundColor: '#29AB87',
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#29AB87',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  Textheader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  inputColumn: {
    flexDirection: 'column',
  },
  password: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  errortext: {
    color: 'red',
    fontSize: 12,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '60%',
  },
  textheader: {
    fontSize: 16,
    color: '#333',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  generateButton: {
    backgroundColor: '#29AB87',
    padding: 12,
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  generatedPasswordContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  PassText: {
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
  },
});
