import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import Formulario from '../componentes/FormularioDos';

const App = () => {
  
  const [dato1, setDato1] = useState(null);
   const [total, setTotal] = useState(null);

  const calculo = (dato1) => {
    if (!dato1) {
      //Si todos los datos están vacíos, manda una alerta
      Alert.alert('Error','Por favor ingrese todos los datos',[{Text:'OK'}]);
    }
    else{
      if(dato1 == 0)
      {
        Alert.alert('Resultado','El factorial de 0 es 1'),[{Text:'Entendido'}];
        return;
      }
      else{
        let factorial = 1;
        for(let x=1; x <= dato1; x++)
        {
          factorial = factorial * x;
        }
        Alert.alert('Resultado','El factorial de ' + dato1 + " es: " + factorial),[{Text:'Entendido'}];
      }
    }
  }

  return(
    <View>
      <Formulario setDato1={setDato1} />
      <View>
        <TouchableOpacity style={styles.botonCalcular} onPress={() => calculo(dato1)}>
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
    backgroundColor: 'black',
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
