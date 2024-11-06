import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/Homescreen';
import Flatlistfun from './src/screens/flatlist';
import Tiles from './src/screens/tiles';
import CounterApp from './src/screens/counterapp';
import ColorScreen from './src/screens/colorApp';
import ConfigcolorApp from './src/screens/configcolor';

export function HomeApp() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on my app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack =createNativeStackNavigator();

function App(){
return(
<NavigationContainer>
<Stack.Navigator>

<Stack.Screen name="Homescreen" component={HomeScreen }/>
<Stack.Screen name="FLATLIST" component={Flatlistfun }/>
<Stack.Screen name="homeApp" component={HomeApp }/>
<Stack.Screen name="Tiles" component={Tiles }/>
<Stack.Screen name="counter" component={CounterApp }/>
<Stack.Screen name="colorscreen" component={ColorScreen }/>
<Stack.Screen name="configcolorscreen" component={ConfigcolorApp }/>
</Stack.Navigator>

</NavigationContainer>
)


}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;