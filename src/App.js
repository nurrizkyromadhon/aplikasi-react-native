import React, { Component, useState } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet} from 'react-native'
import Belanjaa from './pages/Belanja';
import TextHel from './pages/TextHel';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSvg from './pages/ReactNativesvg';
import CallAPI from './pages/CallAPI';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';
import Router from './router';
import OnlineAPI from './pages/OnlineAPI';

const App = () =>{
  const [isShow, SetIsShow] = useState(true);
  useState(()=>{
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  });
  return(      
      <ScrollView style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="#7B1FA2"/>
        <StatBar/>
        {/* <BoxGreen/>       
        <Belanjaa/><TextHel/>
        <Position/>*/}
        {/*{isShow && <FlexBox/>}
        <PropsDinamis/>*/}        
       {/* <StateDinamis/>
       <Communication/>
       <BasicJavascript/>
       <ReactNativeSvg/>
       <CallAPI/>
       <CallAPIAxios/>              
       <NavigationContainer>
        <Router/>
       </NavigationContainer>
       
        <OnlineAPI/>*/}                    
      <LocalAPI/>
       

      </ScrollView>              
      
  )  
};

class BoxGreen extends Component{
  render(){
    return <Text>Class Komponen</Text>;
  } 
};

const StatBar = () =>{
  return(
    <View style={{
          backgroundColor:'#E040FB',
          paddingVertical:20,
          justifyContent:'center'        ,
          alignItems:'center',
          elevation:3
        }}>          
          <Text style={{
            color:'#FFFF',
            fontWeight:'bold',
            fontSize:18
            }}>
            Header</Text>
        </View>
  )
};





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

export default App;