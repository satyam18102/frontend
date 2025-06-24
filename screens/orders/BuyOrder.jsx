import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';


// Main App component
export default function BuyOrder() {
    const route = useRoute();
      const {item} = route.params;
    const navigation = useNavigation();
  const [quantity, setQuantity] = useState('');


  function handlePurchase () {
    const userData = {
      name: item.company,
      qty: quantity,
      price: item.price,
      avg: item.price,
      owner: 'CP'    
    };
    axios.post('http://192.168.234.232:8080/newOrder',userData).then((res)=>{
        console.log(userData)
      if(res.data.status === 'ok'){
        Alert.alert("Order Successfull")
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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={{textAlign:'center',fontSize:20,marginBottom:20,marginTop:20,fontWeight:'bold'}}>{item.company}</Text>
        <View style={styles.inputRow}>
          <TouchableOpacity
            style={styles.dropdownContainer}
          >
            <Text style={styles.dropdownText}>Qty </Text>
            <Text style={styles.arrowIcon}></Text>
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            onChangeText={setQuantity}
            value={quantity}
            placeholder="Enter quantity"
            keyboardType="numeric"
            selectionColor="#B2F7E6" // Placeholder for cursor color
          />
        </View>

        {/* Price Row */}
        <View style={styles.inputRow}>
          <TouchableOpacity
            style={styles.dropdownContainer}
          >
            <Text style={styles.dropdownText}>Price</Text>
            <Text style={styles.arrowIcon}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.priceButton}>
            <Text style={styles.priceButtonText}>At Market Price</Text>
          </TouchableOpacity>
        </View>
        <Button style={styles.buyBtn} mode="contained" onPress={() => handlePurchase()}>
                      <Text>BUY</Text>
                    </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
    marginTop:-500,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  buyBtn: {
    backgroundColor: '#04b488',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  arrowIcon: {
    fontSize: 18,
    marginLeft: 5,
    color: '#333',
  },
  quantityInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#E6FFF5',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
    borderColor: '#B2F7E6',
    borderWidth: 1,
  },
  priceButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceButtonText: {
    fontSize: 18,
    color: '#777',
    fontWeight: '500',
  },
});