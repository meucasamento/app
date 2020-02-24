import { StyleSheet } from 'react-native'

const buttonHeight = 54

export default StyleSheet.create({
    container: {
        backgroundColor: "#0197F6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 8
    },
    tappedArea: {
        alignSelf: "stretch",
        justifyContent: "center",
        padding: 16
    },
    text: {
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        textTransform: "uppercase"
    }
})