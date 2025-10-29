import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../theme/Colors';

const RecipientScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>RecipientScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

export default RecipientScreen;