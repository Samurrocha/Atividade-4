import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  // Estado para Inputs de Texto
  const [objetivo, setObjetivo] = useState('');
  const [idade, setIdade] = useState('');
  const [days, setDays] = useState('');
  const [preferencia, setPreferencia] = useState('');

  // Estado para Pickers
  const [chosenDestination, setChosenDestination] = useState('');
  const [chosenYear, setChosenYear] = useState('');

  // Função para cancelar ou apagar tudo
  const cancelTrip = () => {
    setChosenDestination('');
    setChosenYear('');
    setBudgetLevel(0)
    setDays('')
    setIdade('')
    setPreferencia('')
    setObjetivo('')
  };


  // Estado para Sliders
  const [interestLevel, setInterestLevel] = useState(0);
  const [budgetLevel, setBudgetLevel] = useState(0); // Valor em reais

  // Estado para Switches
  const [hasTravelInsurance, setHasTravelInsurance] = useState(false);
  const [isFlightBooked, setIsFlightBooked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Lugares para Viajar</Text>

      {/* 4 Inputs de Texto */}
      <TextInput
        style={styles.input}
        placeholder="Objetivo da viagem"
        value={objetivo}
        onChangeText={setObjetivo}
      />
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantos dias?"
        value={days}
        onChangeText={setDays}
      />
      <TextInput
        style={styles.input}
        placeholder="Preferencias"
        value={preferencia}
        onChangeText={setPreferencia}
      />

      {/* 2 Pickers */}
      <Text style={styles.label}>Destino escolhido:</Text>
      <Picker
        selectedValue={chosenDestination}
        style={styles.picker}
        onValueChange={(itemValue) => setChosenDestination(itemValue)}
      >
        <Picker.Item label="Paris" value="Paris" />
        <Picker.Item label="Nova York" value="New York" />
        <Picker.Item label="Tóquio" value="Tokyo" />
        <Picker.Item label="Sydney" value="Sydney" />
      </Picker>

      <Text style={styles.label}>Ano que pretende ir:</Text>
      <Picker
        selectedValue={chosenYear}
        style={styles.picker}
        onValueChange={(itemValue) => setChosenYear(itemValue)}
      >
        <Picker.Item label="2025" value="2025" />
        <Picker.Item label="2026" value="2026" />
        <Picker.Item label="2027" value="2027" />
        <Picker.Item label="2028" value="2028" />
      </Picker>

      {/* 2 Sliders */}
      <Text style={styles.label}>Seu nível de interesse (0-10): {interestLevel}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={1}
        value={interestLevel}
        onValueChange={setInterestLevel}
      />

      <Text style={styles.label}>Orçamento estimado: R$ {budgetLevel.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={1000}
        maximumValue={10000}
        step={100}
        value={budgetLevel}
        onValueChange={setBudgetLevel}
      />

      {/* 2 Switches */}
      <Text style={styles.label}>Você possui seguro de viagem?</Text>
      <Switch
        value={hasTravelInsurance}
        onValueChange={setHasTravelInsurance}
      />

      <Text style={styles.label}>Voo já foi reservado?</Text>
      <Switch
        value={isFlightBooked}
        onValueChange={setIsFlightBooked}
      />

      {/* 2 Botões com interação */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Destino escolhido: ${chosenDestination} no ano de ${chosenYear}`)}
      >
        <Text>Salvar Destino</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button} onPress={() => { cancelTrip(); alert('Viagem cancelada!') }}
      >
        <Text>Cancelar Viagem</Text>
      </TouchableOpacity>

      {/* 5 Imagens com título e descrição */}
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <Image source={require('./assets/paris.png')} style={styles.image} />
          <Text style={styles.imageTitle}>Paris</Text>
          <Text style={styles.imageDescription}>A cidade luz, famosa por sua arquitetura e cultura.</Text>
        </View>

        <View style={styles.imageBox}>
          <Image source={require('./assets/quebec.png')} style={styles.image} />
          <Text style={styles.imageTitle}>Quebec</Text>
          <Text style={styles.imageDescription}>Uma cidade histórica com influências francesas.</Text>
        </View>

        <View style={styles.imageBox}>
          <Image source={require('./assets/rio_de_janeiro.png')} style={styles.image} />
          <Text style={styles.imageTitle}>Rio de Janeiro</Text>
          <Text style={styles.imageDescription}>Famosa pelas praias e o Cristo Redentor.</Text>
        </View>

        <View style={styles.imageBox}>
          <Image source={require('./assets/san_francisco.png')} style={styles.image} />
          <Text style={styles.imageTitle}>San Francisco</Text>
          <Text style={styles.imageDescription}>Lar da icônica ponte Golden Gate e da cultura tech.</Text>
        </View>

        <View style={styles.imageBox}>
          <Image source={require('./assets/toquio.png')} style={styles.image} />
          <Text style={styles.imageTitle}>Tóquio</Text>
          <Text style={styles.imageDescription}>Uma mistura de tradição e modernidade no Japão.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Fundo suave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4b0082', // Cor roxa para o título
  },
  input: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff', // Fundo branco nos inputs
    borderColor: '#7b68ee', // Cor roxa nos bordas
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#4b0082', // Cor roxa nas labels
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#ffffff', // Fundo branco no Picker
    borderRadius: 8,
    borderColor: '#7b68ee', // Cor roxa nas bordas
  },
  slider: {
    width: '80%',
    marginBottom: 20,
  },

  button: {
    margin: 20,
    backgroundColor: 'teal',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  },

  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imageBox: {
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: 130, // Tamanho maior das imagens
    height: 130,
    marginBottom: 10,
    borderRadius: 10,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4b0082',
  },
  imageDescription: {
    textAlign: 'center',
    fontSize: 14,
    color: '#696969', // Cor mais suave para a descrição
  },
});
