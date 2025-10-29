import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import { Images } from '../assets/images';
import DashboardScreen from '../screens/DashboardScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import RecipientScreen from '../screens/RecipientScreen';
import CardsScreen from '../screens/CardsScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color, size }) => {
          let iconName: ImageSourcePropType;

          if (route.name === 'Home') iconName = Images.home_nav;
          else if (route.name === 'Cards') iconName = Images.cards_nav;
          else if (route.name === 'Recipients') iconName = Images.people_nav;
          else iconName = Images.payments_nav;

          const iconSize =
            iconName === Images.home_nav
              ? { height: 30, width: 31 }
              : iconName === Images.payments_nav
                ? { height: 23, width: 24 }
                : { height: 27, width: 27 };

          return (
            <Image
              source={iconName}
              style={{
                ...iconSize,
                resizeMode: 'contain',
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
      <Tab.Screen name="Recipients" component={RecipientScreen} />
      <Tab.Screen name="Payments" component={TransactionsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: '8.7%',
    width: '100%',
    backgroundColor: 'white',
    shadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 1,
    elevation: 10,
    paddingTop: 4,
    marginTop: 0.8,
    paddingRight: 10,
    paddingLeft: 7,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2.5,
  },
});
