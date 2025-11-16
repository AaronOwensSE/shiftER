"use strict";

import { Text, StyleSheet } from "react-native";

import typeScale from "../../type-scale.js";

const ValidationMessage = ({ style, text }) => {
    return(
        <Text style={[ validationMessageStyles.text, style ]}>{text}</Text>
    );
};

export default ValidationMessage;

const validationMessageStyles = StyleSheet.create({
    text: {
        fontSize: typeScale.CAPTION,
        color: "red"
    }
});
