import { StyleSheet } from 'react-native';

import { Helpers, Typography } from '_styles';

const style = StyleSheet.create({
    mainContainer: {
        height: "100%",
    },
    flatContainer: {
        marginTop: "auto",
    },
    flatlist: {
        marginTop: "auto",
    },
    clipIcon: {
        backgroundColor: "#FFF",
        padding: Helpers.scaleSize(16),
    },
    messageInput: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
    },

});

export default style;