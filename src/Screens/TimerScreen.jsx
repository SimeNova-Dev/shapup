import React from 'react';
import { View, Text } from 'react-native';

export default function TimerScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fef3c7' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d97706', marginBottom: 16 }}>
        ⏰ Timer Screen
      </Text>
      <Text style={{ color: '#6b7280', textAlign: 'center', paddingHorizontal: 24 }}>
        Your workout timers and intervals will go here
      </Text>
    </View>
  );
}