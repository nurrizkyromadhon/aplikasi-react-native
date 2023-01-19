import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IllustrationSvg from '../../assets/image/undraw_home_run.svg'

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ReactNativeSvg</Text>      
      <IllustrationSvg width={244} height={180}/>
    </View>
  )
}

export default ReactNativeSvg

const styles = StyleSheet.create({
    container:{
    padding:20
  },
  textTitle:{
    textAlign:'center'
  }
})