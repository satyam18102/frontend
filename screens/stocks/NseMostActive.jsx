import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function NseMostActive() {

const navigation = useNavigation();
    // const [response, setResponse ] = React.useState([]);
  const [response, setResponse] = React.useState([
  {
    "ticker": "INID.NS",
    "company": "Indian Railway Finance Corporation",
    "price": 176.63,
    "percent_change": 2.51,
    "net_change": 4.33,
    "bid": 176.63,
    "ask": 176.69,
    "high": 180.5,
    "low": 171.6,
    "open": 172.4,
    "low_circuit_limit": 137.84,
    "up_circuit_limit": 206.76,
    "volume": 75031743,
    "close": 172.3,
    "overall_rating": "Neutral",
    "short_term_trend": "Bearish",
    "long_term_trend": "Bullish",
    "52_week_low": 31.95,
    "52_week_high": 200
  },
  {
    "ticker": "TISC.NS",
    "company": "Tata Steel",
    "price": 179.02,
    "percent_change": -1.79,
    "net_change": -3.26,
    "bid": 179.02,
    "ask": 179.04,
    "high": 180.5,
    "low": 178.85,
    "open": 179.4,
    "low_circuit_limit": 160.81,
    "up_circuit_limit": 196.54,
    "volume": 31251621,
    "close": 182.28,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 108.1,
    "52_week_high": 184.6
  },
  {
    "ticker": "AXBK.NS",
    "company": "Axis Bank",
    "price": 1230.75,
    "percent_change": -0.71,
    "net_change": -8.75,
    "bid": 1230.75,
    "ask": 1230.8,
    "high": 1246,
    "low": 1223.75,
    "open": 1246,
    "low_circuit_limit": 1115.55,
    "up_circuit_limit": 1363.45,
    "volume": 20948494,
    "close": 1239.5,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 927.15,
    "52_week_high": 1243.35
  },
  {
    "ticker": "SAMD.NS",
    "company": "Samvardhana Motherson International",
    "price": 186.8,
    "percent_change": 0.74,
    "net_change": 1.37,
    "bid": 186.8,
    "ask": 186.86,
    "high": 189.3,
    "low": 183.31,
    "open": 186,
    "low_circuit_limit": 166.88,
    "up_circuit_limit": 203.97,
    "volume": 19516500,
    "close": 185.43,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 81,
    "52_week_high": 188.2
  },
  {
    "ticker": "BPCL.NS",
    "company": "Bharat Petroleum Corporation",
    "price": 307.65,
    "percent_change": -1.75,
    "net_change": -5.48,
    "bid": 307.55,
    "ask": 307.7,
    "high": 319,
    "low": 307.6,
    "open": 318,
    "low_circuit_limit": 281.8,
    "up_circuit_limit": 344.4,
    "volume": 19384496,
    "close": 313.13,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 165.73,
    "52_week_high": 343.98
  },
  {
    "ticker": "BAJE.NS",
    "company": "Bharat Electronics",
    "price": 307.95,
    "percent_change": -1.27,
    "net_change": -3.95,
    "bid": 307.9,
    "ask": 307.95,
    "high": 314,
    "low": 307.8,
    "open": 312.7,
    "low_circuit_limit": 280.75,
    "up_circuit_limit": 343.05,
    "volume": 17563451,
    "close": 311.9,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 117.9,
    "52_week_high": 323
  },
  {
    "ticker": "PNBK.NS",
    "company": "Punjab National Bank",
    "price": 126.48,
    "percent_change": -1.56,
    "net_change": -2.01,
    "bid": 126.42,
    "ask": 126.48,
    "high": 127.8,
    "low": 126.33,
    "open": 127.46,
    "low_circuit_limit": 114.29,
    "up_circuit_limit": 139.68,
    "volume": 12244138,
    "close": 128.49,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 49.7,
    "52_week_high": 142.9
  },
  {
    "ticker": "CNBK.NS",
    "company": "CANARA BANK",
    "price": 120.3,
    "percent_change": -0.74,
    "net_change": -0.9,
    "bid": 120.3,
    "ask": 120.31,
    "high": 121.79,
    "low": 120.25,
    "open": 121.3,
    "low_circuit_limit": 109.08,
    "up_circuit_limit": 133.32,
    "volume": 12002651,
    "close": 121.2,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 58.33,
    "52_week_high": 128.9
  },
  {
    "ticker": "VDAN.NS",
    "company": "Vedanta",
    "price": 468.75,
    "percent_change": -0.26,
    "net_change": -1.2,
    "bid": 468.75,
    "ask": 468.85,
    "high": 474.6,
    "low": 464.2,
    "open": 472.75,
    "low_circuit_limit": 422.95,
    "up_circuit_limit": 516.9,
    "volume": 9842817,
    "close": 469.95,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 208,
    "52_week_high": 506.75
  },
  {
    "ticker": "JIOF.NS",
    "company": "Jio Financial Services",
    "price": 363,
    "percent_change": -0.7,
    "net_change": -2.55,
    "bid": 363.05,
    "ask": 363.1,
    "high": 366.8,
    "low": 361.1,
    "open": 366,
    "low_circuit_limit": 292.45,
    "up_circuit_limit": 438.65,
    "volume": 9449364,
    "close": 365.55,
    "overall_rating": "Bullish",
    "short_term_trend": "Bullish",
    "long_term_trend": "Bullish",
    "52_week_low": 202.8,
    "52_week_high": 394.7
  }
]);
const options = {
  method: 'GET',
  url: 'https://indian-stock-exchange-api2.p.rapidapi.com/NSE_most_active',
  headers: {
    'x-rapidapi-key': 'fee4787a3fmshf2c968dc7e96548p1567f7jsn0d2c8550a6ca',
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
    console.log('Fetching data from NSE Most Active Stocks API...');
		const response = await axios.request(options);
    setResponse(response.data);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}
// useEffect(() => {
//   fetchData();
// }
// , []);



  return (
    <ScrollView vertical style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <View style={styles.container}>
          <Text style={styles.title}>Explore </Text>
          <ScrollView style={{width: '100%'}}>
            <View>
              {/* <View style={[styles.row, styles.headerRow]}>
                <Text style={styles.headerCell}>Company</Text>
                <Text style={styles.headerCell2}>Price</Text>
              </View> */}
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
                              {/* <Text style={[styles.cell2, profClass]}>{stock.price}</Text> */}
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
    // fontFamily:'Lato-Regular'
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