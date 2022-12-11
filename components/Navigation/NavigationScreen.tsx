import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHomeScreenFirst from '../MainHomeScreenFirst';
import AirlineHomeScreen from '../AirlineApp/HomeScreen/AirlineHomeScreen';
import MuesumHomeScreen from '../Muesum/HomeScreen/MuesumHomeScreen';
const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainHomeScreen" component={MainHomeScreenFirst} />
                <Stack.Screen name="AirlineHomeScreen" component={AirlineHomeScreen} />
                <Stack.Screen name="MuesumHomeScreen" component={MuesumHomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreen;

