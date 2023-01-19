import React, { Component } from 'react'
import {Text,View,ScrollView,StatusBar,Image, TouchableOpacity,Switch, TextInput,StyleSheet} from 'react-native'

class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      header: 'Home',
      value:true,
      username: '',
     };
  }
  render() {
    return (
      /*<View style={{flex:1}}>
        <Text style={{
          color:'red', 
          fontSize:25,
          fontWeight:'bold',
          textAlign:'center',
          // textDecorationLine:'underline'
          letterSpacing: 5
          }}>
          <Text>Hellow World!1 Atas</Text>
          <Text style={{color:'blue'}}>Hellow World!</Text>
        </Text>        
        <Text>Hellow World!</Text>
        <Text>Hellow World!</Text>

        <View style={{
          // width:100,
          // height:100,
          flex:0.3,
          flexDirection:'column',
          backgroundColor:'red',
          margin:20,
          // padding:20
          // marginHorizontal,marginVertical
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>Hello1</Text>
          <Text>Hello2</Text>
          <Text>Hello3</Text>
        </View>
      </View>*/
      //Header
      /*<ScrollView style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor="#7B1FA2"/>
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
            {this.state.header}</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Hadd/>
          <Image 
            source={require('./src/images/image1.jpg')}
            style={{width:300,height:300}}/>          
        </View>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:20}}
        onPress={()=> console.log('Hello World')}>          
          <Image 
            source={{uri:'https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}
            style={{width:300,height:300}}
              resizeMode="cover"
            />
        </TouchableOpacity>

        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
          <Switch value={this.state.value} 
            onValueChange={() => this.setState({value: !this.state.value})}    
          />
        </View>
        <TextInput 
        value={this.state.username} 
        style={{borderWidth:1, 
          marginHorizontal:20,
          paddingHorizontal:10,
          borderColor:'#000',
          borderRadius:3,
          backgroundColor:'#E040FB',
          color:'#FFFF'
        }}
        onChangeText={(value) => this.setState({username:value})}
        />      

        <TouchableOpacity style={style.button}>
          <Text style={{color:'#FFFF'}}>Click Mee</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={style.button}>
          <Text style={{color:'#FFFF'}}>Click Me</Text>
        </TouchableOpacity>
        <Text>Belanja</Text>        
        <Belanjaa/>
      </ScrollView>*/
      <Text>Belanja</Text>
    );
  }
}