import { Text, ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function BuyOrder () {
    return(
        <ScrollView style={styles.container}>
            <View style={{textAlign:'right', justifyContent:'flex-end'}}>
                <TextInput
                style={styles.input}
                mode="outlined"
                label={'Quantity'}
                />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        padding:20,
    },
    input:{
        textAlign:'center',
        width: 150,
    }
});