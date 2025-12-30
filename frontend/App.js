// =================================================================================================
// External Dependencies
// =================================================================================================
import React from "react";
import * as SecureStore from "expo-secure-store";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
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

// =================================================================================================
// Component
// =================================================================================================

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
        const route = "/log-out";
        const urlParts = [ process.env.EXPO_PUBLIC_API_URL, route ];
        const url = urlParts.join("");

        const response = await fetch(
            url,
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: sessionId
                })
            }
        );

        if (response.ok) {
            const result = await response.json();

            if (result.ok) {
                await SecureStore.deleteItemAsync("sessionId");
                setSessionId(null);
                setSessionIdAuthenticated(false);
                setScreen("Login");
            }

            // Should anything more be done if the logout request fails?
            // Removing the session ID locally doesn't remove the session from the database.
            // Error message on profile screen?
        }
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
