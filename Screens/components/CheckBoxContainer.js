import React from 'react'
import { StyleSheet, Text, View ,Linking} from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { Checkbox } from 'native-base'
import { Dimensions } from 'react-native'
const CheckBoxContainer = ({CheckBoxCode}) => {
    const [isChecked , setIsChecked] = React.useState(false)
    const handleChange=(val)=>{
        CheckBoxCode(val)
    }
    // console.log(isChecked);
    return (
        <NativeBaseProvider>
            <View style={{flexDirection:'row' , width:Dimensions.get('window').width - 35}}>
            <Checkbox value={isChecked} accessibilityLabel="Terms and Condition checkbox" 
            onChange={(val)=>{setIsChecked(val);handleChange(val)}}
          />
            <View style={{marginLeft:5}}/>
            <Text 
            style={{
                textDecorationLine:'underline'
            }}
            onPress={()=>Linking.openURL('https://www.zaubacorp.com/company/ZAGA-OPEN-SOURCE-OPC-PRIVATE-LIMITED/U72900TN2019OPC130150')}>I have read and agreed to the Privacy Policy</Text>
            </View>
        </NativeBaseProvider>
    )
}
export default CheckBoxContainer
const styles = StyleSheet.create({})
