import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TextInput, View, Text, Image, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux"

const MuesumHomeScreen = () => {
    const dispatch = useDispatch();
    const Muesumvalue = useSelector(state => state);
    if (Muesumvalue.muesumdata1 != undefined) {
        //const muesumdata = value
        console.log(Muesumvalue.muesumdata1, "Muesum Data Fetched")
    }
    const [search, setsearch] = useState("");

    useEffect(() => {
        dispatch({ type: "Get_Muesum1" })
    }, [])
}

export default MuesumHomeScreen;