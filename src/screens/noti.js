import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Colors, Metrics } from '../themes';
import CartView from '../components/CardView'
import { useDispatch, useSelector } from "react-redux";

// const images = [
//   'https://www.forever21.com/images/default_330/00421842-01.jpg',
//   'https://www.forever21.com/images/default_330/00410895-03.jpg',
//   'https://www.forever21.com/images/default_330/00412718-02.jpg',
//   'https://www.forever21.com/images/default_330/00415030-01.jpg',
//   'https://www.forever21.com/images/default_330/00414874-01.jpg'
// ]
// const data = Array(10).fill('').map((e, i) => ({ id: i + 1, image: images[i] || images[0], name: `item ${i}`, price: '100.000', star: 4 }))
export default function CartScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.cartReducer.cart);

  const onRemoveAll = () => dispatch({ type: 'REMOVE_ALL' })

  const onRemoveItem = (item) => () => dispatch({ type: 'REMOVE_ITEM', data: item })

  const onChangeQuantity = (type, item) => () => {
    // dispatch({ type: 'CHANGE_QUANTITY', data: item, quantityType: type })
    if (type === 'increase') {
      dispatch({ type: 'ADD_CART', detail: item })
    } else {
      dispatch({ type: 'REDUCE_ITEM', detail: item })
    }
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Pay', {
            img: item.high_res_image,
            name: item.product_name,
            price: item.base_price,
            quantity: item?.quantity

          });
        }}>
          <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
            <Image source={{ uri: item.high_res_image }} style={{ width: 100, height: 100, borderRadius: 50 }} />
            <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
              <Text style={{ fontSize: 19, }}>{item.product_name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", flex: 1, width: '100%' }}>
                <View style={{ flex: 1, }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.base_price} đ</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'red' }}>{item.base_price?.toString() * 1.2} đ</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ textAlign: 'center', fontSize: 19 }}>
                      Số lượng:
                  </Text>
                    <View style={{ flexDirection: 'row', marginRight: 5, marginLeft: 10 }}>
                      <TouchableOpacity onPress={onChangeQuantity('reduce', item)} >
                        <Ionicons name="remove-circle" size={27} color={'red'} />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 23, marginHorizontal: 5 }}>{item?.quantity}</Text>
                      <TouchableOpacity onPress={onChangeQuantity('increase', item)}>
                        <Ionicons name="add-circle" size={27} color={'green'} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={onRemoveItem(item)}>
                  <Ionicons name="ios-trash-outline" size={30} color={'red'} />
                </TouchableOpacity>
              </View>
            </View>
          </CartView>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: 'white', elevation: 2 }}><Text style={{ marginTop: 40, marginLeft: 15, marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>GIỎ HÀNG</Text></View>

      <FlatList showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white" }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
      // extraData={}
      />
      {data?.length ?
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={onRemoveAll}
            style={{
              backgroundColor: '#FF5254',
              marginTop: 10,
              marginBottom: 40,
              width: '60%', borderWidth: 1,
              borderRadius: 20, paddingVertical: 12,
              borderColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>XÓA TẤT CẢ!</Text>
          </TouchableOpacity>
        </View> :
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Text>Không có sản phẩm!</Text>
        </View>
      }

    </View>

  )
}

const styles = StyleSheet.create({
  wishlistIcon: {
    marginRight: 5,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },

});