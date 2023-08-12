import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MarketScreen from './MarketScreen.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
   
      <Text>Karpuz seçme uygulamasına hoşgeldiniz</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Market')}>
        <Text style={styles.text}>Go to Market</Text>
        </TouchableOpacity>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
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
    }



})