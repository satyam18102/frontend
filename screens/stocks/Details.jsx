import { Text,View, StyleSheet,ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Graph from "./Graph";
import { useEffect, useState } from "react";

export default function Details() {
  const [values,setValues]=useState([]);
  const route = useRoute();
  const {item} = route.params;
  const navigation = useNavigation();
  const exchange = item.ticker.includes(".NS") ? "NSE" : "BSE";
  const isProfit = item.net_change>=0 ? styles.profit : styles.loss;
  const isLoss = item.net_change>=0 ? '+' : '';

      const options = {
          method: 'GET',
          url: 'https://indian-stock-exchange-api2.p.rapidapi.com/historical_data',
          params: {
              stock_name: item.company,
              period: '1m',
      filter: 'price'
  },
  headers: {
      'x-rapidapi-key': '18b9ba3ca9msh41b67661d5a89fdp152144jsn18b8312cb79d',
      // 'x-rapidapi-key': 'fee4787a3fmshf2c968dc7e96548p1567f7jsn0d2c8550a6ca',
      'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
  };



  return (
    <ScrollView style={{backgroundColor: '#fbfbffb' }}>
    <View style={styles.container}>
        <View style={styles.heading}>
            <Graph name={item.company} />
            <Text style={{ fontSize:18, textAlign:'left', marginTop: 10 }}>{item.company.toUpperCase()}</Text>
                <Text style={{textAlign:'left', fontWeight: "bold", display: 'flex', fontSize: 14}} >{exchange}</Text>
            <View style={{flexDirection: 'row',marginBottom: 10, marginTop: 10}}>
                <Text style={{display: 'flex', fontSize: 22}} >{item.price}</Text>
                <Text style={[{textAlign:'left', alignContent:'center',alignSelf:'center', marginLeft:15, display: 'flex', fontSize: 14},isProfit]} >{isLoss}{item.net_change}({isLoss}{item.percent_change}%)</Text>
            </View>
        </View>
        <View style={{marginTop:10,flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button style={styles.buyBtn} mode="contained" onPress={() => navigation.navigate('Buy',{ item: item })}>
              <Text>BUY</Text>
            </Button>
            <Button style={styles.sellBtn} mode="contained" onPress={() => navigation.navigate('Sell')}>
              <Text>SELL</Text>
            </Button>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
            <Text style={styles.text}>Open  <Text style={{fontWeight:'bold'}}>{item.open}</Text></Text>
            <Text style={styles.text}>High  <Text style={{fontWeight:'bold'}}>{item.high}</Text></Text>
            <Text style={styles.text}>Lower Circuit  <Text style={{fontWeight:'bold'}}>{item.low_circuit_limit}</Text></Text>
            {/* <Text style={styles.text}>52 Week Low  <Text style={{fontWeight:'bold'}}>{stock['52_week_low']}</Text></Text> */}
        </View>
        <View>
            <Text style={styles.text}>Close <Text style={{fontWeight:'bold'}}>{item.close}</Text></Text>
            <Text style={styles.text}>Low  <Text style={{fontWeight:'bold'}}>{item.low}</Text></Text>
            <Text style={styles.text}>Upper Limit  <Text style={{fontWeight:'bold'}}>{item.up_circuit_limit}</Text></Text>
            {/* <Text style={styles.text}>52 Week High  <Text style={{fontWeight:'bold'}}>{stock['52_week_high']}</Text></Text> */}
            <Text style={styles.text}>Volume  <Text style={{fontWeight:'bold'}}>{item.volume}</Text></Text>
        </View>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text:{
    marginTop:5,
    color: '#424242',
  },
  buyBtn: {
    backgroundColor: '#04b488',
    padding: 10,
    width: '45%',
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  sellBtn: {
    backgroundColor: '#ed5533',
    padding: 10,
    width: '45%',
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  heading:{
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  loss:{
    color: 'red'
  },
  profit:{
    color: 'green'
  },
});