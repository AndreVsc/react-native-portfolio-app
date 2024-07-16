  import { StyleSheet } from 'react-native';

  export const styles = StyleSheet.create({
    textContainer: {
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2F2F2F',
    },
    tinyImage: {
      resizeMode:'contain',
      height:180,
      width:180,
    }
  });