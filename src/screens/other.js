import React from 'react'
import { View, Text ,Image, TouchableOpacity,Linking} from 'react-native'
import Animated from 'react-native-reanimated'
import IonIcons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
export default function other({navigation}) {
    return (
        <View style={{backgroundColor:'white'}}>
        <View style={{elevation:1}}>
            <Text style={{marginTop:40,marginLeft:15, marginBottom:10,fontSize:20}}>Khác</Text>
        </View>
        <View style={{backgroundColor:'#EFEFEF',}}>
            
        <View>
           
            <View style={{}}>
                <TouchableOpacity onPress={() => navigation.navigate("Begin")} >
                    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',borderBottomWidth:1,borderColor:'silver',}}>

                <View style={{flexDirection:'row',marginLeft:15,marginRight:15,marginBottom:3,height:50,marginTop:5,alignItems:'center'}}>
                    <Image source={{uri:'https://i.stack.imgur.com/l60Hf.png'}} style={{height:40,width:40,borderRadius:20}}/>
                    <Text>   Đăng nhập để tiếp tục</Text>
                </View>
                <View>

                    <SimpleLineIcons name="arrow-right" size={20} style={{marginRight:15}}></SimpleLineIcons>
                </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Linking.openURL('https://soyagarden.com/')}>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'silver',marginBottom:3,height:50,marginTop:5,alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center' ,marginLeft:15,marginRight:15}}>
                    <View style={{ justifyContent:'center',alignItems:'center',borderRadius:40,backgroundColor:'silver',height:40,width:40}}>
                        <IonIcons name="help-circle-outline" size={30}></IonIcons>
                    </View>
                    <Text>   Hỏi đáp</Text>
                    </View>
                    <View>

                       <SimpleLineIcons name="arrow-right" size={20} style={{marginRight:15}}></SimpleLineIcons>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Linking.openURL('https://play.google.com/store/apps/details?id=com.soyagarden.android')}>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'silver',marginBottom:3,height:50,marginTop:5,alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{ flexDirection:'row',alignItems:'center' ,marginLeft:15,marginRight:15}}>
                    <View style={{ justifyContent:'center',alignItems:'center',borderRadius:40,backgroundColor:'silver',height:40,width:40}}>
                        <IonIcons name="star-outline" size={30}></IonIcons>
                    </View>
                    <Text>   Đánh giá ứng dụng</Text>
                    </View>
                    <View>

                       <SimpleLineIcons name="arrow-right" size={20} style={{marginRight:15}}></SimpleLineIcons>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:15,marginRight:15}}>
                <Text style={{marginTop:10,textAlign:'center'}}>
                    Nếu có bất kỳ vướng mắc hoặc góp ý gì cho Soya Garden, quý khách có thể gọi hotline để được hỗ trợ.(Thời gian từ 08:00 đến 22:00)
                </Text>
            </View>
        </View>
        </View>
    </View>
    )
}
