import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Resultado'>;

export default function ResultScreen({ route, navigation }: Props) {
  const [motivo, setMotivo] = useState('');
  const { humorEscolhido } = route.params;

  let emoji = '';
  let mensagem = '';
  //humores disponíveis
  switch (humorEscolhido) {
    case 'feliz':
      emoji = '😀';
      mensagem = 'Que bom que você está feliz!';
      break;
    case 'neutro':
      emoji = '😐';
      mensagem = 'Antes neutro do que triste.';
      break;
    case 'triste':
      emoji = '😢';
      mensagem = 'Tudo vai dar certo, fique tranquilo!';
      break;
    case 'apaixonado':
      emoji = '🥰';
      mensagem = 'O amor está no ar!';
      break;
    case 'medo':
      emoji = '😨';
      mensagem = 'Medos devem ser superados';
      break;
  }

  //caixa de texto para o usuário
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Descreva o motivo do seu humor"
        multiline
        numberOfLines={4}
        value={motivo}
        onChangeText={setMotivo}
      />
      <Button title="Voltar" onPress={() => navigation.navigate('Humor')} />
    </View>
  );
}

//estilização
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emoji: { fontSize: 60, marginBottom: 10 },
  mensagem: { fontSize: 20, marginBottom: 20 },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    height: 100,
    textAlignVertical: 'top'
  }
});
