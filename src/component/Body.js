import { estilo } from "../styles/Stylestext";
import { Text, View, } from 'react-native';

export default function Body(){

    return(
        <View style={estilo.container}>
        <View style={estilo.body}>
            <Text style={{fontSize: 40, color: 'black'}}>Corpo do texto</Text>
</View>
        </View>
    
    );
};
