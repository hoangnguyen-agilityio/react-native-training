import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import SignUp from './pages/SignUp';

const Stack = createNativeStackNavigator();
const isOnboarding = true;
const Routers: FC = () => {
  const HomeComponent = isOnboarding ? Onboarding : Home;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
