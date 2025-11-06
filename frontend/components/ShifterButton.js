"use strict";

import { TouchableHighlight, Text, StyleSheet } from "react-native";

const ShifterButton = ({ style, text }) => {
    return(
        <TouchableHighlight
            style={[ shifterButtonStyles.touchableHighlight, style ]}
            underlayColor="dimgrey"
            onPress={ () => {} }
        >
            <Text style={shifterButtonStyles.text}>{text}</Text>
        </TouchableHighlight>
    );
};

export default ShifterButton;

const shifterButtonStyles = StyleSheet.create({
    touchableHighlight: {
        justifyContent: "center",
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "darkgrey"
    },

    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }
});
