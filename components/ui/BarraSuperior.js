/*** PARA QUE LOS ICONOS FUNCIONEN CORRECTAMENTE 

---> En la ruta android/app/build.gradle buscar otra linea de apply
---> y pegar (sin las flechas) ->  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"  <-
---> Reiniciar la app para visualizar los iconos
*/

import React from 'react';
import { Button } from 'react-native-paper'

const BarraSuperior = ({ navigation, route }) => {

    // Boton para agregar nuevos clientes
    const handlePress = () => {
        navigation.navigate('NuevoCliente');
    }

    return (
        <>
            <Button
                onPress={ handlePress }
                icon="plus-circle"
                color="#FFF"
            >
                Cliente
            </Button>
        </>
    )
}

export default BarraSuperior;
