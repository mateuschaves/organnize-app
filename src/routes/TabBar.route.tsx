import React from 'react';

import HomeScreen from '../screens/HomeScreen/Index';
import CategoryScreen from '../screens/CategoryScreen';
import { DotSize, TabElementDisplayOptions, AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';

import { Tag, ChartPieSlice, Storefront } from 'phosphor-react-native';

import { useTheme } from 'styled-components';
import EstablishmentScreen from '../screens/EstablishmentScreen';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tabs = AnimatedTabBarNavigator();

function BottomNavigation() {
  const theme = useTheme();

  const houseIcon = ({focused, color}: TabBarIconProps) => (
    <ChartPieSlice size={28} color={focused ? theme.colors.brandBlack : color} />
  );

  const tagIcon = ({focused, color}: TabBarIconProps) => (
    <Tag size={28} color={focused ? theme.colors.brandBlack : color} />
  );

  const establishmentIcon = ({focused, color}: TabBarIconProps) => (
    <Storefront size={28} color={focused ? theme.colors.brandBlack : color} />
  );

  return (
    <Tabs.Navigator
      initialRouteName='HomeScreen'
      tabBarOptions={{
        activeTintColor: theme.colors.brandPrimary,
        inactiveTintColor: theme.colors.brandDarkGray,
        activeBackgroundColor: theme.colors.brandWhite,
      }}
      appearance={{
        shadow: true,
        floating: true,
        whenActiveShow: TabElementDisplayOptions.BOTH,
        dotSize: DotSize.MEDIUM,
        tabBarBackground: theme.colors.brandWhite,
        activeTabBackgrounds: [
          theme.colors.brandGray,
          theme.colors.brandGray,
          theme.colors.brandGray,
        ],
      }}>
      <Tabs.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: houseIcon,
        }}
      />
      <Tabs.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: tagIcon,
        }}
      />
      <Tabs.Screen
        name="Establishment"
        component={EstablishmentScreen}
        options={{
          headerShown: false,
          tabBarIcon: establishmentIcon,
        }}
        />
      
    </Tabs.Navigator>
  );
}

export default BottomNavigation;