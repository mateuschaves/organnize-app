import React from 'react'
import LottieView from 'lottie-react-native';

import EmptyAnimation from '../../../../animations/empty.json'
import { View } from 'react-native';
import { NoItemTitle } from './styles';

export default function EmptyList() {
  return (
    <View>
        <NoItemTitle>Nenhum item encontrado</NoItemTitle>
        <LottieView
            autoPlay
            style={{
                width: 200,
                height: 200,
            }}
            source={EmptyAnimation}
        />
    </View>
  )
}