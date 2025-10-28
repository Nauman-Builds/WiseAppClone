import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { Colors } from '../theme/colors';
import { Images } from '../assets/images';
import { transactionsData } from '../data/transactionData';
import BalanceCard from '../components/BalanceCard';

const DashboardScreen = ({ navigation }) => {
  const formatDate = dateStr => {
    const date = new Date(dateStr);
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000)
      .toISOString()
      .split('T')[0];

    if (dateStr === today) return 'Today';
    if (dateStr === yesterday) return 'Yesterday';

    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const renderItem = ({ item }) => (
    <View style={styles.transactionRow}>
      <View style={styles.transactionLeft}>
        {item.icon === 'Fiverr' ? (
          <Image
            source={Images.fiverr_logo}
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              resizeMode: 'stretch',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 16,
            }}
          />
        ) : (
          <View style={styles.addCircle}>
            <Ionicons name={item.icon} size={24} color="#111" />
          </View>
        )}
        <View style={{ gap: 4 }}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
            {item.status && (
              <>
                <Text style={styles.transactionSubtitle}>{item.status}</Text>
                <Text style={styles.transactionSubtitle2}>{' ● '}</Text>
              </>
            )}
            <Text style={styles.transactionSubtitle}>
              {formatDate(item.date)}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.transactionAmount, { color: item.color || '#000' }]}>
        {item.amount}
      </Text>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileImage}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileInitials}>YC</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TouchableOpacity style={styles.earnButton}>
            <Text style={styles.earnText}>Earn £50</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bellButton}>
            <Image
              source={Images.pass_off}
              style={{
                height: 30,
                width: 28,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.accountHeader}>
        <Text style={styles.accountTitle}>Total Balance</Text>
        <View style={styles.accountBalance}>
          <Text style={styles.accountSubtitle}>353.19 USD</Text>
          <View
            style={{
              height: 31,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              backgroundColor: Colors.secondary,
            }}
          >
            <Image
              source={Images.graph_image}
              style={{
                height: 15,
                width: 15,
                resizeMode: 'stretch',
                marginBottom: 2,
                marginRight: 1.5,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: Colors.primary }]}
        >
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Add money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Request</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardRow}>
        <BalanceCard currency="USD" balance={352.67} />
        <BalanceCard currency="EUR" balance={0.45} />
      </View>
      <View style={styles.transactionsHeader}>
        <Text style={styles.sectionTitle}>Transactions</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 8, marginBottom: 25 }}
        data={transactionsData.slice(0, 5)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 17 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 45,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: '#000',
    fontSize: 17,
    fontWeight: '700',
  },
  earnButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 7.3,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  earnText: {
    fontWeight: '600',
    letterSpacing: 0.3,
    color: '#111',
    fontSize: 17,
  },
  bellButton: {
    marginLeft: 'auto',
    backgroundColor: Colors.secondary,
    width: 36,
    height: 36,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Account
  accountHeader: {
    justifyContent: 'center',
    marginBottom: 15,
    gap: 2,
  },
  accountTitle: { fontSize: 15.5, color: '#000', fontWeight: 'semibold' },
  accountSubtitle: { fontSize: 29, fontWeight: '700', color: '#111' },
  accountBalance: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  // Buttons
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    gap: 10,
  },
  actionButton: {
    flexDirection: 'row',
    height: 34,
    paddingHorizontal: 13,
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: { fontWeight: '600', color: '#000' },

  // Balance
  cardRow: { flexDirection: 'row', gap: 15, marginBottom: 25 },
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
  flagIcon: { width: 40, height: 40, resizeMode: 'contain' },
  currencyText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '700',
    color: '#000',
  },
  balanceValue: { fontSize: 22, fontWeight: '700', color: '#000' },

  // Transactions
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  transactionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAll: {
    fontSize: 15,
    color: '#5c972dff',
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 13.5,
  },
  transactionLeft: { flexDirection: 'row', alignItems: 'center' },
  addCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    paddingTop: 0.7,
    paddingLeft: 0.7,
  },
  transactionTitle: { fontSize: 16, color: '#000', fontWeight: '600' },
  transactionSubtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '400',
  },
  transactionSubtitle2: {
    marginTop: 1.5,
    fontSize: 10,
    color: '#222',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  transactionAmount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
  },
});

export default DashboardScreen;
