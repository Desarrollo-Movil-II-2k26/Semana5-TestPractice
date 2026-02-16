import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/welcomeStyles';

//Se instaló la dependencia para los icons
//npm install --save-dev @types/react-native-vector-icons

const Welcome = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>

      {/* Barra de navegación */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="ellipsis-vertical" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Imagen principal */}
      <Image
        source={require('../assets/logo/migajero.jpeg')}
        style={styles.banner}
      />

      {/* Nombre del equipo */}
      <Text style={styles.teamName}>Equipo: Migajeros</Text>

      {/* Integrantes */}
      <View style={styles.membersContainer}>
        <Text style={styles.memberName}>Esteban Amores Barrantes</Text>
        <Text style={styles.memberName}>Marco Campos Torres</Text>
        <Text style={styles.memberName}>Jorjan Álvarez Alvarado</Text>
        <Text style={styles.memberName}>Laura Montero Carvajal</Text>
      </View>

      {/* Información académica */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Curso: Desarrollo de Apps Móviles II</Text>
        <Text style={styles.infoText}>Profesor: Jorge Felix Ruiz</Text>
        <Text style={styles.infoText}>Fecha de entrega: 23 de febrero 2026</Text>
        <Text style={styles.title}>Práctica de examen I</Text>
      </View>

    </View>
  );
};

export default Welcome;