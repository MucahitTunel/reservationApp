import React, {useState} from 'react';
import { StyleSheet, View, StatusBar, Text, TextInput } from 'react-native';

import Header from '../components/Header';
import Button from '../components/Button';
import Constants from '../utils/Constants';
import ValidateEmail from '../utils/ValidateMail';


function ForgotPassword(props) {
    
    const [mail, setMail] = useState("");

    const send = () => {
        const sonuc = ValidateEmail(mail);
        if(sonuc){}
        
        // Mail yanlış ise eşleşen mail bulunamadı bildirimi
        // Mail doğru ise mail adresine bir bilgilendirme maili gönderilecek
    }

    return (
        <View style={styles.container}>
        <StatusBar 
            backgroundColor="#0A3045"
        />
        <Header title="FORGOT PASSWORD"/>

        <View style={styles.body}>

            <TextInput 
                onChangeText = {setMail}
                value = {mail}
                placeholder = "Mail"
                style = {styles.textBox}
                placeholderTextColor = "rgba(255,255,255,0.4)"
            />

            <Button 
                text = "Gönder"
                onPress = {() => send()}
            />
        
        </View>

        
    </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        marginTop:30,
        alignItems:'center'
    },
    container: {
        flex:1,
        backgroundColor: "#0A3045"
    },
    textBox:{
        width: Constants.TEXT_BOX_WIDTH,
        height: Constants.TEXT_BOX_HEIGHT,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 5,
        color: 'white'
    },
    titleText: {
        color:'white',
        fontSize:22,
        fontWeight:'bold', 
        marginBottom: 30
    },
    text: {
        fontSize: 16,
        marginTop: 20,
        color: 'white'
    }
})

export default ForgotPassword;