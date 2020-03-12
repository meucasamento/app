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
    confirmed: {
        backgroundColor: "#95C623"
    },
    icons: {
        flex: 1,
        flexDirection: "row"
    },
    icon: {
        minWidth: 30,
        height: 30,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 100,
        marginLeft: 8,
        flexDirection: "row"
    },
    iconLabel: {
        marginLeft: 8
    },
    iconImage: {
        width: 16,
        height: 16
    },
    imageConfirmed: {
        tintColor: "white"
    }
})