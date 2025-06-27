import React, { useEffect, useRef, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  Alert, Modal, TouchableOpacity, Animated, Dimensions, ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import ShockersDetails from './ShockersDetails';

export default function Ipo() {
  const navigation = useNavigation();
    const [response, setResponse ] = React.useState([]);
    const [loading, setLoading ] = React.useState(true);
    const [allHoldings, setAllHoldings] = useState([]);
      const [selectedStock, setSelectedStock] = useState(null);
      const [visible, setVisible] = useState(false);
      const translateY = useRef(new Animated.Value(Dimensions.get("window").height)).current;


const options = {
  method: 'GET',
  url: 'https://indian-stock-exchange-api2.p.rapidapi.com/ipo',
  headers: {
    'x-rapidapi-key': '27b9a3dfabmshad3df316b8e8c26p1cb953jsn058b23c43f16',
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
};

async function fetchData() {
    try {
    console.log('Fetching data from NSE Most Active Stocks API...');
        const response = await axios.request(options);
    setResponse(response.data.listed);
        console.log(response.data);
    setLoading(false)
    } catch (error) {
        console.error(error);
    }
}
useEffect(() => {
  fetchData();
}
, []);

const showDetails = (stock) => {
    setSelectedStock(stock);
    setVisible(true);
    Animated.timing(translateY, {
      toValue: Dimensions.get("window").height / 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideDetails = () => {
    Animated.timing(translateY, {
      toValue: Dimensions.get("window").height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };


if(loading){
  return(
    <View>
        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 10 }} />
      <Text style={{fontSize:25,textAlign:'center',marginTop:25,fontWeight:'bold'}}>Loading</Text>
    </View>
  )
}
  return (
    <ScrollView>
      <View style={styles.container}>
        <ScrollView vertical style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.container}>
                  <ScrollView style={{width: '100%'}}>
                    <View>
                      {response.map((stock, index) => {
            
                        return (
                            <View key={index} style={{borderBottomWidth: 1,paddingBottom: 15,borderBottomColor: '#ccc',}}>
                              <TouchableOpacity key={index} onPress={() => showDetails(stock)}>
                          <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                                  <View style={styles.cell}>
                                      <Text style={{fontSize:16, fontFamily:'Poppins-Regular' , marginTop:5,}} >{stock.name.toUpperCase()}</Text>
                                      {/* <Text style={{color:'#444', marginTop: 10,}} >BSE</Text> */}
                                  </View>
                                  <View>
                                      <Text style={[styles.cell2]}>{stock.status}</Text>
                        {/* <Text style={[{textAlign:'left', display: 'flex', fontSize: 14},isProfit]} >{isLoss}{stock.netChange}({isLoss}{stock.percentChange}%)</Text> */}
                                  </View>
                          </View>
                          </TouchableOpacity>
                          </View>
                        );
                      })}
                    </View>
                  </ScrollView>
                </View>
                </ScrollView>
      </View>

      <Modal transparent visible={visible} animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={hideDetails} />
        <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
          
          {selectedStock && (
            <>
              <Text style={styles.sheetTitle}>{selectedStock.name}</Text>
              <Text style={styles.detail}>Status: {selectedStock.status}</Text>
              <Text style={styles.detail}>Min Price: ₹{selectedStock.min_price}</Text>
              <Text style={styles.detail}>Max Price: ₹{selectedStock.max_price}</Text>
              <Text style={[styles.detail]}>Bidding Start Date: {selectedStock.bidding_start_date}</Text>
              <Text style={[styles.detail]}>Listing Gains: {selectedStock.listing_gains}</Text>
              <Text style={[styles.detail]}>Listing Price: {selectedStock.bidding_start_date}</Text>
              <Text style={[styles.detail]}> {selectedStock.additional_text}</Text>
              {/* <Text style={styles.detail}>Net: {selectedStock.net}</Text> */}
            </>
          )}
        </Animated.View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dark:{
    backgroundColor: '#000',
    color: '#fff'
  },
  light:{
    backgroundColor: '#fff',
    color: '#000'
  },
  container: {
    padding: 16 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 12 
  },
  tableContainer: { 
    borderWidth: 1, 
    borderColor: '#ccc' 
  },
  row: {
    flexDirection: 'row',
    padding: 6,
    // height: 50,
    marginTop : 10,
  },
  headerRow: { 
    backgroundColor: '#000' 
  },
  headerCell: { 
    fontWeight: 'bold', 
    width: 170, 
    padding: 8,
  },
  cell: { 
    width: 170, 
    padding: 5,
  },
  profit: { 
    color: 'green',
  },
  loss: { 
    color: 'red',
  },
  overlay: {
    position: "absolute", 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    height: Dimensions.get("window").height / 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20
  },
  shadowBox: {
    marginTop: 5,
    flexDirection: 'row',
    padding: 16,
    borderRadius: 10,
    elevation: 5,
  },
  sheetTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  detail: { 
    fontSize: 16, 
    marginBottom: 6,
  }
});
