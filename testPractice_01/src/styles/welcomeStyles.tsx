import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
  },

  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#0D47A1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  banner: {
    width: '90%',
    height: 180,
    resizeMode: 'contain',
    marginTop: 20,
  },

  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#0D47A1',
  },

  membersContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  memberName: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 2,
  },

  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  infoText: {
    fontSize: 16,
    marginVertical: 2,
    color: '#333',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1565C0',
  },
});

export default styles;
