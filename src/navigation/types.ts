import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Main: NavigatorScreenParams<MainTabParamList>;
    Profile: undefined;
};

export type MainTabParamList = {
    Home: undefined;
    Cards: undefined;
    Recipients: undefined;
    Payments: undefined;
};
