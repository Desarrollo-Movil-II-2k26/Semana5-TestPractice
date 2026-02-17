import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayListComponent from '../components/playListComponent';

const PlayListView = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Lugares Turísticos</Text>
        <PlayListComponent navegar={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default PlayListView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
  },
});
