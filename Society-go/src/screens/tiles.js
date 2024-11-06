import React from "react";
import { Text,View,TouchableOpacity } from "react-native";
import Imagedetail from "../components/imagedetail";


const Tiles = (props) =>{

return(
    <View>
    <Imagedetail title="forest" />
    <Imagedetail title="rain"/>
    <Imagedetail title="tree"/>
    </View>
)};

export default Tiles;