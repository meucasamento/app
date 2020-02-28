import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    row: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
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
        color: "#c5c5c5",
        flex: 1,
        textAlign: "center"
    },
    confirmedTag: {
        fontSize: 12,
        color: "#fff",
        backgroundColor: "#95C623",
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 4,
        paddingTop: 4,
        borderRadius: 4,
        overflow: "hidden"
    },
    unConfirmedTag: {
        fontSize: 12,
        color: "gray",
        backgroundColor: "#f4f4f4",
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 4,
        paddingTop: 4,
        borderRadius: 4,
        overflow: "hidden"
    }
})