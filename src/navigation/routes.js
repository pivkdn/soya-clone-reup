import 'react-native-gesture-handler';
import * as React from 'react';
import { ColorPropType, Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/home'
import New from '../screens/news/news1'
import Voucher1 from '../screens/vouchers/voucher1'
import Voucher2 from '../screens/vouchers/voucher2'

import qrScan from '../screens/qrScan2'

import store from '../screens/store'
import order from '../screens/order'
import noti from '../screens/noti'
import other from '../screens/other'
import BeginScreen from '../screens/BeginScreen'
import detailScreen from '../screens/detailScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Pay from '../screens/Pay'
import Point from '../screens/Point'
import napdau from '../screens/napdau'
import map from '../screens/map'


import Khuyenmai from '../screens/khuyenmai'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="screen" >
      <Stack.Screen name="Home" component={home} options={{ headerTitle: 'Test', headerShown: false }} />
      <Stack.Screen name="Begin" component={BeginScreen} />
      <Stack.Screen name="Order" component={order} options={{ headerTitle: 'Đặt hàng', headerShown: true }} />
      <Stack.Screen name="Detail" component={detailScreen} options={{ headerTitle: 'Sản Phẩm', headerShown: true }} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Voucher1" component={Voucher1} options={{ headerTitle: 'Voucher', headerShown: true }} />
      <Stack.Screen name="Voucher2" component={Voucher2} options={{ headerTitle: 'Voucher', headerShown: true }} />
      <Stack.Screen name="Pay" component={Pay} options={{ headerTitle: 'Đơn hàng', headerShown: true }} />
      <Stack.Screen name="Point" component={Point} options={{ headerTitle: 'Mã tích S-Point', headerShown: true }} />
      <Stack.Screen name="Khuyenmai" component={Khuyenmai} options={{ headerTitle: 'Voucher/Khuyến mại', headerShown: true }} />
      <Stack.Screen name="napdau" component={napdau} options={{ headerTitle: 'Nạp đậu', headerShown: true }} />
      <Stack.Screen name="map" component={map} options={{ headerTitle: 'Nạp đậu', headerShown: false }} />






    </Stack.Navigator>
  )
}

// const Other = () => {
//   return(
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Other" component={Other} />
//       <Stack.Screen name="Begin" component={BeginScreen}/>
//       <Stack.Screen name="Home" component={home} />

//     </Stack.Navigator>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 50,
            borderTopWidth: 0,
            elevation: 0,

          },
          showLabel: true,
          activeTintColor: '#67ad45',
        }}>
        <Tab.Screen style={{ justifyContent: 'center', alginItems: 'center' }}
          name="Trang chủ"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Cửa hàng"
          component={store}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="storefront-outline" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Gọi món"
          component={qrScan}
          style={{ height: 100, width: 100 }}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={{ height: 60, width: 60, justifyContent: 'center', alginItems: 'center', backgroundColor: '#FECE02', borderRadius: 30, top: -20, elevation: 5 }}>
                <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('../images/logo.png')} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Giỏ hàng"
          component={noti}
          options={{
            headerTitle: 'Test', headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name="cart-outline" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Khác"
          component={other}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ellipsis-horizontal-sharp" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}