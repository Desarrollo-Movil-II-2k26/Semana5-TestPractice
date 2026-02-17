import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailsComponent from '../components/DetailsComponent';

const DetailsView = ({ route }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <DetailsComponent route={route} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
