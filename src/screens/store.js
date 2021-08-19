

import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { getStore } from '../services/ApiStore'
import { getImage } from '../utils'
import { color } from 'react-native-reanimated';


const { width, heigth } = Dimensions.get('window')



export default function Store({ route, navigation }) {

    const [color, setColor] = useState("grey");

    const onChange = () => {

        setColor("green");
    };
    const [store, setStore] = useState()
    useEffect(() => {
        // alert('hello')
        const getApiStore = async () => {
            const result = await getStore()
            setStore(result.data)
        }
        getApiStore()
    }, [])

    const onMoveToMap = (data) => () => {
        navigation.navigate('map', { map: data });
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ marginTop: 15, marginLeft: 5 }} onPress={onMoveToMap(item)}>
            <View>

                <View style={{ marginLeft: 10, width: '92%', backgroundColor: 'white', borderRadius: 10 }}>
                    <Image source={{ uri: getImage(item.image_1) }} style={{ height: 150, width: width / 1.1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <Text style={{ marginLeft: 15, fontWeight: 'bold', marginRight: 15, marginTop: 10 }}> {item.name}</Text>
                    <View style={{ flexDirection: 'row', marginRight: 20, width: "90%" }}>
                        <View>

                            <Text style={{ marginLeft: 17, marginTop: 5 }}><EvilIcons name='location' size={25} /></Text>

                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text>{item.street}, {item.street2}, {item.state_name}</Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginRight: 20, width: "90%" }}>
                        <View>

                            <Text style={{ marginLeft: 17, marginTop: 5 }}><Feather name='phone-call' size={17} /></Text>

                        </View>
                        <View style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>
                            <Text>{item.phone}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ position: 'absolute', borderRadius: 8, backgroundColor: '#FECE02', marginTop: 5, marginLeft: 5, flexDirection: 'row', height: 25, justifyContent: 'center' }}>
                    <Feather name='clock' size={20} style={{ marginLeft: 5, alignItems: 'center', marginTop: 2 }} />
                    <Text style={{ marginLeft: 5, textAlignVertical: 'center', marginRight: 5 }}>08:00 - 23:00 (Đang mở cửa)</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
                <View style={{ borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginRight: 0, height: 40, borderColor: '#EFEFEF', marginTop: 50, width: '77%', marginBottom: 10 }}>
                    <IonIcons name="search-outline" size={20} color={"grey"} style={{ marginLeft: 5 }} />
                    <TextInput placeholder={'Tìm kiếm cửa hàng'}></TextInput>
                </View>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: 50 }}>
                        <Feather onPress={onChange} name="send" size={24} style={{ marginRight: 10 }} color={color} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 100, backgroundColor: '#EFEFEF' }}>
                <FlatList
                    data={store}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    maxToRenderPerBatch={10}
                >
                </FlatList>
            </View>
        </View>

    )
}