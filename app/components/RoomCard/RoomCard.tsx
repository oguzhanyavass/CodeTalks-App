import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { styles } from './RoomCard.style';

const RoomCard = ({ roomName, imageUrl, onPress }: { roomName: string; imageUrl?: string; onPress: () => void }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.innerContainer}>
                {imageUrl ? (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: imageUrl }} style={styles.roomImage} />
                        <LinearGradient
                            style={styles.gradientContainerImg}
                            colors={[Colors.secondary, Colors.primary]}
                            start={{ x: 0, y: 0.8 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.roomNameImgText}>{roomName}</Text>
                        </LinearGradient>
                    </View>
                ) : (
                    <LinearGradient
                        style={styles.gradientContainer}
                        colors={[Colors.secondary, Colors.primary]}
                        start={{ x: 0, y: 0.8 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.roomNameText}>{roomName}</Text>
                    </LinearGradient>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default RoomCard;
