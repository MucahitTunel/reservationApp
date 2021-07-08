import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

function RememberMe(props) {

    const active = props.state;

    return (
        <View style={styles.container}>
                {active ? 
                    <Fontisto 
                        name = "radio-btn-active"
                        size = {20}
                        color = "white"
                        onPress = {props.onPress}
                    />
                :
                    <Fontisto 
                        name = "radio-btn-passive"
                        size = {20}
                        color = "white"
                        onPress = {props.onPress}
                    />
                 }
            
            <Text style={styles.textStyle}>Remember Me</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    textStyle: {
        color: 'white',
        marginLeft: 10
    }
})

export default RememberMe;