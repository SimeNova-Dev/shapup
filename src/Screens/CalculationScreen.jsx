import React from 'react';
import { View, Text } from 'react-native';

export default function CalculationScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf5ff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#7c3aed', marginBottom: 16 }}>
        🧮 Calculation Screen
      </Text>
      <Text style={{ color: '#6b7280', textAlign: 'center', paddingHorizontal: 24 }}>
        Your fitness calculations and progress tracking will go here
      </Text>
    </View>
  );
}
