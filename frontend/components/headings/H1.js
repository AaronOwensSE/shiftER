"use strict";

import { Text, StyleSheet } from "react-native";

const H1 = ({ style, text }) => {
    return(
        <Text style={[ h1Styles.text, style ]}>{text}</Text>
    );
};

export default H1;

const h1Styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 43,
        fontWeight: "bold"
    }
});
