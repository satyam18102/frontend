import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from "../../ThemeContext";
import { useNavigation } from "@react-navigation/native";

export default function Tab () {

    const navigation = useNavigation();

    return(
        <ScrollView>
            <Text style={{marginLeft: 10, fontSize: 24}}>Explore Categories</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Nse')}>
                <View style={styles.shadowBox}>
                <Text style={[styles.cell]}>Trending</Text>
                <Ionicons name="arrow-forward-outline" size={24} style={[styles.cell,{textAlign:'right'}]} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Bse')}>
                <View style={styles.shadowBox}>
                <Text style={[styles.cell]}>Most Active</Text>
                <Ionicons name="arrow-forward-outline" size={24} style={[styles.cell,{textAlign:'right'}]} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Ipo')}>
                <View style={styles.shadowBox}>
                <Text style={[styles.cell]}>IPOs </Text>
                <Ionicons name="arrow-forward-outline" size={24} style={[styles.cell,{textAlign:'right'}]} />
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