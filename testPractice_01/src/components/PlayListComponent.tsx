import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { getPlaces } from '../services/tourPediaApi';

interface Props {
  navegar: any;
}

const countries = [
  'Amsterdam',
  'Barcelona',
  'Berlin',
  'Dubay',
  'London',
  'Paris',
  'Rome',
  'Tuscany',
];

const categories = ['accommodation', 'attraction', 'poi', 'restaurant'];

const PlayListComponent: React.FC<Props> = ({ navegar }) => {

  const [search, setSearch] = useState('');
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('Amsterdam'); // default
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchPlaces = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getPlaces(
        selectedCountry || undefined,
        selectedCategory || undefined,
        search || undefined
      );

      setPlaces(data);
    } catch (error) {
      console.log('Error fetching places:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedCountry, selectedCategory, search]);

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]); 

  const onPressDetail = (id: string) => {
    navegar.navigate('DetailsView', { id });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Barra de búsqueda */}
        <TextInput
          placeholder="Buscar lugar..."
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={fetchPlaces}
          style={styles.searchBar}
        />

        {/* Filtro por países */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {countries.map(country => (
            <TouchableOpacity
              key={country}
              style={[
                styles.filterButton,
                selectedCountry === country && styles.selected,
              ]}
              onPress={() =>
                setSelectedCountry(
                  selectedCountry === country ? '' : country
                )
              }
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCountry === country && styles.selectedText,
                ]}
              >
                {country}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Filtro por categorías */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selected,
              ]}
              onPress={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCategory === category && styles.selectedText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Loader */}
        {loading && <ActivityIndicator size="large" color="#1565C0" />}

        {/* Lista */}
        <FlatList
          data={places}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => onPressDetail(item.id)}
            >
              <Text style={styles.cardTitle}>
                {item.name || 'Sin nombre'}
              </Text>

              <Text style={styles.cardAddress}>
                {item.address || 'Sin dirección disponible'}
              </Text>

              <Text style={styles.cardDescription}>
                {item.category}
              </Text>

            </TouchableOpacity>
          )}
        />

      </View>
    </SafeAreaView>
  );
};

export default PlayListComponent;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 15,
  },

  filterButton: {
    backgroundColor: '#E9ECEF',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 30,
    marginRight: 12,
    minHeight: 50,
    justifyContent: 'center',
  },

  categoryButton: {
    backgroundColor: '#DCEBFF',
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 30,
    marginRight: 12,
    minHeight: 50,
    justifyContent: 'center',
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