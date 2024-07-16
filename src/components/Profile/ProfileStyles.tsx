  import { StyleSheet } from 'react-native';

  export const styles = StyleSheet.create({
    textContainer: {
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2F2F2F',
    },
    tinyImage: {
      margin:30,
      resizeMode:'contain',
      height:180,
      width:180,
    }
  });