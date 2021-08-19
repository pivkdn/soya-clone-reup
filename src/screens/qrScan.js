import React from 'react'
import { View, Text } from 'react-native'
import { RNCamera } from 'react-native-camera';

export default function qrScan() {
    const  barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.warn(barcode.data))
      };
    return (
            <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
        >
        </RNCamera>
             
    )
}
