"use strict";

import React from "react";
import { View, StyleSheet } from "react-native";

import FormField from "./FormField.js";
import ValidationMessage from "./ValidationMessage.js";
import ShifterButton from "../ShifterButton.js";

import validation from "../../validation.js";
import constants from "../../constants.js";

const AccountCreationForm = ({ style, onNavigate }) => {
    const [ userId, setUserId ] = React.useState("");
    const userIdValid = validation.isValidUserId(userId);
    let userIdValidationMessage;

    if (userIdValid) {
        userIdValidationMessage = "";
    } else {
        userIdValidationMessage =
            `${constants.USER_ID_MIN_LENGTH} to ${constants.USER_ID_MAX_LENGTH} characters`;
    }

    return(
        <View style={[ accountCreationFormStyles.view, style ]}>
            <FormField
                style={accountCreationFormStyles.formField}
                text="User ID"
                onChangeText={setUserId}
            />
            
            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={userIdValidationMessage}
            />

            <FormField style={accountCreationFormStyles.formField} text="Display Name" />
            <FormField style={accountCreationFormStyles.formField} text="Email" />
            <FormField style={accountCreationFormStyles.formField} text="Confirm Email" />

            <FormField
                style={accountCreationFormStyles.formField}
                text="Password"
                obscureInput={true}
            />

            <FormField
                style={accountCreationFormStyles.formField}
                text="Confirm Password"
                obscureInput={true}
            />

            <ShifterButton style={accountCreationFormStyles.shifterButton} text="Create Account" />
        </View>
    );
};

export default AccountCreationForm;

const accountCreationFormStyles = StyleSheet.create({
    view: {
        width: 250, // Fallback sizing
        alignItems: "center"
    },

    formField: {
        width: "100%",
        margin: 5
    },

    validationMessage: {
        width: "100%"
    },

    shifterButton: {
        height: 40,
        width: "100%",
        margin: 5
    }
});
