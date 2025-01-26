import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LoanDetailsCard from '../components/LoanDetailsCard';
// Removed FontAwesome imports

export function Requests() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <LoanDetailsCard />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292933',
    alignItems: 'center',

  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
  }
});

export default Requests;

