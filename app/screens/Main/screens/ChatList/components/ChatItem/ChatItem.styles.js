import { StyleSheet } from 'react-native';

import { Helpers, Typography } from '_styles/index';

const style = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: Helpers.scaleSize(15),
        marginVertical: Helpers.verticalScale(10),

    },
    avatarAndChatInfoContainer: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        flex: 1,
        paddingRight: Helpers.scaleSize(60),
    },
    tempAvatar: {
        width: Helpers.scaleSize(60),
        height: Helpers.scaleSize(60),
        borderRadius: Helpers.scaleSize(30),
    },
    chatNameContainer: {
        marginLeft: Helpers.scaleSize(24),
        flexDirection: "column",
    },
    newMessagesCount: {
        backgroundColor: "#F64E8A",
        width: Helpers.scaleSize(30),
        height: Helpers.scaleSize(30),
        borderRadius: Helpers.scaleSize(15),
        alignSelf: "center",
        marginTop: Helpers.verticalScale(10),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    timeAndNotifcationContainer: {
        display: "flex",
        flexDirection: "column",
    },
    notifcationCount: {
        alignSelf: "center",
        color: "#fff",
        width: Helpers.scaleSize(35),
        textAlign: "center",
        fontSize: Helpers.scaleSize(12),
    },
    chatName: {
        ...Typography.FONT_BOLD,
        color: "#000",
        fontSize: Helpers.scaleSize(14),
    },
    Desctiption: {
        color: "#878787",
        fontSize: Helpers.scaleSize(12),
    },
    time: {
        textAlign: "center",
        color: "#878787",
        fontSize: Helpers.scaleSize(12),
    },
    splitter: {
        width: Helpers.scaleSize(325),
        height: 1,
        backgroundColor: "#D3D3D3",
        alignSelf: "center",
    }

});

export default style;