import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StandScreen() {
    const navigation = useNavigation();
  return (
   <SafeAreaView style={styles.container}>
    <Image style={styles.image} source={require('../../assets/stand2.png')}  />
      <Text style={styles.frame}>Karpuz Standına hoşgeldiniz</Text>
      <Text style={styles.small}>Fiyatına bakıp seçmeye başlıyoruz</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChooseColorScreen')}>
        <Text  style={styles.text}>Sonraki Adım</Text>
        </TouchableOpacity>
    
    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Market')}>
        <Text style={styles.text}>Önceki Adım </Text>
        </TouchableOpacity>
        </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:20,
    alignItems:'center',
    gap:10,
},
image:{
  marginTop:50,
    width:350,
    height:350,
    borderRadius:10,
},
button:{
    backgroundColor:'green',
    padding:10,
    borderRadius:10,
    position:'absolute',
    bottom:150,
    right:10,
    alignItems:'center',
    color:'white'
},
text:{
    color:'white',
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center'
},
back:{

    backgroundColor:'red',
    padding:10,
    borderRadius:10,
    position:'absolute',
    bottom:150,
    left:10,
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
  fontSize:18,
  textAlign:'center',
  marginTop:5,
},
})