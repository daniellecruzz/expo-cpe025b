import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>

      {/* HEADER */}
      <Text style={styles.headerText}>📋 My Course Goals</Text>

      {/* INPUT SECTION */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your course goal!'
          placeholderTextColor='#aaa'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title='Add Goal' onPress={addGoalHandler} color='#4a90d9' />
      </View>

      {/* GOALS LIST SECTION */}
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>List of Goals</Text>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>✦  {goal}</Text>
          </View>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#f0f4f8',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#4a90d9',
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#4a90d9',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '70%',
    padding: 13,
    marginRight: 8,
    color: '#333',
    fontSize: 15,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 8,
  },
  goalsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  goalItem: {
    backgroundColor: '#4a90d9',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  goalText: {
    color: '#fff',
    fontSize: 16,
  },
});