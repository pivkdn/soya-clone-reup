import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Point() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ marginTop: 20, borderBottomWidth: 0.5 }}>
        <Text style={{ marginTop: 10, marginLeft: 15, marginBottom: 10, fontSize: 20 }}>Mã tích S-Point</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 40, color: 'green' }}>84865</Text>
        <Text>Mã tích S-Point hiệu lực trong 15 phút</Text>
        <Image
          source={{ uri: 'https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg' }}
          style={{ width: 200, height: 200, margin: 20 }}
        />
        <Text>Scan mã QR hoặc đọc mã này cho nhân viên tại quầy </Text>
        <Text>để tích S-Point cho mỗi hóa đơn</Text>
      </View>
    </View>
  )
}
