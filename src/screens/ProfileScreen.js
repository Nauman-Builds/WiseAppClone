import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { Colors } from '../theme/colors';
import { Images } from '../assets/images';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.replace('Main')}>
          <Ionicons name="close-outline" size={24} color="#111" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.openButton}>
          <Text style={styles.openText}>Open an account</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Circle */}
      <View style={styles.profileWrapper}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitials}>YC</Text>
          <TouchableOpacity style={styles.cameraButton}>
            <Ionicons name="camera-outline" size={16} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.profileName}>YEKATIERINA CHURAKOVA</Text>
        <Text style={styles.profileSubtitle}>Personal account</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.secondary,
            borderRadius: 17,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginTop: 4,
          }}
        >
          <Image
            source={Images.splash_logo}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.profileSubtitle2}>@yekatierinac</Text>
        </View>
      </View>

      {/* Your Account Section */}
      <Text style={styles.sectionTitle}>Your account</Text>

      <TouchableOpacity style={styles.listItem}>
        <View
          style={{
            borderWidth: 0.8,
            borderColor: Colors.secondary,
            borderRadius: 50,
            padding: 9,
          }}
        >
          <Ionicons name="notifications-outline" size={25} color="#111" />
        </View>
        <Text style={styles.listText}>Inbox</Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#222"
          style={styles.chevron}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <View
          style={{
            borderWidth: 0.8,
            borderColor: Colors.secondary,
            borderRadius: 50,
            padding: 9,
          }}
        >
          <Ionicons name="help-outline" size={25} color="#111" />
        </View>
        <Text style={styles.listText}>Help</Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#222"
          style={styles.chevron}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <View
          style={{
            borderWidth: 0.8,
            borderColor: Colors.secondary,
            borderRadius: 50,
            padding: 12,
          }}
        >
          <Image
            source={Images.multiple_documents}
            style={{ width: 21, height: 21, resizeMode: 'contain' }}
          />
        </View>
        <Text style={styles.listText}>Statements and reports</Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#222"
          style={styles.chevron}
        />
      </TouchableOpacity>

      {/* Settings Section */}
      <Text style={styles.sectionTitle}>Settings</Text>

      <TouchableOpacity style={[styles.listItem, {marginTop: 12 }]}>
        <View
          style={{
            borderWidth: 0.8,
            borderColor: Colors.secondary,
            borderRadius: 50,
            padding: 10,
          }}
        >
          <Ionicons name="shield-outline" size={25} color="#111" />
        </View>
        <View style={{ width: '75%' }}>
          <Text style={styles.listText}>Security and privacy</Text>
          <Text style={styles.subText}>
            Change your security and privacy settings
          </Text>
        </View>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#222"
          style={styles.chevron}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.listItem, { marginTop: 16, marginBottom: 60 }]}>
        <View
          style={{
            borderWidth: 0.8,
            borderColor: Colors.secondary,
            borderRadius: 50,
            padding: 10,
          }}
        >
          <Ionicons name="settings-outline" size={25} color="#111" />
        </View>
        <View style={{ width: '75%' }}>
          <Text style={styles.listText}>Preferences</Text>
          <Text style={styles.subText}>
            Manage language, theme, and notification settings
          </Text>
        </View>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#222"
          style={styles.chevron}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 20, },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: { backgroundColor: Colors.secondary, borderRadius: 25, padding: 7 },
  openButton: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  openText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  // Profile Circle
  profileWrapper: {
    alignItems: 'center',
    marginVertical: 25,
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: '#000',
    fontSize: 26,
    fontWeight: '700',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    padding: 4,
  },
  profileName: {
    width: '90%',
    color: '#222',
    fontSize: 32.5,
    fontWeight: '900',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 12,
    lineHeight: 29,
    letterSpacing: -0.6,
  },
  profileSubtitle: {
    color: '#111',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  profileSubtitle2: {
    fontSize: 14,
    color: '#111',
    fontWeight: '700',
  },

  // Section
  sectionTitle: {
    fontSize: 22,
    color: '#222',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    letterSpacing: -0.5,
  },

  // List Items
  listItem: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginBottom: 15,
  },
  listText: {
    width: '73%',
    color: '#111',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 18,
    letterSpacing: -0.5,
  },
  subText: {
    width: '95%',
    color: '#111',
    fontSize: 14,
    marginLeft: 18,
    marginTop: 2,
  },
  chevron: {
    marginLeft: 'auto',
  },
});

export default ProfileScreen;
