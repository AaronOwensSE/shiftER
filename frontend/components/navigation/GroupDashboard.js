"use strict";

import { View, StyleSheet } from "react-native";

import Dashboard from "./Dashboard.js";
import GroupNavBar from "./GroupNavBar.js";

const GroupDashboard = ({style}) => {
    return(
        <View style={[ groupDashboardStyles.view, style ]}>
            <Dashboard style={groupDashboardStyles.dashboard} />
            <GroupNavBar style={groupDashboardStyles.groupNavBar} />
        </View>
    );
};

export default GroupDashboard;

const groupDashboardStyles = StyleSheet.create({
    view: {
    },

    dashboard: {
    },

    groupNavBar: {
        width: "100%"
    },
});
