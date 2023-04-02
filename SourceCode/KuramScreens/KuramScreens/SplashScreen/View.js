//================================ React Native Imported Files ======================================//

import {ImageBackground, StatusBar, Image, View} from 'react-native';
import React from 'react';
import {CommonActions} from '@react-navigation/native';

//================================ Local Imported Files ======================================//

import styles from './Styles';
import images from "../../../Assets/Images/images";
import colors from "../../../Assets/Colors/colors";

class SplashScreen extends React.Component {
  //================================ component Did Mount ======================================//

  componentDidMount() {
    setTimeout(() => {

        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'OnBoarding',
                        params: {fromSplash:true},
                    },

                ],
            }));

    }, 1500);
  }

  render() {
    return (
      <ImageBackground style={styles.mainCotainer} source={images.bg_image}>
        {/* //================================ StatusBar ======================================// */}
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.statusBarColor}
          translucent={false}
        />
        <View style={styles.uperView}>
          <Image style={styles.imageStyle} source={images.app_icon} />
        </View>
        <View style={styles.bottomView}>
          <Image style={styles.imageStyle} source={images.brainy_apps} />
        </View>
      </ImageBackground>
    );
  }
}

export default SplashScreen;
