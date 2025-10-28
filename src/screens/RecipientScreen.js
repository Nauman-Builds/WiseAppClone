import { Text, View } from 'react-native';
import { Colors } from '../theme/colors';

export default function RecipientScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
      }}
    >
      <Text>RecipientScreen</Text>
    </View>
  );
}
