import { useNavigation } from '@react-navigation/native';
import { Image, StatusBar, View } from 'react-native';
import { Colors } from '../theme/colors';
import { Images } from '../assets/images';

const Splash = () => {
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.replace('Login');
    }, 2500);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.primary,
                paddingBottom: 25,
            }}
        >
            <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
            <Image source={Images.splash_logo} style={{ width: 120, height: 120 }} />
        </View>
    );
};

export default Splash;
