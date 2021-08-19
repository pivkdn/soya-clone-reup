import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { getProduct } from '../services/Api'
import { getImage } from '../utils'


const { width, heigth } = Dimensions.get('window')




export default function order({ route, navigation }) {
    const [product, setProduct] = useState()
    useEffect(() => {
        // alert('hello')
        const getApiProduct = async () => {
            const result = await getProduct()
            console.log('result', result)
            setProduct(result.data.data)
        }
        getApiProduct()
    }, [])


    const onMoveToDetail = (data) => () => {
        navigation.navigate('Detail', { detail: data });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{}} onPress={onMoveToDetail(item)}>
            <View style={{ width: "40%" }}>
                <View>

                    <Image
                        style={{ width: width / 2.2, height: 120, borderRadius: 10 }}
                        source={{ uri: getImage(item.high_res_image) }}
                    />
                </View>
                <View style={{ width: width / 2.2 }}>
                    <Text style={{ height: 40 }}>{item.product_name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 2.2, alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'grey', }}>{item.base_price} đ</Text>
                        </View>
                        <View>
                            <IonIcons name="add-circle" size={30} color={"orange"} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ backgroundColor: '#f2eff4' }}>
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <View style={{ borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center', height: 40, borderColor: '#EFEFEF', width: width, marginBottom: 10 }}>
                        <IonIcons name="search-outline" size={20} color={'gray'} style={{ marginLeft: 5 }} />
                        <TextInput placeholder={'Tìm kiếm '}></TextInput>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginTop: 20 }}>Danh mục</Text>
                <ScrollView horizontal={true} style={{ marginLeft: 5, marginTop: 10, marginBottom: 15 }} showsHorizontalScrollIndicator={false}>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ alignItems: 'center' }}>

                                <Image style={{ height: 30, width: 30, }} source={require('../images/icon1.png')} />
                                <Text>SOYA MILK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
            <ScrollView></ScrollView>
            <View style={{ backgroundColor: 'white', }}>
                <Text style={{ margin: 10, fontWeight: 'bold' }}>Tất cả các món</Text>
                <FlatList
                    data={product}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item._id}
                    columnWrapperStyle={{ justifyContent: 'space-evenly', marginBottom: 10, flex: 1 }}

                    style={{ marginBottom: 700 }}
                >

                </FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        height: 60,
        width: width / 4,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5
    }

})
