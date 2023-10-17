import React from 'react';
import { DsProvider } from '@meiuca/dsaas-react-native-core'
import Acessibillity from './src/components/acessibillity';


function App(): JSX.Element {
  return (
    <DsProvider theme='matriz_default' mode='light'>
      <Acessibillity />
    </DsProvider>
  );
}

export default App;