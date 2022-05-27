import 'react-native-gesture-handler';
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
import { createDrawerNavigator } from '@react-navigation/drawer';
import CameraScreen from './pages/Camera';

const Drawer = createDrawerNavigator();
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

const HomeTabs = () => (
  <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
    screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
const Routers: FC = () => {
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Onboarding" component={Onboarding} />
          <Drawer.Screen name="SignIn" component={SignIn} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routers;
