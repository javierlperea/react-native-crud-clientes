import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper'
import axios from 'axios';

import globalStyles from '../styles/globalStyles';

const DetallesCliente = ({ navigation, route }) => {

    // Desestructuracion de los params enviados desde Inicio
    const { name, telephone, mail, company, id } = route.params.item;
    const { setConsultarAPI } = route.params;
    

    // Mensaje para confirmar eliminacion de cliente
    const confirmAlert = () => {
        Alert.alert(
            '¿Desea eliminar este contacto?',
            'Un contacto eliminado no se podrá recuperar',
            [
                { text: 'Si, eliminar', onPress: () => deleteClient() },
                { text: 'Cancelar', style: 'cancel' }
            ]
        )
    }

    // Eliminar Contacto
    const deleteClient = async () => {

        const url = `http://10.0.2.2:3000/clients/${ id }`;
        // console.log(url)
        try {
            await axios.delete(url);
        } catch (err) {
            console.log(err)
        }

        // Redireccionar
        navigation.navigate('Inicio');

        // Volver a consultar la API
        setConsultarAPI(true);
    }

    return (
        <>
            <View style={ globalStyles.container }>

                <Headline style={[ globalStyles.title, globalStyles.upper ]}>{ name }</Headline>
                <View style={ globalStyles.center }>

                    <Text style={[ styles.text, globalStyles.capital ]}>
                        Empresa: <Subheading>{ company }</Subheading>
                    </Text>    

                    <Text style={ styles.text }>
                        Teléfono: <Subheading>{ telephone }</Subheading>
                    </Text>    

                    <Text style={ styles.text }>
                        Correo: <Subheading>{ mail }</Subheading>
                    </Text>    

                </View>

                <Button
                    style={ styles.btn }
                    mode="contained"
                    icon="cancel"
                    onPress={ confirmAlert }
                >
                    Eliminar Cliente
                </Button>

                <FAB
                    icon="pencil"
                    style={ globalStyles.fab }
                    onPress={ () => navigation.navigate( 'NuevoCliente', { client: route.params.item, setConsultarAPI } ) }
                />

            </View>  
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 20,
        fontSize: 20,
    },
    btn: {
        marginTop: 100,
        backgroundColor: 'red'
    }
});

export default DetallesCliente;
