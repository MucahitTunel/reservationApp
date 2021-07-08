import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Constants from '../utils/Constants';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


function Header({title, onPress}) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.backButton} onPress={onPress}>
                    <AntDesign
                        name="arrowleft"
                        size={40}
                        color="white"
                    />
                </TouchableOpacity>

                <View style={styles.pageNameContainer}>
                    <Text style={styles.textDetail}> {title} </Text>
                </View>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    backButton: {
        alignItems:'flex-start',
        marginLeft: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        width: Constants.MAX_WIDTH,
        height: 55*Constants.RATIO,
        backgroundColor: '#417A97',
        borderBottomLeftRadius: Constants.RADIUS,
        borderBottomRightRadius: Constants.RADIUS,
    },
    content:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
    },
    pageNameContainer: {
        alignItems:'flex-end',
        marginLeft: 20,
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    textDetail: {
        color:'white',
        marginRight: 20,
        fontSize:20
    },

})

export default Header;