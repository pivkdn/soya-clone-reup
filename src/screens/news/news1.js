import React from 'react'
import { View, Text, Image, Dimensions, ScrollView, ScrollViewComponent } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, heigth } = Dimensions.get('window')


export default function news1() {
    return (
        <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: 'center' }}>
                <View>
                    <Image
                        source={{ uri: 'https://soyagarden.com/content/uploads/2019/11/z1616805604446_605d68133f6dc4c6d05098dff3024c4c-1024x683.jpg' }}
                        style={{ height: 230, width: width }}
                    />

                </View>
                <View style={{ width: '92%', marginTop: 10 ,marginBottom:50}}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>ĐẾN VƯỜN ĐẬU THỬ SOYA  </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>JELLY-O MỚI – KIM BÀI MIỄN DỊCH </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>TUYỆT VỜI, CHỈ 29K</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Ionicons name="time-outline" color={"grey"} size={15} />
                        <Text style={{ color: 'grey', marginLeft: 10 }}>26/3/2021</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text>
                            Hãy để Soya Garden giúp bạn sở hữu một hệ miễn dịch và sức đề kháng tuyệt vời bằng chính những thức uống tưởng chừng chỉ mang tính chất thỏa mãn vị giác. Được ví như tấm “kim bài miễn dịch” nhờ những thành phần cực tốt cho sức đề kháng của cơ thể, siêu phẩm mới Soya Jelly-o “made-by” Vườn Đậu chắc chắn không chỉ mang đến cho bạn vị ngon chưa từng thấy mà còn thêm nữa những lợi ích thực tế cho sức khỏe.</Text>
                        <Text style={{marginTop:10}}>

                            Đúng như tiêu chí ban đầu 2 trong 1, Soya Jelly-o là thức uống vừa giúp nâng cao sức đề kháng cho cơ thể nhưng vẫn thỏa mãn những yêu cầu khắt khe của vị giác. Lấy cảm hứng từ  lợi ích tuyệt vời của Sữa Chua, đặc biệt là ưu điểm nổi trội trong việc tăng cường hệ miễn dịch cho cơ thể, Soya Garden quyết định sử dụng siêu thành phần này kết hợp cùng dòng sữa Organic Soya Milk truyền thống cho công thức pha chế sản phẩm mới. Đậu nành Hữu cơ vốn đã dinh dưỡng và giúp nâng cao sức đề kháng, nay được cộng hưởng cùng những lợi khuẩn của Sữa Chua, mang đến một thức uống đột phá “double” miễn dịch.</Text>
                       <Text style={{marginTop:10}}>

                            Không chỉ là “kim bài miễn dịch”, Soya Jelly-o còn có “vị ngon vô địch” bởi sự pha trộn rất duyên giữa Soya Milk, Sữa Chua và những lát Thạch Trà Bá Tước siêu to khổng lồ, giòn mát thú vị, sắc vàng óng ánh ẩn hiện trong sắc trắng thơm mịn như muốn đánh thức mọi giác quan của người thường thức.

                        </Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

