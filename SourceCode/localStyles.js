//================================ React Native Imported Files ======================================//

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import colors from '../../Assets/Colors/colors';

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
  map: {
    flex: 1,
  },
  spinWheelStyle: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',
  },
  buttonView: {
    position: 'absolute',
    top: hp(78),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(4),

    height: wp(20),
    width: '90%',
    // backgroundColor: 'red',
  },
  buttonStyles: {
    borderRadius: wp(7),
    height: hp(8),
    width: '90%',
    marginBottom: wp(4),
  },
  titleStyles: {
    color: colors.white,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});
export default Styles;
