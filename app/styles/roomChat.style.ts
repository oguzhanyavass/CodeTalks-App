import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        justifyContent: 'space-between',
        borderTopColor: Colors.grey,
        gap:10
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        height: 50,
        width:width*0.2,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    textInput: {
        height: 50,
        width:width*0.7,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 8,
        padding: 10,
        backgroundColor: Colors.white,
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

export default styles;
