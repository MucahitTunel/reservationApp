import React, {useState} from 'react';
import { View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import Constants from '../../utils/Constants';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ValidateEmail from '../../utils/ValidateMail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';


function CreateNewAccount(props) {

    const [data, setData] = useState({
        companyName: "",
        email: "",
        password: "",
        retryPassword: "",
        phoneNumber: "",
        website: "",
        markTheLocation: false,
    });
    const navigation = useSelector(state => state.navigationReducer);

    const save = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <Header title="SIGN UP" onPress={()=>save()} />

            <View style={styles.body}>
                <ScrollView>
                    <TextInput 
                        onChangeText = {setData.companyName}
                        value = {data.companyName}
                        placeholder = "Company Name"
                        style = {styles.textBox}
                        placeholderTextColor = {Constants.PLACEHOLDER_COLOR}
                    />
                    <TextInput 
                        onChangeText = {setData.email}
                        value = {data.email}
                        placeholder = "Mail"
                        style = {styles.textBox}
                        placeholderTextColor = {Constants.PLACEHOLDER_COLOR}
                    />
                    <TextInput 
                        onChangeText = {setData.password}
                        value = {data.password}
                        placeholder = "Password"
                        style = {styles.textBox}
                        placeholderTextColor = {Constants.PLACEHOLDER_COLOR}
                    />
                    <TextInput 
                        onChangeText = {setData.retryPassword}
                        value = {data.retryPassword}
                        placeholder = "Retry Password"
                        style = {styles.textBox}
                        placeholderTextColor = {Constants.PLACEHOLDER_COLOR}
                    />
                    <TextInput 
                        onChangeText = {setData.phoneNumber}
                        value = {data.phoneNumber}
                        placeholder = "Phone Number"
                        style = {styles.textBox}
                        placeholderTextColor = {Constants.PLACEHOLDER_COLOR}
                    />
                    <TextInput 
                        onChangeText = {setData.website}
                        value = {data.website}
                        placeholder = "Website"
                        style = {styles.textBox}
                        placeholderTextColor = {Constants.PLACEHOLDER_COLOR}
                    />

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.keyboard}
                    >
                        <Button 
                            text = "SAVE"
                            onPress = {()=>save()}
                            width = "100%"
                        />
                    </KeyboardAvoidingView>
                </ScrollView>

                

            </View>

            

            

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        marginTop:30,
        alignItems:'center',
    },
    container: {
        flex:1,
        backgroundColor: "#0A3045"
    },
    keyboard:{
        marginTop: 10,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textBox:{
        width: Constants.TEXT_BOX_WIDTH,
        height: Constants.TEXT_BOX_HEIGHT,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 5,
        color: Constants.TEXT_COLOR,
    }
})

export default CreateNewAccount;