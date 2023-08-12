import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MarketScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
  <Text> Elimizi yumruk şekline getirip işaret parmağıyla vuruyoruz </Text>
      <TouchableOpacity onPress={() => navigation.navigate('HappyScreen')}>
        <Text>ve Son adım ..</Text>
        </TouchableOpacity>
    
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({})