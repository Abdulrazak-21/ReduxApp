import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AirlineHomeScreen from '../AirlineApp/HomeScreen/AirlineHomeScreen';
const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AirlineHomeScreen" component={AirlineHomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreen;

