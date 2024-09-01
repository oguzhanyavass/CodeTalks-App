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
        width: width * 0.8,
        height: undefined, // Yükseklik oranını tanımlamayacağız
        aspectRatio: 1, // Görüntü oranını korur (kare şeklinde)
        resizeMode: 'contain', // Görüntünün içeriği orijinal oranında tutulur
        marginBottom: 20,
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
    }
})