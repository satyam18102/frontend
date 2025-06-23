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
        <Text style={styles.headerText}>Groww</Text>
      </View>

      {/* App Logo */}
      <View style={styles.logoBox}>
        <Image source='../assets/logo1.jpg' style={styles.logo} />
      </View>

      {/* App Name */}
      <Text style={styles.appName}>Groww</Text>

      {/* Taglines */}
      <View style={styles.taglines}>
        <Text style={styles.tagline}>Apna Lund sabko bada lagta hai !!</Text>
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
    backgroundColor: '#000000',
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
    color: '#ffff',
  },
  logoBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 60,
    elevation: 5,
    marginBottom: 16,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  taglines: {
    marginTop: 10,
  },
  tagline: {
    fontSize: 15,
    color: '#ffff',
    textAlign: 'center',
    marginBottom: 5,
  },
  tagline2: {
    fontSize: 15,
    color: '#ffff',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
});

export default SplashScreen;
