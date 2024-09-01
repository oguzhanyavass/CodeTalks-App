import { Stack, useRouter, useSegments, useLocalSearchParams } from 'expo-router';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import FlashMessage from 'react-native-flash-message';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const router = useRouter();
  const segments = useSegments();
  const [loaded, error] = useFonts({
    'mon': require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log('onAuthStateChanged', user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const isInAuthGroup = segments[0] === '(auth)'; // auth grubunda olup olmadığını kontrol et

    if (user && !isInAuthGroup) {
      router.replace('/(tabs)/home');
    } else if (!user && !isInAuthGroup) {
      router.push('/(auth)/signIn');
    } else if (user && !isInAuthGroup) {
      router.push('/(tabs)/home');
    }

  }, [user, initializing]);

  if (initializing)
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );

  return (
    <>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(modals)" options={{ headerShown: false }} />
        <Stack.Screen
          name="rooms/RoomChat"
          options={({ route }) => ({
            headerTitle: route.params?.roomName || 'Room Chat',
            headerTitleStyle: {
              fontFamily:'mon-b',
              fontSize:26
            },
            headerTitleAlign:'center',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  borderColor: Colors.grey,
                  borderWidth: 1,
                  padding: 4,
                  borderRadius: 20,
                }}
                onPress={() => router.back()}
              >
                <Ionicons name='chevron-back' size={22} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack>
      <FlashMessage position="top" />
    </>
  );
}
