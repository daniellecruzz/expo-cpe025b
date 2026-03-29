import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalHeader from './components/GoalHeader.js';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalId)
    );
  };

  return (
    <View style={styles.appContainer}>

      <GoalHeader />

      {/* INPUT SECTION */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/* GOALS LIST SECTION */}
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                // ✅ CUSTOMIZED: Passing delete function to GoalItem
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#f3eeff',
  },
  goalListContainer: {
    flex: 1,
    marginTop: 8,
  },
});