import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity,ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function Shockers() {

const navigation = useNavigation();
    const [response, setResponse ] = React.useState([]);
    const [loading, setLoading ] = React.useState(true);
const options = {
  method: 'GET',
  url: 'https://indian-stock-exchange-api2.p.rapidapi.com/price_shockers',
  headers: {
    'x-rapidapi-key': '27b9a3dfabmshad3df316b8e8c26p1cb953jsn058b23c43f16',
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
};

async function fetchData() {
    try {
    console.log('Fetching data from NSE Most Active Stocks API...');
        const response = await axios.request(options);
    setResponse(response.data.NSE_PriceShocker);
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

if(loading){
  return(
    <View>
        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 10 }} />
      <Text style={{fontSize:25,textAlign:'center',marginTop:25,fontWeight:'bold'}}>Loading</Text>
    </View>
  )
}

  return (
    <ScrollView vertical style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <View style={styles.container}>
          <ScrollView style={{width: '100%'}}>
            <View>
              {response.map((stock, index) => {
                const profClass = stock.net_change>=0 ? styles.profit : styles.loss;
                const isProfit = stock.netChange>=0 ? styles.profit : styles.loss;
                const isLoss = stock.netChange>=0 ? '+' : '';
    
                return (
                    <View key={index} style={{borderBottomWidth: 1,paddingBottom: 15,borderBottomColor: '#ccc',}}>
                      <TouchableOpacity onPress={() => navigation.navigate('ShockersDetails', { item: stock })}>
                  <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.cell}>
                              <Text style={{fontSize:16, fontFamily:'Poppins-Regular' , marginTop:5,}} >{stock.displayName.toUpperCase()}</Text>
                              <Text style={{color:'#444', marginTop: 10,}} >BSE</Text>
                          </View>
                          <View>
                              <Text style={[styles.cell2]}>{stock.price}</Text>
                <Text style={[{textAlign:'left', display: 'flex', fontSize: 14},isProfit]} >{isLoss}{stock.netChange}({isLoss}{stock.percentChange}%)</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    marginTop: 20,
  },
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  tableContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerRow: {
    backgroundColor: '#fff',
  },
  headerCell: {
    fontFamily: 'Lato-Regular',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  headerCell2: {
    width: 100,
    textAlign: 'right',
    flex: 1,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    textAlign: 'left',
  },
  cell2: {
    flex: 1,
    textAlign: 'right',
    fontSize:18,
  },
  profit: { color: 'green' },
  loss: { color: 'red' }
});