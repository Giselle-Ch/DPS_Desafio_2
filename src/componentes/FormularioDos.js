import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

export default function Formulario(props){
    const {setDato1} = props;

    return(
        <View style={styles.cont}>
            <TextInput
            style={styles.input}
            placeholder="Ingrese un número"
            keyboardType="numeric"
            onChange={(e) => setDato1(e.nativeEvent.text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        marginTop: 190
      },

    input: {
        height: 40,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 7,
        margin: 20,
        marginHorizontal: 30,
        padding: 10,
        fontSize: 18
      }
})