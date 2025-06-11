import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
//troca de telas
type Props = NativeStackScreenProps<RootStackParamList, 'Humor'>;

export default function MoodSelectionScreen({ navigation }: Props) {
  const selecionarHumor = (humor: string) => {
    navigation.navigate('Resultado', { humorEscolhido: humor });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você está se sentindo hoje?</Text>
      <Button title="😀 Feliz" onPress={() => selecionarHumor('feliz')} />
      <Button title="😐 Neutro" onPress={() => selecionarHumor('neutro')} />
      <Button title="😢 Triste" onPress={() => selecionarHumor('triste')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20 }
});
