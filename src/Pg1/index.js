import React from "react";
import { View, Text, Button} from "react-native";

export default function Pg1({ navigation }){
    return(
        <View>
        <Text>Informações básicas sobre o Poodle</Text>
        <Text>Cores de pelagem: Preto, marrom, cinza, branco, avermelhado fulvo e abricó. Devem ser sempre uniformes, e não malhados</Text>
        <Text>Pelagem: podem ter pelo cacheado ou encordoado com aparência longa, fina e lanosa (com aspecto frisado)</Text>
        <Text></Text>
        <Button
        title="Descubrar mais!"
        onPress = {() => navigation.navigate('Pg2')}
        />
    </View>
    );
}