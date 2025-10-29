import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { transactionsData } from '../data/transactionData';
import { MainTabParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/Colors';
import { Images } from '../assets/images';

type Transaction = {
  id: string;
  title: string;
  amount: string;
  color?: string;
  date: string;
  icon: string;
  iconColor: string;
  status?: string;
};

type TransactionsScreenProps = NativeStackNavigationProp<
  MainTabParamList,
  'Payments'
>;

const TransactionsScreen: React.FC = () => {
  const navigation = useNavigation<TransactionsScreenProps>();

  const groupTransactionsByDate = () => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000)
      .toISOString()
      .split('T')[0];

    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString('en-US', options);
    };

    const grouped: Record<string, Transaction[]> = {};

    transactionsData.forEach((item: Transaction) => {
      let label: string;

      if (item.date === today) {
        label = 'Today';
      } else if (item.date === yesterday) {
        label = 'Yesterday';
      } else {
        label = formatDate(item.date);
      }

      if (!grouped[label]) grouped[label] = [];
      grouped[label].push(item);
    });

    return grouped;
  };

  const groupedData = groupTransactionsByDate();

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionRow}>
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
            marginRight: 15,
          }}
        />
      ) : (
        <View
          style={[
            styles.iconCircle,
            {
              backgroundColor: Colors.secondary,
              paddingTop: 0.7,
              paddingLeft: 0.7,
            },
          ]}
        >
          <Ionicons name={item.icon as any} size={23} color={item.iconColor} />
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {item.status === 'Pending' && (
          <Text style={styles.status}>{item.status}</Text>
        )}
      </View>

      <Text
        style={[
          styles.amount,
          {
            color: item.color || '#111',
            textAlignVertical: item.status ? 'top' : 'center',
            marginTop: item.status ? 2 : 0,
          },
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );

  const renderSection = (label: string, data: Transaction[]) =>
    data.length > 0 && (
      <View key={label} style={{ marginBottom: 7 }}>
        <Text style={styles.sectionTitle}>{label}</Text>
        <View
          style={{
            height: 1.5,
            backgroundColor: Colors.secondary,
            marginBottom: 15,
          }}
        />
        <FlatList
          data={data}
          renderItem={renderTransaction}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={22} color="#222" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={20} color="#222" />
          </TouchableOpacity>
          <View
            style={{
              height: 34,
              width: 33,
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
      <Text style={styles.header}>Transactions</Text>
      {/* Filter Buttons */}
      <View style={styles.filtersRow}>
        {['Include hidden', 'Type', 'Balance', 'Direction'].map(label => (
          <TouchableOpacity key={label} style={styles.filterButton}>
            <Text style={styles.filterText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Transactions List */}
      <FlatList
        ListHeaderComponent={
          <>
            {Object.entries(groupedData).map(([label, data]) =>
              renderSection(label, data),
            )}
          </>
        }
        data={[]}
        renderItem={null}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingRight: 17,
    paddingLeft: 16,
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#111',
    fontSize: 27,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    marginBottom: 17,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 33,
    height: 33,
    borderRadius: 16,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtersRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 10,
  },
  filterText: {
    color: '#111',
    fontSize: 13.5,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 15,
    color: '#111',
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 3,
  },
  transactionRow: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 15,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#111',
    fontSize: 16,
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  status: {
    color: '#777',
    fontSize: 14,
    marginTop: 2,
    fontWeight: '600',
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
    textAlignVertical: 'center',
  },
});

export default TransactionsScreen;
