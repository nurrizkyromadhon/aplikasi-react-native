import React, { Component } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet} from 'react-native'

class TextHel extends Component {  
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  componentDidMount(){
    console.log("componenDidmoun");
  }
  componentDidUpdate(){
    console.log("Component didUpdate");
  }
  componentWillUnmount(){
    console.log("componenwillunmout");
  }
  render() {
    return (
      <View>
        <Text>Halaman Componen</Text>
        <Text>Halaman Componen</Text>
      </View>     
    );
  }
}

export default TextHel;


