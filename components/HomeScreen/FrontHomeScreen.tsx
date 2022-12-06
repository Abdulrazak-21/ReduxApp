import { StyleSheet, Text, Alert, Image, FlatList, Button, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
const FrontHomeScreen = () => {
    const value = useSelector(state => state);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    //console.log(search)
    useEffect(() => {
        dispatch({ type: "Get_Products" })
    }, [])
    const renderItemAPI = ({ item }) => {
        //console.log(search)
        if (item.id == search) {
            return (
                <View style={{ margin: 10, }}>
                    <Text>{item.id}</Text>
                </View>
            )
        }
    }
    // const HandleonPress = () => {
    //     // console.log(value.loading, 'loading data')
    //     // //console.log(search, 'search item')
    //     // const renderItemAPI = ({ item }) => {
    //     //     //console.log(search)
    //     //     console.log(search, 'search item')
    //     //     if (item.id == search) {
    //     //         return (
    //     //             <View style={{ margin: 10, }}>
    //     //                 <Text>{item.id}</Text>
    //     //             </View>
    //     //         )
    //     //     }
    //     // }
    //     // Alert.alert('clicked me')
    //     return (

    //         <View>
    //             {/* <FlatList
    //                 data={value.data.slice(0, 15)}
    //                 renderItem={renderItemAPI}
    //                 keyExtractor={item => item.id}
    //             /> */}
    //             <Image style={{ height: 100, width: 100, }} source={{ uri: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80' }} />
    //             <Text>Hello</Text>
    //         </View>
    //     )

    // }
    //console.log(value, "list")4

    // if (value != undefined) {
    //     const arr = value.data.slice(0, 20)
    //     console.log(arr, 'array data')
    // }


    // if (value !== undefined) {
    //     const arr = value.loading
    //     console.log(arr, 'loading data')
    // }

    //{"data":[{}],"error":'',"loading":false}
    // if (value == undefined) {
    //     console.log(a + '95')
    // }
    // console.log(a + 'Hello')
    //console.log(value + 'Helloworld')

    // if (value != undefined) {
    //     //const arr = value.data.slice(0, 1)
    //     //console.log(arr + 'Good Data')
    // }
    if (value != undefined) {
        const renderItemAPI = ({ item }) => {
            if (item.id == search) {
                return (
                    <View>
                        <Text>{item.id}</Text>
                    </View>
                )
            }
        }
        return (
            <View style={{ margin: 10, }}>
                <TextInput placeholder='search' placeholderTextColor='black' style={{ borderWidth: 2, padding: 10, borderRadius: 10, margin: 10, }} onChangeText={(text) => setSearch(text)} />
                <View style={{ alignItems: 'center', }}>
                    <Button title='Search' color='black' />
                </View>
                <FlatList
                    data={value.data.slice(0, 15)}
                    renderItem={renderItemAPI}
                    keyExtractor={item => item.id}
                />

            </View>
        )
    }
}

export default FrontHomeScreen

const styles = StyleSheet.create({})