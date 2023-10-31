import React from "react"
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Data = [
    {},
    {},
    {}
]
const item = (props)=>{
    const { dt_txt, min, max, condition } = props
    return(
        <View>
            <Feather name={'sun'} size={50} color={white} />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

const UpcomingWeather = ()=>{
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style = {styles.title}>UpcomingWeather</Text>
                <FlatList
                data ={Data}
                renderItem ={}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    title: {
        fontSize : 32,
        color : "black",

    },
})
export default UpcomingWeather