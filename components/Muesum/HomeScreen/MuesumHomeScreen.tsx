import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TextInput, View, Text, Image, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux"

const MuesumHomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const Muesumvalue = useSelector(state => state);
    //if (Muesumvalue.muesumdata1 !== undefined) {
    //const muesumdata = value
    //const list = Muesumvalue?.muesumdata1?.objectIDs.slice(0, 10)
    //console.log(list, 'This is list muesum data')
    //const list = Muesumvalue?.muesumdata1?.objectIDs?.slice(0, 10)
    //console.log(list, "Muesum Data Fetched")
    //}
    const [search, setsearch] = useState("");

    useEffect(() => {
        dispatch({ type: "Get_Muesum1" })
    }, [])

    if (Muesumvalue.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>

        )
    }

    if (Muesumvalue.error) {
        console.log(Muesumvalue.error)
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('MuesumHomeScreen2', { Items: item })}>
                <View style={{ borderWidth: 2, margin: 10, padding: 10, }} >
                    <Text>Object: {item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    //if (Muesumvalue.muesumdata1.objectIDs !== undefined) {

    return (
        <View>
            <Text style={{ fontSize: 20, padding: 10, }}>Museum Screen</Text>
            <View style={{ height: '90%', borderWidth: 2, margin: 10, flexDirection: 'column' }} >
                <FlatList
                    data={Muesumvalue?.muesumdata1?.objectIDs?.slice(0, 10)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {/* <TouchableOpacity>
                    <Text style={{ fontSize: 35 }}>{state.post.objectIDs.slice(0, 20)}</Text>
                </TouchableOpacity> */}
                {/* <Text>{state.post.metadata.title}</Text>
                <Text>{state.post.features[0].properties.mag}</Text> */}
            </View>
        </View>
    )
    //}


}

export default MuesumHomeScreen;