import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Images } from '../assets/images';
import { Colors } from '../theme/Colors';

interface BalanceCardProps {
  currency: 'USD' | 'EUR';
  balance: string | number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ currency, balance }) => {
  const flagSource: ImageSourcePropType =
    currency === 'USD' ? Images.us_flag : Images.euro_flag;

  return (
    <View style={styles.balanceCard}>
      <View style={styles.currencyHeader}>
        <Image source={flagSource} style={styles.flagIcon} />
        <Text style={styles.currencyText}>{currency}</Text>
      </View>
      <Text style={styles.balanceValue}>{balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceCard: {
    width: '66%',
    height: 175,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  currencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  flagIcon: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  currencyText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '700',
    color: Colors.black,
  },
  balanceValue: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black,
  },
});

export default BalanceCard;
