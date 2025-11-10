"use strict";

import { View, ScrollView, StyleSheet } from "react-native";

import ShifterButton from "../ShifterButton.js";

const NavBar = ({style}) => {
    // Outer View helps control weird positioning behavior of ScrollView.
    return(
        <View style={[ navBarStyles.view, style ]}>
            <ScrollView
                style={navBarStyles.scrollView}
                contentContainerStyle={navBarStyles.scrollViewContentContainer}
                horizontal
            >
                <ShifterButton style={navBarStyles.firstShifterButton} text="Groups" />
                <ShifterButton style={navBarStyles.midShifterButton} text="Drafts" />
                <ShifterButton style={navBarStyles.midShifterButton} text="Schedules" />
                <ShifterButton style={navBarStyles.midShifterButton} text="Profile" />
                <ShifterButton style={navBarStyles.lastShifterButton} text="Alerts" />
            </ScrollView>
        </View>
    );
};

export default NavBar;

const navBarStyles = StyleSheet.create({
    view: {
    },

    scrollView: {
    },

    scrollViewContentContainer: {
        flex: 1
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
