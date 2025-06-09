import {View, Text} from 'react-native';
import React from 'react';
import {useFonts } from 'expo-font';
import { Caveat_400Regular } from '@expo-google-fonts/caveat/400Regular';
import { Caveat_500Medium } from '@expo-google-fonts/caveat/500Medium';
import { Caveat_600SemiBold } from '@expo-google-fonts/caveat/600SemiBold';
import { Caveat_700Bold } from '@expo-google-fonts/caveat/700Bold';

const Welcome = () => {
    let [fontsLoaded] = useFonts({
    Caveat_400Regular, 
    Caveat_500Medium, 
    Caveat_600SemiBold, 
    Caveat_700Bold
  });
    
    if (!fontsLoaded) {
        return null;
    }
    
    return (
        <View>
            <Text style={{ 
                fontFamily: "Caveat_700Bold", 
                fontSize: 35,
                color : "#92400e",
                textAlign: 'center',
                }}>Welcome</Text>
        </View>
    );
};

export default Welcome;