import React from 'react';
import { StatusBar, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = ()=>{


  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feel}>Feels Like</Text>
        <View style={styles.HLwrapper}>
          <Text style={styles.HL}>High: 38</Text>
          <Text style={styles.HL}>Low: 29</Text>
        </View>
      </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its Sunny</Text>
          <Text style={styles.message}>Its Perfect T-shirt Weather.</Text>
        </View>
        
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "gray",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48

  },
  feel : {
    fontSize: 30,
    color: "black"
  },
  HL: {
    color: "black",
    fontSize: 20,
  },
  HLwrapper : {
    flexDirection: "row",
    
  },
  bodyWrapper : {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,

  },
  description : {
    fontSize: 48,
  },
  message : {
    fontSize: 30,
  }

})
export default CurrentWeather
