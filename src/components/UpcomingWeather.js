import React from "react"
import { Text, View, SafeAreaView, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Data = [
    {},
    {},
    {}
]
const Item = (props)=>{
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
const renderItem = ({item}) =>(
    <Item 
    condition={item.weather[0].main}
    dt_txt={item.dt_txt}
    min={item.main.temp_min}
    max={item.main.temp_max} />
)
    return(
        <SafeAreaView style={styles.container}>
            <Text >UpcomingWeather</Text>
            <Image source={require("../../assets/upcoming-background.jpg") styles={styles.Image}} />
                <FlatList
                data ={Data}
                renderItem ={renderItem}
                keyExtractor={(item) => item.dt_txt}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
      }
})
export default UpcomingWeather