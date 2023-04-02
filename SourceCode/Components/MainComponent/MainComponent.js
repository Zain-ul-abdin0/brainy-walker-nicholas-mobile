import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Assets/Colors/colors';
import images from '../../Assets/Images/images';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Swiper from 'react-native-swiper';

class MainComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newIndex: 1,
            currentIndex: 0,
          };

    }
    
    onIndexChanged(index) {
        this.setState({ currentIndex: index });
      }
    //   scrollItem() {
    //     if (this.state.currentIndex === 2) {
    //       this.props.navigation.navigate('SignupWith');
    //     } else {
    //       this.refs.swiper.scrollBy(1);
    //     }
    //   }
    render() {

        return (
            <SafeAreaView> 

            <View style={styles.mainContainer}>
                <View style={styles.mainContainerList}>
                <View style={styles.uperContainer}>

                <View style={styles.uperLeftContainer}>

                    <View style={styles.uperLeftUperContainer}>
        <Text style={{fontSize:wp(4),color:colors.white,fontWeight:"bold"}}>{this.props.mainName}</Text>
                    </View>
                    <View style={styles.uperLeftBottomContainer}>

                    <Image source={images.ic_location}
                        style={styles.imageStylesAvatar}
                    />
                    <Text style={{fontSize:wp(3.5),color:colors.white,fontWeight:"bold",paddingLeft:wp(2),alignSelf:"center",paddingBottom:wp(1.5)}}>{this.props.subName}</Text>


                    </View>

                </View>
                <View style={styles.uperRightContainer}>

                    <View style={styles.ratingContainer}>
                    <AirbnbRating
  count={5}
//   defaultRating={11}
  size={wp(3.5)}
    reviews={false}
    reviewSize={0}
/>

                    </View>
                    <Text style={{paddingTop: Platform.OS==='ios'?wp(7):wp(5.2),color:colors.white}}>4.0</Text>


                    <View style={styles.imageContainer}>

                    <Image source={images.ic_location}
                        style={styles.imageStylesAvatar}
                    />
                    </View>
                
                 




                </View>


                </View>
                <View style={styles.middleContainer}>


               
                      <Swiper
            showsButtons={false}
            loop={false}
            ref={'swiper'}
            onIndexChanged={this.onIndexChanged.bind(this)}
            activeDotColor={colors.white}
            dotColor={colors.white}
            activeDot={
              <View
                style={{
                  backgroundColor: colors.blue_color,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }>
            <View style={styles.slides}>
              <View style={styles.imageView}>
                <Image source={this.props.home}
                        style={styles.homeStyle}
                    />
              </View>
           
            </View>

            <View style={styles.slides}>
              <View style={styles.imageView}>
                <Image source={this.props.home}
                        style={styles.homeStyle}
                    />
              </View>
            
            </View>

            <View style={styles.slides}>
              <View style={styles.imageView}>
               <Image source={this.props.home}
                        style={styles.homeStyle}
                    />
              </View>
            
            </View>
          </Swiper>


                </View>
                <View style={styles.bottomContainer}>

                    <View style={styles.nameAndPriceContainer}>

                        <View style={styles.nameContainer}>
                            <Text style={{color:'black',textAlign:"center",fontSize:wp(4.4),fontWeight:"800"}}>Promotion Avaible</Text>
                        </View>
        <Text style={{color:'#3EE6FC',textAlign:"center",fontSize:wp(5),fontWeight:"bold"}}>{this.props.price}</Text>
                    </View>

                    <View style={styles.detailsContainer}>
                        <Text style={{color:colors.white,paddingLeft:wp(2)}}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>

                    <View style={{height:wp(0.1),backgroundColor:"grey",marginHorizontal:wp(5)}}></View>
                    <View style={styles.bottomIcon}>
                    <Image source={images.ic_location}
                        style={styles.imageStylesAvatar}
                    />
                     <Image source={images.ic_location}
                        style={styles.imageStylesAvatar}
                    />
                     <Image source={images.ic_location}
                        style={styles.imageStylesAvatar}
                    />
                    <Image source={images.ic_location}
                    style={styles.imageStylesAvatar}
                /> 
                <Image source={images.ic_location}
                style={styles.imageStylesAvatar}
            />
                    </View>
                </View>

                </View>

            
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    mainContainer:
    {
        flex: 1,
        // backgroundColor: colors.white
    },
    mainContainerList:{
        marginTop:wp(3),
        borderRadius:wp(2),
height:hp(55),
width:'90%',
alignSelf:"center",
// marginHorizontal:wp(2),
backgroundColor:"#5B6079",
// marginBottom:wp(2)
    },
    slides: {
      
        flex:5,
        // backgroundColor: 'green'
      },
      imageView: {
        height:'100%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink'
      },
    uperContainer:{
        height:'15%',
        width:'100%',
        // alignSelf:"center",
        // marginHorizontal:wp(2),
        // backgroundColor:"pink",
        flexDirection:"row",
        paddingHorizontal:wp(4),

    },
    uperLeftContainer:{
        height:'100%',
        width:'50%',
        // backgroundColor:"grey"
        
    },
    uperLeftUperContainer:{
        height:'50%',
        width:'100%',
        justifyContent:'flex-end',
        // backgroundColor:"yellow"
    },
    uperLeftBottomContainer:{
        height:'50%',
        width:'100%',
        // backgroundColor:"red",
        flexDirection:"row"
    },
    uperRightContainer:{

        height:'100%',
        width:'50%',
        // backgroundColor:"grey",
        // paddingBottom:wp(16),
        flexDirection:"row",
        // alignContent:"center",
        // justifyContent:"center",
        // alignItems:"center"

    },
    ratingContainer:{
        height:'100%',
        width:'65%',
        // marginBottom:wp(4)
        // backgroundColor:"blue",
        // paddingBottom:Platform.OS === 'ios' ? wp(2):5
        // flexDirection:"row"
    },
    imageContainer:{
        height:'100%',
        width:'30%',
        // backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
    },
    middleContainer:{
        height:'45%',
        width:'100%',
        // alignSelf:"center",
        // marginHorizontal:wp(2),
    //   backgroundColor:"green"
    },
    bottomContainer:{
        height:'40%',
        width:'100%',

        // alignSelf:"center",
        // marginHorizontal:wp(2),
    //   backgroundColor:"yellow"
    },
    nameAndPriceContainer:{
        height:hp(7),
        width:'100%',
        // backgroundColor:"red",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:wp(4)
    },
    detailsContainer:{
        height:hp(10),
        width:'100%',
        paddingTop:wp(1),
        paddingHorizontal:wp(4),

        // backgroundColor:"red",
    },
    bottomIcon:{
        paddingTop:wp(2),
        height:hp(5),
        width:'35%',
        // backgroundColor:"grey",
        paddingHorizontal:wp(4),

        flexDirection:"row",
        justifyContent:"space-around"
    },
    nameContainer:{
        height:'75%',

        marginTop:wp(1),
        justifyContent:"center",
        // alignItems:"center",
        // alignSelf:'center',
        width:'55%',
        backgroundColor:"#3EE6FC"
    },
    imageStylesAvatar: {
        height: hp(3),
        width: wp(3),
        // tintColor:colors.white,
        resizeMode: 'contain'
    },
    homeStyle:{
        height: '100%',
        width: '100%',
        // tintColor:colors.white,
        resizeMode: 'cover'
    },

    
});

export default MainComponent;