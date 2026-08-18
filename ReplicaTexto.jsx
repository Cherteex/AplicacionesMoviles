import { StyleSheet, Text, View, TextInput, Button, ScrollView,Dimensions } from "react-native";
import React, {useState} from "react";

export default function RepText(){
    const [text, setText]=useState()
    const [enviar, setEnviar]=useState()
    return(
        <View>
     <Text>{enviar}<Text>
    <Text>{enviar}<Text>
     <Text>{enviar}<Text>
      <Text>{enviar}<Text>
    <Text>{enviar}<Text>
    <Text>{enviar}<Text>
     <Text>{enviar}<Text>
     <Text>{enviar}<Text>
    <Text>{enviar}<Text>
     <Text>{enviar}<Text>
    <Text>{enviar}<Text>
    <Text>{enviar}<Text>
     <Text>{enviar}<Text>

            <TextInput
                placeholder="Escribe aqui..."
                defaultValue={text}
                onChangeText={t=>setText(t)}
            />
            <Button
                title="Enviar"
                onPress={(=>){
                    setEnviar(text)
                    alert('Texto enviado con exito')
                }}
        <View>            
        )
}

const misEstilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: 'center ',
        justifyContent: 'center',
    },
    input :{
        width: '100%',
        height: 40,
        backgroundColor: '#eee'
    }
    scroll {
        width: Dimension.get('window').width,
                width: Dimension.get('window').height,

    }
})