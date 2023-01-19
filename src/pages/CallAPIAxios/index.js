import { Button, StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import axios, { Axios } from 'axios'

const CallAPIAxios = () => {
    const [dataUser, setdataUser] = useState({
        avatar:'',
        email:'',
        first_name:'',
        last_name:''
    })
    const [dataJob, setdataJob] = useState({
        name:'',
        job:'',
    })
    
    const getData =()=>{
       /* fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setdataUser(json.data)})*/
        axios.get('https://reqres.in/api/users/2')        
        .then(result => {
          setdataUser(result.data.data);
        })
        .catch(err => console.log('Error: ', err));
    }
    
    const postData = ()=>{
        const dataForAPI ={
        name: "morpheus",
        job: "leader"
        }
        /*fetch('https://reqres.in/api/users',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(dataForAPI)
      })
      .then(response => response.json())
      .then(json=> {
        console.log('post response: ',json)
        setdataJob(json)
      })*/
      axios.post('https://reqres.in/api/users', dataForAPI)
      .then(result => setdataJob(result.data))
      .catch(err => console.log('Err: ',err))
    }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CallAPI Axios</Text>
      <Button title='GET Data' onPress={getData}/>
      <Text>Response GET Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.Image}/>
      )}      
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line}/>
      <Button title='POST Data' onPress={postData}/>
      <Text>Response GET Data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  )
}

export default CallAPIAxios

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
  }
})