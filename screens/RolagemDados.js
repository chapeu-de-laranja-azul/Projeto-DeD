import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import meuEstilo from '../meuEstilo';

const RolagemDados = () => {

  const [numDados,valor] = useState(1)

  const [somaFinal,val] = useState(0)
  

  function Dados(lados)
  {
    // criar um use state para fazer um contador de clicks 
    // depois um loop para quantas vezes vai rerolar os dados
    // OPCIONAL criar uma array para ser preenchida com o loop
    const array = new Array();
    let soma = 0
    let cont = 0
    
    for(let i=1;i<=numDados; i++){
    const Calculo = Math.floor(Math.random() * lados + 1);
    array[cont] = Calculo;
    cont = cont + 1;
    soma = soma+ Calculo;
    }
    Alert.alert(numDados+"D"+lados+" "+String(array)+"    Total:"+ String(soma)+"+"+String(somaFinal)+"="+String(soma+somaFinal));
  }

  return (
    <View >
      <View style={meuEstilo.container}>
        <Button
        title="D4"
        onPress={() => Dados(4)}
        />

        <Button
        title="D6"
        onPress={() => Dados(6)}
        />
          
        <Button
        title="D8"
        onPress={() => Dados(8)}
        />
      </View>

      <View style={meuEstilo.container}>
        <Button 
        title="D10"
        onPress={() => Dados(10)}
        />

        <Button 
        title="D12"
        onPress={() => Dados(12)}
        />

        <Button 
        title="D20"
        onPress={() => Dados(20)}
        />
        
      </View>

      <View style={meuEstilo.container}>
        <Button 
        title="D100"
        onPress={() => Dados(100)}
        />
      </View>

      <View style={meuEstilo.containerBaixo}>
        <Button 
        title=" + "
        onPress={() => valor(numDados+1)}
        />

        <View>
          <Text>Numero de dados: {numDados}</Text>
        </View>

        <Button 
        title=" - "
        onPress={() => valor(numDados-1)}
        />

      </View>

      <View style={meuEstilo.containerBaixo}>
        <Button 
        title=" + "
        onPress={() => val(somaFinal+1)}
        />

        <View>
          <Text>Soma no valor final: {somaFinal}</Text>
        </View>

        <Button 
        title=" - "
        onPress={() => val(somaFinal-1)}
        />
      </View>

    </View>
  );
}

export default RolagemDados