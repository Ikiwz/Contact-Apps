import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Details = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Kontak</Text>
      <Text style={styles.detail}>Nama Lengkap: {contact.namaLengkap}</Text>
      <Text style={styles.detail}>Telepon: {contact.telepon}</Text>
      <Text style={styles.detail}>Usia: {contact.usia}</Text>
      <Text style={styles.detail}>Jenis Kelamin: {contact.jenisKelamin}</Text>
      <Text style={styles.detail}>Alamat: {contact.alamat}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} color="#6200EE" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
});

export default Details;
