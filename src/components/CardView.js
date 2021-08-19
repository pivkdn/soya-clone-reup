import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
// import { Fonts, Metrics, Colors } from '../themes'


export default class App extends Component {
  render() {
    return (

        
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderBottomWidth: 0.5,
    padding: 5,
    backgroundColor: '#EFEFEF',
    borderColor: 'transparent',
    // marginBottom: 5
    borderWidth: 1,
    borderRadius:25
  }
})