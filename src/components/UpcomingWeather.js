import React from "react"
import { StatusBar, Text, View, SafeAreaView, StyleSheet } from 'react-native';


const UpcomingWeather = ()=>{

    return(
        <SafeAreaView style={styles.container}>
            <Text>UpcomingWeather</Text>
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
    }
})
export default UpcomingWeather