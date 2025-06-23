import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = ({
  user = {
    name: 'Satyam Sinha',
    initial: 'S',
    joinMonth: 'Oct',
    joinYear: '23',
    balance: 0,
  }
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>{user.initial}</Text>
        </View>
        <Text style={styles.growingText}>
          GROWING SINCE {user.joinMonth}'{user.joinYear}
        </Text>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.balance}>₹{user.balance.toFixed(2)}</Text>
        <Text style={styles.subText}>Stocks, F&O balance</Text>
        <TouchableOpacity style={styles.addMoneyButton}>
          <Text style={styles.addMoneyText}>+ Add money</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.menu}>
        {menuItem("receipt-outline", "Orders")}
        {menuItem("person-outline", "Account details")}
        {menuItem("bank-outline", "Banks & Autopay")}
        {menuItem("heart-outline", "Refer & Earn", "Get ₹500")}
        {menuItem("headset-outline", "Customer support 24x7")}
        {menuItem("document-text-outline", "Reports")}
      </ScrollView>
    </View>
  );
};

const menuItem = (iconName, title, rightText = "") => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={iconName} size={20} color="#fff" style={styles.icon} />
    <Text style={styles.menuText}>{title}</Text>
    {rightText !== "" && (
      <View style={styles.rightBox}>
        <Text style={styles.rightText}>{rightText}</Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileCircle: {
    backgroundColor: '#0d47a1',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  profileText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  growingText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 8,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  balance: {
    color: '#fff',
    fontSize: 18,
    marginTop: 6,
  },
  subText: {
    color: '#888',
    fontSize: 13,
  },
  addMoneyButton: {
    backgroundColor: '#004d40',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  addMoneyText: {
    color: '#0f0',
    fontWeight: 'bold',
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 12,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  rightBox: {
    backgroundColor: '#005500',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  rightText: {
    color: '#0f0',
    fontSize: 13,
  },
});

export default AccountScreen;