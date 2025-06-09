import React from 'react';
import { View, Text } from 'react-native';
import Welcome from '../Components/Welcome';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorkoutOTD from '../Components/WorkoutOTD';

export default function WorkoutScreen() {
  return (
    <SafeAreaView className='mx-[1%]'>
        <Welcome />
        <WorkoutOTD />
    </SafeAreaView>
  );
}