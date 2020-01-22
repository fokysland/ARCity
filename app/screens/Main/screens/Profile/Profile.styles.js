import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
    mainContainer: {
        display:"flex",
        alignItems: "center",
    },
    profileMainInfoContainer: {
        paddingHorizontal: Helpers.scaleSize(78),
        marginTop: Helpers.verticalScale(10), // было 46!
    },
    avatarContainer: {
        display:"flex",
        width: Helpers.scaleSize(170),
    },
    profileAvatar: {
        width: Helpers.scaleSize(170),
        height: Helpers.scaleSize(170),
        borderRadius: Helpers.scaleSize(85),
        alignSelf: "center",
    },
    uploadNewAvatar: {
        marginTop: Helpers.verticalScale(-22),
        alignSelf: "flex-end",
        marginRight: Helpers.scaleSize(32),
    },
    uploadIcon: {
        width: Helpers.scaleSize(22),
        height: Helpers.verticalScale(22),
    },
    profileName: {
        textAlign: "center",
        marginTop: Helpers.verticalScale(23),
    },
    pointsBackground: {
        backgroundColor: "#FFDB9A",
        alignSelf: "center",
        height: Helpers.verticalScale(25),
        width: Helpers.scaleSize(120),
        borderRadius: Helpers.scaleSize(13),
        marginTop: Helpers.verticalScale(10),
    },
    pointCount: {
        textAlign: "center",
        fontSize: Helpers.scaleSize(12),
        textAlignVertical: "center",
        flex: 1,
    },
    subscribeStatisticContainer: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        width: "100%",
        justifyContent: "space-around",
        marginTop: Helpers.verticalScale(14),
    },
    subscribersStat: {
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
    },
    subscribersCount: {
        textAlign: "center",
        ...Typography.FONT_SEMIBOLD,
        fontSize: Helpers.scaleSize(18),
    },
    subscribersText: {
        textAlign: "center",
        ...Typography.FONT_REGULAR,
        fontSize: Helpers.scaleSize(12),
    },
    subsctibeButton: {
        marginTop: Helpers.verticalScale(22),
    },
    subsctibeButtonBackground: {
        width: "100%",
        backgroundColor: Colors.primaryColor,
        height: Helpers.verticalScale(37),
        width: Helpers.scaleSize(162),
        borderRadius: Helpers.scaleSize(19),
        alignSelf: "center",
        display: "flex",
        alignItems: "center"
    },
    subsctibeButtonText: {
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1,
        color: "#fff",
        ...Typography.FONT_SEMIBOLD,
        fontSize: Helpers.scaleSize(14),
    }, 
    selectorsContainer: {
        width: "100%",
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 17,
    },
    SelectedContent: {
        width: "100%",
        paddingHorizontal: 17,
        marginTop: 20
    }


});

export default style;
