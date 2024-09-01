import Colors from "@/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        padding: 20,
        gap: 20
    },
    btnContainer: {
        justifyContent: 'center',
        gap: 20,
        padding: 20
    },
    logo: {
        alignSelf: 'center',
        width: width * 0.6,
        height: undefined, // Yükseklik oranını tanımlamayacağız
        aspectRatio: 1, // Görüntü oranını korur (kare şeklinde)
        resizeMode: 'contain', // Görüntünün içeriği orijinal oranında tutulur
    },
    containerSeperator: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: 30,
    },
    seperator: {
        flex: 1,
        borderBottomColor: Colors.dark,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    seperatorText: {
        fontFamily: 'mon',
        color: Colors.dark,
        textAlign: 'center',
    },
    profileImage: { // Profil resmi için stil
        width: 100,
        height: 100,
        borderRadius: 5,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    imagePlaceholder: { // Profil resmi eklenmediğinde gösterilecek alan için stil
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: Colors.grey,
        borderWidth: StyleSheet.hairlineWidth,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: {
          width: 1,
          height: 2,
        },
    }
});
