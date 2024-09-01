import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        fontFamily: "mon-b",
        fontSize: 24,
    },
    card: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 16,
        marginHorizontal: 24,
        marginTop: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        alignItems: 'center',
        gap: 14,
        marginBottom: 24,
    },
    profileArea: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.secondary,
        justifyContent:'center',
        alignItems:'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.grey
    },
    editRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: 50,
    },
    userNameText: {
        fontFamily: 'mon-b',
        fontSize: 22,
        color: Colors.dark
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.grey
    }
})