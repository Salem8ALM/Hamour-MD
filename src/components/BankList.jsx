import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BoubyanRequest from '../components/BoubyanRequest';
import { Ionicons } from '@expo/vector-icons';
import NBKRequest from '../components/NBKRequest';

export function BankList() {
  const [allSelected, setAllSelected] = useState(false);

  const handleSelectAll = () => {
    setAllSelected(!allSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Available Banks:</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.selectAllButton} 
            onPress={handleSelectAll}
          >
            <Text style={styles.selectAllText}>Select all</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.content}>
            <BoubyanRequest isSelected={allSelected} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.content}>
            <NBKRequest isSelected={allSelected} />
          </View>
        </TouchableOpacity>
        
      </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'full',
    overflow: 'hidden',
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    gap: 20,
    paddingVertical: 10,
  },
  card: {
    width: '100%',
    height: 195,
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 15,
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
    alignItems: 'center',
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  selectAllButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  selectAllText: {
    color: '#292933',
    fontWeight: '600',
  },
  filterButton: {
    padding: 8,
  },
  applyButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
  },
  applyButtonText: {
    color: '#292933',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

});

export default BankList;
