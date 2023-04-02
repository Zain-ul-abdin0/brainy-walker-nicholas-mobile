import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../Assets/Colors/colors";


const styles = StyleSheet.create({

    mainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
        // backgroundColor:colors.black
    },

    container:
    {
        height: wp(80),
        width: '90%',
        // padding: wp(5),
        backgroundColor: colors.white,
        borderRadius: wp(4),
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 4,
            // width: 1
        },
        elevation: 8
    },
    topTitle:
    {
        height: '17%',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:colors.grey,
    },
    textDescriptionContainer:
    {
        height: '25%',
        width: '100%',
        // alignItems:'center',
        paddingHorizontal:'5%',
        // justifyContent:'center',
        // backgroundColor:colors.blue,
    },
    textRateApp:
    {
        fontSize: wp(5),
        color: colors.black,
        fontWeight: 'bold',
        textAlign:'center'
    },
    textDescription:
    {
        fontSize: wp(4.5),
        color: colors.black,
        textAlign:'center',
        // fontWeight:'bold'
    },
    textContainer:
    {
        fontSize: wp(4.2),
        color: colors.black,
        textAlign:'center'
    },
    ratingContainer:
    {
        height: '18%',
        width: '100%',
        alignItems: 'center',
        // backgroundColor:colors.red_color,
    },
    line:
    {
        height: '0.5%',
        marginTop: '10%',
        backgroundColor: colors.grey,
    },
    bottomButtons:
    {
        height: '40%',
        width: '100%',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // backgroundColor:colors.grey
    },
    rateNowContainer:
    {
        // flex:1,
        height:'50%',
        // backgroundColor:'green',
        borderTopWidth:wp(0.1),
        // flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    laterContainer:
    {
        // flex:1,
        height:'50%',
        // backgroundColor:'green',
        borderTopWidth:wp(0.1),
        // flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBurron:
    {
        fontSize: wp(4.5),
        color: colors.blue_color,
        fontWeight: 'bold',
    },

});
export default styles;
