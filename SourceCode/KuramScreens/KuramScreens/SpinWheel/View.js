import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import MapView from "react-native-maps";
import WheelOfFortune from "../../../Components/CustomWheelComponent/index";
//================================ Local Imported Files ======================================//
import styles from "./Styles";
import Button from "../../../Components/Button/Button";
import images from "../../../Assets/Images/images";
import AppHeader from "../../../Components/AppHeader/AppHeader";
import colors from "../../../Assets/Colors/colors";
import Geolocation from "@react-native-community/geolocation";
import FirebaseHelper from "../../../FirebaseHelper/FirebaseHelper";
import ResturantsData from "../../common/ezeats_data";

class SpinWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinnerComponent: false,

      currentLat: "40.7580",
      currentLng: "73.9855",

      resturants: [],
      resturantNames: [],

      // sliderValueState: this.props.route.params.sliderValue * 100,
      placePirce: 0,
      pirceType: "",
    };
  }

  componentDidMount() {
    // console.log("sliderValueState", this.props.route.params.item);
    //now
    // this.getCurrentLocation();
    //now
    this.getAllRestaurants();
    // .then(() => {
    //   this.initResturants();
    // });
  }
  getCurrentLocation = async () => {
    Geolocation.getCurrentPosition((info) => {
      this.setState(
        {
          currentLat: info.coords.latitude.toFixed(3),
          currentLng: info.coords.longitude.toFixed(3),
        },
        () => {
          this.getAllRestaurants();
        }
      );
    });
  };
  getAllRestaurants = () => {
    let resturantNames = [];
    let resturants = [];
    let flag = 0;

    let paramsStore = this.props.route.params.item.results;
    let pirceType = this.props.route.params.item.resturantType;

    pirceType.map((resp, index) => {
      if (resp.selected === true) {
        // console.log("resp", resp.name);
        index++;
        this.setState(
          {
            placePirce: index,
            pirceType: resp.name,
          },
          () => {
            paramsStore.map((respones, index) => {
              if (this.state.placePirce === respones.price_level) {
                this.setState({ flag: 1 });
                resturants.push(respones);

                if (index < 8) {
                  let convertSting = respones.name.split(" ");
                  let result = convertSting[0] + " " + convertSting[1];
                  // console.log("result", result);
                  resturantNames.push(result);
                }
              } else {
                this.setState({ flag: 2 });
              }
            });
            if (flag === 2) {
              alert("No resturant found in this filter");
            } else {
              // console.log("resturantNames", this.state.resturantNames);
              this.setState({
                resturants,
                resturantNames,
                showSpinnerComponent: true,
              });
            }
          }
        );

        // if (resp.name === "Budget") {
        //   this.setState({
        //     placePirce: 1,
        //   });
        // } else if (resp.name === "Casual") {
        //   this.setState({
        //     placePirce: 2,
        //   });
        // } else if (resp.name === "Expensive") {
        //   this.setState({
        //     placePirce: 3,
        //   });
        // }
      }
    });
  };
  // getAllRestaurants = () => {
  //   let {
  //     sliderValue,
  //     selectedResturantCategories,
  //     selectedResturantType,
  //   } = this.props.route.params;
  //   let { currentLat, currentLng, sliderValueState } = this.state;
  //   // console.log("currentLat", currentLat);
  //   // console.log("currentLng", currentLng);
  //   // console.log("sliderValueState", sliderValueState);

  //   let resturants = [];
  //   let resturantNames = [];

  //   FirebaseHelper.getAllRestaurants((response) => {
  //     selectedResturantCategories.map((restaurant) => {
  //       if (restaurant.name === "All") {
  //         response._docs.map((resp, index) => {
  //           if (selectedResturantType === resp._data.ExpenseType) {
  //             // console.log("index inner ", index);
  //             let distance = this.getDistanceFromLatLng(
  //               currentLat,
  //               currentLng,
  //               resp._data.Latitude,
  //               resp._data.Longitude,
  //               sliderValueState
  //             );
  //             if (distance <= sliderValueState) {
  //               // console.log("index if ", index);
  //               if (index <= 7) {
  //                 resturants.push(resp._data);
  //                 resturantNames.push(resp._data.Name);
  //               }
  //             } else {
  //               // console.log("index else", index);
  //               if (index <= 7) {
  //                 resturants.push(resp._data);
  //                 resturantNames.push(resp._data.Name);
  //               }
  //             }
  //           }
  //         });
  //       } else {
  //         response._docs.map((resp) => {
  //           if (restaurant.name === resp._data.Category) {
  //             if (selectedResturantType === resp._data.ExpenseType) {
  //               // console.log("currentLat", currentLat);
  //               let distance = this.getDistanceFromLatLng(
  //                 currentLat,
  //                 currentLng,
  //                 resp._data.Latitude,
  //                 resp._data.Longitude,
  //                 sliderValueState
  //               );

  //               if (distance <= sliderValueState) {
  //                 resturants.push(resp._data);
  //                 resturantNames.push(resp._data.Name);
  //               } else {
  //                 resturants.push(resp._data);
  //                 resturantNames.push(resp._data.Name);
  //               }
  //             }
  //           }
  //         });
  //       }
  //     });
  //     this.setState({
  //       showSpinnerComponent: true,
  //       resturants,
  //       resturantNames,
  //     });
  //   });
  // };

  // initResturants = () => {
  //   let { currentLat, currentLng } = this.state;

  //   let resturants = [];
  //   let resturantNames = [];

  //   selectedResturantCategories.map((resturantCategory) => {
  //     resturantCategory.resturants.map((resturant) => {
  //       //Check if same resturant type
  //       if (resturant.type === selectedResturantType) {
  //         //Check if current lat lng present
  //         if (currentLat && currentLng) {
  //           //check if resturant lat lng is within range
  //           if (
  //             this.getDistanceFromLatLng(
  //               currentLat,
  //               currentLng,
  //               resturant.latlng.latitude,
  //               resturant.latlng.longitude,
  //               true
  //             ) <= sliderValue
  //           ) {
  //             resturants.push(resturant);
  //             resturantNames.push(resturant.restName);
  //           }
  //         } else {
  //           resturants.push(resturant);
  //           resturantNames.push(resturant.restName);
  //         }
  //       }
  //     });
  //   });

  //   // this.setState({
  //   //   showSpinnerComponent: true,
  //   //   resturants,
  //   //   resturantNames,
  //   // });
  // };

  getDistanceFromLatLng = (lat1, lng1, lat2, lng2, miles) => {
    // miles optional
    if (typeof miles === "undefined") {
      miles = false;
    }
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    function square(x) {
      return Math.pow(x, 2);
    }
    var r = 6371; // radius of the earth in km
    lat1 = deg2rad(lat1);
    lat2 = deg2rad(lat2);
    var lat_dif = lat2 - lat1;
    var lng_dif = deg2rad(lng2 - lng1);
    var a =
      square(Math.sin(lat_dif / 2)) +
      Math.cos(lat1) * Math.cos(lat2) * square(Math.sin(lng_dif / 2));
    var d = 2 * r * Math.asin(Math.sqrt(a));
    if (miles) {
      return d * 0.621371;
    } //return miles
    else {
      return d;
    } //return km
  };

  getSpinnerValue = (value, index) => {
    this.state.resturants.map((resp, index) => {
      let convertSting = resp.name.split(" ");
      let result = convertSting[0] + " " + convertSting[1];

      if (value === result) {
        setTimeout(() => {
          this.setState(
            {
              showSpinnerComponent: false,
            },
            () => {
              this.setState({
                showSpinnerComponent: true,
              });
            }
          );
        }, 1000);

        this.props.navigation.navigate("MapScreen", {
          resturant: this.state.resturants[index],
          pirceType: this.state.pirceType,
        });
      } else {
      }
    });

    //   this.setState({
    //   showSpinnerComponent: false
    // }, () => {
    //now

    //now

    // Alert.alert(
    //   'Ezeats',
    //   'Press Ok to see restaurant details',
    //   [
    //     { text: 'Cancel', onPress: () => {
    //             this.setState({
    //                 showSpinnerComponent: false
    //             }, () => {
    //                 this.setState({
    //                     showSpinnerComponent: true
    //                 })
    //             })
    //
    //     } },
    //     {
    //       text: 'Ok',
    //       onPress: () => {
    //           this.setState({
    //               showSpinnerComponent: false
    //           }, () => {
    //               this.setState({
    //                   showSpinnerComponent: true
    //               })
    //           })
    //         // this.setState({
    //         //   showSpinnerComponent: true
    //         // })
    //         this.props.navigation.navigate('MapScreen', {
    //           resturant: this.state.resturants[index]
    //         })
    //
    //       }
    //        ,
    //     },
    //   ],
    //   { cancelable: false },
    // );
    //spinner show again after rotation
    //   setTimeout(()=>{
    //   this.setState({
    //   showSpinnerComponent:true
    //   })
    // },100)

    // })
  };

  changeWheel = async () => {
    let resturants = [];
    let resturantNames = [];

    this.state.resturants.map((respones) => {
      resturants.push(respones);
    });
    // console.log("resturants", resturants);

    let randomResturants = this.getRandom(resturants, 8);

    randomResturants.map((resturant) => {
      let convertSting = resturant.name.split(" ");
      let result = convertSting[0] + " " + convertSting[1];

      resturantNames.push(result);
    });
    // console.log("resturantNames", resturantNames);

    this.setState({
      showSpinnerComponent: true,
      resturants,
      resturantNames,
    });

    // await FirebaseHelper.getAllRestaurants((response) => {
    //   response._docs.map((resp) => {
    //     resturants.push(resp._data);
    //   });
    // });

    // let randomResturants = this.getRandom(resturants, 8);

    // randomResturants.map((resturant) => {
    //   resturantNames.push(resturant.Name);
    // });
    // this.setState({
    //   showSpinnerComponent: true,
    //   resturants,
    //   resturantNames,
    // });

    // ResturantsData.data.map((resturantType) => {
    //   // console.log("resturantType", resturantType);
    //   resturantType.resturants.map((resturant) => {
    //     console.log("resturant", resturant);
    //     resturants.push(resturant);
    //   });
    // });

    // let randomResturants = this.getRandom(resturants, 8);

    // randomResturants.map((resturant) => {
    //   resturantNames.push(resturant.restName);
    // });

    // this.setState({
    //   showSpinnerComponent: true,
    //   resturants,
    //   resturantNames,
    // });
  };

  getRandom = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  onPressWheel() {
    if (this.state.rewards[this.state.spinnerIndex + 1]) {
      this.setState(
        {
          spinnerIndex: this.state.spinnerIndex + 1,
        },
        () => {
          this.setState({
            showSpinnerComponent: true,
          });
        }
      );
    } else {
      this.setState({
        showSpinnerComponent: true,
      });
    }
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
            leftIconPath={images.headerLeftBack}
            title={"Spin the Wheel"}
            onLeftIconPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.mapView}>
          <ImageBackground
            source={images.ic_map}
            style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <View style={styles.wheelStyle}>
              {this.state.showSpinnerComponent && (
                <WheelOfFortune
                  options={{
                    rewards: this.state.resturantNames,
                    borderWidth: 5,
                    borderColor: "#fff",
                    innerRadius: 60,
                    duration: 2000,
                    colors: ["#54839A"],
                    backgroundColor: colors.buttonColor,
                    textAngle: "horizontal",
                    onRef: (ref) => (this.child = ref),
                  }}
                  // rewards={this.state.resturantNames}
                  // knobSize={20}
                  // borderWidth={20}
                  // borderColor={'#FFF'}
                  // innerRadius={60}
                  // backgroundColor={colors.buttonColor}
                  // colors={['#54839A']}
                  // textAngle= 'horizontal'
                  // duration={2000}
                  getWinner={(value, index) => {
                    this.getSpinnerValue(value, index);
                  }}
                  // onRef={(ref) => (this.child = ref)}
                />
              )}

              <TouchableOpacity
                style={{
                  width: hp(10),
                  height: hp(6),

                  alignItems: "center",
                }}
                onPress={() => {
                  // this.setState({
                  //     showSpinnerComponent:true
                  // }, () => {
                  this.child._onPress();

                  // })
                  // this.setState({
                  //     resturantNames: this.state.resturantNames
                  // }, () => {
                  //     this.child._onPress()
                  // })
                }}
              >
                <Text
                  style={{
                    fontSize: wp(3.5),
                    color: "#fff",
                    fontWeight: "bold",
                    top: wp(1.5),
                  }}
                >
                  Tap to Spin
                </Text>
              </TouchableOpacity>
            </View>
            {/*Button*/}
            <View style={styles.buttonContainer}>
              <Button
                height={hp(8)}
                width={"95%"}
                style={styles.buttonStyles}
                title={"Change Wheel"}
                titleColor={colors.dark_red}
                bgColor={colors.buttonColor}
                titleStyle={[styles.titleStyles]}
                borderRadius={wp(5)}
                onPress={() =>
                  this.setState({ showSpinnerComponent: false }, () => {
                    this.changeWheel();
                  })
                }
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
export default SpinWheel;
