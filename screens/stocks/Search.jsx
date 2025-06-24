import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Search ()  {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [response, setResponse] = React.useState([]);
  const [price, setPrice] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true)

  const options = {
  method: 'GET',
  url: 'https://indian-stock-exchange-api2.p.rapidapi.com/stock',
  params: {name: searchQuery},
  headers: {
    // 'x-rapidapi-key': 'fee4787a3fmshf2c968dc7e96548p1567f7jsn0d2c8550a6ca',
    'x-rapidapi-key': '18b9ba3ca9msh41b67661d5a89fdp152144jsn18b8312cb79d',
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
      setResponse(response.data);
      // console.log(response.data.companyName)
      setPrice(response.data.currentPrice['NSE'])
      setIsLoading(false)
	} catch (error) {
		console.error(error);
    Alert.alert(error);
	}
}
// React.useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchData();
//     }, 2500);
//     return () => clearTimeout(timer);
//   }, []);


      const isProfit = response.percentChange>=0 ? styles.profit : styles.loss;
      const isLoss = response.percentChange>=0 ? '+' : '';
      const isSearched = isLoading ? styles.none : '';


  return (
    <ScrollView>
    <View style={styles.container}>
        <Searchbar
          mode='outlined'
          placeholder="Search"
          onChangeText={setSearchQuery}
          style={{ margin: 10, borderRadius: 10, }}
          value={searchQuery}
        />
        <Button style={styles.button} mode="contained" buttonColor='#219ebc' onPress={() => fetchData()}>
          <Text>Search</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('SearchDetails', { item: response })}>
        <View  style={[styles.shadowBox,isSearched]}>
          <View style={styles.cell}>
            <Text style={{fontSize:16, fontFamily:'Poppins-Regular' , marginTop:5,}} >{response.companyName}</Text>
            <Text style={{color:'#444', marginTop: 10,}} >NSE</Text>
          </View>
          <View>
            <Text style={[styles.cell2]}>{price}</Text>
            <Text style={[{textAlign:'left', display: 'flex', fontSize: 14},isProfit]} >({isLoss}{response.percentChange}%)</Text>                            
          </View>
        </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  none: {
    display: 'none'
  },
  profit: {
    color: 'green',
  },
  cell: {
    flex: 1,
    textAlign: 'left',
  },
  cell2: {
    flex: 1,
    textAlign: 'right',
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