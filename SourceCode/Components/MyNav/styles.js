import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../Assets/Colors/colors';
import {Platform} from 'react-native';

let Styles = {
  drawerMainContainer: {
    width: '100%',
    height: hp(100),
    backgroundColor: colors.white,
  },
  backgroundImageContainer: {
    width: '100%',
    height: hp(100),
  },
  userInfoContainer: {
    width: '100%',
    height: '10%',
    // paddingTop: wp(5),
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingRight: wp(25),
    // paddingTop:'5%'
  },
  menuStyle: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    // tintColor: colors.white,
  },

  userImageContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userProfileImage: {
    width: wp(25),
    height: wp(25),
    resizeMode: 'cover',
    borderRadius: wp(25),
    // borderWidth:wp(0.5),
    // borderColor: colors.white
  },
  userTextContainer: {
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: wp(5),
  },
  userNameText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: '10%',
  },
  emailText: {
    // marginTop: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
  },
  drawerItemsContainer: {
    // width: "100%",
    alignItems: 'flex-end',
    // height: Platform.OS === 'ios' ? "45%": '55%',
    // marginTop: 10,
    // backgroundColor:'#3babf3'
  },
  drawerItemLabelText: {
    fontWeight: '500',
    fontSize: wp(4),
    color: colors.black,
  },
  drawerItemImage: {
    width: 19,
    height: 19,
    tintColor: colors.buttonColor,
    resizeMode: 'contain',
  },
  drawerItemStyles: {
    height: Platform.OS === 'ios' ? wp(14) : wp(12),
    width: '90%',
    // marginVertical: wp(0.5),
    // backgroundColor: colors.drawer_item_bg,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
  },
  drawerItemStylesLogin: {
    height: wp(14),
    width: '85%',
    marginTop: Platform.OS === 'ios' ? '40%' : '4%',
    // backgroundColor: colors.red_color,
    justifyContent: 'center',
  },
};
export default Styles;
