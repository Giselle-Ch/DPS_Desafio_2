import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Formulario(props){
    const {setDato1, setDato2} = props;

    return(
        <View style={styles.cont}>
            <TextInput
            style={styles.input}
            placeholder="Ingresa el primer número"
            keyboardType="numeric"
            onChange={(e) => setDato1(e.nativeEvent.text)}
            />
            <TextInput
            style={styles.input}
            placeholder="Ingresa el segundo número"
            keyboardType="numeric"
            onChange={(e) => setDato2(e.nativeEvent.text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        marginTop: 140
      },

    input: {
        height: 40,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 7,
        margin: 20,
        marginHorizontal: 30,
        padding: 10,
        fontSize: 18
      }
})