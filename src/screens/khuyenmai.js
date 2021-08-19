import * as React from 'react';
import { View, useWindowDimensions, FlatList, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


export default function TabViewExample({ navigation }) {
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



    ],
    points: [
      '20 S-points',
      '30 S-points',
      '20 S-points',
      '20 S-points',
      '40 S-points',
      '25 S-points',
      '20 S-points',
      '25 S-points',
      '30 S-points',
      '34 S-points',
      '20 S-points',

    ]
  }))


  const FirstRoute = ({ navigation }) => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA1}
        renderItem={renderItem1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        style={{ marginBottom: 10 }}
      /></View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Text>Không có Voucher nào!</Text>
      </View>
    </View>
  );

  const renderItem1 = ({ item }) => (
    <TouchableOpacity style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }} onPress={() => navigation.navigate(`Voucher${(item.id + 1)}`)}>
      <View style={{ width: "100%", backgroundColor: 'white', borderRadius: 10 }}>
        <View style={{}}>
          <Image
            style={styles.imgStyle}
            source={{ uri: item.photo[item.id] }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name[item.id]}</Text>
          <Text style={{ fontWeight: 'bold' }}>{item.points[item.id]}</Text>

        </View>
      </View>
    </TouchableOpacity>
  );
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'VOUCHER HIỆN CÓ' },
    { key: 'second', title: 'VOUCHER CỦA TÔI' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (

    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, }}
    />
  );
}

const styles = StyleSheet.create({

  imgStyle: {
    height: 180,
    width: "100%",
    borderRadius: 7
  },


});