// GoalInput.js
// ✅ CUSTOMIZED: New input design and theme
import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function textInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    if (enteredGoalText.trim() === '') return;
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    // ✅ CUSTOMIZED: New card-style input container
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter your goal here...'
        placeholderTextColor='#aaa'
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredGoalText}
      />
      {/* ✅ CUSTOMIZED: Replaced Button with TouchableOpacity for custom style */}
      <TouchableOpacity style={styles.addButton} onPress={addGoalHandler}>
        <Text style={styles.addButtonText}>+ ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // ✅ CUSTOMIZED: Card style with shadow
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  textInput: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#6c3baa',
    borderRadius: 10,
    backgroundColor: '#f9f5ff',
    padding: 12,
    marginRight: 10,
    color: '#333',
    fontSize: 15,
  },
  addButton: {
    // ✅ CUSTOMIZED: Purple themed button
    backgroundColor: '#6c3baa',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default GoalInput;