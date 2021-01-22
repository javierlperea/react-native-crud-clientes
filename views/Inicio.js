import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { List, Headline, Button, FAB } from 'react-native-paper';
import axios from 'axios';

// Global Styles
import globalStyles from '../styles/globalStyles';

const Inicio = ({ navigation }) => {

    // Clients State
    const [ clients, setClients ] = useState([]);
    // This state control rendering clients when the array changes
    const [consultarAPI, setConsultarAPI] = useState(true);

    useEffect(() => {
        
        const getClientsApi = async () => {
            try {
                const url = ('http://10.0.2.2:3000/clients');
                const { data } = await axios.get( url );
                setClients(data);
                // Cuando termine la consulta modifico el state
                setConsultarAPI(false); 
            } catch (err) {
                console.log(err)
            }
        }
        // La primera que se renderiza la app siempre llama la funcion
        if(consultarAPI) {
            getClientsApi();
        }
    }, [ consultarAPI ])

    return (
        <>
            <View style={ globalStyles.container }>

                <Button
                    icon="plus-circle"
                    onPress={ () => navigation.navigate('NuevoCliente', { setConsultarAPI }) }
                >
                    Nuevo Cliente
                </Button>

                <Headline style={ globalStyles.title }>
                    { 
                        // Muestro el titulo del headline de manera condicional cuando tengo clientes en DB 
                        clients.length > 0 ? "Clientes" : "Aún no hay clientes" 
                    }
                </Headline>

                <FlatList 
                    data={ clients }
                    keyExtractor={ (client) => (client.id).toString() }
                    renderItem={ ({ item }) => (
                        <List.Item 
                            title={ item.name }
                            description={ item.company }
                            onPress={ () => navigation.navigate( 'DetallesCliente', { item, setConsultarAPI } ) }
                        />
                    )}
                />

                <FAB 
                    icon="plus" 
                    style={ globalStyles.fab }
                    onPress={ () => navigation.navigate('NuevoCliente', { setConsultarAPI }) }
                />

            </View>  
        </>
    )
};


export default Inicio
