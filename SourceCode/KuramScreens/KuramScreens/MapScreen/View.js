import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  View,
  Platform,
  StatusBar,
  Linking,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React from "react";
import MapView, { Polyline, Marker } from "react-native-maps";
import Slider from "@react-native-community/slider";
import { AirbnbRating } from "react-native-ratings";
import axios from "axios";

//================================ Local Imported Files ======================================//
import styles from "./Styles";
import AppHeader from "../../../Components/AppHeader/AppHeader";
import colors from "../../../Assets/Colors/colors";
import images from "../../../Assets/Images/images";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
import { Touchable } from "react-native";
import ImageModal from "react-native-image-modal";

const GOOGLE_MAPS_APIKEY = "AIzaSyAxhF267Ltfd02AIYhRAxYTe1a0eRyvocI";

import MapViewDirections from "react-native-maps-directions";
import { TouchableOpacityBase } from "react-native";

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      selected: undefined,
      modalVisible: false,
      selectedImage: "",
      phone: "",
      timings: "",
      images: [],

      resturant: this.props.route.params,
      expenseType: this.props.route.params.pirceType,

      resturantLatLng: {
        latitude: this.props.route.params.resturant.geometry.location.lat,
        longitude: this.props.route.params.resturant.geometry.location.lng,
        latitudeDelta: 0.09,
        longitudeDelta: 0.02,
      },
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  toggleModal = (visible) => {
    this.setState({ modalVisible: visible });
  };
  componentDidMount() {
    let place_id = this.props.route.params.resturant.place_id;
    this.getPlaceDetails(place_id);
  }

  getPlaceDetails = (place_id) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=AIzaSyAJqfbEESlux2Jf_dcR5LtJrIPKM_nGe3I`
      )
      .then((res) => {
        this.getPhotoUrl(res.data.result.photos);
        // console.log("res.data", );
        this.setState({
          phone: res.data.result.international_phone_number,
          timings: res.data.result.opening_hours.weekday_text[0].substr(
            res.data.result.opening_hours.weekday_text[0].indexOf(" ") + 1
          ),
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  getPhotoUrl = async (urls) => {
    let tempArray = [];
    urls.map(async (respones) => {
      // console.log("respones", respones.photo_reference);
      let ref = respones.photo_reference;

      await axios
        .get(
          `https://maps.googleapis.com/maps/api/place/photo?photoreference=${ref}&maxwidth=600&key=AIzaSyAJqfbEESlux2Jf_dcR5LtJrIPKM_nGe3I`
        )
        .then((res) => {
          tempArray.push(res.request.responseURL);
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.setState({
        images: tempArray,
      });
      // console.log("images", this.state.images);
    });
  };
  openGoogleMaps = () => {
    let lat = this.state.resturant.resturant.geometry.location.lat;
    let lng = this.state.resturant.resturant.geometry.location.lng;

    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${lng}`;
    const label = this.state.resturant.resturant.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    // Linking.openURL(url);
    Linking.openURL(url);

    // let fullAddress = {
    //   lat: lat,
    //   loh: log,
    // };

    // const url = Platform.select({
    //   ios: `maps:0,0?q=${fullAddress}`,
    //   android: `geo:0,0?q=${fullAddress}`,
    // });
    // Linking.openURL(url);

    // Linking.openURL(
    //   `https://www.google.com/maps/search/?api=1&query=${this.state.resturant.resturant.geometry.location.lat},${this.state.resturant.resturant.geometry.location.lng}`
    // );
  };
  displayModal(show, item) {
    this.setState({ isVisible: show, item });
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
            title={"Map"}
            onLeftIconPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.mapView}>
          {this.state.resturant && (
            <MapView
              //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={this.state.resturantLatLng}
            >
              <Marker
                coordinate={this.state.resturantLatLng}
                title={this.state.resturant.Name}
                description={this.state.resturant.Name}
              />
            </MapView>
          )}

          <View style={{ flex: 0.45 }}>
            <View style={styles.menuView}>
              <Text style={{ fontWeight: "bold" }}>
                {this.state.resturant.resturant.name}
              </Text>
              <TouchableOpacity
                onPress={this.openGoogleMaps}
                style={styles.menuTouch}
              >
                <Image
                  source={images.ic_calendar_setting}
                  style={styles.calenderMenu}
                />
                <Text style={styles.menuText}>Direction</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingView}>
              <AirbnbRating
                count={5}
                reviewSize={0}
                defaultRating={this.state.resturant.resturant.rating}
                size={17}
                isDisabled={true}
                showRating={false}
              />
            </View>
            <View style={styles.textView}>
              <View style={styles.textViewLeft}>
                <Text style={styles.styleFont}>
                  {this.state.resturant.resturant.vicinity}
                </Text>
              </View>

              <View style={styles.textViewRight}>
                <Text style={[styles.styleFont]}>
                  Type:{this.state.expenseType}
                </Text>
              </View>
            </View>
            <View style={styles.textView}>
              <Text style={styles.styleFont}>{this.state.phone}</Text>
              <Text style={styles.styleFont}>{this.state.timings}</Text>
            </View>
            <View style={styles.imageView}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.images}
                renderItem={({ item }) => (
                  // console.log("item is--->", item),
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleModal(true);
                      this.setState({ selectedImage: item });
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      style={styles.imageModelStyle}
                      source={{ uri: item }}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          // backdropOpacity={1}
          onRequestClose={() => {
            Alert.alert("Modal has now been closed.");
          }}
        >
          <View style={styles.modelView}>
            <TouchableOpacity
              onPress={() => {
                this.toggleModal(!this.state.modalVisible);
              }}
              style={styles.crosBg}
            >
              {/* {setTimeout(() => { */}
              {/* {this.state.selectedImage && ( */}
              <Image source={images.ic_close} style={styles.crossImage} />
              {/* )} */}
              {/* // }, 200)} */}
            </TouchableOpacity>
            <Image
              source={{ uri: this.state.selectedImage }}
              style={styles.image1}
            />
          </View>
        </Modal>
      </View>
    );
  }
}
export default MapScreen;
