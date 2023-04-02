//================================ React Native Imported Files ======================================//

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StatusBar} from 'react-native';
import React from 'react';

//================================ Local Imported Files ======================================//

import AppInput from "../../../../Components/AppInput/AppInput";
import AppHeader from "../../../../Components/AppHeader/AppHeader";
import Button from "../../../../Components/Button/Button";
import colors from "../../../../Assets/Colors/colors";
import images from "../../../../Assets/Images/images";
import Textarea from 'react-native-textarea';

import styles from './Styles';

class SendFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* //================================ StatusBar ======================================// */}

        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.app_background}
          translucent={false}
        />
        {/* //================================ Header ======================================// */}
        <View style={styles.headerView}>
          <AppHeader
            headerHeight="100%"
            title={'Contact Us'}
            leftIconPath={images.ic_hamburger_menu}
            onLeftIconPress={() => this.props.navigation.openDrawer()}
          />
        </View>
        {/* //================================ Middle Container ======================================// */}
        <View style={styles.middleView}>
          <View style={styles.NameView}>
            <Text style={styles.headingText}>NAME</Text>
            <AppInput
              height={hp(6)}
              width={'90%'}
              backgroundColor={colors.appInputColor}
            />
          </View>
          <View style={styles.EmailView}>
            <Text style={styles.headingText}>EMAIL</Text>
            <AppInput
              height={hp(6)}
              width={'90%'}
              backgroundColor={colors.appInputColor}
            />
          </View>
          <View style={styles.SubjectView}>
            <Text style={styles.headingText}>SUBJECT ADDRESS</Text>
            <AppInput
              height={hp(6)}
              width={'90%'}
              backgroundColor={colors.appInputColor}
            />
          </View>
          <View style={styles.MessageView}>
            <Text style={styles.headingText}>MESSAGE</Text>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={{
                paddingTop: '3%',
                paddingHorizontal: '5%',
                color: colors.black,
              }}
              // onChangeText={this.onChange}
              // defaultValue={this.state.text}
              maxLength={300}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        {/* //================================ Buttons ======================================// */}
        <View style={styles.LastView}>
          <View style={styles.saveButtonView}>
            <Button
              height={hp(8)}
              width={'95%'}
              style={styles.buttonStyles}
              title={'Send'}
              titleColor={colors.dark_red}
              bgColor={colors.buttonColor}
              titleStyle={[styles.titleStyles]}
              borderRadius={wp(5)}
              // onPress={() => this.stateUpdated()}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default SendFeedback;
