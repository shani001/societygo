import React,{useState} from "react";
import { View, Text,StyleSheet,Button,FlatList } from "react-native";

const ColorScreen=()=>{
const[colors,setcolor]=useState([])

    return(

<View>
<Button  title="add a color" onPress={()=>setcolor([...colors,randomrgb()])}/>

<FlatList

data={colors}
renderItem={({item})=>{
return <View  style={{height:100,width:100,backgroundColor: item}}/>}
}

/>


</View>)
}

const randomrgb =()=>{
const red= Math.floor(Math.random()*256)
const green= Math.floor(Math.random()*256)
const blue= Math.floor(Math.random()*256)
return `rgb(${red},${green},${blue})`
}

const styles=StyleSheet.create({})

export default ColorScreen;