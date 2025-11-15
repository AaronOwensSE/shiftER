"use strict";

import React from "react";

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

/*
I find the React naming standards for functions passed down through props to be a little odd.

My instinct is to call the prop that carries setScreen down to its child components something like
navFunction so that the end result is <Child onPress={ () => { navFunction("screen") } } />. I read
this as, "When pressed, perform the navigation function for 'screen'."

But onNavigate appears to be the standard instead, resulting in the grammatically awkward
<Child onPress={ () => { onNavigate("screen") } } />. I read this as, "When pressed, perform the
when navigated for 'screen'," which makes no sense.

The correct reading is something more like, "When pressed, perform the function for when you want to
navigate for 'screen'." The critical point is that onNavigate belongs to the parent, not the child.
*/

export default function App() {
    const [ screen, setScreen ] = React.useState("Login");

    return renderScreen(screen, setScreen);
};

function renderScreen(screen, setScreen) {
    switch (screen) {
        case "Login":
            return <Login onNavigate={setScreen} />;
        case "AccountCreation":
            return <AccountCreation onNavigate={setScreen} />;
        case "PasswordReset":
            return <PasswordReset onNavigate={setScreen} />;
        default:
            return null;
    }
}
