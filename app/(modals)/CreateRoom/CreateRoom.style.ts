import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1
  },
  container: {
    backgroundColor: Colors.white,
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height * 0.3,
    gap: 25,
    flex: 0.5,
  },
  inputContainer: {
    width: '100%',
    padding: 10,
    paddingBottom: 40,
    borderRadius: 15,
  },
  scrollContainer: {
    flexGrow: 1, // İçerik uzadıkça kaydırılabilir hale gelmesini sağlar
    width: '100%',
  },
  dragHandle: {
    width: width * 0.1,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: Colors.grey,
    marginBottom: 10, // Çubuğun altındaki içerik ile boşluk
    alignSelf: 'center',
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