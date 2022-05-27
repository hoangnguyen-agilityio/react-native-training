import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from './components/TabBar';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import Species from './pages/Species';
import Plants from './pages/Plants';
import PlantDetail from './pages/PlantDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Profile from './pages/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Species" component={Species} />
      <Stack.Screen name="Plants" component={Plants} />
      <Stack.Screen name="PlantDetail" component={PlantDetail} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
    </HomeStack.Navigator>
  );
};

const isLoggedIn = true;

const Routers: FC = () => {
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          tabBar={props => <TabBar {...props} />}
          screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routers;
