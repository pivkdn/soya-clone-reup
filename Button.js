import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ButtonPro({title,onPress=()=>{}}) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={style.btnContainer}>
                <Text style={style.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btnContainer: {
        borderWidth:1,
        borderRadius:7,
        borderColor:'#fcce0d',
        height:40,
        marginLeft:15,
        marginRight:15,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        
    }
})
