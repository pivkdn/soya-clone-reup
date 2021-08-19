import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Linking } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';

export default function BeginScreen({navigation}) {
    return (
        <SafeAreaView>
        <View>
            <View style={{alignItems:'center'}}>
                <Image source={{uri:'https://soyagarden.com/content/uploads/2019/09/logo-soya-2.png'}} style={{marginBottom:60,marginTop:80,height:90,width:233}}/>
            </View>
            <View>
                <TouchableOpacity style={{},styles.btn} onPress={() => navigation.navigate('Details')}>
                    <Image source={require('../images/fb.png')} style={{height:30,width:30}}/>
                    <Text style={{color:'white'}}>Đăng nhập với facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', marginTop:25}}>
            <Text >Hoặc đăng nhập bằng</Text>
            </View>
                <TextInput keyboardType="numeric" style={{borderBottomWidth:1, marginTop:15,borderColor:'silver',marginLeft:15,marginRight:15}} textAlign={'center'} placeholder="Số điện thoại"></TextInput>
            <View>
                <TouchableOpacity style={{backgroundColor:'orange'},styles.btn1}>
                    <Text style={{}}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:50,alignItems:'center',}}>
                <Text style={{textAlign:'center',width:300}}>Bằng việc đăng nhập, bạn đã đồng ý với <Text style={{textDecorationLine:'underline',color:'#67ad45'}} onPress={()=> Linking.openURL('https://soyagarden.com/terms')}>Điều khoản sử dụng</Text> của Soya Garden</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.btnContainer}>
                    <Text>TRẢI NGHIỆM NGAY</Text>
                </View>
            </TouchableOpacity>
            <Text style={{marginTop:10,textAlign:'center'}}>Phiên bản 1.1.4</Text>
        </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    btn:{
        borderRadius:7,
        height:40,
        marginLeft:15,
        marginRight:15,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#3567a6'
    },
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
    btn1:{
        borderRadius:7,
        height:40,
        marginBottom:20,
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fcce0d'
    }
})
