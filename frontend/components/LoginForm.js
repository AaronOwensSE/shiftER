"use strict";

import { View, StyleSheet } from "react-native";

import FormField from "./FormField.js";
import ShifterButton from "./ShifterButton.js";

const LoginForm = ({style}) => {
    return(
        <View style={[ loginFormStyles.outerView, style ]}>
            <FormField style={loginFormStyles.formField} name="User ID" />
            <FormField style={loginFormStyles.formField} name="Password" obscureInput={true} />
            <ShifterButton style={loginFormStyles.loginButton} text="Log In" />
            <View style={loginFormStyles.innerView}>
                <ShifterButton style={loginFormStyles.recoverPasswordButton} text={"Recover\nPassword"} />
                <ShifterButton style={loginFormStyles.createAccountButton} text={"Create\nAccount"} />
            </View>
        </View>
    );
};

export default LoginForm;

const loginFormStyles = StyleSheet.create({
    outerView: {
        alignItems: "center"
    },

    formField: {
        width: "85%"
    },

    loginButton: {
        height: 40,
        width: "85%"
    },

    innerView: {
        width: "85%",
        flexDirection: "row"
    },

    recoverPasswordButton: {
        flex: 1,
        marginLeft: 0
    },

    createAccountButton: {
        flex: 1,
        marginRight: 0
    }
});
