import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";

const Imagedetail=(props)=>{
return (
<View>
<Image source={require("../../assets/tree.jpeg")}/>
    <Text>{props.title}</Text>
</View>

)};

export default Imagedetail;