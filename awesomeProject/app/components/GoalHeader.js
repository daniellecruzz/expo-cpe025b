import { View, Text, StyleSheet } from 'react-native';

function GoalHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.emoji}>📋</Text>
      <Text style={styles.headerText}>My Course Goals</Text>
      <Text style={styles.subText}>Track what you want to achieve</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // ✅ CUSTOMIZED: Purple themed header card
    backgroundColor: '#6c3baa',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 6,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    fontSize: 13,
    color: '#ddd',
    marginTop: 4,
  },
});

export default GoalHeader;