//================================ React Native Imported Files ======================================//

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

//================================ Local Imported Files ======================================//

import colors from "../../../Assets/Colors/colors";

const Styles = StyleSheet.create({
  mainCotainer: {
    flex: 1,
  },
  upperView: {
    flex: 0.8,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: "red"
  },
  imageView: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },

  midView: {
    flex: 0.35,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    // backgroundColor: "red"
  },
  lowerView: {
    flex: 0.2,
    marginTop: wp(5),
    alignItems: 'center',
  },
  imageStyles: {
    height: wp(55),
    width: wp(55),
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: wp(5),
    color: colors.white,
    textAlign: 'center',
  },
  textStyleWelcome: {
    fontSize: wp(5),
    marginBottom: wp(2),
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyleNetwork: {
    fontSize: wp(5),
    marginBottom: wp(2),
    color: colors.AppRedColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyles: {
    borderRadius: wp(7),
    height: hp(8),
    width: '80%',
  },
  titleStyles: {
    color: colors.white,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  slides: {
    flex: 1,

  },
  swiperView:{
                 backgroundColor: colors.blue_color,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
  }
});

export default Styles;
