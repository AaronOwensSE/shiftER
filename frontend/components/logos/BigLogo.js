"use strict";

import { Text, StyleSheet } from "react-native";

import typeScale from "../../type-scale.js";

const BigLogo = ({style}) => {
    return(
        <Text style={[ bigLogoStyle.text, style ]}>shiftER</Text>
    );
};

export default BigLogo;

const bigLogoStyle = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: typeScale.BIG_LOGO,
        fontWeight: "bold",
        backgroundColor: "lightgrey"
    }
});
