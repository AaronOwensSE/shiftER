"use strict";

import { View, StyleSheet } from "react-native";

import BigLogo from "../components/logos/BigLogo.js";
import ShifterButton from "../components/ShifterButton.js";
import AccountCreationForm from "../components/forms/AccountCreationForm.js";

const AccountCreation = () => {
    return(
        <View style={accountCreationStyles.screenView}>
            <BigLogo style={accountCreationStyles.bigLogo} />
            <ShifterButton style={accountCreationStyles.backButton} text="Back" />

            <View style={accountCreationStyles.contentView}>
                <AccountCreationForm style={accountCreationStyles.accountCreationForm} />
            </View>
        </View>
    );
};

export default AccountCreation;

const accountCreationStyles = StyleSheet.create({
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

    accountCreationForm: {
        width: "75%"
    }
});
