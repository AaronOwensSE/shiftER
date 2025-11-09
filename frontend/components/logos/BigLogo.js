"use strict";

import { Text, StyleSheet } from "react-native";

const BigLogo = ({style}) => {
    return(
        <Text style={[ bigLogoStyle.text, style ]}>shiftER</Text>
    );
};

export default BigLogo;

const bigLogoStyle = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 48,
        fontWeight: "bold"
    }
});
