"use strict";

import { ScrollView, StyleSheet } from "react-native";

import ShifterButton from "./ShifterButton.js";

const NavBar = ({style, contentContainerStyle}) => {
    return(
        <ScrollView
            style={[ navBarStyles.scrollView, style ]}
            contentContainerStyle={[
                navBarStyles.scrollViewContentContainer, contentContainerStyle
            ]}
            horizontal
        >
            <ShifterButton style={navBarStyles.firstShifterButton} text="Groups" />
            <ShifterButton style={navBarStyles.midShifterButton} text="Drafts" />
            <ShifterButton style={navBarStyles.midShifterButton} text="Schedules" />
            <ShifterButton style={navBarStyles.midShifterButton} text="Profile" />
            <ShifterButton style={navBarStyles.lastShifterButton} text="Alerts" />
        </ScrollView>
    );
};

export default NavBar;

const navBarStyles = StyleSheet.create({
    scrollView: {
    },

    scrollViewContentContainer: {
        alignSelf: "flex-start"
    },

    firstShifterButton: {
        borderRightWidth: 1,
    },

    midShifterButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1
    },

    lastShifterButton: {
        borderLeftWidth: 1
    }
});
