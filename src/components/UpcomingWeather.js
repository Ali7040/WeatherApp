import React from "react"
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const Data = [
    {},
    {},
    {}
]
const item = (props)=>{
    const { dt_txt, min, max, condition } = props
    return(
        <View></View>
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