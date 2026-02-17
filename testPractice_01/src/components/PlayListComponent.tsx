import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Place {
  id: string;
  name: string;
  description: string;
  address: string;
  country: string;
  category: string;
}

interface Props {
  navegar: any;
}

const mockData: Place[] = [
  {
    id: '1',
    name: 'Playa Manuel Antonio',
    description: 'Hermosa playa con arena blanca y abundante naturaleza.',
    address: 'Parque Nacional Manuel Antonio, Puntarenas',
    country: 'Costa Rica',
    category: 'Naturaleza',
  },
  {
    id: '2',
    name: 'Torre Eiffel',
    description: 'Icónico monumento de hierro en París.',
    address: 'Champ de Mars, París',
    country: 'Francia',
    category: 'Cultural',
  },
  {
    id: '3',
    name: 'Times Square',
    description: 'Centro vibrante lleno de luces.',
    address: 'Manhattan, Nueva York',
    country: 'USA',
    category: 'Urbano',
  },
  {
    id: '4',
    name: 'Coliseo Romano',
    description: 'Anfiteatro histórico del Imperio Romano.',
    address: 'Roma, Italia',
    country: 'Italia',
    category: 'Histórico',
  },
  {
    id: '5',
    name: 'Monte Fuji',
    description: 'Volcán icónico de Japón.',
    address: 'Honshu, Japón',
    country: 'Japón',
    category: 'Naturaleza',
  },
];

const countries = [
  'Costa Rica',
  'Francia',
  'USA',
  'Italia',
  'Japón',
  'España',
  'México',
  'Brasil',
];

const categories = ['Naturaleza', 'Cultural', 'Urbano', 'Histórico'];

const PlayListComponent: React.FC<Props> = ({ navegar }) => {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredData = mockData.filter(place => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCountry = selectedCountry
      ? place.country === selectedCountry
      : true;

    const matchesCategory = selectedCategory
      ? place.category === selectedCategory
      : true;

    return matchesSearch && matchesCountry && matchesCategory;
  });

  const onPressDetail = (id: string) => {
    navegar.navigate('Details', { id });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Barra de búsqueda */}
        <TextInput
          placeholder="Buscar lugar..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchBar}
        />

        {/* Filtro por países */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterContainer}
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
                  selectedCountry === country ? null : country
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
          style={styles.filterContainer}
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

        {/* Lista */}
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => onPressDetail(item.id)}
            >
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardDescription}>
                {item.description}
              </Text>
              <Text style={styles.cardAddress}>
                {item.address}
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