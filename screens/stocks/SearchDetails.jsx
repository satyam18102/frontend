import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import Graph from "./Graph";



export default function SearchDetails () {
    const route = useRoute();
    const {item} = route.params;


    return(
        <ScrollView>
            <View style={styles.shadowBox}>
                <Text style={{marginTop:20}}>{item.companyName}</Text>
                <Graph name ={item.companyName}/>

                <Text>{item.companyName}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  shadowBox: {
    marginTop:10,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
  },
});
