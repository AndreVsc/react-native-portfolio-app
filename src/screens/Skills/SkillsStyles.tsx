import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    flexWrap: 'wrap',
  },
  categoryContainer: {
    maxWidth: 600,
    width: '100%',
    margin: 10,
    padding: 20,
    borderRadius: 5,
    gap: 10,
    backgroundColor: '#2F2F2F',
    marginHorizontal: 'auto', 
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  skillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  skillName: {
    flex: 1,
    color: '#fff',
    fontSize: 12,
  },
  star: {
    flexDirection: 'row',
    marginLeft: 5,
  },
});
