"use strict";

import { View, StyleSheet } from "react-native";
import BigLogo from "./components/logos/BigLogo.js";
import SmallLogo from "./components/logos/SmallLogo.js";
import FormField from "./components/forms/FormField.js";
import ShifterButton from "./components/ShifterButton.js";
import LoginForm from "./components/forms/LoginForm.js";
import NavBar from "./components/NavBar.js";
import Dashboard from "./components/Dashboard.js";
import TitleRow from "./components/cards/TitleRow.js";
import TextRow from "./components/cards/TextRow.js";
import Card from "./components/cards/Card.js";
import Login from "./screens/Login.js";
import RightAlignedRow from "./components/cards/RightAlignedRow.js";
import PasswordResetForm from "./components/forms/PasswordResetForm.js";
import PasswordReset from "./screens/PasswordReset.js";
import AccountCreationForm from "./components/forms/AccountCreationForm.js";
import AccountCreation from "./screens/AccountCreation.js";

export default function App() {
    return (
        <Login />
    );
};

/*
export default function App() {
    return (
        <View style={styles.view}>
            <AccountCreationForm />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});
*/
