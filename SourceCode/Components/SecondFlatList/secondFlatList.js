import React from 'react';
import {TouchableOpacity, Text, View, Image, SafeAreaView} from 'react-native';
import styles from './style';
import Colors from '../../Assets/Colors/colors';
import images from '../../Assets/Images/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppHeader from '../../Components/AppHeader/AppHeader';
import colors from '../../Assets/Colors/colors';

class SecondFlatList extends React.Component {

  constructor() {
    super();
    this.state = {
      LeftBgColor: '#fff',
      MiddleBgColor: '#fff',
      RightBgColor: '#fff',
      leftStatus: false,
      middleStatus:false,
      rightStatus:false
    }
  }


  onLeftPress = () => {
    if (this.state.LeftBgColor === '#fff') {
      this.setState({
        LeftBgColor: '#57B4D2',
        leftStatus: true,

      })
    }


    else{
      this.setState({
        LeftBgColor: '#fff',
        leftStatus: false,

      })
    }
  }



  render() {
    return (
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <TouchableOpacity
          onPress={this.props.onPressItem1}
          style={[styles.mainContainerList,{
            backgroundColor: this.props.selected ? '#57B4D2' : '#fff'
          }]}>
            <Text style={[styles.textStyle, {color: this.props.selected ? '#fff' : 'grey'}]}>{this.props.name}</Text>

          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default SecondFlatList;
