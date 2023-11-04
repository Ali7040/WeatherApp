import React from "react"
import { Text, View } from 'react-native';


const OurChild = (props)=>{
const {message} = props
    return(
        <View style={{heigh: 200, width: 200, background: 'red'}}>
            <Text>{message}</Text>
        </View>
    )
}
export default OurChild