import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SunScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
  <Text>Karpuzun bir köşesinde toprak ve güneş izi olmasına dikkat ediyoruz</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SlapScreen')}>
        <Text>Sonraki adım</Text>
        </TouchableOpacity>
    
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({})