import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Onboarding from './pages/Onboarding';

const Stack = createNativeStackNavigator();
const isOnboarding = true;
const App: FC = () => {
  const HomeComponent = isOnboarding ? Onboarding : Home;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
