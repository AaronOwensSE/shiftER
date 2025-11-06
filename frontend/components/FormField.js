"use strict";

import { View, Text, TextInput, StyleSheet } from "react-native";

const FormField = ({ style, name, obscureInput = false }) => {
    return(
        <View style={[ formFieldStyle.view, style ]}>
            <Text style={formFieldStyle.text}>{name}</Text>
            <TextInput style={formFieldStyle.textInput} secureTextEntry={obscureInput} />
        </View>
    );
};

export default FormField;

const formFieldStyle = StyleSheet.create({
    view: {
        margin: 5
    },

    text: {
        fontSize: 16,
        fontWeight: "bold"
    },

    textInput: {
        height: 40,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "lightgrey"
    }
});
