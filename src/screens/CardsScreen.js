import { Text, View } from 'react-native';
import { Colors } from '../theme/colors';

export default function CardsScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.background,
            }}
        >
            <Text>CardsScreen</Text>
        </View>
    );
}
