import React from 'react'
import { View, Text ,Alert} from 'react-native'
import {Button} from 'react-native-elements'
export default function Login({navigation}) {
    return (
        <View>
            <Text>welcome to Zaga</Text>
            <Button title='press me' onPress={()=> navigation.navigate('Register')} />
        </View>
    )
}
