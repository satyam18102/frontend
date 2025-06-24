import { View, Text } from 'react-native';
import Indices from './Indices';

export default function Positions() {
  return (
    <View style={{ flex: 1, }}>
      <Indices/>
      <Text style={{ fontSize: 24, marginBottom:400,textAlign:'center', fontWeight: 'bold' }}>No Active Positions</Text>
    </View>
  );
}