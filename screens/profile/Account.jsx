import { View, Text } from "react-native";

export default function Account() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Account Screen</Text>
      <Text style={{ marginTop: 10 }}>This is the account screen.</Text>
    </View>
  );
}