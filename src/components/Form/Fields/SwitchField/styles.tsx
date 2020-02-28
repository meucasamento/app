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
        color: "gray",
        marginRight: 16,
    },
    error: {
        color: "red",
        marginTop: 2,
        fontSize: 15
    }
})