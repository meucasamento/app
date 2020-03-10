import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    row: {
        padding: 16,
        margin: 16,
        marginTop: 0,
        marginBottom: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
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
        backgroundColor: "#fff",
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 4,
        paddingTop: 4,
        borderRadius: 4,
        overflow: "hidden"
    }
})