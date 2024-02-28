import { estilo } from "../styles/Stylestext";
import { Text, View, } from 'react-native';

export default function Footer(){

    return(
        <View style={estilo.footer}>
            <Text style={{color: 'white', fontSize: 35}}>Copyright</Text>
 
        </View>
    
    );
};