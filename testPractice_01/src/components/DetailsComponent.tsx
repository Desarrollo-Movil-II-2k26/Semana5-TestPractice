import React, { useEffect, useState } from 'react';
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
      .catch(() => {});
  }, [id]);

  if (!place) {
    return (
      <View style={styles.loader}>
        <Text>Cargando detalles...</Text>
      </View>
    );
  }

  const fullAddress = `${place.location}, ${place.address}`;

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
            onPress={() => setIsFavorite(!isFavorite)}
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
  backgroundColor: '#E9ECEF',
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
