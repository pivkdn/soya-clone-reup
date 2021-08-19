import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import { getImage } from '../utils';
const sizes = ['S', "M", "L", 'XL', 'XXL']
export default function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { detail } = route.params;


  // const onAddCart = () => dispatch({ type: 'ADD_QUANTITY', data: item })
  const onAddCart = () => {
    dispatch({ type: 'ADD_CART', detail: detail })
    alert('Đã thêm vào giỏ hàng!')
  }
  return (
    <View style={{}}>
      <Image source={{ uri: detail?.high_res_image }}
        style={{ width: '100%', height: 360, resizeMode: 'contain', borderRadius: 20 }} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{detail.product_name}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
          <Text style={{ fontSize: 19, marginRight: 10, fontWeight: 'bold' }}>{detail?.base_price} đ</Text>
          <Text style={{ fontSize: 14, textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'red' }}>{detail.base_price?.toString() * 1.2}đ</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          paddingHorizontal: 40,
          marginTop: 10
        }}>

          {/* {sizes.map((e, i) => {
            const isChecked = e === detail?.size?.[0]
            return (
              <TouchableOpacity key={i}
                style={{
                  borderRadius: 20, backgroundColor: isChecked ? 'grey' : 'white',
                  borderWidth: 1, padding: 2, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 10 }}>{e}</Text>
              </TouchableOpacity>
            )
          })} */}
        </View>
        <Text style={{ fontSize: 15, marginLeft: 10, marginRight: 10, }}>{detail.description}</Text>

        <TouchableOpacity
          onPress={onAddCart}
          style={{
            backgroundColor: '#FF5254',
            marginTop: 10,
            width: '60%', borderWidth: 1,
            borderRadius: 20, paddingVertical: 12,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>THÊM VÀO GIỎ HÀNG</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}