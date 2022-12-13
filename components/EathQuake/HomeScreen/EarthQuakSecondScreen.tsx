import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EarthQuakSecondScreen = ({ route }) => {
    const { params } = route;
    const { Items } = params;
    const { item } = Items;
    return (
        <View style={{ borderWidth: 2, margin: 10, padding: 10, alignSelf: 'center', width: '90%' }}>
            <Text style={{ color: '#000' }}>Place: {Items.properties.place}</Text>
            <Text style={{ color: '#000' }}>Magnitutde:{Items.properties.mag}</Text>
            <Text style={{ color: '#000' }}>Tsunami: {Items.properties.tsunami}</Text>
            <Text style={{ color: '#000' }}>Co-ordinates: {Items.geometry.coordinates}</Text>
        </View>
    )
}

export default EarthQuakSecondScreen

