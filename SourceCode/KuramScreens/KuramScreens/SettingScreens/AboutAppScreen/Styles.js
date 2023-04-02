//================================ React Native Imported Files ======================================//

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

//================================ Local Imported Files ======================================//

import colors from "../../../../Assets/Colors/colors";

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  headerView: {
    // backgroundColor: colors.appDarkBlue,
    flex: 0.1,
  },
  uperView: {
    flex: 0.6,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginHorizontal: wp(3),
    // marginTop:wp(4)
  },
  bgStyle: {
    flex: 0.45,

    // height: wp(20),
    // width: wp(90),
    // resizeMode: 'contain',
  },
  uperImageView: {
    flex: 0.7,
    // backgroundColor: '#282A3D',

    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: wp(3),
  },
  imageStyles: {
    height: wp(50),
    width: wp(50),
    resizeMode: 'contain',
  },
  uperImageTextView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp(4),
    backgroundColor: colors.white,
    marginHorizontal: wp(3),
  },
  CompagainTextStyle: {
    fontSize: wp(4.5),
    color: colors.white,
  },
  CopyrightTextStyle: {
    fontSize: wp(3.5),
    color: colors.white,
  },
  DeveloperTextStyle: {
    fontSize: wp(3.5),
    color: colors.white,
  },
  VersionTextStyle: {
    fontSize: wp(3.5),
    color: colors.white,
  },
  uperText1View: {
    flex: 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#282A3D',
    // marginHorizontal: wp(3),
    // paddingTop: '12%'
  },
  uperText2View: {
    flex: 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#282A3D',
    // marginHorizontal: wp(3),
  },
  uperText3View: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#282A3D',
  },
  BottomTextView: {
    flex: 0.3,
    // backgroundColor: colors.pink,
    paddingHorizontal: wp(3),
    paddingTop: wp(4),
    // marginHorizontal: wp(3),
  },
  titleStyles: {
    color: colors.white,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  BottonView: {
    flex: 0.11,
    // marginHorizontal: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonStyles: {
    borderRadius: wp(7),
    height: hp(8),
    width: '100%',
  },
  MainTextStyle: {
    fontSize: wp(4),
    color: colors.black,
  },
});
export default Styles;
