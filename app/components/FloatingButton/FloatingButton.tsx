import React from 'react';
import { Text, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import styles from './FloatingButton.style';

interface FloatingButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    iconName: keyof typeof AntDesign.glyphMap; // AntDesign içinde tanımlı ikon adlarını kullanmak için
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress, iconName }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <AntDesign name={iconName} size={35} color={Colors.white} />
        </TouchableOpacity>
    </View>
);

export default FloatingButton;
