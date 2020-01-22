import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: Helpers.verticalScale(200),
        backgroundColor: "#fff",
        borderRadius: Helpers.scaleSize(10),
    },
    twoBlocksInRow: {
        display: "flex",
        flexDirection: "row",
    },
    secondBlockInRow: {
        marginLeft: Helpers.scaleSize(60),
        marginTop: Helpers.verticalScale(13),
    },

    InfoBlockContainer: {
        marginLeft: Helpers.scaleSize(18),
        marginTop: Helpers.verticalScale(13),
    },
    InfoBlockTitle: {
        color: "#878787",
        fontSize: Helpers.scaleFont(12),
    }, 
    InfoBlockDefine: {
        fontSize: Helpers.scaleFont(14),
    },


    IdeasRatingContainer: {
        marginLeft: Helpers.scaleSize(18),
        marginTop: Helpers.verticalScale(13),
    },
    
    LikesStatContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: Helpers.verticalScale(12),
    },
    LikesLineAndCountMainContainer: {
        display: "flex",
        flexDirection: "column",
        width: Helpers.scaleSize(223),
        marginHorizontal: Helpers.scaleSize(20),
        
    },
    LikesCountContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    LikesCount: {
        color: Colors.primaryColor,
        ...Typography.FONT_SEMIBOLD,
        fontSize: Helpers.scaleFont(14),
    },
    DislikesCount: {
        color: "#F74E8A",
        ...Typography.FONT_SEMIBOLD,
        fontSize: Helpers.scaleFont(14),
    },

    LikesLineContainer: {
        display: "flex",
        flexDirection: "row",
    },
    LikesLine: {
        height: 1,
        width: Helpers.scaleSize(111),
        backgroundColor: Colors.primaryColor,
    },
    DislikesLine: {
        height: 1,
        width: Helpers.scaleSize(111),
        backgroundColor: "#F74E8A",
    },

});

export default style;
