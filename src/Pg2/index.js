import React from "react";
import { View, Text, Button } from "react-native";

export default function Pg2({ navigation }){
    return(
        <View>
        <Text>O poodle é considerado a segunda raça mais inteligente do mundo!</Text>
        <Text> São excelentes nadadores</Text>
        <Text>Antigamente ele era usado para espantar os lobos que costumavam atacar os rebanhos de ovelha</Text>
        <Button 
        title = 'Voltar pra tela inicial'
        onPress = {() => navigation.navigate('Pg1')}
        />
    </View>
    );
}
