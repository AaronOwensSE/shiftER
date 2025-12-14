"use strict";

import React from "react";
import * as SecureStore from "expo-secure-store";

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

// May need to pull LoginForm's logIn function logic up to App.js's handleLogin.
// May also need to start reorganizing and breaking these functions out.
// For now, login/logout is functional.

export default function App() {
    const [ sessionId, setSessionId ] = React.useState();
    const [ sessionIdAuthenticated, setSessionIdAuthenticated ] = React.useState(false);

    React.useEffect(() => {
        const getStoredSessionId = async () => {
            try {
                const storedSessionId = await SecureStore.getItemAsync("sessionId");
                setSessionId(storedSessionId);
            } catch (error) {}
        };

        const authenticateSessionId = async () => {
            const route = "/authenticate-session";
            const urlParts = [ process.env.EXPO_PUBLIC_API_URL, route ];
            const url = urlParts.join("");

            const response = await fetch(
                url,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: sessionId
                    })
                }
            );

            if (response.ok) {
                const result = await response.json();

                if (result.ok) {
                    setSessionIdAuthenticated(true);
                    setScreen("Groups");
                } else {
                    await SecureStore.deleteItemAsync("sessionId");
                }
            }
        };

        const restoreSession = async () => {
            await getStoredSessionId();
            await authenticateSessionId();
        }

        restoreSession();
    }, []);

    // Need to create a default screen so login screen doesn't flash while checking sessionId on
    // navigation.

    let defaultScreen;

    if (sessionIdAuthenticated) {
        defaultScreen = "Groups";
    } else {
        defaultScreen = "Login";
    }

    const [ screen, setScreen ] = React.useState(defaultScreen);

    const handleLogin = (sessionId) => {
        setSessionId(sessionId);
        setSessionIdAuthenticated(true);
        setScreen("Groups");
    };

    const handleLogout = async () => {
        await SecureStore.deleteItemAsync("sessionId");
        setSessionId(null);
        setSessionIdAuthenticated(false);
    };

    if (sessionIdAuthenticated) {
        switch (screen) {
            case "Groups":
                return <Groups onNavigate={setScreen} />;
            case "Drafts":
                return <Drafts onNavigate={setScreen} />;
            case "Schedules":
                return <Schedules onNavigate={setScreen} />;
            case "Profile":
                return <Profile onNavigate={setScreen} onLogout={handleLogout} />;
            case "Alerts":
                return <Alerts onNavigate={setScreen} />;
            default:
                return <Groups onNavigate={setScreen} />;
        }
    } else {
        switch (screen) {
            case "Login":
                return <Login onNavigate={setScreen} onLogin={handleLogin} />;
            case "AccountCreation":
                return <AccountCreation onNavigate={setScreen} />;
            case "PasswordReset":
                return <PasswordReset onNavigate={setScreen} />;
            default:
                return <Login onNavigate={setScreen} onLogin={handleLogin} />;
        }
    }
};
