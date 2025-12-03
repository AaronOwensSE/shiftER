"use strict";

import { Text, StyleSheet } from "react-native";

import typeScale from "../../type-scale.js";

const H1 = ({ style, text }) => {
    return(
        <Text style={[ h1Styles.text, style ]}>{text}</Text>
    );
};

export default H1;

const h1Styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: typeScale.H1,
        fontWeight: "bold"
    }
});
