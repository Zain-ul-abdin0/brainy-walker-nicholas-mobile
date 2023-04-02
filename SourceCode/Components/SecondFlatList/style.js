import {StyleSheet} from 'react-native';
import colors from '../../Assets/Colors/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  mainContainerList: {
    height: wp(14),
    width: wp(26),
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(0.5),
    borderColor: 'grey',
    borderRadius: wp(2),
    margin: wp(2),
  },
  textStyle: {
    fontSize: wp(4),
    color: 'grey',
  },
});
export default styles;
