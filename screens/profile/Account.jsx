import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Account ({user}) {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          title='S'
          size="large"
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>Satyam Sinha</Text>
        {/* <Text style={styles.dateText}>Growing since {'2023'}</Text> */}
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>₹0.00 <Text style={styles.balanceSubText}>Stocks, F&O balance</Text>
        </Text>
        <TouchableOpacity style={styles.addMoneyButton}>
          <Text style={styles.addMoneyText}>+ Add money</Text>
        </TouchableOpacity>
      </View>

      {renderOption('Orders', 'receipt', styles)}
      {renderOption('Account details', 'person', styles)}
      {renderOption('Banks & Autopay', 'account-balance', styles)}
      {renderOption('Refer & Earn', 'gift', styles, <Text style={styles.referText}>Get ₹500</Text>)}
      {renderOption('Customer support 24x7', 'support-agent', styles)}
      {renderOption('Reports', 'description', styles)}

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const renderOption = (label, icon, styles, rightContent = null) => (
  <TouchableOpacity style={styles.optionRow}>
    <MaterialIcons name={icon} size={24} color={styles.iconColor.color} />
    <Text style={styles.optionText}>{label}</Text>
    {rightContent && <View style={styles.rightContent}>{rightContent}</View>}
  </TouchableOpacity>
);

const createStyles = (darkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? '#121212' : '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: '#1565C0',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: darkMode ? '#fff' : '#000',
    marginTop: 8,
  },
  dateText: {
    fontSize: 12,
    color: darkMode ? '#bbb' : '#555',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  balanceText: {
    fontSize: 16,
    color: darkMode ? '#fff' : '#000',
  },
  balanceSubText: {
    fontSize: 12,
    color: darkMode ? '#aaa' : '#555',
  },
  addMoneyButton: {
    backgroundColor: '#1B5E20',
    padding: 8,
    borderRadius: 8,
  },
  addMoneyText: {
    color: '#fff',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: darkMode ? '#444' : '#ccc',
  },
  optionText: {
    marginLeft: 12,
    fontSize: 16,
    color: darkMode ? '#fff' : '#000',
    flex: 1,
  },
  rightContent: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  referText: {
    color: '#fff',
    fontSize: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  switchLabel: {
    fontSize: 16,
    color: darkMode ? '#fff' : '#000',
  },
  iconColor: {
    color: darkMode ? '#fff' : '#000'
  }
});
