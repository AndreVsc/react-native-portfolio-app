import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    margin: 20,
    flexDirection: 'column', // Mantém em coluna
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    maxWidth: 600,
    maxHeight: 600,
    borderWidth: 1,
    backgroundColor: '#2F2F2F',
    borderRadius: 10,
    padding: 20,
  },
  touchable: {
    alignItems: 'center', // Centraliza os itens dentro do TouchableOpacity
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    color: '#FFFFFF',
    textAlign: 'center', 
  },
  fullscreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  closeText: {
    color: '#fff',
    fontSize: 30,
  },
  fullscreenImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});
