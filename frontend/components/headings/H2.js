"use strict";

import { Text, StyleSheet } from "react-native";

const H2 = ({ style, text }) => {
    return(
        <Text style={[ h2Styles.text, style ]}>{text}</Text>
    );
};

export default H2;

const h2Styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold"
    }
});
