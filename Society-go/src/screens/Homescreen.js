import React from "react";
import { Text,View,TouchableOpacity } from "react-native";


const HomeScreen = ({navigation})=>{

return(
    <View>
        <Text>HomeScreen</Text>
    
    <TouchableOpacity onPress={()=> navigation.navigate('FLATLIST')}>
        <Text>Go to flatlist</Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('Tiles')}>
        <Text>Go to Tile</Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('counter')}>
        <Text>Go to counter app</Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('colorscreen')}>
        <Text>Go to colorsApp app</Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('colorscreen')}>
        <Text>Go to configcolorsApp app</Text>

    </TouchableOpacity>


    </View>
)};

export default HomeScreen;