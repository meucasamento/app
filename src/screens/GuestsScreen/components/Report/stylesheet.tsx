import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 0
    },
    report_content_container: {
        width: "50%",
        padding: 1
    },
    report_content: {
        width: "100%",
        padding: 16,
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#F4F4F4"
    },
    report_content_text: {
        fontWeight: "bold",
        fontSize: 18
    }
})