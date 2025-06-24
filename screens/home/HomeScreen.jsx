import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import NseMostActive from "../stocks/NseMostActive";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import WatchNav from "./WatchNav";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView vertical style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <View>
        <Searchbar
          placeholder="Search"
          style={{ margin: 10, borderRadius: 10, }}
        />
      </View>
      </TouchableOpacity>
      <WatchNav/>
      <NseMostActive/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily:'Lato-Regular',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'sans-serif',
  },
  tableContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});