import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        paddingTop: 4,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#f4f4f4"
    },
    label: {
        flex: 1,
        color: "#3f4a4e",
        marginRight: 16
    },
    error: {
        color: "red",
        marginTop: 2,
        fontSize: 15
    },
    stepper: {
        flexDirection: "row",
        alignItems: "center"
    },
    stepperButton: {
        height: 44,
        width: 44,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EBEBEB",
        borderRadius: 22
    },
    stepperLabel: {
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: "center"
    },
    stepperButtonLabel: {
        fontSize: 22
    }
})