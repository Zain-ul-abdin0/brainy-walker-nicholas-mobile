//================================ React Native Imported Files ======================================//

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, StatusBar, ImageBackground, FlatList } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import Slider from "@react-native-community/slider";
import axios from "axios";
// import Geolocation from "react-native-geolocation-service";
// import Geolocation from "@react-native-community/geolocation";
import Geolocation from "react-native-geolocation-service";

//================================ Local Imported Files ======================================//

import styles from "./Styles";
import AppHeader from "../../../Components/AppHeader/AppHeader";
import Button from "../../../Components/Button/Button";
import colors from "../../../Assets/Colors/colors";

import images from "../../../Assets/Images/images";
import CommanFlatList from "../../../Components/CommanFlatList/View";
import SecondFlatList from "../../../Components/SecondFlatList/secondFlatList";
import jsonData from "../../common/json";
import ResturantsData from "../../common/ezeats_data";

import FirebaseHelper from "../../../FirebaseHelper/FirebaseHelper";
import AppLoading from "../../../Components/AppLoading";
import { PermissionsAndroid } from "react-native";
import { Alert } from "react-native";
import { Platform } from "react-native";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      currentLat: "",
      currentLng: "",

      // resturantsCategories: ResturantsData.data,
      resturantsCategories: [
        {
          id: 0,
          name: "All",
          selected: false,
        },
        {
          id: 1,
          name: "America",
          selected: false,
        },
        {
          id: 2,
          name: "French",
          selected: false,
        },
        {
          id: 3,
          name: "Chinese",
          selected: false,
        },
        {
          id: 4,
          name: "Italain",
          selected: false,
        },
        {
          id: 5,
          name: "Seafood",
          selected: false,
        },
        {
          id: 6,
          name: "Mexican",
          selected: false,
        },
        {
          id: 7,
          name: "Pizza",
          selected: false,
        },
        {
          id: 8,
          name: "Thai",
          selected: false,
        },
        {
          id: 9,
          name: "BBQ",
          selected: false,
        },
        {
          id: 10,
          name: "Deli",
          selected: false,
        },
        {
          id: 11,
          name: "Coffee",
          selected: false,
        },
      ],

      resturantType: [
        {
          id: 0,
          name: "Budget",
          selected: false,
        },
        {
          id: 1,
          name: "Casual",
          selected: false,
        },
        {
          id: 2,
          name: "Expensive",
          selected: false,
        },
      ],

      sliderValue: 0.5 * 1609.34,
      placePirce: 0,
    };
  }
  componentDidMount() {
    this.onPressCurrentLocation();
    // this.getCurrentLocation();

    // this.setState({
    //   loading: true,
    // });
    // this.getAllExpenses();
    // this.getAllCategories();
  }
  getCurrentLocation = async () => {
    await Geolocation.getCurrentPosition(
      (position) => {
        // console.log("position", position.coords.latitude);
        // console.log("position", position.coords.longitude);
        this.setState({
          currentLat: position.coords.latitude,
          currentLng: position.coords.longitude,
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    // await Geolocation.getCurrentPosition((info) => {
    //   console.log("info", info);
    //   this.setState({
    //     currentLat: info.coords.latitude,
    //     currentLng: info.coords.longitude,
    //   });
    // });
  };

  onPressCurrentLocation = () => {
    this.processCurrentLocation();
  };
  // ---------------------- CURRENT LOCATION -------------------------------//
  processCurrentLocation = () => {
    if (Platform.OS === "ios") {
      // Geolocation.requestAuthorization('whenInUse');
      this.getCurrentLocation();
    } else {
      this.askLocationPermissionFromAndroid();
    }
  };

  async askLocationPermissionFromAndroid() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Address Picker Location Permission",
          message: "Address Picker needs access to your location ",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getCurrentLocation();
      } else {
        Alert.alert("Location Permission Not Granted");
      }
    } catch (err) {
      console.warn(err);
    }
  }
  startFetchingCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          () => {
            if (this.mapRef) {
              this.mapRef.animateToCoordinate({
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              });
            } else {
              console.log("this.mapRef ====>", this.mapRef);
            }
          }
        );
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  getAllExpenses = () => {
    let tempArray = [];
    FirebaseHelper.getAllExpenses((response) => {
      response._docs.map((expenses, index) => {
        tempArray.push({
          id: index,
          name: expenses._data.Type,
          selected: false,
        });
      });

      this.setState({
        resturantType: tempArray,
      });
    });
  };
  getAllCategories = () => {
    let tempArray = [
      {
        id: 0,
        name: "All",
        selected: false,
      },
    ];
    FirebaseHelper.getAllCategories((response) => {
      response._docs.map((category, index) => {
        index = index + 1;
        tempArray.push({
          id: index,
          name: category._data.Type,
          selected: false,
        });
      });
      // console.log("tempArray", tempArray);

      this.setState({
        resturantsCategories: tempArray,
        loading: false,
      });
    });
  };

  listNames = (item, index) => {
    return (
      <CommanFlatList
        onPressItem={() => {
          this.onItemPress(item);
        }}
        name={item.name}
        selected={item.selected}
      />
    );
  };

  //second flatlist

  Listname = (item, index) => {
    return (
      <SecondFlatList
        onPressItem1={() => {
          this.onItemPress1(item);
        }}
        name={item.name}
        selected={item.selected}
      />
    );
  };

  onItemPress = (item) => {
    let { resturantsCategories } = this.state;

    if (item.id === 0) {
      if (item.selected) {
        resturantsCategories.map((obj) => {
          obj.selected = false;
        });
      } else {
        item.selected = true;

        resturantsCategories.map((obj, index) => {
          if (index !== 0) {
            obj.selected = false;
          }
        });
      }
    } else {
      resturantsCategories[0].selected = false;
      resturantsCategories.map((obj, index) => {
        if (index == item.id) {
          if (obj.selected) {
            obj.selected = false;
          } else {
            obj.selected = true;
          }
        }
      });
    }

    this.setState({ resturantsCategories }, () => {
      this.setState({
        arrayValues: resturantsCategories,
      });
    });
  };

  onItemPress1 = (item) => {
    let { resturantType } = this.state;

    resturantType.map((obj, index) => {
      if (item.id === index) {
        if (obj.selected) {
          obj.selected = false;
        } else {
          obj.selected = true;
        }
      } else {
        obj.selected = false;
      }
    });

    this.setState({ resturantType }, () => {
      this.setState({ spendArray: resturantType });
    });
  };

  onPressContinue = () => {
    let flag = false;
    this.setState({
      loading: true,
    });
    let selectedTrue = [];
    if (this.state.resturantsCategories[0].selected === true) {
      this.state.resturantsCategories.map((resp, index) => {
        if (index !== 0) {
          selectedTrue.push(resp.name);
        }
      });
      var selectedTrueString = selectedTrue.join("|");
    } else {
      this.state.resturantsCategories.map((resp) => {
        if (resp.selected === true) {
          selectedTrue.push(resp.name);
        }
      });
      var selectedTrueString = selectedTrue.join("|");
    }

    // console.log("selectedTrue", selectedTrue);
    // console.log("selectedTrueString", selectedTrueString);

    //no value is empty

    if (selectedTrue.length === 0) {
      this.setState({
        loading: false,
      });
      alert("Select the type of food are you caraving!");
    } else {
      let { sliderValue, currentLat, currentLng } = this.state;
      // console.log("currentLat", currentLat);
      // console.log("currentLng", currentLng);

      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentLat},${currentLng}&radius=${sliderValue}&type=restaurant&keyword=${selectedTrueString}&key=AIzaSyAJqfbEESlux2Jf_dcR5LtJrIPKM_nGe3I`
        )
        .then((res) => {
          if (res.data.results.length !== 0) {
            this.setState({
              loading: false,
            });
            let item = {
              resturantType: this.state.resturantType,
              results: res.data.results,
            };
            // console.log("item", item);

            this.state.resturantType.map((respones, index) => {
              if (respones.selected === true) {
                index++;
                this.setState(
                  {
                    placePirce: index,
                  },
                  () => {
                    // console.log("placePirce", this.state.placePirce);
                    res.data.results.map((resp) => {
                      // console.log('resp',resp);
                      if (this.state.placePirce === resp.price_level) {
                        // console.log(resp);
                        flag = true;
                      }
                      // else {
                      //   flag = 2;
                      // }
                    });

                    // console.log("flag", flag);
                    if (flag === false) {
                      alert("No resturant found in this filter");
                    }

                    if (flag === true) {
                      // alert("ok");
                      this.props.navigation.navigate("SpinWheel", {
                        item: item,
                      });
                      // this.props.navigation.navigate("SpinWheel", item);
                    }
                  }
                );
              }
            });
            // console.log("res.data.results", res.data.results);
          } else {
            this.setState({
              loading: false,
            });
            alert("No resturant found in this filter");
          }
        })
        .catch((error) => {
          this.setState({
            loading: false,
          });
          console.log("error", error);
        });
    }

    // old code

    // resturantType.map((resturantType) => {
    //   if (resturantType.selected) {
    //     selectedResturantType = resturantType.name;
    //   }
    // });
    // if (sliderValue === "") {
    //   alert("Select silder value");
    //   return;
    // }
    // if (!selectedResturantType) {
    //   alert("Select how much do you want to spend");
    //   return;
    // }

    // let selectedResturantCategories = [];

    // resturantsCategories.map((resturantCategory) => {
    //   if (resturantCategory.selected) {
    //     selectedResturantCategories.push(resturantCategory);
    //   }
    // });

    // if (selectedResturantCategories.length === 0) {
    //   alert("Select the type of food are you caraving!");
    //   return;
    // }

    // this.props.navigation.navigate("SpinWheel", {
    //   sliderValue: sliderValue,
    //   selectedResturantCategories: selectedResturantCategories,
    //   selectedResturantType: selectedResturantType,
    // });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {AppLoading.renderLoading(this.state.loading)}

        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={colors.statusBarColor}
          translucent={false}
        />

        <View style={styles.headerView}>
          <AppHeader
            headerHeight="100%"
            leftIconPath={images.ic_hamburger_menu}
            title={"EZEats"}
            onLeftIconPress={() => this.props.navigation.openDrawer()}
          />
        </View>

        <View style={styles.mapView}>
          <ImageBackground
            source={images.google_maps_image}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            ></View>

            <View
              style={{
                width: wp(95),
                height: hp(12),
                backgroundColor: "white",
                marginTop: hp(2),
                borderRadius: hp(1),
              }}
            >
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: "500",
                  alignSelf: "center",
                  marginTop: hp(2),
                }}
              >
                How far are you willing to travel today?
              </Text>

              <View style={{ alignSelf: "center", marginTop: hp(2) }}>
                <Slider
                  style={{ height: hp(2), width: 350 }}
                  minimumValue={0}
                  step={0.8}
                  maximumValue={5}
                  animationType={"boot"}
                  minimumTrackTintColor={colors.grey}
                  maximumTrackTintColor={colors.grey}
                  thumbTintColor={colors.buttonColor}
                  onValueChange={(value) =>
                    this.setState({ sliderValue: value * 1609.34 })
                  }
                />

                <Text style={{ fontSize: wp(3), marginTop: hp(1) }}>
                  .5ml{"       "} 1ml{"        "} 3ml{"        "} 5ml{"       "}{" "}
                  10ml
                  {"      "} 15ml{"       "} 20ml
                </Text>
              </View>
            </View>

            <View
              style={{
                width: wp(95),
                height: hp(40),
                backgroundColor: "white",
                marginTop: hp(2),
                borderRadius: hp(1),
              }}
            >
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: "500",
                  alignSelf: "center",
                  marginTop: hp(2),
                }}
              >
                What type of food are you caraving?
              </Text>

              <View
                style={{
                  alignSelf: "center",
                  marginTop: hp(2),
                  // backgroundColor: "red",
                  height: hp(32),
                  width: wp(90),
                }}
              >
                <FlatList
                  numColumns={3}
                  // hasTVPreferredFocus
                  // scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  data={this.state.resturantsCategories}
                  renderItem={({ item, index }) => this.listNames(item, index)}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>

            <View
              style={{
                width: wp(95),
                height: hp(18),
                backgroundColor: "white",
                marginTop: hp(2),
                borderRadius: hp(1),
              }}
            >
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: "500",
                  alignSelf: "center",
                  marginTop: hp(2),
                }}
              >
                How much do you want to spend ?
              </Text>

              <View style={{ alignSelf: "center", marginTop: hp(2) }}>
                <FlatList
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                  data={this.state.resturantType}
                  renderItem={({ item }) => this.Listname(item)}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>

            <View style={{ marginTop: hp(2) }}>
              <Button
                height={hp(8)}
                width={"95%"}
                // style={styles.buttonStyles}
                title={"CONTINUE"}
                titleColor={colors.dark_red}
                bgColor={colors.buttonColor}
                titleStyle={[styles.titleStyles]}
                borderRadius={wp(5)}
                onPress={this.onPressContinue}
              />
            </View>

            {/*<View style={styles.uperView}>*/}
            {/*  <View style={styles.uperViewText}>*/}
            {/*    <Text style={styles.uperViewTextStyle}>*/}
            {/*      How far are you willing to travel today?*/}
            {/*    </Text>*/}
            {/*  </View>*/}
            {/*  <View style={styles.uperViewSlider}>*/}

            {/*    <Slider*/}
            {/*      style={{height: 10, width: 350}}*/}
            {/*      minimumValue={0}*/}
            {/*      step={0.8}*/}
            {/*      maximumValue={5}*/}
            {/*      animationType={'boot'}*/}
            {/*      minimumTrackTintColor={colors.grey}*/}
            {/*      maximumTrackTintColor={colors.grey}*/}
            {/*      thumbTintColor={colors.buttonColor}*/}

            {/*      onValueChange={(value)=>this.setState({sliderValue:value})}*/}

            {/*    />*/}
            {/*  </View>*/}
            {/*  <View style={styles.sliderText}>*/}
            {/*    <Text style={{fontSize: wp(3)}}>*/}
            {/*      .5ml{'      '} 1ml{'       '} 3ml{'       '} 5ml{'      '}{' '}*/}
            {/*      10ml*/}
            {/*      {'      '} 15ml{'        '} 20ml*/}
            {/*    </Text>*/}
            {/*  </View>*/}
            {/*</View>*/}

            {/*<View style={styles.middleView}>*/}
            {/*  <View style={styles.middleViewText}>*/}
            {/*    <Text style={styles.uperViewTextStyle}>*/}
            {/*      What type of food are you caraving?*/}
            {/*    </Text>*/}
            {/*  </View>*/}
            {/*  /!*<View style={styles.flatlistView}>*!/*/}

            {/*    <FlatList*/}
            {/*      numColumns={3}*/}
            {/*      style={{*/}
            {/*          marginTop: hp(5)*/}
            {/*      }}*/}
            {/*      showsHorizontalScrollIndicator={false}*/}
            {/*       showsVerticalScrollIndicator={false}*/}
            {/*      data={this.state.resturantsCategories}*/}
            {/*      renderItem={({item,index}) => this.listNames(item,index)}*/}
            {/*      keyExtractor={(item) => item.id}*/}

            {/*    />*/}

            {/*  /!*</View>*!/*/}
            {/*</View>*/}
            {/*<View style={styles.lastView}>*/}
            {/*  <View style={styles.middleViewText}>*/}
            {/*    <Text style={styles.uperViewTextStyle}>*/}
            {/*      How much do you want to spend ?*/}
            {/*    </Text>*/}
            {/*  </View>*/}

            {/*  /!*<View style={styles.flatlistView}>*!/*/}

            {/*    <FlatList*/}
            {/*      numColumns={3}*/}
            {/*      style={{marginTop: hp(5)}}*/}
            {/*      showsHorizontalScrollIndicator={false}*/}
            {/*      showsVerticalScrollIndicator={false}*/}

            {/*      data={this.state.resturantType}*/}
            {/*      renderItem={({item}) => this.Listname(item)}*/}
            {/*      keyExtractor={(item) => item.id}*/}
            {/*    />*/}

            {/*  /!*</View>*!/*/}
            {/*</View>*/}
            {/*<View style={styles.buttonContainer}>*/}
            {/*  <Button*/}
            {/*    height={hp(8)}*/}
            {/*    width={'95%'}*/}
            {/*    style={styles.buttonStyles}*/}
            {/*    title={'CONTINUE'}*/}
            {/*    titleColor={colors.dark_red}*/}
            {/*    bgColor={colors.buttonColor}*/}
            {/*    titleStyle={[styles.titleStyles]}*/}
            {/*    borderRadius={wp(5)}*/}
            {/*    onPress={this.onPressContinue}*/}
            {/*  />*/}
            {/*</View>*/}
          </ImageBackground>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
