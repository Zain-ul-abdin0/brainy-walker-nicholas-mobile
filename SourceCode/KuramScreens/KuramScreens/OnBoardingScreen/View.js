//================================ React Native Imported Files ======================================//

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import React from 'react';

//================================ Local Imported Files ======================================//

import Button from "../../../Components/Button/Button";
import colors from "../../../Assets/Colors/colors";
import Swiper from 'react-native-swiper';
import styles from './Styles';
import images from "../../../Assets/Images/images";
import {CommonActions} from "@react-navigation/native";
import {StackActions} from "@react-navigation/compat";


class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newIndex: 1,
      currentIndex: 0,
    };
  }
  onIndexChanged(index) {
    this.setState({currentIndex: index});
  }
  scrollItem() {
    if (this.state.currentIndex === 2) {

      this.props.navigation.dispatch(
          StackActions.replace({
            routeName: "drawerNav"
          })
      );

    } else {
      this.refs.swiper.scrollBy(1);
    }
  }
  render() {
    return (
      <ImageBackground style={styles.mainCotainer} source={images.bg_image}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.statusBarColor}
          translucent={false}
        />
        <View style={styles.upperView}>
          <Swiper
            showsButtons={false}
            loop={false}
            ref={'swiper'}
            onIndexChanged={this.onIndexChanged.bind(this)}
            activeDotColor={colors.white}
            dotColor={colors.white}
            activeDot={
              <View
                style={styles.swiperView}
              />
            }
            >


            <View style={styles.slides}>
              <View style={styles.imageView}>
                <Image style={styles.imageStyles} source={images.app_icon} />
              </View>
              <View style={styles.midView}>
                <Text style={styles.textStyleWelcome}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</Text>

              </View>
            </View>



            <View style={styles.slides}>
              <View style={styles.imageView}>
                <Image style={styles.imageStyles} source={images.app_icon} />
              </View>
              <View style={styles.midView}>
                <Text style={styles.textStyleWelcome}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>

              </View>
            </View>

            <View style={styles.slides}>
              <View style={styles.imageView}>
                <Image style={styles.imageStyles} source={images.app_icon} />
              </View>
              <View style={styles.midView}>
                <Text style={styles.textStyleWelcome}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</Text>

                {/* <Text style={styles.textStyleNetwork}>
                  Network Against Crime
                </Text> */}
              </View>
            </View>
          </Swiper>
        </View>

        <View style={styles.lowerView}>
          <Button
            height={hp(8)}
            width={'80%'}
            style={styles.buttonStyles}
            title={'Continue'}
            bgColor={colors.buttonColor}
            titleColor={colors.dark_red}
            titleStyle={[styles.titleStyles]}
            onPress={() => this.scrollItem()}
            borderRadius={wp(5)}
          />
          {
            <TouchableOpacity
              style={{
                width: wp('70%'),
                marginTop: wp(3),
                height: hp('7%'),
                alignItems: 'center',
              }}
              onPress={() => {
                this.props.navigation.dispatch(
                    StackActions.replace({
                      routeName: "drawerNav"
                    })
                );
              } }>
              <Text
                style={{
                  color: colors.white,
                  fontSize: wp(4),
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          }
        </View>
      </ImageBackground>
    );
  }
}

export default OnBoarding;
