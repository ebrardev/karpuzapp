import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ChooseColorScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
       <Text>İlk olarak koyu yeşil olmasına özen gösteriyoruz.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SunScreen')}>
        <Text>Diğer Adım</Text>
        </TouchableOpacity>
    
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({})