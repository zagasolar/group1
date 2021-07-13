import React, { Component } from 'react'
import { StyleSheet, Text, View , KeyboardAvoidingView  ,ScrollView, Linking , Platform ,Dimensions} from 'react-native'
import {Input , Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';
import CountryDropDown from './components/CountryDropDown';
import CheckBoxContainer from './components/CheckBoxContainer';

export default function Register() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [region, setRegion] = React.useState('')
    const [mailDbError ,  setMailDbError] = React.useState('')
    const [emailError , setEmailError] = React.useState('')
    const [firstNameError , setFirstNameError] = React.useState('')
    const [lastNameError , setLastNameError] = React.useState('')
    const [street , SetStreet] = React.useState('')
    const [isSelected , setIsSelected] = React.useState('')
    const emailRegex = /\S+@\S+\.\S+/
    const phoneRegex = /^[0-9]+$/
    const nameRegex = /^[A-Za-z]+$/
    const SetCountryCode=(countryValue)=>{
        setCountry(countryValue)
    }
    const setRegionCode=(regionValue)=>{
        setRegion(regionValue)
    }
    const CheckBoxCode=(checkValue)=>{
        setIsSelected(checkValue);
    }
    console.log(isSelected);
/*FIRST NAME VALIDATION STARTS HERE */
const validation = (event) => {
    if(firstName.length != 0)
    {
        if(firstName.length <= 3){
            setFirstNameError('First name must be greater than 3')
            setTimeout(() => {
                setFirstNameError('')
            }, 4000);
        }
        else if(firstName.length > 10){
            setFirstNameError('First name must be less than or equal to 10')
            setTimeout(() => {
                setFirstNameError('')
            }, 4000);
        }
        else{
            if(firstName.match(nameRegex))
            {
                lastNameValidation()
            }
            else{
                setFirstNameError('First name must be alphabets')
                setTimeout(() => {
                    setFirstNameError('')
                }, 4000);
            }
            
        }
    }
    else{
        setFirstNameError('Enter the First name')
        setTimeout(() => {
            setFirstNameError('')
        }, 4000);
    }
}
/*FIRST NAME VALIDATION ENDS HERE */

/*LAST NAME VALIDATION STARTS HERE*/
const lastNameValidation= () => {
    if(lastName.length != 0)
    {
        if(lastName.length <= 3){
            setLastNameError('Last name must be greater than 3')
            setTimeout(() => {
                setLastNameError('')
            }, 4000);
        }
        else if(lastName.length > 10){
            setLastNameError('Last name must be less than or equal to 10')
            setTimeout(() => {
                setLastNameError('')
            }, 4000);
        }
        else{
            if(lastName.match(nameRegex))
            {
            mailValidation()
            }
            else{
                setLastNameError('last name must be alphabets')
                setTimeout(() => {
                    setLastNameError('')
                }, 4000);
            }
        }
        
    }
    else{
        setLastNameError('Enter the Last name')
        setTimeout(() => {
            setLastNameError('')
        }, 4000);
    }
}
/*LAST NAME VALIDATION ENDS HERE*/

/* EMAIL VALIDATION STARTS HERE*/
    const mailValidation = (event) =>{
        if(emailRegex.test(email))
        {
            passwordValidation()
        }
        else{
            setEmailError('please enter a valid mail')
            setTimeout(() => {
                setEmailError('')
            }, 4000);
        }
    }
/* EMAIL VALIDATION ENDS HERE*/

/*PASSWORD VALIDATION STARTS HERE*/
const [passwordError , setPasswordError] = React.useState('')
const passwordValidation = () =>{
	if(password.length ==0){
		setPasswordError('Password must be greater than 6 and less than 12')
        setTimeout(() => {
            setPasswordError('')
        }, 4000);
	}
	else{
		if(password.length > 0 && password.length < 6){
			setPasswordError('Password must be greater than 6 and less than 12')
            setTimeout(() => {
                setPasswordError('')
            }, 4000);
		}
		else if(password.length > 12){
			setPasswordError('Password must be greater than 6 and less than 12')
            setTimeout(() => {
                setPasswordError('')
            }, 4000);
		}
		else{
			confirmPasswordValidation()
		}	
	}
}
/*PASSWORD VALIDATION ENDS HERE */

/*CONFIRM PASSWORD VALIDATION STARTS HERE */
const [confirmPasswordError , setConfirmPasswordError] = React.useState('')
const confirmPasswordValidation = () => {
    if(confirmPassword.length == 0){
        setConfirmPasswordError('please enter the confirm password')
        setTimeout(() => {
            setConfirmPasswordError('')
        }, 4000);
    }
    else{
        //console.log(password.localeCompare(confirmPassword))
        if(password.localeCompare(confirmPassword) == 0)
        {
            phoneNumberValidation()
        }
        else{
            setConfirmPasswordError('confirm password not match with password')
            setTimeout(() => {
                setConfirmPasswordError('')
            }, 4000);
        }
    }
}
/*CONFIRM PASSWORD VALIDATION ENDS HERE */

/*ADDRESS VALIDATION STARTS HERE */
const [addressError , setAddressError] = React.useState('')
const addressValidation = () => {
    if(address.length == 0){
        setAddressError('Please enter the Address')
        setTimeout(() => {
            setAddressError('')
        }, 4000);
    }
    else{
        streetValidation()
    }
}
/*ADDRESS VALIDATION ENDS HERE */
/*STREET VALIDATION STARTS HERE */
const [streetError , setStreetError] = React.useState('')
const streetValidation = () => {
    if(street.length == 0){
        setStreetError('Enter the street name')
        setTimeout(() => {
            setStreetError('')
        }, 3000);
    }
    else{
        regionValidation()
    }
}
/*STREET VALIDATION ENDS HERE */

/*PHONE NUMBER VALIDATION STARTS HERE */
const [phoneNumberError , setPhoneNumberError] = React.useState('')
const phoneNumberValidation = () => {
    if(phoneNumber.length == 10)
    {
        if(phoneNumber.match(phoneRegex))
        {
            addressValidation()
        }
        else{
            setPhoneNumberError('Invalid phone number')
            setTimeout(() => {
                setPhoneNumberError('')
            }, 4000);
        }
    }
    else{
        setPhoneNumberError('Invalid phone number')
            setTimeout(() => {
                setPhoneNumberError('')
            }, 4000);
    }

}
/*PHONE NUMBER VALIDATION STARTS HERE */

/*COUNTRY VALIDATION STARTS HERE */
// const [selectCountry , setSelectCountry] = React.useState('')
// const countryValidation = () => {
//     console.log(country)
//     if(country != '')
//     {
//         regionValidation()
//     }
//     else
//     {
//         setSelectCountry('choose the country')
//         setTimeout(() => {
//             setSelectCountry('')
//         }, 3000);
//     }
// }
/*COUNTRY VALIDATION ENDS HERE */

/*REGION VALIDATION STARTS HERE */
const [selectRegion , setSelectRegion] = React.useState('')
const regionValidation = () => {
    console.log(region)
    if (region != '') {
        checkBoxValidation()
    } else {
        setSelectRegion('choose the region')
        setTimeout(() => {
            setSelectRegion('')
        }, 3000);
    }
}
/*REGION VALIDATION ENDS HERE */

/*CHECK BOX VALIDATION STARTS HERE*/
const checkBoxValidation = () => {
    //console.log(isSelected)
    if(isSelected == true)
    {
        // register_to_database()
        alert('success')
    }
}
/*CHECK BOX VALIDATION ENDS HERE*/

const allField = () => {
    if(firstName==0 && lastName==0 && email==0 && password==0 && confirmPassword==0 && phoneNumber==0 && address==0  && street==0)
    {
        setFirstNameError('*Enter first name')
        setLastNameError('*Enter last name')
        setEmailError('*Enter E-mail')
        setPasswordError('*Enter password')
        setConfirmPasswordError('*Enter confirm password')
        setPhoneNumberError('*Enter phone number')
        setAddressError('*Enter address')
        setAddressError('*Enter the street name')
        setTimeout(() => {
            setFirstNameError('')
            setLastNameError('')
            setEmailError('')
            setPasswordError('')
            setConfirmPasswordError('')
            setPhoneNumberError('')
            setAddressError('')
            setStreetError('')
        }, 3000);

    }
    else{
        validation()
        
    }
}



    const register_to_database = () => {
    //sending the data to backend 
    Axios.post('http://localhost:3000/post/api' , {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
        address : address,
        street : street,
        phoneNumber : phoneNumber,
        country : country,
        region : region,
        checkBoxCondition : isSelected
    })
    .then(async function(response){
        if(response.data === 'mail is exist')
        {
            setMailDbError('This mail id is already exist')
            setTimeout(() => {
                setMailDbError('')
            }, 3000);
        }
        else{
            console.log('stored in database'),
            navigation.navigate('DashBoard')
        }
    }
        )
        .catch((err)=>{console.log(err)})
}

    return (
        <View style={{
            width:Dimensions.get('window').width,
        }}>
            <View style={{alignItems:'center'}}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    marginBottom:30,
                    color : '#22A0B6',
                }}>ZAGA REGISTERTATION</Text>
            </View>
        <ScrollView>
         {/* <KeyboardAvoidingView behavior={Platform.OS==='ios' ? 'padding' : 'height'}> */}
                
                    <Input
                        placeholder='First Name'
                        value = {firstName}
                        onChangeText={text => setFirstName(text)}
                    />
                    <Text style={{marginLeft:10,textDecorationColor:'#f44336'}}>{firstNameError}</Text>
                    <Input 
                        value = {lastName}
                        onChangeText={text => setLastName(text)}
                        placeholder='Last Name'
                    />
                    <Text style={{marginLeft:10}}>{lastNameError}</Text>
                    <Input
                        placeholder='Email'
                        keyboardType='email-address'
                        value ={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={{marginLeft:10}}>{emailError}{mailDbError}</Text>
                    <Input
                        secureTextEntry
                        placeholder='Password'
                        value = {password}
                        onChangeText={text => setPassword(text)}
                    />
                    <Text style={{marginLeft:10}}>{passwordError}</Text>
                    <Input 
                        secureTextEntry
                        placeholder='Confirm Password'
                        value = {confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                    />
                    <Text style={{marginLeft:10}}>{confirmPasswordError}</Text>
                    <Input
                        placeholder='Phone Number'
                        keyboardType='numeric'
                        value = {phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                    />
                    <Text style={{marginLeft:10}}>{phoneNumberError}</Text>
                    <Input 
                        placeholder='Flat/Apartment No.'
                        value = {address}
                        onChangeText={text => setAddress(text)}
                    />
                    <Text style={{marginLeft:10}}>{addressError}</Text>
                    <Input 
                        placeholder='Street/Locality'
                        value = {street}
                        onChangeText={text => SetStreet(text)}
                    />
                    <Text style={{marginLeft:10}}>{streetError}</Text>
                    <View><CountryDropDown SetCountryCode={SetCountryCode} setRegionCode={setRegionCode}></CountryDropDown></View>
                    <Text style={{marginLeft:10}}>{selectRegion}</Text>
                    <View style={{height:40 , marginLeft:10,marginTop:10}}><CheckBoxContainer CheckBoxCode={CheckBoxCode}/></View>
                    <View style={{paddingLeft:10,paddingRight:10}}><Button
                        icon={
                            <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                            />}
                            // style={{height:40 ,marginTop:10 }}
                        title='Register' onPress={allField} /></View>
                    <View style={{height:30}}/>
                
                {/* </KeyboardAvoidingView>    */}
            </ScrollView>
            </View>
       
    )
}

