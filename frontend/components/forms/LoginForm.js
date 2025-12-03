"use strict";

import { View, StyleSheet } from "react-native";

import FormField from "./FormField.js";
import ShifterButton from "../ShifterButton.js";

const LoginForm = ({ style, onNavigate }) => {
    return(
        <View style={[ loginFormStyles.outerView, style ]}>
            <FormField style={loginFormStyles.formField} text="User ID" />
            <FormField style={loginFormStyles.formField} text="Password" obscureInput={true} />
            <ShifterButton style={loginFormStyles.loginButton} text="Log In" />

            <View style={loginFormStyles.innerView}>
                <ShifterButton
                    style={loginFormStyles.recoverPasswordButton}
                    text={"Reset\nPassword"}
                    onPress={ () => { onNavigate("PasswordReset") } }
                />

                <ShifterButton
                    style={loginFormStyles.createAccountButton}
                    text={"Create\nAccount"}
                    onPress={ () => { onNavigate("AccountCreation") } }
                />
            </View>
        </View>
    );
};

export default LoginForm;

const loginFormStyles = StyleSheet.create({
    outerView: {
        width: 250, // Fallback sizing
        alignItems: "center"
    },

    formField: {
        width: "100%",
        margin: 5
    },

    loginButton: {
        height: 40,
        width: "100%",
        margin: 5
    },

    innerView: {
        width: "100%",
        flexDirection: "row"
    },

    recoverPasswordButton: {
        flex: 1,
        margin: 5,
        marginLeft: 0
    },

    createAccountButton: {
        flex: 1,
        margin: 5,
        marginRight: 0
    }
});
