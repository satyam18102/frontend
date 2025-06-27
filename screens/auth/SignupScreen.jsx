import * as React from 'react';
import { View, Alert, Text, StyleSheet, Image, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';



export default function SignupScereen ()  {

  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [mobileVerify, setMobileVerify] = React.useState(false);
  const [pan, setPan] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailVerify, setEmailVerify] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [otpSent, setOtpSent] = React.useState(false);
  const [otpInput, setOtpInput] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [verified, SetVerified] = React.useState(false);
  const [loading, setLoading] = React.useState(false)







  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);

    if (nameVar.length > 1) {
      setNameVerify(true);
    }
  }
  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }
  function handleMobile(text) {
    const mobileVar = text;
    setPhone(mobileVar);
    setMobileVerify(false);
    if (/[6-9]{1}[0-9]{9}/.test(mobileVar)) {
      setPhone(mobileVar);
      setMobileVerify(true);
    }
  }
  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }
  function verifyOtp() {
    if (otp == otpInput) {
      SetVerified(true);
      Alert.alert('Verification Successful');
    } else {
      alert('Incorrect OTP');
    }    
  }


function sendOtp () {
  setLoading(true)
    const userData = {
      name:name,
      email: email,
    };
    axios.get('http://192.168.30.73:8080/verify',{params : userData}).then((res)=>{
      if(res.data.status === 'ok'){
        setOtp(res.data.otp)
        setOtpSent(true)
        setLoading(false)
      }else{
        console.log('Login failed:', res.data);
        alert('Invalid credentials');
      }
    }).catch((error) => {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    });
  };




  function handleSignup () {
    const userData = {
      name:name,
      phone:phone,
      pan:pan,
      email: email,
      password: password,
    };
    axios.post('http://192.168.30.73:8080/register',userData).then((res)=>{
      if(res.data.status === 'ok'){
        navigation.replace('Login');
      }else{
        console.log('Login failed:', res.data.error);
        alert('Invalid credentials');
      }
    }).catch((error) => {
      console.error('Error during login:', error.status);
      alert('An error occurred during login. Please try again.');
    });
  };



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


      <View style={{flexDirection:'row'}}>
    <TextInput
      label="Phone"
      mode="outlined"
      activeOutlineColor="#023047"
      style={styles.input}
      value={phone}
      onChangeText={text => handleMobile(text)}
      maxLength={10}/>
      {phone.length < 1 ? null : mobileVerify ? (
              <Feather name="check-circle" color="green" size={20} style={{marginLeft:10,alignSelf:'center'}} />
            ) : (
              <Feather name="x-circle" color="red" size={20} style={{marginLeft:10,alignSelf:'center'}} />
            )}
            </View>
          {phone.length < 1 ? null : mobileVerify ? null : (
            <Text
              style={{
                color: 'red',
                marginBottom:10,
                marginTop:-15
              }}>
              Phone number with 6-9 and remaing 9 digit with 0-9
            </Text>
          )}


      
    <TextInput
      label="PAN Number"
      mode="outlined"
      activeOutlineColor="#023047"
      style={styles.input}
      value={pan}
      onChangeText={text => setPan(text)}/>

      <View style={{flexDirection:'row'}} >
    <TextInput
      label="Email"
      mode="outlined"
      activeOutlineColor="#023047"
      style={styles.input}
      disabled={otpSent}
      value={email}
      onChange={e => handleEmail(e)}/>
      {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color="green" size={20} style={{marginLeft:10,alignSelf:'center'}} />
            ) : (
              <Feather name="x-circle" color="red" size={20} style={{marginLeft:10,alignSelf:'center'}} />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text
              style={{
                color: 'red',
                marginBottom:10,
                marginTop:-15
              }}>
              Enter Proper Email Address
            </Text>
          )}
        {emailVerify? (
          <><Button style={{borderRadius:10,marginBottom:10}} disabled={otpSent} mode="contained" buttonColor='green' onPress={() => sendOtp()}>
            <Text>{otpSent ? 'OTP Sent' : 'Send OTP'}</Text>
      </Button>
      {loading && (
  <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 10 }} />
)}</>
        ):('')}
        {emailVerify ? (
          <TextInput
      label="OTP"
      mode="outlined"
      activeOutlineColor="#023047"
      style={styles.input}
      value={otpInput}
      onChangeText={eOtp => setOtpInput(eOtp)}/>
        ):('')}
        {emailVerify? (
          <Button disabled={!otpSent} style={{borderRadius:10,marginBottom:10}} mode="contained" buttonColor='green' onPress={() => verifyOtp()}>
            Verify
        </Button>
        ):('')}



    <TextInput
      label="Password"
      activeOutlineColor="#023047"
      secureTextEntry={showPassword}
      right={<TextInput.Icon icon="eye" onPress={()=>{setShowPassword(!showPassword)}} />}
      mode="outlined"
      style={styles.input}
      value={password}
      onChangeText={password => setPassword(password)}/>
      <Button style={[styles.button,{marginBottom:80}]} disabled={!verified} mode="contained" buttonColor='#219ebc' onPress={() => handleSignup()}>
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
    width:'95%',
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
  },
});