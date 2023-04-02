//================================ React Native Imported Files ======================================//

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Text, Image, View, SafeAreaView, Modal } from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import * as React from "react";

//================================ Local Imported Files ======================================//

import TermsAndCondtions from "./KuramScreens/KuramScreens/SettingScreens/TermConditionScreen/View";
import SendFeedback from "./KuramScreens/KuramScreens/SettingScreens/SendFeedBackScreen/View";
import SettingsScreen from "./KuramScreens/KuramScreens/SettingScreens/SettingScreen/View";
import PrivacyScreen from "./KuramScreens/KuramScreens/SettingScreens/PrivacyScreen/View";
import AboutApp from "./KuramScreens/KuramScreens/SettingScreens/AboutAppScreen/View";
import OnBoarding from "./KuramScreens/KuramScreens/OnBoardingScreen/View";
import SplashScreen from "./KuramScreens/KuramScreens/SplashScreen/View";

import images from "./Assets/Images/images";
import styles from "./Components/MyNav/styles";
import CommanFlatList from "./Components/CommanFlatList/View";
import HomeScreen from "./KuramScreens/KuramScreens/HomeScreen/View";
import SpinWheel from "./KuramScreens/KuramScreens/SpinWheel/View";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapScreen from "./KuramScreens/KuramScreens/MapScreen/View";
import SecondFlatList from "./Components/SecondFlatList/secondFlatList";

function CustomDrawerContent(props) {
  // let isDriver = false;

  return (
    <SafeAreaView>
      <View style={styles.userInfoContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={images.ic_close} style={styles.menuStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("HomeScreen")}
        >
          <Text style={{ fontSize: wp(5), fontWeight: "600" }}>Home</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.userImageContainer}
          onPress={() => props.navigation.navigate('EditProfile')}>
          <Image
            source={images.avatar}
            style={styles.userProfileImage}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userTextContainer}>
          <Text style={styles.userNameText}>Hi, Andrea</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.drawerItemsContainer}>
        <DrawerItem
          style={styles.drawerItemStyles}
          label={() => (
            <Text style={styles.drawerItemLabelText}>{"Rate App"}</Text>
          )}
          icon={() => (
            <Image source={images.ic_rate} style={styles.drawerItemImage} />
          )}
          onPress={() => props.navigation.navigate("SettingsScreen")}
        />

        <DrawerItem
          style={styles.drawerItemStyles}
          label={() => (
            <Text style={styles.drawerItemLabelText}>{"Contact Us"}</Text>
          )}
          icon={() => (
            <Image source={images.ic_phone} style={styles.drawerItemImage} />
          )}
          onPress={() => props.navigation.navigate("SendFeedback")}
        />

        <DrawerItem
          style={styles.drawerItemStyles}
          label={() => (
            <Text style={styles.drawerItemLabelText}>{"About the App"}</Text>
          )}
          icon={() => (
            <Image source={images.ic_about} style={styles.drawerItemImage} />
          )}
          onPress={() => props.navigation.navigate("AboutApp")}
        />

        <DrawerItem
          style={styles.drawerItemStyles}
          label={() => (
            <Text style={styles.drawerItemLabelText}>{"Privacy Policy"}</Text>
          )}
          icon={() => (
            <Image source={images.ic_privacy} style={styles.drawerItemImage} />
          )}
          onPress={() => props.navigation.navigate("PrivacyScreen")}
        />

        <DrawerItem
          style={styles.drawerItemStyles}
          label={() => (
            <Text style={styles.drawerItemLabelText}>
              {"Terms and Condtions"}
            </Text>
          )}
          icon={() => (
            <Image source={images.ic_terms} style={styles.drawerItemImage} />
          )}
          onPress={() => props.navigation.navigate("TermsAndCondtions")}
        />
      </View>
    </SafeAreaView>
  );
}

//================================ Drawer Navigator ======================================//

const drawer = createDrawerNavigator();
function drawerNav() {
  return (
    <drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={(props) => CustomDrawerContent(props)}
    >
      <drawer.Screen name="HomeScreen" component={HomeScreen} />
      <drawer.Screen name="SendFeedback" component={SendFeedback} />
      <drawer.Screen name="AboutApp" component={AboutApp} />
      <drawer.Screen name="PrivacyScreen" component={PrivacyScreen} />
      <drawer.Screen name="TermsAndCondtions" component={TermsAndCondtions} />
    </drawer.Navigator>
  );
}

//================================ Root Stack ======================================//

const RootStack = createStackNavigator();
export default function myStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={"splashScreen"}
        headerMode={"none"}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <RootStack.Screen name="splashScreen" component={SplashScreen} />
        <RootStack.Screen
          name="TermsAndCondtions"
          component={TermsAndCondtions}
        />
        <RootStack.Screen name="PrivacyScreen" component={PrivacyScreen} />
        <RootStack.Screen name="SendFeedback" component={SendFeedback} />
        <RootStack.Screen name="OnBoarding" component={OnBoarding} />
        <RootStack.Screen name="AboutApp" component={AboutApp} />
        <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="SpinWheel" component={SpinWheel} />
        <RootStack.Screen name="MapScreen" component={MapScreen} />
        <RootStack.Screen name="drawerNav" component={drawerNav} />
        <RootStack.Screen name="CommanFlatList" component={CommanFlatList} />
        <RootStack.Screen name="SecondFlatList" component={SecondFlatList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
