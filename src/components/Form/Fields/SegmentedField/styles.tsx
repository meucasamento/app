import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    row: {
        marginBottom: 8,
        paddingBottom: 12,
        paddingTop: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#f4f4f4"
    },
    label: {
        color: "#3f4a4e",
        marginBottom: 8
    },
    error: {
        color: "red",
        marginTop: 2,
        fontSize: 15
    },
    segmented: {
        flex: 1,
        flexDirection: "row",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "#f7f7f7"
    },
    button: {
        flex: 1,
        height: 40,
        justifyContent: "center",
        paddingLeft: 12,
        paddingRight: 12
    },
    buttonSelected: {
        backgroundColor: "#0197F6"
    },
    buttonText: {
        textAlign: "center"
    },
    buttonSelectedText: {
        color: "white",
        fontWeight: "bold"
    }
})