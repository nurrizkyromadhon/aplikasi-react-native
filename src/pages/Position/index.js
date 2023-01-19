import React, { Component } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet} from 'react-native'
import cart from '../../assets/icons/shopping-cart.png'

const Position =() =>{
    return (
        <View style={styles.wrapper}>
            <View style={styles.warpIcon}>
                <Image source={cart} style={styles.iconCart}/>
                <Text  style={styles.notif}>10</Text>
            </View>        
            <Text style={styles.font}>Keranjang Belanja Anda</Text>

        </View>
        
    );
};

export default Position;

const styles = StyleSheet.create({
    wrapper:{
        padding:20, alignItems:'center'
    },
    iconCart:{
        width:50,height:50
    },
    warpIcon:{
        borderWidth:1, 
        borderColor:'#000', 
        width:80,height:80,
        borderRadius:93/2,
        justifyContent:'center',alignItems:'center',
        position:'relative'
    },
    font:{
        fontSize:12, color:'#000', fontWeight:'bold', marginTop:10
    },
    notif:{
        padding:4, fontSize:12, 
        borderRadius:25,
        color:'#fff',
        width:24,
        height:24,
        backgroundColor: '#89C4E1',
        position:'absolute',
        top:0,
        right:2
    }
});