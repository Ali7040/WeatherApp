import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'


const City = ()=>{

    return(
        <SafeAreaView>
             <Text style={[cityName, cityText]}>{name}</Text>
             <Text style={[countryName, cityText]}>{country}</Text>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
      flex: 1
    },
    cityName: {
      fontSize: 40
    },
    countryName: {
      fontSize: 30
    },
    cityText: {
      justifyContent: 'center',
      alignSelf: 'center',
      color: 'white',
      fontWeight: 'bold'
    },
    populationWrapper: {
      justifyContent: 'center',
      marginTop: 30
    },
    populationText: {
      fontSize: 25,
      marginLeft: 7.5,
      color: 'red'
    },
    riseSetWrapper: {
      justifyContent: 'space-around',
      marginTop: 30
    },
    rowLayout: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    riseSetText: {
      fontSize: 20,
      color: 'white'
    }
  })