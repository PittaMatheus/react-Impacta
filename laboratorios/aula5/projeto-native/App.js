import React from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <TextInput>A</TextInput>
      <Button title="Clique"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
