import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';



export default function LoginScreen ()  {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [pan, setPan] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      style={{backgroundColor: 'white'}}>
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/logo1.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.heading}>SignUp</Text>
    <TextInput
      label="Name"
      mode="outlined"
      activeOutlineColor="#023047"
      style={styles.input}
      value={name}
      onChangeText={text => setName(text)}/>
    <TextInput
      label="Phone"
      mode="outlined"
      activeOutlineColor="#023047"
      style={styles.input}
      value={phone}
      onChangeText={text => setPhone(text)}/>
    <TextInput
      label="PAN Number"
      mode="outlined"
      activeOutlineColor="#023047"
      style={styles.input}
      value={pan}
      onChangeText={text => setPan(text)}/>
    <TextInput
      label="Email"
      mode="outlined"
      activeOutlineColor="#023047"
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
      <Button style={styles.button} mode="contained" buttonColor='#219ebc' onPress={() => navigation.navigate('Login')}>
        Create Account
      </Button>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
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