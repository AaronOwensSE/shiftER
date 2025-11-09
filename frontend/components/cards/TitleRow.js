"use strict";

import { View, Text, StyleSheet } from "react-native";

const TitleRow = ({ style, titleText, tagText }) => {
    return(
        <View style={[ titleRowStyles.view, style ]}>
            <Text style={titleRowStyles.titleText}>{titleText}</Text>
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
        fontSize: 18,
        fontWeight: "bold"
    },

    tagText: {
        textAlign: "right",
        fontSize: 16,
    }
});
