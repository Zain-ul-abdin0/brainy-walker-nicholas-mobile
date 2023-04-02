import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles'
import { Rating, AirbnbRating } from 'react-native-ratings';
import colors from '../../Assets/Colors/colors';
class RateApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            dummyText: 'If you love our app we would appreciate you if you take a couple' +
                ' of seconds to rate us  in the app market!',

        }
    }

    render() {
        return (

            <View style={styles.mainContainer}>

                <View style={styles.container}>

                    <View style={styles.topTitle}>
                        <Text style={styles.textRateApp}>Rate Now</Text>
                    </View>

                    <View style={styles.textDescriptionContainer}>
                        <Text style={styles.textDescription}>{this.state.dummyText}</Text>
                    </View>

                    <View style={styles.ratingContainer}>
                        <AirbnbRating
                            count={5}
                            reviewSize={0}
                            defaultRating={1}
                            size={30}
                            ratingColor='gold'
                            showRating={false}
                        />
                    </View>


                    <View style={styles.bottomButtons}>

                        <TouchableOpacity style={styles.rateNowContainer} onPress={this.props.onPressOk}>
                            <Text style={styles.submitBurron}>Rate Now</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.props.onPressLater} style={styles.laterContainer}>
                            <Text style={[styles.submitBurron,{color:colors.red_color}]}>Close</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        )
    }
}

export default RateApp;
