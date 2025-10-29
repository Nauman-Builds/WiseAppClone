import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../theme/Colors';

const CardsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>CardsScreen</Text>
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

export default CardsScreen;
