// Simple test to check if our components are valid React components
import React from 'react';
import WorkoutScreen from './src/Screens/WorkoutScreen.jsx';
import TimerScreen from './src/Screens/TimerScreen.jsx';
import CalculationScreen from './src/Screens/CalculationScreen.jsx';

console.log('=== Component Validation Test ===');
console.log('WorkoutScreen:', WorkoutScreen);
console.log('WorkoutScreen type:', typeof WorkoutScreen);
console.log('WorkoutScreen prototype:', WorkoutScreen.prototype);
console.log('WorkoutScreen toString:', WorkoutScreen.toString());

console.log('TimerScreen:', TimerScreen);
console.log('TimerScreen type:', typeof TimerScreen);

console.log('CalculationScreen:', CalculationScreen);
console.log('CalculationScreen type:', typeof CalculationScreen);

// Test if we can create elements from these components
try {
  const workoutElement = React.createElement(WorkoutScreen);
  console.log('WorkoutScreen element created successfully:', workoutElement);
} catch (error) {
  console.log('Error creating WorkoutScreen element:', error.message);
}

try {
  const timerElement = React.createElement(TimerScreen);
  console.log('TimerScreen element created successfully:', timerElement);
} catch (error) {
  console.log('Error creating TimerScreen element:', error.message);
}

// Test inline component
function TestComponent() {
  return React.createElement('div', null, 'Test');
}

try {
  const testElement = React.createElement(TestComponent);
  console.log('TestComponent element created successfully:', testElement);
} catch (error) {
  console.log('Error creating TestComponent element:', error.message);
}

console.log('=== End Test ===');

export default TestComponent;
