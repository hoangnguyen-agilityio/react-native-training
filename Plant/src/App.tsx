import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationListType } from './constants/navigationList';
import { CurrentPageContext } from './contexts/currentPage';

import Routers from './Routers';

interface ActiveScreen {
  currentPage: keyof NavigationListType;
  currentHomePage: keyof NavigationListType;
}

const App: FC = () => {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>({
    currentPage: 'Home',
    currentHomePage: 'Home',
  });

  return (
    <CurrentPageContext.Provider value={[activeScreen, setActiveScreen]}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routers />
      </SafeAreaView>
    </CurrentPageContext.Provider>
  );
};

export default App;
