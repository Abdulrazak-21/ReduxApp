import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const MainHomeScreenFirst = ({ navigation }) => {
    return (
        <View>
            <View style={styles.ButtonWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('AirlineHomeScreen')} >
                    <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Go to Airline Screen</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('MuesumHomeScreen')} >
                    <Text style={{ textAlign: 'center', fontWeight: '600', color: '#fff', }}>Go to Muesum Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainHomeScreenFirst

const styles = StyleSheet.create({
    ButtonWrapper: {
        width: '80%',
        height: 50,
        margin: 10,
        backgroundColor: '#6699ff',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    }
})