import { Text, View, StyleSheet } from 'react-native';
import { estilo } from '../styles/Stylestext';

export default function CabecalhoComponent() {

    return (
        <View style={estilo.container}>
        <View style={estilo.header}>
            <Text style={{color: 'white', fontSize: 30,}}>Cabeçalho</Text>
        </View>
        </View>
    );
};

