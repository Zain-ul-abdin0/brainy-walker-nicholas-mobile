//================================ React Native Imported Files ======================================//

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet,Platform} from 'react-native';
import colors from "../../../Assets/Colors/colors";

//================================ Local Imported Files ======================================//

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bright_white,
  },

  headerView: {
    flex: 0.1,
    // backgroundColor: colors.appDarkBlue
  },
  mapView: {
    flex: 0.9,

    // alignItems: 'center',
    // padding: wp(5),
    // backgroundColor: 'red',
    // borderTopColor: colors.white,
    // borderTopWidth: wp(0.7),
    // marginHorizontal: wp(4),
    // marginTop: wp(4),
    // borderRadius: wp(4)
  },
  backgroundColorView: {
    position: 'absolute',
    height: hp(25),
    // top: hp(10),
    zIndex: 1,

    alignSelf: 'center',
    backgroundColor: 'red',

    // backgroundColor: 'rgba(255,255,255,0)',
    // flex: 1,
  },
  map: {
    flex: 1,
  },
  textContainer: {
    fontSize: wp(4.7),
    color: colors.white,
  },
  uperView: {
    position: 'absolute',
    top: wp(5),
    height: wp(25),
    width: wp(90),
    backgroundColor: '#FEFEFE',
    alignSelf: 'center',
    borderRadius: wp(3),
  },
  middleView: {
    position: 'absolute',
    top: wp(35),
    height: wp(70),
    width: wp(90),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: wp(3),
  },
  lastView: {
    position: 'absolute',
    top: wp(108),
    height: wp(35),
    width: wp(90),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: wp(3),
  },
  uperViewText: {
    height: '40%',
    width: '100%',
    // backgroundColor: 'red',
    position: 'absolute',
    // top: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uperViewSlider: {
    height: '35%',
    width: '100%',
    // backgroundColor: 'green',
    position: 'absolute',
    top: wp(10),
    alignItems: 'center',
    justifyContent: 'center',



    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,



  },
  sliderText: {
    height: '20%',
    width: '100%',
    // backgroundColor: 'pink',
    position: 'absolute',
    top: wp(19),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleViewText: {
    height: '20%',
    width: '100%',
    // backgroundColor: 'green',
    position: 'absolute',
    // top: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uperViewTextStyle: {
    position: 'absolute',
    top: wp(4),
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  flatlistView: {
    // height: '75%',
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // // backgroundColor: 'pink',
    // position: 'absolute',
    // top: wp(14),
  },
  buttonStyles: {
    borderRadius: wp(7),
    height: hp(8),
    width: '90%',

    // marginBottom: wp(4),
  },
  titleStyles: {
    color: colors.white,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: '10%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: wp(3),
    position: 'absolute',
    top: wp(160),
    paddingBottom:Platform.OS==='ios' ? hp(10) : hp(30)
  },
});
export default Styles;
