import React, {useState} from 'react';
import {Text, TextInput , View} from 'react-native';

import meuEstilo from '../meuEstilo';
//recebe os numeros em int ou em string
//e com um push coloca todos numa string organizados em ordem  
//utiliza o state para monstrar na tela 

const Iniciativa = () => {
    let aventureiro;

    return(
        <View>
            <Text>Coloque as iniciativas</Text>
            <TextInput
            value={aventureiro}
            placeholder='Aventureiros'
            style ={meuEstilo.input}/>
        </View>
    );
}

export default Iniciativa