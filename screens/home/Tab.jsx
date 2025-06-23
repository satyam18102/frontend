import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import axios, { all } from "axios";

const sampleHoldings = [
  { symbol: "BHARTIARTL", qty: 2, avg: 538.05, ltp: 541.15 },
  { symbol: "HDFCBANK", qty: 2, avg: 1383.40, ltp: 1522.35 },
  { symbol: "INFY", qty: 1, avg: 1350.50, ltp: 1555.45 },
  { symbol: "ITC", qty: 5, avg: 202.00, ltp: 207.90 },
  // ... Add others as needed
];

export default function Tab () {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const translateY = useRef(new Animated.Value(Dimensions.get("window").height)).current;
  const [allHoldings, setAllHoldings] = React.useState([]);

  useEffect(() => {
    axios.get('http://192.168.29.61:8080/allholdings')
      .then(response => {
        setAllHoldings(response.data);
        console.log('Holdings fetched successfully:');
      })
      .catch(error => {
        Alert.alert('Failed to fetch holdings. Please try again later.');
      });
  }, []);

  const showSheet = (item) => {
    setSelectedItem(item);
    setVisible(true);
    Animated.timing(translateY, {
      toValue: Dimensions.get("window").height / 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideSheet = () => {
    Animated.timing(translateY, {
      toValue: Dimensions.get("window").height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  const renderRow = ({ item }) => (
    <TouchableOpacity onPress={() => showSheet(item)} style={styles.row}>
      <Text style={styles.symbol}>{item.symbol}</Text>
      <Text style={styles.text}>Qty: {item.qty}</Text>
      <Text style={styles.text}>Avg: {item.avg}</Text>
      <Text style={styles.text}>LTP: {item.ltp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={styles.title}>Holdings ({allHoldings.length})</Text>
      <FlatList data={allHoldings} renderItem={renderRow} keyExtractor={(item) => item.symbol} />

      <Modal transparent visible={visible} animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={hideSheet} />
        <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
          {selectedItem && (
            <>
              <Text style={styles.sheetTitle}>{selectedItem.symbol}</Text>
              <Text style={styles.sheetDetail}>Quantity: {selectedItem.qty}</Text>
              <Text style={styles.sheetDetail}>Avg. Cost: ₹{selectedItem.avg}</Text>
              <Text style={styles.sheetDetail}>LTP: ₹{selectedItem.ltp}</Text>
              {/* Insert Graph or Analysis here if needed */}
            </>
          )}
        </Animated.View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  row: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  symbol: { fontWeight: "bold", fontSize: 16 },
  text: { fontSize: 14 },
  overlay: {
    position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    height: Dimensions.get("window").height / 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  sheetTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  sheetDetail: { fontSize: 16, marginBottom: 6 },
});
