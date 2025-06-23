import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';


export default function Indices() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[
        { label: 'NIFTY 50', value: '22824.65' },
        { label: 'NIFTY BANK', value: '55000.56' },
        { label: 'SENSEX', value: '65452.21' }
      ].map((item, index) => (
        <View key={index} style={styles.shadowBox}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
  justifyContent: 'center',
    marginLeft: 10,
    height: 90,
    width: 200,
    padding: 16,
    marginTop:20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginTop: 4,
  },
});

