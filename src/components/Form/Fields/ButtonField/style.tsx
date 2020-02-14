import { StyleSheet } from 'react-native'

const buttonHeight = 54

export default StyleSheet.create({
    container: {
        width: "100%"
    },
    tappedArea: {
        alignSelf: "stretch"
    },
    button: {
        minHeight: buttonHeight,
        backgroundColor: "#0197F6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: buttonHeight/2,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 8
    },
    text: {
        color: "white",
        fontWeight: "700",
        textTransform: "uppercase"
    }
})