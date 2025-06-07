import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-600 p-6">
      <View className="bg-orange-500 p-8 rounded-xl mb-6 shadow-lg">
        <Text className="text-3xl font-bold text-white text-center">
          🎨 NativeWind Colors
        </Text>
      </View>
      
      <View className="bg-pink-400 p-6 rounded-lg mb-4 w-80">
        <Text className="text-xl font-semibold text-white text-center">
          Pink Background
        </Text>
      </View>
      
      <View className="bg-cyan-500 p-6 rounded-lg mb-4 w-80">
        <Text className="text-xl font-semibold text-gray-900 text-center">
          Cyan Background
        </Text>
      </View>
      
      <View className="bg-yellow-400 p-6 rounded-lg mb-4 w-80">
        <Text className="text-xl font-semibold text-gray-800 text-center">
          Yellow Background
        </Text>
      </View>
      
      <View className="bg-emerald-600 p-6 rounded-lg w-80">
        <Text className="text-xl font-semibold text-white text-center">
          Emerald Background
        </Text>
      </View>
      
      <StatusBar style="light" />
    </View>
  );
}
