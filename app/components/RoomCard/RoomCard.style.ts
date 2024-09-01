import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        height: width * 0.4,
        width: width * 0.4,
        borderWidth: StyleSheet.hairlineWidth,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 2,
        },
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        ...StyleSheet.absoluteFillObject, // Resmin tam kapsamasını sağlar
    },
    roomImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    gradientContainerImg: {
        position: 'absolute',
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomRightRadius: 10
    },
    gradientContainer: {
        ...StyleSheet.absoluteFillObject, // Gradient'in kartın tamamını kaplamasını sağlar
        justifyContent: 'center',
        alignItems: 'center',
    },
    roomNameImgText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    roomNameText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
