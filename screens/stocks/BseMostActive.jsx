import {Text, View, ScrollView} from 'react-native';

export default function BseMostActive() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>BSE Most Active Stocks</Text>
        <ScrollView style={{ width: '100%' }}>
        <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.headerCell}>Company</Text>
            <Text style={styles.headerCell2}>Price</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.cell}>Swiggy</Text>
            <Text style={styles.cell2}>458</Text>
        </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tableContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerRow: {
    backgroundColor: '#fff',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  headerCell2: {
    width: 100,
    textAlign: 'right',
    flex: 1,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    textAlign: 'left',
  },
  cell2: {
    flex: 1,
    textAlign: 'right',
  },
};