import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, SocialIcon } from 'react-native-elements';

import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Assets/Colors/colors';



class MyModel extends React.Component {



    render() {
        return (
            <View style={styles.mainContainer}>


                <View style={styles.conatiner}>


                    <View style={styles.mainModelContainer} >
                        <View style={styles.ModelTitleContainer}>
                            <Text style={styles.ModelTitleTextContainer}>
                                Sign Up
                            </Text>

                        </View>
                        <View style={styles.ModelMessageContainer}>
                            <View style={styles.ModelMessageBothContainer}>
                                <View style={styles.ModelMessageSimpleContainer}>
                                    <Text style={styles.modelText}>
                                        By Signing Up, you agree with the
                            </Text>

                                </View>


                                <TouchableOpacity style={styles.ModelMessageColorContainer}
                                    onPress={this.props.onPressTerm}>
                                    <Text style={styles.ModelMessageTextColorContainer}>
                                        Terms
                            </Text>

                                </TouchableOpacity>

                            </View>


                            <View style={styles.ModelMessageBothTwoContainer}>
                                <TouchableOpacity style={styles.ModelMessageAndConditionContainer}
                                    onPress={this.props.onPressCondition}
                                >
                                    <Text style={styles.ModelMessageTextColorContainer}>and Conditions</Text>

                                </TouchableOpacity>
                                <View style={styles.ModelMessageAndContainer}>
                                    <Text style={styles.modelText}>and </Text>

                                </View>


                                <TouchableOpacity style={styles.ModelMessagePrivacyContainer}
                                    onPress={this.props.onPressPrivacy}
                                >
                                    <Text style={styles.ModelMessageTextColorContainer}>Privacy Policy </Text>

                                </TouchableOpacity>

                            </View>


                        </View>
                        <View style={styles.buttonViewContainer}>
                            <View style={styles.okViewContainer}>
                                <TouchableOpacity onPress={this.props.onPressAgree} >
                                    <Text style={[styles.AgreeTextStyleContainer,{color:colors.blue_color}]}>
                                        AGREE
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.CancelViewContainer}>
                                <TouchableOpacity onPress={this.props.onPressCancel}>
                                    <Text style={[styles.AgreeTextStyleContainer,{color:colors.red_color}]}>
                                        CANCEL
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        </View>



                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)'

    },
    modelText:
    {
        fontSize: wp(3.8)
    },
    mainModelContainer: {
        height: wp(40),
        width: '90%',
        backgroundColor: "white",
        alignItems: 'center',
        alignSelf: 'center',



    },
    ModelMessageTextColorContainer: {
        color: colors.blue_color,
        fontSize: wp(3.8),
        textDecorationLine:'underline'

    },
    ModelMessageColorContainer: {
        height: hp(3.5),
        width: '20%',
        alignItems: 'flex-start',
        // backgroundColor:"red",
        justifyContent:'center'


    },
    ModelMessagePrivacyContainer: {
        height: '100%',
        width: '37%',
        alignItems: "flex-start"


    },
    ModelMessageAndContainer: {
        height: '100%',
        width: '9%',
        alignItems: 'flex-start',

    },
    ModelMessageAndConditionContainer: {
        height: '100%',
        width: wp(27),
        alignItems: 'flex-start',






    },
    ModelMessageBothTwoContainer: {
        height: wp(7),
        width: '100%',
        flexDirection: 'row',

        alignItems: 'flex-start'



    },
    AgreeTextStyleContainer: {
        fontWeight: 'bold',
        color: colors.AppRedColor,

    },
    ModelTitleContainer: {
        height: wp(11),
        width: '90%',
        justifyContent: "center",



    },
    conatiner:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    ModelMessageSimpleContainer: {
        height: '100%',
        width: '72%',
// backgroundColor:"pink"


    },
    ModelMessageContainer: {
        height: wp(14),
        width: '90%',

        justifyContent: 'center'



    },
    ModelMessageBothContainer: {
        height: wp(6),
        width: '100%',
        flexDirection: 'row',

        alignItems: "flex-end"


    },
    ModelTitleTextContainer: {
        fontWeight: 'bold',
        fontSize: wp(4.5),
        color: colors.AppRedColor

    },
    rateTextStyleContainer: {
        color: 'black',
        fontWeight: 'bold',


    },
    ratingViewContainer: {
        height: '15%',
        width: '90%',


    },
    rateViewContainer: {
        height: '15%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",

    },
    secondTextViewContainer: {
        height: '20%',
        width: '80%',


    },
    socialViewContainer: {
        height: '15%',
        width: '80%',
        flexDirection: "row",

        justifyContent: 'center'


    },
    secondTextStyleContainer: {
        color: 'black',
        textAlign: 'center'
    },
    buttonViewContainer: {
        height: wp(15),
        width: '90%',
        flexDirection: "row",







    },
    CancelViewContainer: {
        height: '100%',
        width: '30%',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        alignContent: 'center',

    },
    okViewContainer: {
        height: '100%',
        width: '70%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 4,

    },



});

export default MyModel;
