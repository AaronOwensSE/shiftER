"use strict";

/*
import { View, StyleSheet } from "react-native";
*/

import Login from "./screens/nonuser/Login.js";
import PasswordReset from "./screens/nonuser/PasswordReset.js";
import AccountCreation from "./screens/nonuser/AccountCreation.js";

import Groups from "./screens/user/Groups.js";
import Drafts from "./screens/user/Drafts.js";
import Schedules from "./screens/user/Schedules.js";
import Alerts from "./screens/user/Alerts.js";
import Profile from "./screens/user/Profile.js";

import Group from "./screens/user/group/Group.js";
import GroupSchedules from "./screens/user/group/GroupSchedules.js";
import GroupMembership from "./screens/user/group/GroupMembership.js";
import Schedule from "./screens/user/group/Schedule.js";

import Draft from "./screens/user/group/draft/Draft.js";
import DraftParticipation from "./screens/user/group/draft/DraftParticipation.js";

export default function App() {
    return (
        <Login />
    );
};

/*
export default function App() {
    return (
        <View style={styles.view}>
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
