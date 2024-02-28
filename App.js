import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput } from 'react-native';
import CabecalhoComponent from './src/component/CabecalhoComponent';
import Body from './src/component/Body';
import Footer from './src/component/Footer';
import { estilo } from './src/styles/Stylestext';



export default function App() {


  return (

<View style={estilo.container}>   
    <CabecalhoComponent/>
    <Body/>
    <Footer/>
</View>

  );
}


