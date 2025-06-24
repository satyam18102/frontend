import React, { useEffect, useRef, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  Alert, Modal, TouchableOpacity, Animated, Dimensions
} from 'react-native';
import axios from 'axios';

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [visible, setVisible] = useState(false);
  const translateY = useRef(new Animated.Value(Dimensions.get("window").height)).current;

  useEffect(() => {
    axios.get('http://192.168.234.232:8080/allOrders')
      .then(response => {
        console.log([response.data])
        const res = response.data;
        setAllOrders(res);
        console.log(allOrders)
      })
      .catch(() => {
        Alert.alert('Failed to fetch holdings. Please try again later.');
      });
  }, []);

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

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Orders ({allOrders.length})</Text>
        <ScrollView>
          <View>
            <View style={[styles.row, styles.headerRow]}>
              <Text style={styles.headerCell}>Company</Text>
              <Text style={[styles.headerCell,{textAlign:'right'}]}>Price</Text>
            </View>

              {allOrders.map((stock, index) => {

              return (
                <TouchableOpacity key={index} onPress={() => showDetails(stock)}>
                  <View style={styles.shadowBox}>
                    <Text style={styles.cell}>{stock.name}</Text>
                    <Text style={[styles.cell,{textAlign:'right'}]}>{stock.price}</Text>
                  </View>
                </TouchableOpacity>
              );
             })}
          </View>
        </ScrollView>
      </View>

      {/* Modal Bottom Sheet */}
      <Modal transparent visible={visible} animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={hideDetails} />
        <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
          {selectedStock && (
            <>
              <Text style={styles.sheetTitle}>{selectedStock.name}</Text>
              <Text style={styles.detail}>Quantity: {selectedStock.qty}</Text>
              <Text style={styles.detail}>Average Cost: ₹{selectedStock.avg}</Text>
              <Text style={styles.detail}>LTP: ₹{selectedStock.price}</Text>
              <Text style={[styles.detail,{color:'green'}]}>BUY Order</Text>
            </>
          )}
        </Animated.View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  tableContainer: { borderWidth: 1, borderColor: '#ccc' },
  row: {
    flexDirection: 'row',
    padding: 6,
    height: 50,
    marginTop : 10,
  },
  headerRow: { backgroundColor: '#fff' },
  headerCell: { fontWeight: 'bold', width: 170, padding: 8 },
  cell: { width: 170, padding: 5, backgroundColor: '#fff' },
  profit: { color: 'green' },
  loss: { color: 'red' },
  overlay: {
    position: "absolute", top: 0, bottom: 0, left: 0, right: 0,
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
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 5,
  },
  sheetTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  detail: { fontSize: 16, marginBottom: 6 }
});
