import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHomeScreenFirst from '../MainHomeScreenFirst';
import AirlineHomeScreen from '../AirlineApp/HomeScreen/AirlineHomeScreen';
import MuesumHomeScreen from '../Muesum/HomeScreen/MuesumHomeScreen';
import MuesumScreen2 from '../Muesum/HomeScreen/MuesumScreen2';
import EarthQuakeHomeScreen from '../EathQuake/HomeScreen/EarthQuakeHomeScreen';
import EarthQuakSecondScreen from '../EathQuake/HomeScreen/EarthQuakSecondScreen';
const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainHomeScreen" component={MainHomeScreenFirst} />
                <Stack.Screen name="AirlineHomeScreen" component={AirlineHomeScreen} />
                <Stack.Screen name="MuesumHomeScreen" component={MuesumHomeScreen} />
                <Stack.Screen name="MuesumHomeScreen2" component={MuesumScreen2} />
                <Stack.Screen name="EarthQuakeHomeScreen" component={EarthQuakeHomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="EarthQuake_Screen2" component={EarthQuakSecondScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreen;

