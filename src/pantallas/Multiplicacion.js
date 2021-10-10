import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import Formulario from '../componentes/FormularioUno';

const App = () => {
  return(
    <View>
      <Formulario/>
      <View>
        <TouchableOpacity style={styles.botonCalcular} onPress={}>
            <Text style={styles.botonTexto}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  botonCalcular: {
    marginHorizontal: 80,
    marginTop: 50,
    backgroundColor: '#e78c41',
    borderRadius: 5,
    height: 40
  },

  botonTexto: {
    color: 'white',
    fontSize: 20,
    padding: 7,
    textAlign: 'center'
  },
})
