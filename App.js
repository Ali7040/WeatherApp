import React from "react"
import { StatusBar, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import CurrentWeather from "./src/components/CurrentWeather"
import UpcomingWeather from "./src/components/UpcomingWeather";

const App = () =>{


  return(
    <View>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
})
export default App