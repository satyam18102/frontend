import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigation = useNavigation();

  const handleMenuClick = (index, route) => {
    setSelectedMenu(index);
    navigation.navigate(route);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/logo.png')} style={styles.logo} /> */}

      <ScrollView contentContainerStyle={styles.menuList}>
        {[
          { label: 'Holdings', route: 'Holdings' },
          { label: 'Positions', route: 'Positions' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMenuClick(index, item.route)}
          >
            <Text
              style={
                selectedMenu === index
                  ? styles.activeMenuText
                  : styles.menuText
              }
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.separator} />

        <TouchableOpacity style={styles.profile} onPress={handleProfileClick}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>ZU</Text>
          </View>
          <Text style={styles.username}>USERID</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 16,
  },
  menuList: {
    flexGrow: 1,
  },
  menuText: {
    fontSize: 16,
    marginVertical: 8,
    color: '#444',
  },
  activeMenuText: {
    fontSize: 16,
    marginVertical: 8,
    color: '#007bff',
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginVertical: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
  },
});

export default Menu;
