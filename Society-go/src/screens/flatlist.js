import React from "react";
import { Text,View,FlatList ,StyleSheet} from "react-native";

function Flatlistfun()
{
    const array=[
        {name:"friend 1",age:23},
        {name:"friend 2",age:23},
        {name:"friend 3",age:23},
        {name:"friend 4",age:23},
        {name:"friend 5",age:23}
    ];

    return(<FlatList
    keyExtractor={friend=>friend.name}
    data={array}
    renderItem={({item})=>{

        return <Text style={styles.textstyle}>{item.name} age - {item.age}</Text>
    }}
    />)};

const styles = StyleSheet.create({
    textstyle: {
      marginVertical:100
    },
  });




export default Flatlistfun;