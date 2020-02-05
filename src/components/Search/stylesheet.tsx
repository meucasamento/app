import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16
    },
    content: {
        flexDirection: "row",
        alignContent: "center",
        paddingLeft: 12,
        backgroundColor: "#f4f4f4",
        borderRadius: 9,
        overflow: "hidden"
    },
    icon: {
        marginTop: 9,
        marginRight: 8,
        color: "gray"
    },
    textInput: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 16,
        fontSize: 16,
        backgroundColor: "#f4f4f4"
    }
})