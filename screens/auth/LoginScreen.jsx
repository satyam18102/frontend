import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';



export default function LoginScreen ()  {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true);


  function handleLogin () {
    const userData = {
      email: email,
      password: password,
    };
    axios.post('http://192.168.30.73:8080/login',userData).then((res)=>{
      if(res.data.status === 'ok'){
        navigation.replace('MainApp');
      }else{
        console.log('Login failed:', res.data.error);
        alert('Invalid credentials');
      }
    }).catch((error) => {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    });
  };


  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/logo1.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.heading}>Login</Text>
    <TextInput
      label="Email"
      mode="outlined"
      style={styles.input}
      value={email}
      onChangeText={text => setEmail(text)}/>
    <TextInput
          label="Password"
          activeOutlineColor="#023047"
          secureTextEntry={showPassword}
          right={<TextInput.Icon icon="eye" onPress={()=>{setShowPassword(!showPassword)}} />}
          mode="outlined"
          style={styles.input}
          value={password}
          onChangeText={password => setPassword(password)}/>
      <Text style={{textAlign: 'right',marginBottom:5, textDecorationLine:'underline'}}>Forgot Password?</Text>
      <TouchableOpacity onPress={()=>{handleLogin()}}>
      <Button style={styles.button} mode="contained" buttonColor='#219ebc' onPress={() => handleLogin()}>
        Login
      </Button>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', marginTop: 10}}>OR</Text>
      <Button style={styles.button}  mode="contained" buttonColor='#219ebc' onPress={() => navigation.navigate('Signup')}>
        Signup
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
  },
});