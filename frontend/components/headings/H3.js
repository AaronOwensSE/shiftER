"use strict";

import { Text, StyleSheet } from "react-native";

const H3 = ({ style, text }) => {
    return(
        <Text style={[ h3Styles.text, style ]}>{text}</Text>
    );
};

export default H3;

const h3Styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    }
});
