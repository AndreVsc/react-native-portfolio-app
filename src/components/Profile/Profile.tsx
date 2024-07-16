import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Buttons } from '../Buttons/Buttons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { styles } from './ProfileStyles';

export default function Profile() {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0); // Valor inicial da opacidade

  useEffect(() => {
    const timer = setTimeout(() => {
      translateY.value = withTiming(-100, { duration: 1000 });
      opacity.value = withTiming(1, { duration: 2500 }); 
    },600); 

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const imageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value, // Opacidade animada
  }));

  return (
    <Animated.View style={[animatedStyle, styles.textContainer]}>
      <Text style={styles.text}>André Victor</Text>
      <Animated.Image 
        source={require('../../../assets/Perfil.png')} 
        style={[styles.tinyImage, imageStyle]} // Aplicando a animação de opacidade
      />
      <Buttons />
    </Animated.View>
  );
}
