import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

export default function StandScreen() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Standa hosgeldiniz şimdi karpuz seçelim</Text>

      <TouchableOpacity onPress={() => navigation.navigate('ChooseColorScreen')}>
        <Text>Meyve mağazasına gidiniz</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})