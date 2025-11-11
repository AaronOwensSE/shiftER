"use strict";

import { View, Text, StyleSheet } from "react-native";

import H3 from "../headings/H3.js";

const TitleRow = ({ style, titleText, tagText }) => {
    return(
        <View style={[ titleRowStyles.view, style ]}>
            <H3 style={titleRowStyles.titleText} text={titleText} />
            <Text style={titleRowStyles.tagText}>{tagText}</Text>
        </View>
    );
};

export default TitleRow;

const titleRowStyles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "top",
        marginBottom: 5
    },

    titleText: {
        textAlign: "left",
    },

    tagText: {
        textAlign: "right",
        fontSize: 18,
    }
});
