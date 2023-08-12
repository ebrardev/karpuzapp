import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MarketScreen from './MarketScreen.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
   <Text style={styles.name}>karpuzapp</Text>
   <Image style={styles.image} source={require('../../assets/first.png')}  />
      <Text style={styles.frame}>Karpuz seçme uygulamasına hoşgeldiniz</Text>
      <Text style={styles.small}>Adımları takip ederek ilerleyiniz</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Market')}>
        <Text style={styles.text}>Sonraki Adım</Text>
       
        </TouchableOpacity>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:'center'
    },
    button:{
        backgroundColor:'green',
        padding:10,
        borderRadius:10,
        position:'absolute',
        bottom:150,
        right:10,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'
    },
    image:{
        width:300,
        height:300,
        
      
        borderRadius:10,
    },
    frame:{
        color:'black',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center',
        marginTop:15,
    },
    small:{
        color:'grey',
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center',
        marginTop:5,
    },
    name:{
        color:'green',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
        marginTop:70,
        marginBottom:30,
        textTransform:'uppercase',
    }



})