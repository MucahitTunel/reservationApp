import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import React from 'react';

const Button = ({text, onPress, width}) => {

    return (
        <TouchableOpacity
            style={[styles.container, {width: width}]}
            onPress= {onPress}
        >
            <Text style={styles.textStyle}>{text.toUpperCase()}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        backgroundColor: "#ffa801",
        marginTop: 10,
    },
    textStyle: {
        fontWeight:'bold',
        fontSize:20,
        color:'#0A3045'
    }
});

export default Button;