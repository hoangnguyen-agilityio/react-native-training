import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/Home';
import IndicatorPage from './pages/Indicator';
import ButtonsPage from './pages/Buttons';
import ListsPage from './pages/Lists';
import ViewsPage from './pages/Views';
import ModalPage from './pages/Modal';
import StatusBarPage from './pages/StatusBar';
import SwitchPage from './pages/Switch';
import TextInputPage from './pages/TextInput';
import TouchablePage from './pages/Touchable';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Indicator"
          component={IndicatorPage}
        />
        <Stack.Screen
          name="Buttons"
          component={ButtonsPage}
        />
        <Stack.Screen
          name="Lists"
          component={ListsPage}
        />
        <Stack.Screen
          name="Views"
          component={ViewsPage}
        />
        <Stack.Screen
          name="Modal"
          component={ModalPage}
        />
        <Stack.Screen
          name="StatusBar"
          component={StatusBarPage}
        />
        <Stack.Screen
          name="Switch"
          component={SwitchPage}
        />
        <Stack.Screen
          name="TextInput"
          component={TextInputPage}
        />
        <Stack.Screen
          name="Touchable"
          component={TouchablePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
