import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '../assets/images';
import DashboardScreen from '../screens/DashboardScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import RecipientScreen from '../screens/RecipientScreen';
import CardsScreen from '../screens/CardsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
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
          fontWeight: route.name === 'Home' ? 'semibold' : 'light',
          marginTop: 2.3,
        },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = Images.home_nav;
          else if (route.name === 'Cards') iconName = Images.cards_nav;
          else if (route.name === 'Recipients') iconName = Images.people_nav;
          else if (route.name === 'Payments') iconName = Images.payments_nav;
          return (
            <Image
              source={iconName}
              style={{
                height:
                  iconName === Images.home_nav
                    ? 30
                    : iconName === Images.payments_nav
                      ? 23
                      : 27,
                width:
                  iconName === Images.home_nav
                    ? 31
                    : iconName === Images.payments_nav
                      ? 24
                      : 27,
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
