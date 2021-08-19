import React, { useState } from 'react';
import { View, useWindowDimensions, Text, TouchableOpacity, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import dau1 from './dau1'

const FirstRoute = () => (
  <View>
    <View style={{ margin: 15 }}>
      <View>
        <Text>Chọn số tiền cần nạp</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
        <View>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'yellow', width: 100, height: 60, alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
              <Text >50.000k</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>

        </View>
        <View>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'yellow', width: 100, height: 60, alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
              <Text >50.000k</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <TouchableOpacity>
              <View style={{ backgroundColor: 'yellow', width: 100, height: 60, alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                <Text >50.000k</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10, backgroundColor: 'white', padding: 10 }}>
        <Text style={{ fontSize: 18, marginTop: 30, fontWeight: 'bold' }} >Hình thức thanh toán</Text>
        <TouchableOpacity onPress={onChange}  >
          <View style={{ flexDirection: 'row', flex: 1, marginTop: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              <Image source={{ uri: "data:image/png;base64,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" }} style={{ width: 50, height: 20, borderRadius: 5 }} />
            </View>
            <View style={{ flex: 8, justifyContent: 'center', }}>
              <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', color: color }}>Thanh toán trả sau</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onChange1}>
          <View style={{ flexDirection: 'row', flex: 1, marginTop: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/vi/archive/f/fe/20201011055543%21MoMo_Logo.png" }} style={{ width: 50, height: 50 }} />
            </View>
            <View style={{ flex: 8, justifyContent: 'center' }}>
              <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', color: color1 }}>Thanh toán ví MOMO</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    </View>

  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const [price, setprice] = useState(50.000);
  const [price1, setprice1] = useState(100.000)
  const [price2, setprice2] = useState(500.000)
  const [color, setColor] = useState("black");
  const [color1, setColor1] = useState("black");
  const onChange = () => {
    setColor("green");
    setColor1("black")
  };
  const onChange1 = () => {
    setColor1("green");
    setColor("black")
  };
  const FirstRoute = () => (
    <View>
      <View style={{ margin: 15 }}>
        <View>
          <Text>Chọn số tiền cần nạp</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <View>
            <TouchableOpacity>
              <View style={{ backgroundColor: 'yellow', width: 100, height: 60, alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                <Text >50.000k</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>

          </View>
          <View>
            <TouchableOpacity>
              <View style={{ backgroundColor: 'yellow', width: 100, height: 60, alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                <Text >50.000k</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'yellow', width: 100, height: 60, alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                  <Text >50.000k</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10, backgroundColor: 'white', padding: 10 }}>
          <Text style={{ fontSize: 18, marginTop: 30, fontWeight: 'bold' }} >Hình thức thanh toán</Text>
          <TouchableOpacity onPress={onChange}  >
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image source={{ uri: 'https://storage.googleapis.com/partnership-shopee-files-live/live/airpay/filer_public_thumbnails/filer_public/b1/8c/b18cd405-3927-460f-a03c-5229199add79/logo-apa_400x400.png__300x300_q95_crop_subsampling-2.png' }} style={{ width: 50, height: 50, borderRadius: 10 }} />
              </View>
              <View style={{ flex: 8, justifyContent: 'center' }}>
                <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', color: color }}>Thanh toán ví Airpay</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onChange1}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/vi/archive/f/fe/20201011055543%21MoMo_Logo.png" }} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ flex: 8, justifyContent: 'center' }}>
                <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', color: color1 }}>Thanh toán ví MOMO</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
