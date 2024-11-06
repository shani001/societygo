import React,{useState} from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const CounterApp=()=>{
const [counter,setcounter]=useState(0)

return(
<View>
    <Button title="Increase"
    onPress={()=>setcounter(counter+1)}
    
    />

    <Button title="Decrease"
    onPress={()=>setcounter(counter-1)}
    />
    <Text>counter value : {counter}</Text>
</View>)


}

const styles=StyleSheet.create({})


export default CounterApp;