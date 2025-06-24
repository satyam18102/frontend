import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}> 
      {/* App Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Finstox</Text>
      </View>

      {/* App Logo */}
      <View style={styles.logoBox}>
        <Image source={require('../assets/logo1.jpg')} style={styles.logo} />
      </View>

      {/* App Name */}
      <Text style={styles.appName}>Finstox</Text>

      {/* Taglines */}
      <View style={styles.taglines}>
        <Text style={styles.tagline}>Investing made simple</Text>
        {/* <br></br> */}
        {/* <br></br> */}
        <Text style={styles.tagline2}>Made with &hearts; in India</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  logoBox: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 60,
    elevation: 5,
    marginBottom: 16,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor:'#fff'
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  taglines: {
    marginTop: 10,
    fontSize: 20,
  },
  tagline: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  tagline2: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
});

export default SplashScreen;
