"use strict";

import { View, StyleSheet } from "react-native";

import FormField from "./FormField.js";
import ShifterButton from "../ShifterButton.js";

const AccountCreationForm = ({style}) => {
    return(
        <View style={[ accountCreationFormStyles.view, style ]}>
            <FormField style={accountCreationFormStyles.formField} text="User ID" />
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

    shifterButton: {
        height: 40,
        width: "100%",
        margin: 5
    }
});
