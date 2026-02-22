import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GET_PLACE_DETAILS } from '../components/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface Props {
  route: any;
}

const DetailsComponent: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [place, setPlace] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    fetch(`${GET_PLACE_DETAILS}?id=${id}`)
      .then(res => res.json())
      .then(data => setPlace(data))
      .catch(() => { });
  }, [id]);

  useFocusEffect(
    useCallback(() => {
      const checkIfFavorite = async () => {
        if (!place) return;

        const data = await AsyncStorage.getItem('favorites');
        const favorites = data ? JSON.parse(data) : [];

        const exists = favorites.find((item: any) => item.id === place.id);

        setIsFavorite(!!exists);
      };

      checkIfFavorite();
    }, [place])
  );

  if (!place) {
    return (
      <View style={styles.loader}>
        <Text>Cargando detalles...</Text>
      </View>
    );
  }

  const fullAddress = `${place.location}, ${place.address}`;

  const handleAddFavorite = async () => {
    const data = await AsyncStorage.getItem('favorites');
    let favorites = data ? JSON.parse(data) : [];

    if (favorites.find((item: any) => item.id === place.id)) {
      Alert.alert('Este lugar ya está en favoritos');
      return;
    }

    if (favorites.length >= 5) {
      Alert.alert('Solo puedes agregar máximo 5 favoritos');
      return;
    }

    favorites.push(place);

    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(true);

    Alert.alert('Éxito', 'Se agregó correctamente a favoritos');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>

        {/* Nombre */}
        <Text style={styles.title}>{place.name}</Text>

        {/* Descripción en español */}
        <Text style={styles.description}>
          {place.description?.es || 'Sin descripción en español'}
        </Text>

        <View style={styles.card}>

          {/* Categoría */}
          <Text style={styles.label}>Categoría</Text>
          <Text style={styles.value}>{place.category}</Text>

          {/* Dirección unida */}
          <Text style={styles.label}>Dirección</Text>
          <Text style={styles.value}>{fullAddress}</Text>

          {/* Facebook */}
          <Text style={styles.label}>Facebook</Text>
          <Text
            style={styles.link}
            onPress={() =>
              place.external_urls?.Facebook &&
              Linking.openURL(place.external_urls.Facebook)
            }
          >
            {place.external_urls?.Facebook || 'No disponible'}
          </Text>

        </View>

        <TouchableOpacity
          style={[
            styles.favoriteButton,
            isFavorite && styles.favoriteButtonActive,
          ]}
          onPress={handleAddFavorite}
        >
          <Text style={styles.favoriteText}>
            {isFavorite ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
          </Text>
        </TouchableOpacity>


      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsComponent;


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

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    elevation: 4,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1565C0',
    marginTop: 10,
  },

  value: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },

  link: {
    fontSize: 14,
    color: '#1E88E5',
    marginTop: 4,
    textDecorationLine: 'underline',
  },

  favoriteButton: {
    backgroundColor: '#043a6f',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  favoriteButtonActive: {
    backgroundColor: '#1565C0',
  },

  favoriteText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
