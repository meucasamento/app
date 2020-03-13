import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        bottom: '3%',
        right: '8%',
        zIndex: 1,
        backgroundColor:'black',
        borderRadius: 100,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 8
    },
    touchable: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center"
    }
})