//================================ React Native Imported Files ======================================//

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StatusBar, Image, ImageBackground} from 'react-native';
import React from 'react';
//================================ Local Imported Files ======================================//

import AppHeader from "../../../../Components/AppHeader/AppHeader";
import Button from "../../../../Components/Button/Button";
import colors from "../../../../Assets/Colors/colors";
import images from "../../../../Assets/Images/images";
import styles from './Styles';

class AboutApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground style={styles.mainContainer} source={images.city_bg}>
        {/* //================================ StatusBar ======================================// */}
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.appDarkBlue}
          translucent={false}
        />

        {/* //================================ Header ======================================// */}
        <View style={styles.headerView}>
          <AppHeader
            headerHeight="100%"
            title={'About the App'}
            leftIconPath={images.ic_hamburger_menu}
            onLeftIconPress={() => this.props.navigation.openDrawer()}
          />
        </View>

        {/* //================================ Uper View ======================================// */}
        <ImageBackground style={styles.bgStyle} source={images.bg_image}>
          <View style={styles.uperView}>
            {/* <View style={styles.uperImageView} source={images.bg_image}> */}
            <Image style={styles.imageStyles} source={images.app_icon} />
          </View>

          <View style={styles.uperText1View}>
            <Text style={styles.CopyrightTextStyle}>Version 1.00</Text>
          </View>
          <View style={styles.uperText2View}>
            <Text style={styles.DeveloperTextStyle}>
              Copyright 2020 - DestinationHunt.com
            </Text>
          </View>
          <View style={styles.uperText3View}>
            <Text style={styles.VersionTextStyle}>Developer Name Inc.</Text>
          </View>
        </ImageBackground>

        {/* //================================ Text ======================================// */}

        <View style={styles.BottomTextView}>
          <Text style={styles.MainTextStyle}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters. It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters
          </Text>
        </View>

        {/* //================================ Button ======================================// */}

        <View style={styles.BottonView}>
          <Button
            height={hp(8)}
            width={'90%'}
            style={styles.buttonStyles}
            title={'Contact Us'}
            bgColor={colors.buttonColor}
            titleColor={colors.dark_red}
            titleStyle={[styles.titleStyles]}
            borderRadius={wp(5)}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default AboutApp;
