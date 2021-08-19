import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

export default function Places({ route, navigation }) {
  const { map } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          latitude: map.latitude,
          longitude: map.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* {locations.map((e, i) => ( */}
        <Marker
          title={map.name}
          // image={flagPinkImg}
          coordinate={{
            latitude: map.latitude,
            longitude: map.longitude,
          }}
        >
          {/* <TouchableOpacity>
            <Image source={{ uri: 'https://raw.githubusercontent.com/hungdev/IntegrateMapAndCamera/master/src/marker.png' }} style={{ height: 30, width: 30 }} />
          </TouchableOpacity> */}
        </Marker>
        {/* ))} */}
      </MapView>
    </View>
  )
}

