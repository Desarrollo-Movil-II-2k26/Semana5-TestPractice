import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  searchBar: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    elevation: 3,
  },

  filterContainer: {
    marginBottom: 10,
  },

  filterButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },

  categoryButton: {
    backgroundColor: '#D6E4FF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },

  selected: {
    backgroundColor: '#1565C0',
  },

  filterText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },

  selectedText: {
    color: '#FFFFFF',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },

  cardAddress: {
    fontSize: 13,
    color: '#888',
  },

});

export default styles;