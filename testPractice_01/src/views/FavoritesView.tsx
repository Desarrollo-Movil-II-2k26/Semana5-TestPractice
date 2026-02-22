import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

const FavoritesView = () => {
    const [favorites, setFavorites] = useState<any[]>([]);

    const loadFavorites = async () => {
        const data = await AsyncStorage.getItem('favorites');
        if (data) {
            setFavorites(JSON.parse(data));
        }
    };

    const removeFavorite = async (id: string) => {
        const updated = favorites.filter(item => item.id !== id);
        await AsyncStorage.setItem('favorites', JSON.stringify(updated));
        setFavorites(updated);
    };

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={<Text>No hay favoritos</Text>}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.name}</Text>

                            <Text style={styles.category}>
                                {item.category}
                            </Text>

                            <Text style={styles.address}>
                                {item.address}
                            </Text>

                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() =>
                                    Alert.alert(
                                        'Eliminar',
                                        '¿Eliminar de favoritos?',
                                        [
                                            { text: 'Cancelar' },
                                            {
                                                text: 'Eliminar',
                                                onPress: () => removeFavorite(item.id),
                                            },
                                        ]
                                    )
                                }
                            >
                                <Text style={{ color: 'white' }}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
export default FavoritesView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    deleteButton: {
        marginTop: 10,
        backgroundColor: '#D32F2F',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    category: {
        alignSelf: 'flex-start',
        backgroundColor: '#E3F2FD',
        color: '#0D47A1',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        fontSize: 12,
        marginTop: 6,
        marginBottom: 6,
    },
    address: {
        fontSize: 13,
        color: '#555',
    }
});