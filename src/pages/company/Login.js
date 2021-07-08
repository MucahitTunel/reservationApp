import React, {useState, useEffect} from 'react';
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { navigationAction } from '../../actions/navigationAction'; 

import Constants from '../../utils/Constants';
import { useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import RememberMe from '../../components/RememberMe';
import Button from '../../components/Button';
import ValidateEmail from '../../utils/ValidateMail';

function Login(props) {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const navigation = useNavigation();

    const dispatch = useDispatch();
    dispatch(navigationAction(props.navigation));

    const save = () => {
        let sonuc = ValidateEmail(mail);
        if(sonuc){}

        // fetch işlemi ile kontrol yapılacak
        // Sonuç olumlu ise önce dispatch işlemi yapılacak
        // daha sonra navigation işlemi gerçekleştirilecek

    }

    const rememberMeState = () => {
        setRemember(!remember);
        
    }

    const goToCreateNewAccount = () => {
        navigation.navigate("CreateNewAccount");
    }

    const goToForgotPassword = () => {
        navigation.navigate("ForgotPassword");
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor="#0A3045"
            />
            <Header title="LOGIN"/>

            <View style={styles.body}>
                <Text style={styles.titleText}>COMPANY CONTROL PANEL</Text>

                <TextInput 
                    onChangeText = {setMail}
                    value = {mail}
                    placeholder = "Mail"
                    style = {styles.textBox}
                    placeholderTextColor = "rgba(255,255,255,0.4)"
                />

                <TextInput 
                    onChangeText = {setPassword}
                    value = {password}
                    placeholder = "Password"
                    style = {styles.textBox}
                    placeholderTextColor = "rgba(255,255,255,0.4)"
                />

                <View style={styles.rememberContainer}>
                    <RememberMe state={remember} onPress={()=>rememberMeState()}/>
                </View>
                
                <Button 
                    text = "Kaydet"
                    onPress = {() => save()}
                    width = "80%"
                />
                
                <Text style={styles.text} onPress={()=>goToCreateNewAccount()}>  Create a new account </Text>

                <Text style={[styles.text, {textDecorationLine: 'underline'}]} onPress={()=>{goToForgotPassword()}}> Forgot Password </Text>
            
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
    rememberContainer: {
        width: '80%',
        marginTop: 10
        
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

export default Login;