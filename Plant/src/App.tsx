import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

import Routers from './Routers';

const App: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routers />
    </SafeAreaView>
  );
};

export default App;
