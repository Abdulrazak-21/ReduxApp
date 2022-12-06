import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontHomeScreen from '../HomeScreen/FrontHomeScreen';
const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FrontHomeScreen" component={FrontHomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreen;

