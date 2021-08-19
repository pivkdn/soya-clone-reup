/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TouchableOpacity,
   Button,
   Linking
 } from 'react-native';
 
 import {
   Header,
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 import QRCodeScanner from 'react-native-qrcode-scanner';
 
 const App = () => {
 
   const [scan, setScan] = useState(true)
   const [result, setResult] = useState()
 
   onSuccess = (e) => {
     setResult(e.data)
     setScan(false)
   }
 
   startScan = () => {
     setScan(true)
     setResult()
   }
 
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView>
         <ScrollView
           contentInsetAdjustmentBehavior="automatic"
           style={styles.scrollView}>
           
           <View style={styles.body}>
             { result &&
               <View style={styles.sectionContainer}>
                 <Text style={styles.centerText} onPress={() =>Linking.openURL(`${result}`)}>{result}</Text>
                 <TouchableOpacity onPress={() =>Linking.openURL(`${result}`)}>
                 <Button
                   title="Tiếp Tục"
                   color="green"
                   onPress={() =>Linking.openURL(`${result}`)}
                 />
                 </TouchableOpacity>
               </View>
             }
             { !scan &&
               <View style={styles.sectionContainer}>
                 <Button
                   title="Quét Lại"
                   color="Orange"
                   onPress={this.startScan}
                 />
               </View>
             }
             { scan &&
               <View style={styles.sectionContainer}>
                 <QRCodeScanner
                   reactivate={true}
                   showMarker={true}
                   ref={(node) => { this.scanner = node }}
                   onRead={this.onSuccess}
                   topContent={
                     <Text style={styles.centerText}>
                       Scan your QRCode!
                     </Text>
                   }
                   bottomContent={
                     <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
                       <Text style={styles.buttonText}>Hủy</Text>
                     </TouchableOpacity>
                   }
                 />
               </View>
             }
           </View>
         </ScrollView>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   body: {
     backgroundColor: Colors.white,
   },
   sectionContainer: {
     marginTop: 80,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
//    footer: {
//      color: Colors.dark,
//      fontSize: 12,
//      fontWeight: '600',
//      padding: 4,
//      paddingRight: 12,
//      textAlign: 'right',
//    },
   centerText: {
     flex: 1,
     fontSize: 18,
     padding: 32,
     color: '#777',
     textAlign:'center'
   },
   textBold: {
     fontWeight: '500',
     color: '#000',
   },
   buttonText: {
     fontSize: 21,
     color: 'red',
   },
   buttonTouchable: {
     padding: 16,
   },
 });
 
 export default App;
 