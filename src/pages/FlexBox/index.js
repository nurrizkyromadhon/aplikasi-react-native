import React, { Component, useEffect, useState } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet} from 'react-native'

const FlexBox =() =>{
    const [sucriber,setSucriber] = useState(200);
    useEffect(() => {
        console.log("Didmount");
        setTimeout(() => {
            setSucriber(400);
        }, 2000);
        return() =>{
            console.log("Did Update");
        };
    }, [sucriber]);
    /*useEffect(() => {
        console.log("DidUpdate");
        setTimeout(() => {
            setSucriber(400);
        }, 2000);
    }, [sucriber]);*/
    return (
        <View>
        <View style={{flexDirection:'row', 
            backgroundColor:'#000', 
            alignItems:'flex-start',
            justifyContent:'space-between'
            }}>            
            <View style={{backgroundColor:'#ABC270', width:50, height:50}}></View>
            <View style={{backgroundColor:'#FEC868', flex:50, height:50}}></View>
            <View style={{backgroundColor:'#FDA769', flex:50, height:50}}></View>
            <View style={{backgroundColor:'#473C33', flex:50, height:50}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>Text1</Text>
            <Text>Text2</Text>
            <Text>Text3</Text>
            <Text>Text4</Text>
            <Text>Text5</Text>            
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <Image 
            source={{uri:'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}
            style={{width:100,height:100, borderRadius:50}}              
            />
            <View style={{marginLeft:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Nur Rizky Romadhon</Text>
            <Text>{sucriber} Sucribers</Text>
            </View>
        </View>
        
        </View>
        
    );
};

export default FlexBox;