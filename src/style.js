import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        position: 'relative',
        bottom: 0,
        padding: 5,
        textAlign: 'center',
    }
});