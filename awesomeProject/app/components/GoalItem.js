import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function GoalItem(props) {
  return (
    <TouchableOpacity onPress={() => props.onDeleteGoal(props.id)}>
      <View style={styles.goalItem}>
        {/* ✅ CUSTOMIZED: New icon and text style */}
        <Text style={styles.goalIcon}>🎯</Text>
        <Text style={styles.goalText}>{props.text}</Text>
        {/* ✅ CUSTOMIZED: Delete button */}
        <Text style={styles.deleteText}>✕</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    // ✅ CUSTOMIZED: New color theme - purple gradient feel
    backgroundColor: '#6c3baa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // ✅ CUSTOMIZED: Added shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  goalIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  goalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  deleteText: {
    color: '#ffaaaa',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoalItem;