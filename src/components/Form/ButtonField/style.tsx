import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        width: "100%"
    },
    tappedArea: {
        alignSelf: "stretch"
    },
    button: {
        minHeight: 54,
        backgroundColor: "#0197F6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 8
    },
    text: {
        color: "white",
        fontWeight: "700"
    }
})