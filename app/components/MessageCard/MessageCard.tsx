import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { formatDistanceToNow, parseISO } from 'date-fns';
import styles from './MessageCard.style';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

interface MessageCardProps {
    sender: string;
    text: string;
    timestamp: string;
    profileImageUri: string;
}

const MessageCard: React.FC<MessageCardProps> = ({ sender, text, timestamp, profileImageUri }) => {
    return (
        <View style={styles.container}>
            {profileImageUri ? (
                <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
            ) : (
                <View style={styles.avatar}>
                            <AntDesign name='user' color={Colors.secondary} size={24} />
                        </View>
            )}
            <LinearGradient
                style={styles.messageBubble}
                colors={[Colors.secondary, Colors.primary]}
                start={{ x: 0, y: 0.8 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.senderInfoContainer}>
                    <Text style={styles.messageSender}>{sender}</Text>
                    <Text style={styles.messageTimestamp}>
                        {formatDistanceToNow(parseISO(timestamp), { addSuffix: true })}
                    </Text>
                </View>
                <Text style={styles.messageText}>{text}</Text>
            </LinearGradient>
        </View>
    );
};

export default MessageCard;