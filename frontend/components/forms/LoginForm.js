"use strict";

import React from "react";
import { View, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

import FormField from "./FormField.js";
import ValidationMessage from "./ValidationMessage.js";
import ShifterButton from "../ShifterButton.js";

const LoginForm = ({ style, onNavigate, onLogin }) => {
    const [ userId, setUserId ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ loginMessage, setLoginMessage ] = React.useState("");

    const logIn = async () => {
        const route = "/log-in";
        const urlParts = [ process.env.EXPO_PUBLIC_API_URL, route ];
        const url = urlParts.join("");

        const response = await fetch(
            url,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: userId,
                    password: password
                })
            }
        );

        if (response.ok) {
            const result = await response.json();

            if (result.ok) {
                const sessionId = result.value;

                try {
                    await SecureStore.setItemAsync("sessionId", sessionId);
                } catch (error) {}

                onLogin(sessionId);
            } else {
                setLoginMessage(result.message);
            }
        } else {
            setLoginMessage("Connection error.");
        }
    };

    return(
        <View style={[ loginFormStyles.outerView, style ]}>
            <FormField style={loginFormStyles.formField} text="User ID" onChangeText={setUserId} />

            <FormField
                style={loginFormStyles.formField}
                text="Password"
                obscureInput={true}
                onChangeText={setPassword}
            />

            <ShifterButton
                style={loginFormStyles.loginButton} text="Log In" onPress={ () => { logIn(); } }
            />

            <ValidationMessage style={loginFormStyles.loginMessage} text={loginMessage} />

            <View style={loginFormStyles.innerView}>
                <ShifterButton
                    style={loginFormStyles.recoverPasswordButton}
                    text={"Reset\nPassword"}
                    onPress={ () => { onNavigate("PasswordReset"); } }
                />

                <ShifterButton
                    style={loginFormStyles.createAccountButton}
                    text={"Create\nAccount"}
                    onPress={ () => { onNavigate("AccountCreation"); } }
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

    loginMessage: {
        width: "100%"
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
