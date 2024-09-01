import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { defaultStyles } from '@/constants/Styles';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../styles/signIn.style';
import Colors from '@/constants/Colors';
import { showMessage } from 'react-native-flash-message';
import {  router } from 'expo-router';
import authErrorMessageParser from '@/utils/authErrorMessageParser';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    if (!email) {
      showMessage({
        message: "Email field cannot be empty",
        type: "danger",
      });
      return false;
    }

    if (!password) {
      showMessage({
        message: "Password field cannot be empty",
        type: "danger",
      });
      return false;
    }

    return true;
  };

  const signIn = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      router.push('/(tabs)/home')
    } catch (e: any) {
      showMessage({
        message: authErrorMessageParser(e.code),
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    router.push('/(auth)/signUp');
  };

  return (
    <View style={defaultStyles.container}>
      <Image style={styles.logo} source={require('../../assets/images/icon.png')} />
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={{ gap: 20 }}>
          <View style={defaultStyles.inputField}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
            />
          </View>

          <View style={defaultStyles.inputField}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Password"
            />
          </View>
        </KeyboardAvoidingView>
        {loading ? (
          <ActivityIndicator size={'large'} style={{ margin: 28 }} />
        ) : (
          <>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={defaultStyles.btn} onPress={signIn}>
                <AntDesign name="login" style={[defaultStyles.btnIcon, { color: Colors.white }]} size={22} />
                <Text style={defaultStyles.btnText}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.containerSeperator}>
                <View style={styles.seperator}></View>
                <Text style={styles.seperatorText}>or</Text>
                <View style={styles.seperator}></View>
              </View>
              <TouchableOpacity style={defaultStyles.btnOutline} onPress={handleSignUp}>
                <AntDesign name="adduser" style={defaultStyles.btnIcon} size={22} />
                <Text style={defaultStyles.btnOutlineText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default SignIn;
