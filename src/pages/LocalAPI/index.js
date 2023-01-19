import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import macbook from '../../assets/image/macbook.jpg'
//import Axios from 'axios'
import axios from 'axios'

const Item =(name,email,bidang)=>{
    return(
        <View style={styles.itemContainer}>
      <Image source={macbook} style={styles.avatar}/>        
      <View style={styles.desc}>        
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <Text style={styles.delete}>X</Text>
      </View>
    )
}

const LocalAPI = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [bidang,setBidang] = useState("");
    const [users,setUsers] = useState([]);

    useEffect(()=>{
      getData();
    },[])

    const submit=()=>{
        const data={
            name:name,
            email:email,
            bidang:bidang
        }
        console.log('data before send: ', data);
        axios.post('http://192.168.0.115:8081/users',data)
        .then(res=>{
            console.log('res: ',res);
            setName("");
            setEmail("");
            setBidang("");
        })
        //.catch(err => console.log('Error post: ', err));        
    }
    const getData=()=>{
      axios.get('http://192.168.0.115:3000/users')
      .then(res=> {
        console.log('res get Data: ', res.json())
        setUsers(res.data);
      })
      .catch(err => console.log('Error get: ', err));
      /*fetch('http://localhost:3004/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setUsers(json.data)
    })  */
    }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>LocalAPI</Text>
      <Text>Masukkan Anggota Kelas</Text>
      <TextInput placeholder='Nama Lengkap' style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
      <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={(value) => setEmail(value)}/>
      <TextInput placeholder='Bidang' style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)}/>
      <Button title='Simpan' onPress={submit}/>
      <View style={styles.line}/>
      {users.map(user => {
        return <Item key={user.id} name={user.name} email={user.email} bidang={user.bidang}/>
      })}
      
      
    </View>
  )
}

export default LocalAPI

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  textTitle:{
    textAlign:'center'
  },
  line:{
    height:2,backgroundColor:'black', marginVertical:20
  },
  Image:{
    width:100,height:100,borderRadius:100
  },
  input:{
    borderWidth:1, marginBottom:12, borderRadius:25, paddingHorizontal:18
  },
  avatar:{
    width:80,height:80,borderRadius:80
  },
  itemContainer:{
    flexDirection:'row',marginBottom:20
  },
  desc:{
    marginLeft:18,flex:1
  },
  descName:{
    fontSize:20,fontWeight:'bold'
  },
  descEmail:{
    fontSize:16
  },
  descBidang:{
    fontSize:12,marginTop:8
  },
  delete:{
    fontSize:20, fontWeight:'bold',color:'red'
  }
})