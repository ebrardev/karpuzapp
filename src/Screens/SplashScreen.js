import { StyleSheet, Text, View,Image } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000);
    }, [])
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/watermelon.png')} />
      <Text style={styles.text}>KARPUZAPP</Text>
      <Text style={styles.small}>ebrardev</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        paddingHorizontal:20,
    },
    image:{
        width:200,
        height:200,
        resizeMode:'contain',
        borderRadius:10,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        marginTop:15,
    },
    small:{
        color:'white',
        fontSize:12,
        textAlign:'center',
        marginTop:15,
    }
})