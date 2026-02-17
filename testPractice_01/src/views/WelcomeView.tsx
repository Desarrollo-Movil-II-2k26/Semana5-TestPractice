import React from 'react';
import { View, Text, Image } from 'react-native';
import WelcomeStyles from '../styles/welcomeStyles';

const Welcome = () => {
  return (
    <View style={WelcomeStyles.container}>

      {/* Imagen principal */}
      <Image
        source={require('../assets/logo/migajero.jpeg')}
        style={WelcomeStyles.banner}
      />

      {/* Nombre del equipo */}
      <Text style={WelcomeStyles.teamName}>Equipo: Migajeros</Text>

      {/* Integrantes */}
      <View style={WelcomeStyles.membersContainer}>
        <Text style={WelcomeStyles.memberName}>Esteban Amores Barrantes</Text>
        <Text style={WelcomeStyles.memberName}>Marco Campos Torres</Text>
        <Text style={WelcomeStyles.memberName}>Jorjan Álvarez Alvarado</Text>
        <Text style={WelcomeStyles.memberName}>Laura Montero Carvajal</Text>
      </View>

      {/* Información académica */}
      <View style={WelcomeStyles.infoContainer}>
        <Text style={WelcomeStyles.infoText}>Curso: Desarrollo de Apps Móviles II</Text>
        <Text style={WelcomeStyles.infoText}>Profesor: Jorge Felix Ruiz</Text>
        <Text style={WelcomeStyles.infoText}>Fecha de entrega: 23 de febrero 2026</Text>
        <Text style={WelcomeStyles.title}>Práctica de examen I</Text>
      </View>

    </View>
  );
};

export default Welcome;