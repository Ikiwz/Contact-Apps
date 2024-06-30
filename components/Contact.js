import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contact(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image source={props.gambar} style={styles.img} />
        <View style={styles.teks}>
          <Text style={styles.title}>{props.nama}</Text>
          <Text style={styles.telp}>{props.telepon}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teks: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  telp: {
    fontSize: 14,
    color: '#888',
  },
});
