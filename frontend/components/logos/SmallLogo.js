"use strict";

import { Text, StyleSheet } from "react-native";

const SmallLogo = ({style}) => {
    return (
        <Text style={[ smallLogoStyles.text, style ]}>shiftER</Text>
    );
};

export default SmallLogo;

const smallLogoStyles = StyleSheet.create({
    text: {
        textAlign: "left",
        fontSize: 57,
        fontWeight: "bold",
        backgroundColor: "lightgrey"
    }
});
