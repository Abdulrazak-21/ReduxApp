import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MuesumScreen2 = ({ route }) => {
    const { params } = route;
    const { Items } = params
    return (
        <View>
            <Text>{Items}</Text>
        </View>
    )
}

export default MuesumScreen2

const styles = StyleSheet.create({})