import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './ButtonsStyles';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export function Buttons() {
  const buttonCount = 3; 
  const translateY = useSharedValue(50); 
  const opacity = useSharedValue(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      translateY.value = withTiming(0, {
        duration: 2500,
        easing: Easing.out(Easing.exp),
      });

      opacity.value = withTiming(1, {
        duration: 4000,
        easing: Easing.out(Easing.exp),
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = (index:any) => useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const handlePressLinkedin = () => {
    Linking.openURL('https://linkedin.com/in/andré-victor-sc/');
  };

  const handlePressGithub = () => {
    Linking.openURL('https://www.github.com/AndreVsc');
  };

  const handlePressInstagram = () => {
    Linking.openURL('https://www.instagram.com');
  };

  return (
    <View>
      {[...Array(buttonCount)].map((_, index) => (
        <Animated.View key={index} style={[styles.button, animatedStyle(index)]}>
          <TouchableOpacity
            style={styles.buttonContent}
            onPress={
              index === 0 ? handlePressLinkedin :
              index === 1 ? handlePressGithub :
              handlePressInstagram
            }
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons 
                name={index === 0 ? "linkedin" : index === 1 ? "github" : "instagram"} 
                color="#fff" 
                size={26} 
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.buttonText}>
                {index === 0 ? "LinkedIn" : index === 1 ? "GitHub" : "Instagram"}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
}
