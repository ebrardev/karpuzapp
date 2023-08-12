import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function MarketScreen() {
    const navigation = useNavigation();

  return (
    <View>
  
      <TouchableOpacity onPress={() => navigation.navigate('Stand')}>
        <Text>Meyve mağazasına gidiniz</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})