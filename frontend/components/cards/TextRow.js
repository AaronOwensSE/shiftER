"use strict";

import { View, Text, StyleSheet } from "react-native";

const TextRow = ({ style, leftText, rightText }) => {
    return(
        <View style={[ textRowStyles.view, style ]}>
            <Text style={textRowStyles.leftText}>{leftText}</Text>
            <Text style={textRowStyles.rightText}>{rightText}</Text>
        </View>
    );
};

export default TextRow;

const textRowStyles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    leftText: {
        textAlign: "left",
        fontSize: 16
    },

    rightText: {
        textAlign: "right",
        fontSize: 16
    }
});
