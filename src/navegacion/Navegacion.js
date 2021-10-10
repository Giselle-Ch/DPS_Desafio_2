import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Suma from '../pantallas/Suma';
import Resta from '../pantallas/Resta';
import Multiplicacion from '../pantallas/Multiplicacion';
import Division from '../pantallas/Division';
import Factorial from '../pantallas/Factorial';

const Tab = createBottomTabNavigator();

const Navegacion = () => {
  return(
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#000',
        height: 70
      }
    }}>
      <Tab.Screen name="suma" component={Suma} 
        options={{
          title:'Suma',
          headerStyle:{
            backgroundColor: '#cbcddf',
          },
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../iconos/Add.png')} resizeMode='contain'
                style={{
                  ...styles.icono,
                  tintColor: focused ? "#a4a9e2" :"#6c757d"
                }}
              />
            </View>
          )
       }} 
      />
      <Tab.Screen name="resta" component={Resta} 
        options={{
          title:'Resta',
          headerStyle:{
            backgroundColor: '#D8F3DC'
          },
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../iconos/Substract.png')} resizeMode='contain'
                style={{
                  ...styles.icono,
                  tintColor: focused ? "#469D89" :"#6c757d"
                }}
              />
            </View>
          )
        }} 
      />
      <Tab.Screen name="multiplicacion" component={Multiplicacion} 
        options={{
          title:'Multiplicación',
          headerStyle:{
            backgroundColor: '#f7d5a2'
          },
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../iconos/Multiply.png')} resizeMode='contain'
                style={{
                  ...styles.icono,
                  tintColor: focused ? "#f7d5a2" :"#6c757d"
                }}
              />
            </View>
          )
        }} 
      />
      <Tab.Screen name="division" component={Division} 
        options={{
          title:'Division',
          headerStyle:{
            backgroundColor: '#cdbad1'
          },
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../iconos/Divide.png')} resizeMode='contain'
                style={{
                  ...styles.icono,
                  tintColor: focused ? "#bea9c2" :"#6c757d"
                }}
              />
            </View>
          )
        }} 
      />
      <Tab.Screen name="factorial" component={Factorial} 
        options={{
          title:'Factorial',
          headerStyle:{
            backgroundColor: '#CED4DA'
          },
          tabBarIcon: ({focused}) => (
            <View>
              <Image source={require('../iconos/Factorial.png')} resizeMode='contain'
                style={{
                  ...styles.icono,
                  tintColor: focused ? "#F8F9FA" :"#6c757d"
                }}
              />
            </View>
          )
        }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icono: {
    width: 30,
    height: 30
  }
})


export default Navegacion;