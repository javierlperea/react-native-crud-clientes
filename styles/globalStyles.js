import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: '2.5%'
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        marginTop: 20,
        textAlign: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    },
    upper: {
        textTransform: 'uppercase'
    },
    capital: {
        textTransform: 'capitalize'
    },
    center: {
        alignItems: 'center'
    }
});

export default globalStyles;