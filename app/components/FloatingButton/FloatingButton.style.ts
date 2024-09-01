import {StyleSheet, Dimensions} from 'react-native';
import Colors from '@/constants/Colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: height*0.03, // Tab bar yüksekliğine göre ayarlayın
    alignSelf: 'center', // Ortalar
    backgroundColor: Colors.primary,
    borderRadius: 50, // Butonun yarıçapı kadar büyük olmalı
    width: width*0.15,
    height: width*0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;