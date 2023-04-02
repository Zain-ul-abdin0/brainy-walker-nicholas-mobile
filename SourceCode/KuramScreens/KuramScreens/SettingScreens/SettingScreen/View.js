//================================ React Native Imported Files ======================================//

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  FlatList,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';
import React from 'react';

//================================ Local Imported Files ======================================//

import RateApp from "../../../../Components/RateModel/RateApp";
import colors from "../../../../Assets/Colors/colors";
import styles from './Styles';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      modalAboutAppVisible: false,
      //================================ Data array ======================================//
      // Data: [
      //   {
      //     id: 1,
      //     title: 'Notifications',
      //     firstIcon: images.ic_bell_phone,
      //     toggleSwitchButton: true,
      //     // secondIcon: images.ic_right_icon,
      //   },

      //   {
      //     id: 2,
      //     title: 'Rate App',
      //     firstIcon: images.ic_rate,
      //   },
      //   {
      //     id: 3,
      //     title: 'Contact US',
      //     firstIcon: images.ic_contact_settings,
      //   },

      //   {
      //     id: 5,
      //     title: 'About the App',
      //     firstIcon: images.ic_about,
      //     secondIcon: images.ic_right_icon,
      //   },

      //   {
      //     id: 6,
      //     title: 'Privacy Policy',
      //     firstIcon: images.ic_privacy,
      //     secondIcon: images.ic_right_icon,
      //   },

      //   {
      //     id: 7,
      //     title: 'Terms And Conditions',
      //     firstIcon: images.ic_terms,
      //     secondIcon: images.ic_right_icon,
      //   },
      // ],
    };
  }

  //================================ Model Functions ======================================//

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  // setModalAboutAppVisible = (visible) => {
  //   this.setState({modalAboutAppVisible: visible});
  // };

  // onClickListItem(id) {
  //   switch (id) {
  //     case 1:
  //       break;

  //     case 2:
  //       this.setModalVisible(true);
  //       // this.props.navigation.navigate('SetupPayments');
  //       break;

  //     case 3:
  //       this.props.navigation.navigate('SendFeedback');
  //       break;

  //     case 4:
  //       this.props.navigation.navigate('KarumPoolRules');
  //       break;

  //     case 5:
  //       this.props.navigation.navigate('AboutApp');

  //       break;
  //     case 6:
  //       this.props.navigation.navigate('PrivacyScreen');
  //       break;
  //   }
  // }
  //================================ Setting Item Function ======================================//
  // list(item) {
  //   return (
  //     <SettingsItem
  //       onPress={() => {
  //         this.onClickListItem(item.id);
  //       }}
  //       upperText={item.title}
  //       leftIconImage={item.firstIcon}
  //       arrowImage={item.secondIcon}
  //       switchItem={item.switchItem}
  //       // rightIconColor={colors.white}
  //       rightIconSize={wp(8)}
  //       leftIconSize={wp(4.5)}
  //       height={hp(8)}
  //       backgroundColor={'transparent'}
  //       leftIconColor={item.color}
  //       textColor={item.color}
  //       toggleSwitchButton={item.toggleSwitchButton}
  //     />
  //   );
  // }
  showMainMenu = () => {
    const {modalVisible, modalAboutAppVisible} = this.state;

    this.setModalVisible(!modalVisible);
    this.props.navigation.goBack();
  };
  render() {
    const {modalVisible, modalAboutAppVisible} = this.state;
    return (
      <View style={styles.mainContainer}>
        {/* //================================ StatusBar ======================================// */}

        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.appDarkBlue}
          translucent={false}
        />
        {/* //================================ Header ======================================// */}
        {/* <View style={styles.headerView}>
          <AppHeader
            leftIconPath={images.ic_hamburger_menu}
            title={'SETTINGS'}
            bgColor={'#282A3D'}
            onLeftIconPress={() => this.props.navigation.openDrawer()}
          />
        </View> */}
        {/* //================================ FlatList ======================================// */}
        {/* <View style={styles.container}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={this.state.Data}
            renderItem={({item}) => this.list(item)}
            keyExtractor={(item) => item.id}
          />
        </View> */}
        {/* //================================ Model ======================================// */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <RateApp
            onPressLater={() => {
              this.showMainMenu();
            }}
            onPressOk={() => {
              this.showMainMenu();
            }}
          />
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalAboutAppVisible}
          onRequestClose={() => {
            this.setModalAboutAppVisible(!modalAboutAppVisible);
          }}>
          {/* <AboutAppModel
            onPressContact={() => {
              this.setModalAboutAppVisible(!modalAboutAppVisible);
            }}
            onPressClose={() => {
              this.setModalAboutAppVisible(!modalAboutAppVisible);
            }}
          /> */}
        </Modal>
        {/* //================================ Logout ======================================// */}
        {/* <TouchableOpacity
          style={styles.logout}
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        /> */}
        {/*    <Image
                {/*        style={styles.logoutIcon}*/}
        {/*        source={images.ic_logout_settings}*/}
        {/*    />*/}
        {/*    <Text style={[styles.textStyle, {*/}
        {/*        color: colors.white*/}
        {/*    }]}>Log Out</Text>*/}

        {/*</TouchableOpacity>*/}
      </View>
    );
  }
}
export default SettingsScreen;
