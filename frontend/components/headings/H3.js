"use strict";

import { Text, StyleSheet } from "react-native";

import typeScale from "../../type-scale.js";

const H3 = ({ style, text }) => {
    return(
        <Text style={[ h3Styles.text, style ]}>{text}</Text>
    );
};

export default H3;

const h3Styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: typeScale.H3,
        fontWeight: "bold"
    }
});
