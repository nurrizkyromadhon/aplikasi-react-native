import React, { Component } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet} from 'react-native'
import macbook from '../../assets/image/macbook.jpg'

const Product = (props) => {
  return (
    <View style={style.viewBel}>          
          <Image source={macbook} style={{width:188, height:188,borderRadius:8}} />
          <Text style={{fontSize:14, fontWeight:'bold', marginTop:16}}>
            New Macbook Pro 2019
          </Text>
          <Text style={{fontSize:12, color:'#F2994A', fontWeight:'bold', marginTop:16}}>
            Rp. 25.000.000
          </Text>
          <Text style={{fontSize:14, fontWeight:'bold', marginTop:12}}>
            Surabaya
          </Text>
          <TouchableOpacity onPress={props.onButtonPress}>
          <View style={{backgroundColor:'#6FC', marginTop:20,paddingVertical:6, borderRadius:25}}>
            <Text style={{fontSize:12, fontWeight:'bold', color:'white',textAlign:'center'}}>Beli</Text>
          </View>
          </TouchableOpacity>
          
        </View>
  )
}

export default Product

const style= StyleSheet.create({
  button:{
    backgroundColor:'green', 
    paddingVertical:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:50,
    marginHorizontal:20,
    borderRadius:50,
    elevation:3
  },
  viewBel:{
    padding:12,
    width: 212,    
    backgroundColor:'#f2f2f2',
    borderRadius:10,    
    marginBottom:50
  }
})