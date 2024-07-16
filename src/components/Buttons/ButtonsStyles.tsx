import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginBottom: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#2F2F2F',
    width: 370,
    padding: 15,
    borderRadius: 5,
  },
  iconContainer: {
    position: 'absolute', 
    left: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  
});
