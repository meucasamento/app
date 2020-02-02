import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    list: {
        backgroundColor: 'white'
    },
    section: {
        paddingTop: 22,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 12,
        backgroundColor: 'white'
    },
    sectionText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    row: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 8,
        paddingTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    leftContainer: {
        flex: 1,
        marginRight: 10
    },
    rightContainer: {
        marginLeft: 'auto'
    },
    separator: {
        height: 1,
        marginLeft: 16,
        backgroundColor: '#F0F0F0'
    }
})