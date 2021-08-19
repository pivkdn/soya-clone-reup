import React from 'react'
import { View, Text, Image, Dimensions, ScrollView, ScrollViewComponent } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, heigth } = Dimensions.get('window')


export default function voucher1() {
    return (
        <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: 'center' }}>
                <View>
                    <Image
                        source={{ uri: 'https://soyagarden.com/content/uploads/2019/11/z1616805604446_605d68133f6dc4c6d05098dff3024c4c-1024x683.jpg' }}
                        style={{ height: 230, width: width }}
                    />

                </View>
                <View style={{ width: '92%', marginTop: 10, marginBottom: 50 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>TẶNG NGAY 20% KHI NẠP TIỀN VÀO TÀI KHOẢN ĐẬU  </Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Ionicons name="time-outline" color={"grey"} size={15} />
                        <Text style={{ color: 'grey', marginLeft: 10 }}>26/3/2021</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text>
                            Từ ngày 13/11/2019 – 21/11/2019, Soya Garden sẽ áp dụng chương trình khuyến mãi tặng 20% giá trị thẻ nạp cho khách hàng khi nạp tài khoản đậu. Tham gia ngay để nhận ưu đãi đặc biệt này từ Soya Garden nhé!
</Text>
                        <Text style={{ marginTop: 10 }}>

                            🥰 Bạn có biết, khi sử dụng App Soya Garden bạn sẽ có cơ hội nhận rất nhiều ưu đãi dành riêng cho hội viên? Một trong những ưu đãi đặc biệt đó là chương trình TẶNG NGAY 20% giá trị thẻ nạp khi nạp tiền vào tài khoản đậu.
                        </Text>
                        <Text style={{ marginTop: 10 }}>
                            – Thời gian khuyến mãi từ 12/11/2019 đến 21/11/2019.
                        </Text>
                        <Text style={{ marginTop: 10 }}>

                            – Giá trị ưu đãi tối đa 100,000 vnđ/lần nạp.
                        </Text>
                        <Text style={{ marginTop: 10 }}>

                            ⭐️Hấp dẫn hơn, chương trình ưu đãi này sẽ được áp dụng đồng thời cùng các chương trình ưu đãi khác trên cửa hàng thuộc hệ thống Soya Garden!
                        </Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

