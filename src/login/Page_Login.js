import React, { useState } from 'react';
import {
 View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Page_Login(props) {

  const autenticacao = () => {
      props.navigation.navigate('Home');

  };

  return (
    <KeyboardAvoidingView style={css.mainContainer}>
    <ImageBackground style={css.Container}>
      <Text style={css.texto}>Luthien Shop </Text>


        <DismissKeyboard>
          <View style={css.container2}>
            <View style={css.inputBorder}>
              <TextInput
                placeholder="usuario"
                placeholderTextColor="#FFF5"
                style={css.input}
                clearButtonMode="always"
              />
            </View>

            <View style={css.inputBorder}>
              <TextInput
                placeholder="senha"
                placeholderTextColor="#FFF5"
                style={css.input}
                secureTextEntry={true}
                clearButtonMode="always"
              />
            </View>

            <TouchableOpacity style={css.btn} onPress={autenticacao}>
              <Text style={css.texto}>entrar</Text>
            </TouchableOpacity>
          </View>
        </DismissKeyboard>
    </ImageBackground>
         </KeyboardAvoidingView>
  );
}

const css = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: '',
    paddingVertical: '15%',
    backgroundColor: '#8B0000'
  },
  mainContainer: {
    flex: 1,
  },

  container2: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },

  input: {
    width: '100%',
    padding: 5,
    borderBottomWidth: 2,
    borderColor: '#fff5',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputBorder: {
    backgroundColor: '#fff2',
    width: '100%',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'red',
    marginTop: 12,
    color: 'white',
    padding: 8,
    borderRadius: 50,
    width: '50%',
  },
  texto: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  },
});
