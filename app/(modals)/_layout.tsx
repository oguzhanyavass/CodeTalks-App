import React from 'react';
import { Stack, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {

    return (
        <Stack>
            <Stack.Screen name="createRoom/index" options={{
                presentation: 'transparentModal',
                animation: 'fade',
                headerTitle: 'Create Room',
                headerTitleStyle: {
                    fontFamily: 'mon-b',
                    fontSize: 24,
                },
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity style={{
                        backgroundColor: '#fff',
                        borderColor: Colors.grey,
                        borderWidth: 1,
                        padding: 4,
                        borderRadius: 20,
                    }} onPress={() => router.back()}>
                        <Ionicons name='close-outline' size={22} />
                    </TouchableOpacity>
                )
            }} />
        </Stack>
    )
};



export default Layout;
