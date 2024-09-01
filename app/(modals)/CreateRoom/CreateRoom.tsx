import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { defaultStyles } from '@/constants/Styles';
import { AntDesign } from '@expo/vector-icons';
import styles from './CreateRoom.style';
import Colors from '@/constants/Colors';
import Modal from 'react-native-modal';

interface CreateRoomProps {
    visible: boolean;
    onClose: () => void;
    onSend: (content: { roomName: string, imageUrl: string | null }) => void;
}

const CreateRoom: React.FC<CreateRoomProps> = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState<string>('');
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        // Kullanıcıdan izin isteme
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'We need access to your camera roll to upload images.');
            return;
        }

        // ImagePicker ile resim seçme
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri); // Seçilen resmi state'e kaydet
        }
    };

    const handleSend = () => {
        if (!text) {
            return;
        }
        onSend({ roomName: text, imageUrl: image });
        setText('');
        setImage(null);
        onClose(); // Modalı kapat
    };

    return (
        <Modal
            swipeDirection="down"
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.dragHandle} />
                <TouchableOpacity onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.profileImage} />
                    ) : (
                        <View style={styles.imagePlaceholder}>
                            <AntDesign name="camera" size={40} color={Colors.primary} />
                            <Text style={[defaultStyles.btnOutlineText, { textAlign: 'center', color: Colors.primary }]}>Add Logo</Text>
                        </View>
                    )}
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder={'Room name...'}
                            placeholderTextColor={Colors.grey}
                            value={text}
                            onChangeText={setText}
                            multiline
                            style={defaultStyles.inputField}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity style={defaultStyles.btn} onPress={handleSend}>
                    <Text style={defaultStyles.btnText}>Create</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default CreateRoom;
