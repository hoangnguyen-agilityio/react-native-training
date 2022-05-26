import React, { FC, useContext, useEffect } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import Species from './pages/Species';
import Plants from './pages/Plants';
import PlantDetail from './pages/PlantDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import { CurrentPageContext } from './contexts/currentPage';
import { View } from 'react-native';
import TabBar from './components/TabBar';

const Stack = createNativeStackNavigator();
const isOnboarding = false;
const Routers: FC = () => {
  const [activeScreen, setActiveScreen] = useContext(CurrentPageContext);
  // Should show onboarding
  const HomeComponent = isOnboarding ? Onboarding : Home;
  const navigationRef = useNavigationContainerRef();
  let isShowTabBar = !isOnboarding;

  useEffect(() => {
    navigationRef.addListener('state', e => {
      const route = navigationRef.getCurrentRoute()?.name;

      if (route !== 'Articles' && route !== 'SignIn') {
        setActiveScreen({
          currentPage: 'Home',
          currentHomePage: route,
        });
      }

      if (route === 'SignIn') {
        isShowTabBar = false;
      }
    });
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ flex: 1, position: 'relative' }}>
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
          <Stack.Screen
            name="Species"
            component={Species}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Plants"
            component={Plants}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlantDetail"
            component={PlantDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Articles"
            component={Articles}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArticleDetail"
            component={ArticleDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {isShowTabBar && <TabBar />}
      </View>
    </NavigationContainer>
  );
};

export default Routers;
