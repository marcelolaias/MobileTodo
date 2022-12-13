import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    viewLeft: {
        flex: 1,
        justifyContent: 'flex-start',
        minWidth: "70%",
        paddingLeft: 5,
    },
    viewRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        minWidth: 30,
        paddingRight: 15,
        //backgroundColor: 'red',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: '#2541d2',
        borderColor: '#2541d2',
        borderWidth: 1,
        borderRadius: 50,
        height: 40,
        width: 40
    },

    text: {
        marginHorizontal: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold' // TODO: Verificar porque não aplica a font
    },       

});