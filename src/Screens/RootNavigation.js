import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HomeScreen from './HomeScreen';
import BookDoctorScreen from './BookDoctorScreen';

const USE_NATIVE_NAVIGATION = true;
let Stack;
if (USE_NATIVE_NAVIGATION) {
    enableScreens(true);
    Stack = createNativeStackNavigator();
} else {
    enableScreens(false);
    Stack = createStackNavigator();
}

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'HomeScreen'}
              screenOptions={{headerShown: false}}
            >
                <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
                <Stack.Screen name={'BookDoctorScreen'} component={BookDoctorScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;
