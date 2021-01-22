import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Button, Headline, TextInput, Paragraph, Dialog, Portal } from 'react-native-paper';
import axios from 'axios';

// Global Styles
import globalStyles from '../styles/globalStyles';

const NuevoCliente = ({ navigation, route }) => {

    // Extraigo la funcion enviada desde inicio
    const { setConsultarAPI } = route.params;

    // Input States
    const [ name, setName ] = useState('');
    const [ telephone, setTelephone ] = useState('');
    const [ mail, setMail ] = useState('');
    const [ company, setCompany ] = useState('');
    // Alert state
    const [alert, setAlert] = useState(false);
    // State para titulo 'Modificar Cliente' o 'Nuevo Cliente'
    const [edit, setEdit] = useState(false)
    
    // Detectar si se quiere crear un cliente nuevo o editarlo
    useEffect(() => {
        // Si hay objeto client es porque lo estoy enviando desde DetallesCliente para editarlo sino estoy Creando
        if( route.params.client ) {
            // Extraigo el cliente enviado desde detalles cliente para editarlo
            const { name, telephone, mail, company } = route.params.client;
            setName(name);
            setTelephone(telephone);
            setMail(mail);
            setCompany(company);

            setEdit(true);
        } else {
            // Creando nuevo usuario
            setEdit(false);
        }
    }, []);

    // Save clients in DB
    const guardarCliente = async () => {
        // Validation
        if( name.trim() === '' || telephone.trim() === '' || mail.trim() === '' || company.trim() === '') {
            setAlert(true);
            return;
        }

        // Generate the client(object with data)
        const client = { name, telephone, mail, company }

        // DETERMINA SI CREAR O EDITAR
        if( route.params.client ) {

            // EDITANDO Cliente
            // Necesito el id del cliente, lo extraigo de route.params.client y se lo asigno a mi objeto client creado arriba
            const { id } = route.params.client;
            client.id = id;
            const url = `http://10.0.2.2:3000/clients/${ id }`

            try {
                await axios.put( url, client );
            } catch (err) {
                console.log(err)
            }

        } else {

            // CREANDO Nuevo Cliente 
            try {
                // Determina si es para android o ios cuando trabajo en localhost
                if( Platform.OS === 'ios') {
                    await axios.post( 'http://localhost:3000/clients', client );
                } else {
                    await axios.post( 'http://10.0.2.2:3000/clients', client );
                }
                // Se realizo correctamente 
                // console.log('Cliente almacenado');
            } catch (err) {
                console.log(err)
            }

        }

        // Redirect
        navigation.navigate('Inicio');

        // Reset form (optional)
        setName('');
        setTelephone('');
        setMail('');
        setCompany('');

        // Cambio el estado para poder renderizar el nuevo cliente
        setConsultarAPI(true);
    }

    return (
        <>
            <View style={ globalStyles.container }>
                <Headline style={ globalStyles.title }>
                    {
                        edit ? 'Modificar Cliente' : 'Añadir Nuevo Cliente'
                    }
                </Headline>

                <TextInput 
                    style={ styles.input }
                    label="Nombre"
                    placeholder="Javier Perea"
                    value={ name }
                    onChangeText={ txt => setName(txt) }
                    />

                <TextInput 
                    style={ styles.input }
                    label="Teléfono"
                    placeholder="011"
                    value={ telephone }
                    onChangeText={ txt => setTelephone(txt) }
                />

                <TextInput 
                    style={ styles.input }
                    label="Correo Elecronico"
                    placeholder="correo@...mail.com"
                    value={ mail }
                    onChangeText={ txt => setMail(txt) }
                />

                <TextInput 
                    style={ styles.input }
                    label="Empresa"
                    placeholder="IncluIT"
                    value={ company }
                    onChangeText={ txt => setCompany(txt) }
                />

                <Button
                    icon="pencil-circle"
                    mode="contained"
                    onPress={ guardarCliente }
                >
                    Guardar Cliente
                </Button>

                <Portal>
                    <Dialog visible={ alert } onDismiss={ () => setAlert(false) }>

                        <Dialog.Title>Error</Dialog.Title>

                        <Dialog.Content>
                            <Paragraph>Debe completar todos los campos</Paragraph>
                        </Dialog.Content>

                        <Dialog.Actions>
                            <Button 
                                onPress={ () => setAlert(false) }
                                mode="contained"
                            >
                                Entendido
                            </Button>
                        </Dialog.Actions>

                    </Dialog>
                </Portal>

            </View>  
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent',
    }
});

export default NuevoCliente
