import { View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { styles } from '../styles/profile.style';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const profile = () => {
    const userMail = auth().currentUser?.email;
    const username = userMail?.split('@')[0];
    const [profileImageUrl, setProfileImageUrl] = useState('');

    useEffect(() => {
        const userId = auth().currentUser?.uid;
        const profileImageRef = database().ref(`users/${userId}/profileImage`);

        profileImageRef.once('value').then(snapshot => {
            setProfileImageUrl(snapshot.val());
        });
    }, []);

    const signOut = () => {
        auth().signOut();
    };

    return (
        <SafeAreaView style={defaultStyles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Profile</Text>
                <Ionicons name='notifications-outline' size={26} />
            </View>

            <View style={styles.card}>
                {profileImageUrl ? (
                    <>
                        <View style={styles.profileArea}>
                            <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
                        </View>
                    </>
                ) : (
                    <>
                        <View style={styles.profileArea}>
                            <AntDesign name='user' color={Colors.secondary} size={60} />
                        </View>
                    </>
                )}
                <Text style={styles.userNameText}>{username}</Text>
                <Text style={{ fontFamily: 'mon' }}>{userMail}</Text>
            </View>
            <TouchableOpacity onPress={signOut} style={[defaultStyles.btnOutline, { marginHorizontal: 25}]}>
                <Text style={defaultStyles.btnOutlineText}>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default profile;
