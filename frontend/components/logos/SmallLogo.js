"use strict";

import { Text, StyleSheet } from "react-native";

import typeScale from "../../type-scale.js";

const SmallLogo = ({style}) => {
    return (
        <Text style={[ smallLogoStyles.text, style ]}>shiftER</Text>
    );
};

export default SmallLogo;

const smallLogoStyles = StyleSheet.create({
    text: {
        textAlign: "left",
        fontSize: typeScale.SMALL_LOGO,
        fontWeight: "bold",
        backgroundColor: "lightgrey"
    }
});
