"use strict";

import { View, Text, TextInput, StyleSheet } from "react-native";

const FormField = ({ style, text, obscureInput = false }) => {
    return(
        <View style={[ formFieldStyle.view, style ]}>
            <Text style={formFieldStyle.text}>{text}</Text>
            <TextInput style={formFieldStyle.textInput} secureTextEntry={obscureInput} />
        </View>
    );
};

export default FormField;

const formFieldStyle = StyleSheet.create({
    view: {
    },

    text: {
        fontSize: 16
    },

    textInput: {
        height: 40,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "lightgrey"
    }
});
