//================================ React Native Imported Files ======================================//
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Styles = StyleSheet.create({
  mainCotainer: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
  },
  imageStyle: {
    height: wp(50),
    width: wp(50),
    resizeMode: 'contain',
  },
  uperView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default Styles;
