import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {},
    scrollView: {
        flexDirection: "row",
        padding: 30
    },
    report_content_container: {
        padding: 4,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 8
    },
    report_content: {
        flex: 1,
        padding: 16,
        paddingLeft: 22,
        paddingRight: 22,
        borderRadius: 16,
        backgroundColor: "black"
    },
    label: {
        color: "white",
        maxWidth: 100
    },
    value: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    }
})