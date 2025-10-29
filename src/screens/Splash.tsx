import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { Colors } from '../theme/Colors';
import { Images } from '../assets/images';

type SplashScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Splash'
>;

const Splash: React.FC = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 2500);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
            <Image source={Images.splash_logo} style={{ width: 120, height: 120 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingBottom: 25,
    },
});

export default Splash;
