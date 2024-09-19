import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function App() {

  const { control, handleSubmit } = useForm({});
  
  const [text, setText] = useState('');

  const onLogin = (data) => {
    alert(`Email: ${data.email}, Senha: ${data.password}`);
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#4682B4']} 
      style={styles.container}
    >
      <Image
        source={require('./assets/clima.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={value}
            onChangeText={onChange}
            secureTextEntry={true}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleSubmit(onLogin)}>
          <Text style={styles.buttonLabel}>Entrar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#ADD8E6', 
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#050505',
    fontSize: 20,
  },
});
