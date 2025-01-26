import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from '../components/ProgressBar';
import LoanApplicationCard from '../components/LoanApplicationCard';
import SentRequests from '../components/SentRequests';

const Dashboard = () => {
  return (
   
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
        <ProgressBar/>
        <LoanApplicationCard/>
        <SentRequests/>
        </SafeAreaView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292933',
    
  
  },
  safeAreaView: {
    // flex: 1,
    backgroundColor: '#292933',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Dashboard;
