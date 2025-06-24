import React, { useEffect, useState, useCallback } from "react";
import { View, Dimensions, Text, RefreshControl, ScrollView } from "react-native";
import axios from "axios";
import { LineChart } from "react-native-gifted-charts";

export default function Graph(props) {
  const [chartData, setChartData] = useState([]);
  const [dates, setDates] = useState([]);
  const [refreshing, setRefreshing] = useState(false);


  const options = {
    method: "GET",
    url: "https://indian-stock-exchange-api2.p.rapidapi.com/historical_data",
    params: {
      stock_name: props.name,
      period: "1m",
      filter: "price",
    },
    headers: {
      'x-rapidapi-key': '18b9ba3ca9msh41b67661d5a89fdp152144jsn18b8312cb79d',
      'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com',
    },
  };

  
  async function fetchData() {
    try {
      const response = await axios.request(options);
      const values = response.data.datasets[0].values;
      const sliced = values.slice(12, 20);
      const formatted = sliced.map(([dateStr, price]) => {
        const [year, month, day] = dateStr.split("-");
        return {
          value: parseFloat(price),
          label: `${day}/${month}`,
          dataPointText: parseFloat(price).toFixed(2),
        };
      });
      setChartData(formatted);
      setDates(formatted.map(p => p.label));
      console.log(chartData);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   // Simulate a data fetch
  //   setTimeout(() => {// Update data
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  
  
  return (
      // <ScrollView refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      <ScrollView>
    <View>
      {/* <Text style={{ textAlign: "center", marginBottom: 10 }}>{props.name} Price Chart</Text> */}
      <LineChart
        data={chartData}
        thickness={2}
        width={Dimensions.get("window").width}
        height={270}
        hideDataPoints={false}
        color="#ffa726"
        hideRules
        yAxisTextStyle={{ color: "#000" }}
        xAxisLabelTextStyle={{ color: "#000" }}
        noOfSections={4}
        isAnimated
        curved
        areaChart
        startFillColor="rgba(255, 167, 38, 0.3)"
        endFillColor="rgba(255, 167, 38, 0.1)"
        startOpacity={0.4}
        endOpacity={0.1}
      />
    </View></ScrollView>
  );
}
