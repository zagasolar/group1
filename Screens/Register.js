import React from 'react'
import { StyleSheet, Text, View , KeyboardAvoidingView } from 'react-native'
import {Input , Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [country, setCountry] = React.useState('')

    const submitButton = () => {
    //sending the data to backend 
    Axios.post('http://localhost:3000/post/api' , {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
        address : address,
        phoneNumber : phoneNumber,
        country : country,
    }).then(alert('Inserted into database successfully')).catch((err)=>{console.log(err.message)})
}
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.overAllContainer}>
            <Text style={styles.header}>ZAGA REGISTRATION</Text>
            <View style={styles.inputContainer}>
                <Input 
                placeholder='First Name'
                value = {firstName}
                onChangeText={text => setFirstName(text)}
                errorMessage='enter first name'
                />
                <Input 
                value = {lastName}
                onChangeText={text => setLastName(text)}
                placeholder='Last Name'/>
                <Input
                placeholder='Email'
                keyboardType='email-address'
                value ={email}
                onChangeText={text => setEmail(text)}/>
                <Input
                 secureTextEntry
                 placeholder='Password'
                 value = {password}
                 onChangeText={text => setPassword(text)}
                />
                <Input 
                secureTextEntry
                placeholder='Confirm Password'
                value = {confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                />
                <Input 
                placeholder='Address'
                value = {address}
                onChangeText={text => setAddress(text)}
                />
                <Input
                 placeholder='Phone Number'
                 keyboardType='numeric'
                 value = {phoneNumber}
                 onChangeText={text => setPhoneNumber(text)}
                 />
                <Input 
                placeholder='Country'
                value = {country}
                onChangeText={text => setCountry(text)}
                />
            </View>
            <View style={{height:20}}/>
            <Button style={styles.button}
            icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />}
            title='Register' onPress={submitButton} />
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    overAllContainer:{
        flex:1,
        padding:10,
        alignItems: 'center',
        justifyContent:'center'
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:40,
        color : '#22A0B6',
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
    }
})
