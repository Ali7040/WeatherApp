import React from "react"
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';


const UpcomingWeather = ()=>{

    return(
        <SafeAreaView style={styles.container}>
            <Text style = {styles.title}>UpcomingWeather</Text>
            <View>
                <Text>
                    Monday
                </Text>
            </View>
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