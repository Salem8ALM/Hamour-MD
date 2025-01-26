import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function BankList() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.bankName}>Boubyan Bank</Text>
          <Text style={styles.cardType}>Credit Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    height: 195,
    backgroundColor: '#3D3D47',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4F4F4F',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bankName: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
  cardType: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BankList;
