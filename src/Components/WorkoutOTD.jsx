import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Lato_400Regular} from '@expo-google-fonts/lato';

// You can add multiple images here as you download them
const workoutImages = {
  fitness1: require('../../assets/Images/fitness1.jpg'),
  // Add more images as you download them:
  // fitness2: require('../../assets/Images/fitness2.jpg'),
  // fitness3: require('../../assets/Images/fitness3.jpg'),
};

// Function to get random image (you can expand this)
const getRandomWorkoutImage = () => {
  const imageKeys = Object.keys(workoutImages);
  const randomKey = imageKeys[Math.floor(Math.random() * imageKeys.length)];
  return workoutImages[randomKey];
};

const otdImage = getRandomWorkoutImage(); // or just use workoutImages.fitness1

const WorkoutOTD = () => {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity className="items-center justify-center my-4">
        <View className="rounded-3xl overflow-hidden h-40 w-[80%]">
            <ImageBackground
                source={otdImage}
                className="flex-1 justify-center items-center"
                resizeMode="cover"
                >
                <View className="bg-black/50 px-4 py-2 rounded-lg">
                    <Text 
                        className="text-white text-3xl tracking-tight" 
                        style={{ fontFamily: "Lato_400Regular" }}
                    >
                        Workout Of The Day
                    </Text>
                </View>
            </ImageBackground>
        </View>
    </TouchableOpacity>
  );
};

export default WorkoutOTD;