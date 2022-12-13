import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        //flexWrap: "wrap",
        backgroundColor: '#2541d2',
        marginBottom: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    viewLeft: {
        flex: 1,
        justifyContent: 'flex-start',
        minWidth: "70%",
    },
    viewRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        minWidth: 10,
        paddingRight: 15,
        //backgroundColor: 'red',
    },

    text: {
        //marginVertical: 10,
        marginHorizontal: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#fff',

        //fontFamily: 'Montserrat-Regular',
        //fontFamily: 'monospace',
        fontWeight: 'bold' // TODO: Verificar porque não aplica a font
    },    
});