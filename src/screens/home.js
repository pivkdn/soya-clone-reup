import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, Dimensions, Linking, StatusBar } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Carousel from '../components/Carousel'
import { dummyData } from '../components/Data'
import { getProduct } from '../services/Api'
import { getImage } from '../utils'

const { width, heigth } = Dimensions.get('window')








const DATA1 = Array(10).fill('').map((e, i) => ({
  id: i,
  photo: [
    'https://soyagarden.com/content/uploads/2019/11/z1616805604446_605d68133f6dc4c6d05098dff3024c4c-1024x683.jpg',
    'https://soyagarden.com/content/uploads/2020/12/z2253425214787_26a3753be9ab7a8555d37cf0678e3b60-768x1026.jpg',
    'https://soyagarden.com/content/uploads/2020/09/DSC_7965-e1598931525163-1024x716.jpg',
    'https://soyagarden.com/content/uploads/2020/03/4684897290716b2f3260-1024x460.jpg',
    'https://soyagarden.com/content/uploads/2020/03/a8398435f56a0e34577b-1024x576.jpg',
    'https://soyagarden.com/content/uploads/2020/01/li-xi-1024x577.jpg',
    'https://soyagarden.com/content/uploads/2020/01/web-2-1-2020-1024x460.jpg',
    'https://soyagarden.com/content/uploads/2019/12/do-an-mnam-1-11.jpg',
    'https://soyagarden.com/content/uploads/2019/11/9fc6e8d81f97e6c9bf86-1024x460.jpg',
    'https://soyagarden.com/content/uploads/2019/11/73504788_3195986220476346_6528997133469614080_o.jpg',
  ],
  name: [

    `TẶNG NGAY 20% KHI NẠP TIỀN VÀO TÀI KHOẢN ĐẬU`,
    'CHÀO 2021, ĐI SOYA MUA 2 TẶNG 1',
    'NEW PRODUCT | THỬ “HƯƠNG VỊ THU” – HƯỞNG THỤ ƯU ĐÃI KHỦNG – FREE TOPPING BẤT KỲ',
    'NGÀY MỚI HỨNG KHỞI CÙNG SOYA VỚI COMBO CHỈ 39K (Tiết kiệm đến 19K)',
    'MÙNG 8/3 – UỐNG SOYA NHẬN ƯU ĐÃI GIẢM GIÁ 40%',
    'SẮM LÌ XÌ SOYA, MANG TẾT CỔ TÍCH VỀ NHÀ',
    'KHỞI ĐỘNG NĂM MỚI ĐẦY HỨNG KHỞI VỚI BỘ SƯU TẬP SOYA MACCHIATO',
    'THƯỞNG THỨC BỮA ĂN “HEALTHY & BALANCED” TẠI SOYA GARDEN',
    'THỨ 6 ĐEN TỐI – CÙNG SOYA “CHILL” QUÊN LỐI VỚI CHƯƠNG TRÌNH ĐỒNG GIÁ BEANCURD 19K',
    '[MIỀN BẮC]_SOYA MILK TRÂN CHÂU Ô MAI_ SẮC MÀU NHẸ NHÀNG CHO NHỮNG NGÀY ĐÔNG',



  ]
}))
const DATA2 = Array(10).fill('').map((e, i) => ({
  id: i,
  photo: [

    'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315-1024x460.jpg',
    'https://soyagarden.com/content/uploads/2020/11/DSC_9722-1024x723.jpg',
    'https://soyagarden.com/content/uploads/2020/09/118649411_4295276030547354_6614295648694420106_n.jpg',
    'https://soyagarden.com/content/uploads/2020/03/484f72e8cd30366e6f21.jpg',
    'https://soyagarden.com/content/uploads/2020/03/86631262_3520188678056097_3006316024451563520_o-1024x1024.jpg',
    'https://soyagarden.com/content/uploads/2020/03/3f76471c9b3f6061392e-1024x1024.jpg',
    'https://soyagarden.com/content/uploads/2020/03/Picture1.png',
    'https://soyagarden.com/content/uploads/2020/03/SoyaGarden_PRQuoctePhunu_2.jpg',
    'https://soyagarden.com/content/uploads/2020/03/SoyaGarden_Corona_3.jpg',
    'https://soyagarden.com/content/uploads/2020/03/SoyaGarden_VirusCorona_1.jpg'
  ],
  name: [
    'ĐẾN VƯỜN ĐẬU THỬ SOYA JELLY-O MỚI – KIM BÀI MIỄN DỊCH TUYỆT VỜI, CHỈ 29K',
    'BST MÙA ĐÔNG 2020 | ĐỘC THÂN ẤM ÁP VỚI CHÚT NGỌT CỦA “DEAR WINTER',
    'UỐNG THỎA THÍCH – HỌC TIẾNG ANH PHẤN KHÍCH CÙNG SOYA GARDEN VÀ ENGLISHNOW',
    'THÔNG BÁO DANH SÁCH CỬA HÀNG PHỤC VỤ TAKE-AWAY VÀ DELIVERY TRONG MÙA DỊCH',
    'THÔNG BÁO LỊCH CHĂM SÓC KHÁCH HÀNG SOYA GARDEN TỪ NGÀY 20/03/2020',
    'SOYA GARDEN THÔNG BÁO VỀ VIỆC THAY ĐỔI KHUNG GIỜ HOẠT ĐỘNG',
    'ĐIỂM DANH CÁC QUÁN ĐỒ ĂN, ĐỒ UỐNG LÀNH MẠNH CHO DỊP 8/3 GIỮA TÂM MÙA DỊCH',
    '5 CÁCH ĐỂ CÓ MỘT NGÀY QUỐC TẾ PHỤ NỮ 8/3 LÀNH MẠNH DÀNH CHO PHÁI ĐẸP',
    '5 TIN ĐỒN VỀ CÁC LOẠI THỰC PHẨM LIÊN QUAN ĐẾN VIRUS CORONA CHỦNG MỚI VÀ SỰ THẬT ĐẰNG SAU ĐÓ',
    'CHỈ CẦN SỐNG LÀNH MẠNH BẠN ĐÃ CÓ THỂ TỰ BẢO VỆ MÌNH KHỎI NỖI ÁM ẢNH MANG TÊN “VIRUS CORONA',

  ]
}))
export default function home({ route, navigation }) {
  const [product, setProduct] = useState()
  useEffect(() => {
    // alert('hello')
    const getApiProduct = async () => {
      const result = await getProduct()
      setProduct(result.data.data)
    }
    getApiProduct()
  }, [])

  const onMoveToDetail = (data) => () => {
    navigation.navigate('Detail', { detail: data });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ marginLeft: 15, marginRight: 30 }} onPress={onMoveToDetail(item)}>
      <View style={{ width: 200 }}>
        <View style={{}}>
          <Image
            style={styles.imgStyle}
            source={{ uri: getImage(item.high_res_image), }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.product_name}</Text>
          <Text style={{ color: 'grey' }}>{item.base_price}đ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem1 = ({ item }) => (
    <TouchableOpacity style={{ marginLeft: 15, marginRight: 30 }} onPress={() => navigation.navigate(`Voucher${(item.id + 1)}`)}>
      <View style={{ width: 200 }}>
        <View style={{}}>
          <Image
            style={styles.imgStyle}
            source={{ uri: item.photo[item.id] }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name[item.id]}</Text>
          <Text style={{ color: 'grey' }}>{item.base_price} đ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem2 = ({ item }) => (
    <TouchableOpacity style={{ marginLeft: 15, marginRight: 30 }} onPress={() => navigation.navigate('New')}>
      <View style={{ width: 200 }}>
        <View style={{}}>
          <Image
            style={styles.imgStyle}
            source={{ uri: item.photo[item.id] }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name[item.id]}</Text>
          <Text style={{ color: 'grey' }}>{item.base_price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
        hidden={false}
      />
      <View style={{ backgroundColor: '#F9E131', height: 200, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>
        <View style={{ height: 200, width: 200, borderBottomRightRadius: 200, backgroundColor: '#FECE02', borderBottomLeftRadius: 30 }}>
          <View style={{ flexDirection: 'row', marginLeft: 35, marginTop: 40, }}>
            <TouchableOpacity onPress={() => navigation.navigate('Begin')}>

              <View>
                <Image
                  source={{ uri: 'https://i.stack.imgur.com/l60Hf.png' }}
                  style={{ height: 40, width: 40, borderRadius: 20 }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Begin')}>

              <View style={{ backgroundColor: 'white', height: 40, width: 90, borderRadius: 20, justifyContent: 'center', marginLeft: 20, }}><Text style={{ fontSize: 11, textAlign: 'center' }}>ĐĂNG NHÂP</Text></View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <View style={{ backgroundColor: 'white', height: 110, marginLeft: 10, marginRight: 10, justifyContent: 'center', borderRadius: 10, marginTop: -85, marginBottom: 8 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('napdau')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('../images/napdau.png')} />
              <Text> Nạp đậu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('../images/ship.png')} />
              <Text>Giao hàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Point')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('../images/qrscan.png')} />
              <Text>Tích S-Point</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Khuyenmai')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('../images/voucher.png')} />
              <Text>Voucher</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={{ backgroundColor: '#EFEFEF' }}>

          <View>
            <Carousel data={dummyData} />
          </View>
          <View style={{ backgroundColor: 'white', marginTop: 11, }}>
            <Text style={{ textAlign: 'left', marginTop: 15, marginBottom: 15, marginLeft: 15, fontWeight: 'bold' }}>Gợi ý cho bạn</Text>
            <FlatList
              data={product}
              renderItem={renderItem}
              horizontal={true}
              initialNumToRende
              maxToRenderPerBatch={10}

              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item._id.toString()}
              style={{ marginBottom: 10 }}
            />
          </View>
          <View style={{ backgroundColor: 'white', marginTop: 5 }}>
            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }} >
              <Text style={{ textAlign: 'left', marginBottom: 15, marginLeft: 15, fontWeight: 'bold' }}>Voucher/Khuyến mãi</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://soyagarden.com/khuyen-mai/')}>

                <SimpleLineIcons name='arrow-right' size={15} style={{ marginRight: 10 }} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA1}
              renderItem={renderItem1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              style={{ marginBottom: 10 }}
            />
          </View>
          <View style={{ backgroundColor: 'white', marginTop: 5, fontWeight: 'bold' }}>
            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
              <Text style={{ textAlign: 'left', marginBottom: 15, marginLeft: 15, fontWeight: 'bold' }}>Tin tức</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://soyagarden.com/tin-tuc/')}>

                <SimpleLineIcons name='arrow-right' size={15} style={{ marginRight: 10 }} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA2}
              renderItem={renderItem2}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              style={{ marginBottom: 10 }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  imgStyle: {
    height: 130,
    width: 230,
    borderRadius: 7
  },


});