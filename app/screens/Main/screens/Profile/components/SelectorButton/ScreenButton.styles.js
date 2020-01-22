import {StyleSheet} from 'react-native';

import {Helpers, Typography} from '_styles/index';

const style = StyleSheet.create({
    mainContainerCommon: {
        height: Helpers.verticalScale(25),
        width: "auto",
        alignSelf: "flex-start",
        borderRadius: Helpers.scaleSize(13),
    },

    mainContainerSelected: {
        backgroundColor: "#fff",
    },

    mainContainerUnselected: {
        backgroundColor: "#FFFFFF00",
    },


    buttonHeaderSelected: {
        ...Typography.FONT_SEMIBOLD,
        fontSize: Helpers.scaleFont(14),
        flex: 1,
        textAlign: "center",
        marginHorizontal: Helpers.scaleSize(17),
        color: "#000",
    },

    buttonHeaderUnselected: {
        ...Typography.FONT_SEMIBOLD,
        fontSize: Helpers.scaleFont(14),
        flex: 1,
        textAlign: "center",
        marginHorizontal: Helpers.scaleSize(17),
        color: "#878787",
    },

    

});


export default style;

