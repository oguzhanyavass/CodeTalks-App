import { View, SafeAreaView, FlatList, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
import { styles } from '../styles/home.style';
import database from '@react-native-firebase/database';
import parseContentData from '@/utils/parseContentData';
import { useRouter } from 'expo-router';

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const router = useRouter(); // Hook'u burada üst seviyede çağırıyoruz

    useEffect(() => {
        const reference = database().ref('rooms/');

        reference.on('value', (snapshot) => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData);
            setData(parsedData);
        });

        return () => reference.off('value');
    }, []);

    const handleRoomPress = (roomId: string, roomName: string) => {
        router.push({
            pathname: '/rooms/RoomChat',
            params: { roomId, roomName },
        });
    };

    const renderItem = ({ item }: any) => (
        <RoomCard
            roomName={item.roomName}
            imageUrl={item.imageUrl}
            onPress={() => handleRoomPress(item.id, item.roomName)}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            {data.length > 0 ? (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            ) : (
                <Text>Loading...</Text>
            )}
        </SafeAreaView>
    );
};

export default Home;
