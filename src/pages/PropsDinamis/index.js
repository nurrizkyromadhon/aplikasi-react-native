import React, { Component } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet} from 'react-native'
import imagD from '../../assets/image/macbook.jpg'

const Status = props => {
  return (
    <View style={{alignItems:'center',marginRight:20}}>
        <Image source={{uri:props.gambar}} 
        style={{width:70,
            height:70,
            borderRadius:50/2
        }}/>
        <Text style={{maxWidth:50, textAlign:'center'}}>{props.nama}</Text>                
    </View>
  )
};
const PropsDinamis = () => {
  return (
    <View>
        <Text>PropsDinamis</Text>
        <ScrollView horizontal>
        <View style={{flexDirection:'row'}}>
        <Status nama= "youtube Channel" gambar= 'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Status nama= "youtube Channel2" gambar= 'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Status nama= "youtube Channel3" gambar= 'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Status nama= "youtube Channel4" gambar= 'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Status nama= "youtube Channel5" gambar= 'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Status nama= "youtube Channel6" gambar= 'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <Status nama= "youtube Channel7" gambar= 'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        </View>
        </ScrollView>                
    </View>
  )
};
export default PropsDinamis;