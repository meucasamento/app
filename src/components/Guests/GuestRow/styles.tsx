import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    emptyMessage: {
        fontSize: 14,
        color: "gray",
        flex: 1,
        textAlign: "center"
    }
})