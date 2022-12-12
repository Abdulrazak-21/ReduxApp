import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TextInput, View, Text, Image, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux"

const AirlineHomeScreen = () => {


    const dispatch = useDispatch();
    const value = useSelector(state => state);

    const [search, setsearch] = useState("");

    useEffect(() => {
        dispatch({ type: "Get_Airlines" })
    }, [])


    // if (value.Loading) {
    //     // Alert.alert(value.error, "Retry")
    //     console.log("loading")
    // }

    // if (value.error !== " ") {
    //     Alert.alert(value.error, "Retry")
    // }



    // if (value != undefined) {
    //     const arr = value.data
    //     var data_filtered = arr.filter(item => item.country == (search))


    //     //console.log(data_filtered, 'data_filtered')
    // }

    const renderItem = ({ item }) => {
        if (item.country !== undefined) {
            if (item.country.toLowerCase().includes(search.toLowerCase())) {
                return (
                    <View style={{ borderWidth: 1, borderRadius: 10, margin: 3, padding: 10, flexDirection: "row", alignContent: "center", width: '98%', justifyContent: "space-evenly" }}>
                        <Image style={{ height: 100, width: 100, borderWidth: 10, borderRadius: 10, resizeMode: "center" }} source={{ uri: item.logo }} />
                        <Text style={{ alignItems: 'center' }}>{item.name}</Text>
                        <Text style={{ alignItems: 'center' }}>{item.country}</Text>
                    </View>
                )
            }
        }
    }


    if (value != undefined) {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ borderWidth: 1, marginBottom: 10 }}
                    placeholder="Enter country name"
                    placeholderTextColor='#000'
                    onChangeText={val => setsearch(val)}
                />

                <FlatList
                    data={value.data?.slice(0, 100)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        //  alignContent: "center"
    }
})

export default AirlineHomeScreen;