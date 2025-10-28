import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { Colors } from '../theme/colors';
import { Images } from '../assets/images';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back-sharp" size={25} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Log in</Text>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholderTextColor={'#111'}
          placeholder=""
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={showPassword ? Images.pass_on : Images.pass_off}
            style={{
              height: 32,
              width: showPassword ? 24 : 31,
              marginTop: showPassword ? 5 : 3,
              marginRight: showPassword ? 3 : 0,
              resizeMode: 'contain',
            }}
          />
        </Pressable>
      </View>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      {/* Trouble Logging In */}
      <TouchableOpacity>
        <Text style={styles.troubleText}>Trouble logging in?</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <Text style={styles.orText}>Or log in with</Text>
      </View>

      {/* Social Login Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={Images.google_logo} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={Images.facebook_logo} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={Images.apple_logo}
            style={{ width: 27, height: 27, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.passkeyButton}>
        <Image
          source={Images.login_passkey}
          style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 3 }}
        />
        <Text style={styles.loginText}>Log in with passkey</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 22,
  },
  backButton: {
    width: 45,
    borderRadius: 50,
    backgroundColor: '#e9eae9ff',
    padding: 9.3,
    marginBottom: 12,
    right: 2,
  },
  title: {
    fontSize: 33,
    fontWeight: '600',
    marginHorizontal: 1,
    marginTop: 5,
    marginBottom: 50,
    color: '#111',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111ff',
    marginBottom: 8,
  },
  input: {
    height: 50,
    color: '#111',
    borderColor: '#404040ff',
    borderRadius: 11,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 17,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  passwordContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#404040ff',
    borderRadius: 11,
    marginBottom: 30,
  },
  passwordInput: {
    flex: 1,
    fontSize: 17,
    color: '#111',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingHorizontal: 15,
  },
  loginButton: {
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  troubleText: {
    textAlign: 'center',
    color: '#111',
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  dividerContainer: {
    alignItems: 'center',
    marginTop: '35%',
    marginBottom: 18,
  },
  orText: {
    color: '#424242ff',
    fontSize: 16,
    letterSpacing: 0.2,
    fontWeight: '400',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '2.3%',
    marginBottom: 15,
  },
  socialButton: {
    width: 103,
    height: 46,
    borderWidth: 1,
    borderColor: '#404040ff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  passkeyButton: {
    flexDirection: 'row',
    height: 48,
    borderWidth: 1,
    borderColor: '#404040ff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});

export default LoginScreen;
