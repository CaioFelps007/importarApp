import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container: {
     flex: 1,
       backgroundColor: 'silver',
    },

    header: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'red',
        height: 75,
        backgroundColor: 'darkblue',
        color:'white',
        alignItems: 'center',
    },

    body: {
      
       alignItems: 'center',
    },

    footer: {
        width: '100%',
        height: 75,
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'darkblue',
        color: 'white',
    },

});