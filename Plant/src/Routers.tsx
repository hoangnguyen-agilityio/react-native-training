import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';

const Stack = createNativeStackNavigator();
const isOnboarding = false;
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
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
