"use strict";

import { View, StyleSheet } from "react-native";

import BigLogo from "../../components/logos/BigLogo.js";
import LoginForm from "../../components/forms/LoginForm.js";

const Login = () => {
    return(
        <View style={[ loginStyles.screenView ]}>
            <BigLogo style={loginStyles.bigLogo} />

            <View style={loginStyles.contentView}>
                <LoginForm style={loginStyles.loginForm} />
            </View>
        </View>
    );
};

export default Login;

const loginStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "white"
    },

    bigLogo: {
        marginTop: 30
    },

    contentView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    loginForm: {
        width: "75%"
    }
});
