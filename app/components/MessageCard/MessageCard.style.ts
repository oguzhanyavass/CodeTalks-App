import Colors from "@/constants/Colors";
import { StyleSheet, Dimensions } from "react-native"

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        padding: 10,
    },
    profileImage: {
        width: width*0.1,
        height: width*0.1,
        borderRadius: 50,
        backgroundColor: Colors.grey,
        marginRight: 10,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.primary
    },
    messageBubble: {
        borderRadius: 10,
        padding: 10,
        flex: 1,
    },
    messageText: {
        fontSize: 16,
        color:Colors.white,
        fontFamily:'mon'
    },
    messageSender: {
        fontSize: 16,
        color:Colors.white,
        fontFamily:'mon-sb',

    },
    messageTimestamp: {
        fontSize: 12,
        color: Colors.grey,
        marginTop: 5,
        fontFamily:'mon'
    },
    senderInfoContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom:5
    },
    avatar:{
        width: width*0.1,
        height: width*0.1,
        borderRadius: 50,
        backgroundColor: Colors.grey,
        marginRight: 10,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:Colors.primary,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default styles;