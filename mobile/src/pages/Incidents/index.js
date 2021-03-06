import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './style';

const Incidents = () => {
  {/* Função para navegação entre paginas */}
  const navigation = useNavigation();
  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  {/* Montagem da tela do app */}
  return (
    <View style={styles.container}>
      {/* CONTAINER HEADER */}
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      {/* LISTA DE CASOS */}
      <FlatList 
        style={styles.incidentsList} 
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={() => (
          <View style={styles.incidents}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>

            {/* BTN DETALHES */}
            <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
              </Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Incidents;