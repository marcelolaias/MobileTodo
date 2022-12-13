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
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        height: 51,
        width:62
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

    input: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: 'silver',
        paddingLeft: 10
    },
});