import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from "../../ThemeContext";
import { useNavigation } from "@react-navigation/native";

export default function Tab () {

    const navigation = useNavigation();
    
    function options (navigateTo, label) {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate(navigateTo)}>
                <View style={styles.shadowBox}>
                <Text style={[styles.cell]}>{label}</Text>
                <Ionicons name="arrow-forward-outline" size={24} style={[styles.cell,{textAlign:'right'}]} />
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <ScrollView>
            <Text style={{marginLeft: 10, fontSize: 24}}>Explore Categories</Text>
            {options('Nse', 'Trending')}
            {options('Bse', 'Most Active')}
            {options('Ipo', 'IPOs')}
            {options('Shockers', 'Price Shockers')}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  cell: { width: 170, padding: 5, backgroundColor: '#fff' },
  shadowBox: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 5,
  },
  circleImage: {
    width: 44,
    height: 34,
    textAlign:'left',
    borderRadius: 30,
    marginRight: 8,
  },
});
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Shockers')}>
                <View style={[styles.shadowBox, {marginBottom:20}]}>
                <Text style={[styles.cell]}>Price Shockers </Text>
                <Ionicons name="arrow-forward-outline" size={24} style={[styles.cell,{textAlign:'right'}]} />
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  cell: { width: 170, padding: 5, backgroundColor: '#fff' },
  shadowBox: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 5,
  },
  circleImage: {
    width: 44,
    height: 34,
    textAlign:'left',
    borderRadius: 30,
    marginRight: 8,
  },
});