import { View, FlatList, TextInput, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import database from '@react-native-firebase/database';
import { useLocalSearchParams } from 'expo-router';
import auth from '@react-native-firebase/auth';
import MessageCard from '../components/MessageCard';
import { defaultStyles } from '@/constants/Styles';
import styles from '../styles/roomChat.style';
import { useRouter } from 'expo-router';

const RoomChat = () => {
    const { roomId, roomName } = useLocalSearchParams() as { roomId: string; roomName: string };
    const [messages, setMessages] = useState<any[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [userName, setUserName] = useState<string | null>(null);
    const [userImages, setUserImages] = useState<{ [key: string]: string }>({});
    const router = useRouter();


    useEffect(() => {
        const currentUser = auth().currentUser;
        if (currentUser && currentUser.email) {
            const name = currentUser.email.split('@')[0];
            setUserName(name);
        }
    }, []);

    useEffect(() => {
        const reference = database().ref(`messages/${roomId}`);
        const userImagesRef = database().ref('users');

        reference.on('value', (snapshot) => {
            const contentData = snapshot.val();
            const parsedData = contentData ? Object.values(contentData) : [];
            setMessages(parsedData);
        });

        userImagesRef.on('value', (snapshot) => {
            const usersData = snapshot.val();
            const images = Object.keys(usersData).reduce((acc: { [key: string]: string }, userId: string) => {
                acc[userId] = usersData[userId].profileImage;
                return acc;
            }, {});
            setUserImages(images);
        });

        return () => {
            reference.off('value');
            userImagesRef.off('value');
        };
    }, [roomId]);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const currentUser = auth().currentUser;
            const userId = currentUser?.uid || 'unknown';
            const message = {
                text: newMessage,
                timestamp: new Date().toISOString(),
                sender: userName || 'Unknown',
                senderId: userId
            };
            database().ref(`messages/${roomId}`).push(message);
            setNewMessage('');
        }
    };

    const renderItem = ({ item }: any) => (
        <MessageCard
            sender={item.sender}
            text={item.text}
            timestamp={item.timestamp}
            profileImageUri={userImages[item.senderId] || ''}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                inverted
            />
            <KeyboardAvoidingView style={styles.inputContainer}>
                <View style={styles.textInput}>
                    <TextInput
                        value={newMessage}
                        onChangeText={setNewMessage}
                        placeholder="Type a message"
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={sendMessage}>
                    <Text style={defaultStyles.btnText}>Send</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RoomChat;
