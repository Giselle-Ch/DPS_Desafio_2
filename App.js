import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navegacion from './src/navegacion/Navegacion';

const App = () => {
  return(
    <NavigationContainer>
      <Navegacion></Navegacion>
    </NavigationContainer>
  );
}

export default App;