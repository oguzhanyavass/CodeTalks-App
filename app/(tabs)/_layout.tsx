import React from 'react';
import { router, Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import FloatingButton from '../components/FloatingButton';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import CreateRoom from '../(modals)/CreateRoom';

const Layout = () => {

    const [inputModalVisible, setInputModalVisible] = React.useState(false);

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleCreateRoom(content: any) {
        handleInputToggle();
        createRoomDatabase(content);
    }

    function createRoomDatabase(content: any) {
        const userMail = auth().currentUser?.email;
        const contentObject = {
            roomName: content,
            creatorName: userMail?.split('@')[0],
            date: new Date().toISOString(),
        };
        database().ref('rooms/').push(contentObject);
    }


    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarLabelStyle: {
                    fontFamily: 'mon-sb',
                },
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    paddingBottom: 10,
                },
            }}>
                <Tabs.Screen name='home' options={{
                    headerShown: false,
                    tabBarLabel: 'Rooms',
                    tabBarIcon: ({ color, size }) =>
                        <AntDesign name='home' color={color} size={size} />
                }} />
                <Tabs.Screen name='profile' options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) =>
                        <Ionicons name='person-circle-outline' color={color} size={size} />
                }} />
            </Tabs>
            <FloatingButton
                iconName="plus"
                onPress={handleInputToggle}
            />
            <CreateRoom
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleCreateRoom}
            />
        </>
    )
};



export default Layout;
