import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 16
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
        backgroundColor: "#1CFEBA"
    },
    label: {
        fontFamily: "Montserrat",
    },
    report_content_text: {
        fontFamily: "Montserrat Bold",
        fontWeight: "bold",
        fontSize: 18
    }
})