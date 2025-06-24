import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function WatchNav () {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Watchlist')}>
            <View style={styles.option}>
                <Ionicons name='bookmark-outline' size={50} style={styles.icon} />
                <Text style={styles.label}>WatchList</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Positions')}>
            <View style={styles.option}>
                <Ionicons name='bag-outline' size={50} style={styles.icon} />
                <Text style={styles.label}>Positions</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  option: {
    padding: 15,
    alignItems: 'center',
    height: '120',
    width: '180',
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  icon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  
  shadowBox: {
    marginTop:20,
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 5,
  },
});
