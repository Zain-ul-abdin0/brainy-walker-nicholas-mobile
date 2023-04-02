//================================ React Native Imported Files ======================================//

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StatusBar, ImageBackground} from 'react-native';
import React from 'react';

//================================ Local Imported Files ======================================//


import AppHeader from "../../../../Components/AppHeader/AppHeader";
import colors from "../../../../Assets/Colors/colors";
import images from "../../../../Assets/Images/images";
import styles from './Styles';

class TermsAndCondtions extends React.Component {
  constructor(props) {
    super(props);
    //================================ Dummy Text ======================================//
    this.state = {
      dummyText:
        'It is a long established fact that a reader will be distracted by the' +
        ' readable content of a page when looking at its layout. The point of using ' +
        'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as\n',
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* //================================ StatusBar ======================================// */}
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.statusBarColor}
          translucent={false}
        />
        {/* //================================ Header ======================================// */}
        <View style={styles.headerView}>
          <AppHeader
            headerHeight="100%"
            title={'Term and Conditions'}
            leftIconPath={images.ic_hamburger_menu}
            onLeftIconPress={() => this.props.navigation.openDrawer()}
          />
        </View>
        {/* //================================ Bottom Container ======================================// */}
        <View style={styles.container}>
          <Text style={styles.textContainer}>{this.state.dummyText}</Text>
          <Text style={styles.textContainer}>{this.state.dummyText}</Text>
          <Text style={styles.textContainer}>{this.state.dummyText}</Text>
          <Text style={styles.textContainer}>{this.state.dummyText}</Text>
        </View>
      </View>
    );
  }
}
export default TermsAndCondtions;
