import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MarketScreen() {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
  
      <TouchableOpacity onPress={() => navigation.navigate('Stand')}>
        <Text>Meyve mağazasına gidiniz</Text>
        </TouchableOpacity>
    
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({})