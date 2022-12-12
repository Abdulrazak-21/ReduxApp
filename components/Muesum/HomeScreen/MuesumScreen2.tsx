import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getMuesum2 } from '../../Api/FetchDataFromAPI';
import React from 'react'

const MuesumScreen2 = ({ route }) => {
    const { params } = route;
    const { Items } = params
    const dispatch = useDispatch();
    const Muesumvalue2 = useSelector(state => state);

    useEffect(() => {
        dispatch(getMuesum2(Items))
    }, [])
    return (
        <View>
            <Text>{Muesumvalue2.muesumdata2}</Text>
        </View>
    )
}

export default MuesumScreen2

const styles = StyleSheet.create({})