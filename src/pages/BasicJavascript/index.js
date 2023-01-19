import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasicJavascript = () => {
    //primitive
    const nama ="Nur Rizky"
    let usia = 22;
    //complex
    const hewan={
        nama:'kucing',
        usia:2,
        warna:'Hijau',
        jenis:{
            kelamin:'laki-laki',
            tipe:'anggora'
        }
    }; //obaject
    const sapaOrang =(nama,usia)=>{
        return console.log("Hello ${nama} usia ${usia}");        
    }
    sapaOrang(nama,usia);

    const namaorang=['kiki','rian','rizky'];
    typeof namaorang;

    const sapaHewan = objectHewan =>{
        let sapaK ='';
        if (objectHewan.nama == 'kucing') {
            sapaK = 'Hello kucing';
        }else{
            sapaK = 'Hello bukan kucing';
        }
        return sapaK;
    }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BasicJavascript</Text>
      <Text>Nama : {nama}</Text>
      <Text>Usia : {usia}</Text>
      <Text> {sapaHewan(hewan)} </Text>
      <Text>{namaorang[0]}</Text>
      <Text>{namaorang[1]}</Text>      
      <Text>====</Text>
      {namaorang.map(orang =>(
        <Text>{orang}</Text>
      ))}
    </View>
  )
}

export default BasicJavascript

const styles = StyleSheet.create({
    container:{
    padding:20
  },
  textTitle:{
    textAlign:'center'
  }
})