import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

// Importamos la pantalla que creaste en el Commit 2
// (Tus compañeros trabajarán dentro de estos componentes)
const CatalogoScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>👕 CATÁLOGO RETRO</Text>
    <Text style={styles.subtitle}>Sección del Integrante B</Text>
  </View>
);

const OriginalScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>🏆 JOYAS / RAREZAS</Text>
    <Text style={styles.subtitle}>Sección del Integrante C</Text>
  </View>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      
      {/* CABECERA */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>VINTAGE FOOTBALL</Text>
      </View>

      {/* CONTENIDO VARIABLE */}
      <View style={styles.content}>
        {activeTab === 'Home' ? <CatalogoScreen /> : <OriginalScreen />}
      </View>

      {/* MENÚ DE NAVEGACIÓN (Tu tarea - Integrante A) */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tabItem, activeTab === 'Home' && styles.activeTab]} 
          onPress={() => setActiveTab('Home')}
        >
          <Text style={[styles.tabText, activeTab === 'Home' && styles.tabTextActive]}>LISTA</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabItem, activeTab === 'Original' && styles.activeTab]} 
          onPress={() => setActiveTab('Original')}
        >
          <Text style={[styles.tabText, activeTab === 'Original' && styles.tabTextActive]}>ORIGINAL</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { height: 60, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#d4af37' },
  headerTitle: { color: '#d4af37', fontWeight: 'bold', fontSize: 18, letterSpacing: 2 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  screen: { alignItems: 'center' },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  subtitle: { color: '#888', marginTop: 10 },
  tabBar: { flexDirection: 'row', height: 70, backgroundColor: '#111', borderTopWidth: 1, borderTopColor: '#333' },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  activeTab: { borderTopWidth: 3, borderTopColor: '#d4af37' },
  tabText: { color: '#666', fontWeight: 'bold' },
  tabTextActive: { color: '#d4af37' }
});