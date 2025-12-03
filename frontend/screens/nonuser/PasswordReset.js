"use strict";

import { View, StyleSheet } from "react-native";

import BigLogo from "../../components/logos/BigLogo.js";
import ShifterButton from "../../components/ShifterButton.js";
import PasswordResetForm from "../../components/forms/PasswordResetForm.js";

const PasswordReset = ({onNavigate}) => {
    return(
        <View style={passwordResetStyles.screenView}>
            <BigLogo style={passwordResetStyles.bigLogo} />
            <ShifterButton
                style={passwordResetStyles.backButton}
                text="Back"
                onPress={ () => { onNavigate("Login") } }    
            />

            <View style={passwordResetStyles.contentView}>
                <PasswordResetForm style={passwordResetStyles.passwordResetForm} />
            </View>
        </View>
    );
};

export default PasswordReset;

const passwordResetStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "white"
    },

    bigLogo: {
        marginTop: 30
    },

    backButton: {
        alignSelf: "flex-start"
    },

    contentView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    passwordResetForm: {
        width: "75%"
    }
});
