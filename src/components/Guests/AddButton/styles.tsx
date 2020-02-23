import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        bottom: '3%',
        right: '5%',
        zIndex: 1,
        backgroundColor:'#0197F6',
        borderRadius: 35,
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