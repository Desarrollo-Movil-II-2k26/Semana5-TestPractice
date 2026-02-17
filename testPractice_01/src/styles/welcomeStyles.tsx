import { StyleSheet } from 'react-native';

const WelcomeStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  banner: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#1565C0',
  },

  teamName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0D47A1',
    marginBottom: 15,
    textAlign: 'center',
  },

  membersContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,

    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    // Sombra Android
    elevation: 6,
  },

  memberName: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 4,
    color: '#333',
    textAlign: 'center',
  },

  infoContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },

  infoText: {
    fontSize: 15,
    marginVertical: 4,
    color: '#555',
    textAlign: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#1565C0',
    textAlign: 'center',
  },

});

export default WelcomeStyles;
