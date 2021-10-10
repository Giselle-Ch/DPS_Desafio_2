import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import Formulario from '../componentes/FormularioUno';

const App = () => {
  
  const [dato1, setDato1] = useState(null);
  const [dato2, setDato2] = useState(null);

  const calculo = (dato1, dato2) => {
    if (!dato1 && !dato2) {
      //Si todos los datos están vacíos, manda una alerta
      Alert.alert('Error','Por favor ingrese todos los datos',[{Text:'OK'}]);
    }
    else if (!dato1 || !dato2) {
      Alert.alert('Error','Favor ingresar un valor'),[{Text:'OK'}];
    }
    else{
      const multiplicacion = dato1 * dato2;

      Alert.alert ('Resultado', 'El resultado de la multiplicación es: ' + multiplicacion),[{Text:'Entendido'}];
    }
  }

  return(
    <View>
      <Formulario setDato1={setDato1} setDato2={setDato2} />
      <View>
        <TouchableOpacity style={styles.botonCalcular} onPress={() => calculo(dato1, dato2)}>
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
