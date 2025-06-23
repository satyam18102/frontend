import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WatchList () {
    return(
        <ScrollView style={styles.container}>
            <View>
                <Text>CHUT PAGLU</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    }
})