import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home.js';
import Details from './components/Details.js';
import Contact from './components/Contact.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#6200EE' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen name="Contact" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const contacts = [
    {
      gambar: require("./assets/alif.jpeg"),
      nama: "Alif",
      namaLengkap: "Muhammad Alif Apda",
      telepon: "081299839485",
      usia: 19,
      jenisKelamin: "Laki-laki",
      alamat: "Jl. R. Syamsudin KM 5, Sukabumi"
    },
    {
      gambar: require("./assets/elvan.png"),
      nama: "Elvan",
      namaLengkap: "Elvan Nasrul",
      telepon: "085885960394",
      usia: 20,
      jenisKelamin: "Laki-laki",
      alamat: "Jl. R. Djuanda KM 10, Sukabumi"
    },
    {
      gambar: require("./assets/fauzul.png"),
      nama: "Fauzul",
      namaLengkap: "Muhammad Fauzul Hanif",
      telepon: "085746730978",
      usia: 22,
      jenisKelamin: "Laki-laki",
      alamat: "Jl. R.E Martadinata KM 2, Sukabumi"
    },
    {
      gambar: require("./assets/hawa.jpeg"),
      nama: "Hawa",
      namaLengkap: "Hawarizmi Ummul Adzkia",
      telepon: "085674830920",
      usia: 21,
      jenisKelamin: "Perempuan",
      alamat: "Jl. Baros KM 17 , Sukabumi"
    },
    {
      gambar: require("./assets/jihan.jpeg"),
      nama: "Jihan",
      namaLengkap: "Jihan Naurah Shyfa",
      telepon: "085793840299",
      usia: 20,
      jenisKelamin: "Perempuan",
      alamat: "Jl. Veteran KM 12, Sukabumi"
    },
    {
      gambar: require("./assets/najwa.png"),
      nama: "Najwa",
      namaLengkap: "Najwa Aulia Safinatun Najah",
      telepon: "085885960987",
      usia: 20,
      jenisKelamin: "Perempuan",
      alamat: "Jl. Perintis Kemerdekaan KM 8, Sukabumi"
    },
    {
      gambar: require("./assets/pascal.png"),
      nama: "Pascal",
      namaLengkap: "Pascal Ahar Ma'ruf",
      telepon: "085892834653",
      usia: 21,
      jenisKelamin: "Laki-laki",
      alamat: "Jl. Salaeurih KM 3, Sukabumi"
    },
    {
      gambar: require("./assets/rifki.png"),
      nama: "Rifki",
      namaLengkap: "Rifki Andriyana",
      telepon: "085872116353",
      usia: 20,
      jenisKelamin: "Laki-laki",
      alamat: "Jl. Pelabuhan II KM 18 , Sukabumi"
    },
    {
      gambar: require("./assets/salma.jpg"),
      nama: "Salma",
      namaLengkap: "Salma Nurfauziah",
      telepon: "081284937564",
      usia: 20,
      jenisKelamin: "Perempuan",
      alamat: "Jl. Cisaat KM 13, Sukabumi"
    },
    {
      gambar: require("./assets/shakira.jpg"),
      nama: "Shakira",
      namaLengkap: "Shakira Anadella",
      telepon: "085758490394",
      usia: 20,
      jenisKelamin: "Perempuan",
      alamat: "Jl. Suryakencana KM 11, Sukabumi"
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          gambar={contact.gambar}
          nama={contact.nama}
          telepon={contact.telepon}
          onPress={() => navigation.navigate('Details', { contact })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});
