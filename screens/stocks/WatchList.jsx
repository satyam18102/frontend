import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WatchList () {
    return(
        <ScrollView style={styles.container}>
            <View>
                <Text style={{textAlign:'center',marginTop:300, fontSize:20 }}>WatchListed stocks will be shown here.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        textAlign:'center',
    }
})