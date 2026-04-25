import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

// --- COMPONENTES TEMPORALES (Para tus compañeros B y C) ---
const CatalogoCamisetas = () => (
  <View style={styles.screen}>
    <Text style={styles.emoji}>👕</Text>
    <Text style={styles.title}>Catálogo Retro</Text>
    <Text style={styles.subtitle}>Aquí el Integrante B pondrá la lista de la API</Text>
  </View>
);

const SeccionOriginal = () => (
  <View style={styles.screen}>
    <Text style={styles.emoji}>🏆</Text>
    <Text style={styles.title}>Joyas de Colección</Text>
    <Text style={styles.subtitle}>Aquí el Integrante C hará su función original</Text>
  </View>
);

// --- COMPONENTE PRINCIPAL (Tu tarea - Integrante A) ---
export default function App() {
  const [tabActual, setTabActual] = useState('Inicio');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* HEADER: Identidad de la App */}
      <View style={styles.header}>
        <Text style={styles.headerText}>RETRO FOOTBALL SHOP</Text>
      </View>

      {/* CONTENIDO: Cambia según el menú */}
      <View style={styles.content}>
        {tabActual === 'Inicio' ? <CatalogoCamisetas /> : <SeccionOriginal />}
      </View>

      {/* MENÚ TÁCTIL (Punto 11 - Integrante A) */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tabButton, tabActual === 'Inicio' && styles.tabActive]} 
          onPress={() => setTabActual('Inicio')}
        >
          <Text style={[styles.tabLabel, tabActual === 'Inicio' && styles.labelActive]}>
            CATÁLOGO
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, tabActual === 'Original' && styles.tabActive]} 
          onPress={() => setTabActual('Original')}
        >
          <Text style={[styles.tabLabel, tabActual === 'Original' && styles.labelActive]}>
            JOYAS / RAREZAS
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    height: 70,
    backgroundColor: '#151515',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d4af37', // Color dorado para estilo retro
  },
  headerText: {
    color: '#d4af37',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  tabBar: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#151515',
    borderTopWidth: 0.5,
    borderTopColor: '#333',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    borderTopWidth: 3,
    borderTopColor: '#d4af37',
  },
  tabLabel: {
    color: '#666',
    fontSize: 12,
    fontWeight: 'bold',
  },
  labelActive: {
    color: '#d4af37',
  },
});