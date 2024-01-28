import { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardFlatlist from './components/CardFlatList.js';
import Details from './components/Details'

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
 
const MyRoutes = createNativeStackNavigator();

const App = () => {

  return (
  
      <NavigationContainer>
        <MyRoutes.Navigator>
          <MyRoutes.Screen options={{title: "listaScreen"}} component={CardFlatlist} name="listaScreen"/>
          <MyRoutes.Screen name="Details" component={Details}/>
        </MyRoutes.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});




export default App;