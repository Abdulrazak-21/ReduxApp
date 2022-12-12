import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TextInput, View, Text, TouchableOpacity, ActivityIndicator, Image, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux"


const EarthQuakeHomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const value = useSelector(state => state);
    useEffect(() => {
        dispatch({ type: "Get_EarthQuake" })
    }, [])
    if (value.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>

        )
    }
    if (value.error) {
        console.log(value.error)
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('EarthQuake_Screen2', { Items: item })}>
                <View style={{ borderWidth: 2, margin: 10, padding: 10, }} >
                    <Text style={{ color: '#000' }}>title: {item.properties.title}</Text>
                    <Text style={{ color: '#000' }}>mag : {item.properties.mag}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text style={{ fontSize: 20, padding: 10, color: 'black', textAlign: 'center' }}>EarthQuake Tracer Screen</Text>
            <View style={{ height: '90%', borderWidth: 2, margin: 10, }} >
                <FlatList
                    data={value.earthquakedata?.features}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {/* <Text>{state.post.type}</Text>
                <Text>{state.post.metadata.title}</Text>
                <Text>{state.post.features[0].properties.mag}</Text> */}
            </View>
        </View>
    )


}

export default EarthQuakeHomeScreen;