import React, {useState} from 'react';
import {Text, View, Button, Alert} from 'react-native'

import meuEstilo from '../meuEstilo';

const Monstros = () => {

    const [monstros,numMonstros] = useState(1)

    function Dados(numD,lados,somaFinal){
      const array = new Array();
      const array1 = new Array();

      let cont2 = 0

      for(let x=1;x<=monstros; x++){
        let soma = 0
        let cont = 0
        for(let i=1;i<=numD; i++){
        const Calculo = Math.floor(Math.random() * lados + 1);
        array[cont] = Calculo;
        cont = cont + 1;
        soma = soma+ Calculo;
        }
        array1[cont2] = soma + somaFinal;
        cont2 = cont2 + 1;
        Alert.alert(numD+"D"+lados+" "+String(array)+"    Total:"+ String(soma)+"+"+String(somaFinal)+"="+String(soma+somaFinal));
    }
        Alert.alert("Vidas Monstros "+String(array1))
    }

    return(
        <View>

            <View style={meuEstilo.container}>
                <Button
                title="Goblin"
                onPress={() => Dados(2,6,0)}
                />
            </View>

            <View style={meuEstilo.container}>
                <Button
                title="Zumbi"
                onPress={() => Dados(3,8,9)}
                />
            </View>

            <View style={meuEstilo.container}>
                <Button
                title="Quimera"
                onPress={() => Dados(12,10,48)}
                />
            </View>

            <View style={meuEstilo.container}>
                <Button
                title="Tarrasque"
                onPress={() => Dados(33,20,330)}
                />
            </View>

            <View style={meuEstilo.containerBaixo}>
                
                <Button 
                title=" + "
                onPress={() => numMonstros(monstros+1)}
                />

                <View>
                <Text>Numero de monstros: {monstros}</Text>
                </View>

                <Button 
                title=" - "
                onPress={() => numMonstros(monstros-1)}
                />
            </View>
        </View>
    )
}

export default Monstros