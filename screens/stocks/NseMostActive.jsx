import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function NseMostActive() {

const navigation = useNavigation();
    const [response, setResponse ] = React.useState([]);
    const [loading, setLoading ] = React.useState(true);
const options = {
  method: 'GET',
  url: 'https://indian-stock-exchange-api2.p.rapidapi.com/NSE_most_active',
  headers: {
    // 'x-rapidapi-key': 'fee4787a3fmshf2c968dc7e96548p1567f7jsn0d2c8550a6ca',
    'x-rapidapi-key': '18b9ba3ca9msh41b67661d5a89fdp152144jsn18b8312cb79d',
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
    console.log('Fetching data from NSE Most Active Stocks API...');
		const response = await axios.request(options);
    setResponse(response.data);
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
      <Text style={{fontSize:25,textAlign:'center',marginTop:25,fontWeight:'bold'}}>Loading</Text>
    </View>
  )
}

  return (
    <ScrollView vertical style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <View style={styles.container}>
          <Text style={styles.title}>Explore </Text>
          <ScrollView style={{width: '100%'}}>
            <View>
              {response.map((stock, index) => {
                const profClass = stock.net_change>=0 ? styles.profit : styles.loss;
                const exchange = stock.ticker.includes(".NS") ? "NSE" : "BSE";
                const isProfit = stock.net_change>=0 ? styles.profit : styles.loss;
                const isLoss = stock.net_change>=0 ? '+' : '';
    
                return (
                    <View key={index} style={{borderBottomWidth: 1,paddingBottom: 15,borderBottomColor: '#ccc',}}>
                      <TouchableOpacity onPress={() => navigation.navigate('Details', { item: stock })}>
                  <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View style={styles.cell}>
                              <Text style={{fontSize:16, fontFamily:'Poppins-Regular' , marginTop:5,}} >{stock.company.toUpperCase()}</Text>
                              <Text style={{color:'#444', marginTop: 10,}} >{exchange}</Text>
                          </View>
                          <View>
                              <Text style={[styles.cell2]}>{stock.price}</Text>
                <Text style={[{textAlign:'left', display: 'flex', fontSize: 14},isProfit]} >{isLoss}{stock.net_change}({isLoss}{stock.percent_change}%)</Text>
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