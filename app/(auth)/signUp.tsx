import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { FirebaseError } from 'firebase/app';
import { defaultStyles } from '@/constants/Styles';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../styles/signUp.style';
import Colors from '@/constants/Colors';
import { showMessage } from 'react-native-flash-message';
import * as ImagePicker from 'expo-image-picker';
import { Link, router } from 'expo-router';
import authErrorMessageParser from '@/utils/authErrorMessageParser';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSignIn = () => {
        router.back();
    }
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const signUp = async () => {
        if (!email || !password || !confirmPassword) {
            showMessage({
                message: 'All fields are required!',
                type: 'danger',
            });
            return;
        }

        if (password !== confirmPassword) {
            showMessage({
                message: 'Passwords do not match!',
                type: 'danger',
            });
            return;
        }

        setLoading(true);
        try {
            // Firebase Authentication ile kullanıcı oluşturma
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const userId = userCredential.user.uid;

            // Profil fotoğrafını yükleme
            let profileImageUrl = null;
            if (image) {
                const storageRef = storage().ref(`profileImages/${userId}.jpg`);
                await storageRef.putFile(image);
                profileImageUrl = await storageRef.getDownloadURL();
            }

            // Kullanıcı bilgilerini Firebase Realtime Database'e kaydetme
            await database().ref(`users/${userId}`).set({
                email: email,
                profileImage: profileImageUrl,
            });
            router.push('/(tabs)/home')
        } catch (e: any) {
            const err = e as FirebaseError;
            showMessage({
                message: authErrorMessageParser(err.code),
                type: 'danger',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={defaultStyles.container}>
            <View style={styles.container} >

                <KeyboardAvoidingView behavior="padding" style={{ gap: 20 }}>
                    <Image style={styles.logo} source={require('../../assets/images/icon.png')} />
                    <TouchableOpacity onPress={pickImage}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.profileImage} />
                        ) : (
                            <View style={styles.imagePlaceholder}>
                                <AntDesign name="camera" size={40} color={Colors.primary} />
                            </View>
                        )}
                    </TouchableOpacity>
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

                    <View style={[defaultStyles.inputField, { marginBottom: 30 }]}>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            placeholder="Confirm Password"
                        />
                    </View>
                </KeyboardAvoidingView>
                {loading ? (
                    <ActivityIndicator size={'large'} style={{ margin: 28 }} />
                ) : (
                    <>
                        <TouchableOpacity style={[defaultStyles.btn, { marginBottom: 30 }]} onPress={signUp}>
                            <AntDesign name="adduser" style={[defaultStyles.btnIcon, { color: Colors.white }]} size={22} />
                            <Text style={defaultStyles.btnText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={handleSignIn}>
                            <Text style={styles.seperatorText}>Already have an account?</Text>
                            <Text style={[styles.seperatorText, { marginLeft: 10, borderBottomWidth: 1 }]}>Sign In</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
};

export default SignUp;
