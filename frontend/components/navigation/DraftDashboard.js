"use strict";

import { View, StyleSheet } from "react-native";

import GroupDashboard from "./GroupDashboard";
import DraftNavBar from "./DraftNavBar";

const DraftDashboard = ({style}) => {
    return(
        <View style={[ draftDashboardStyles.view, style ]}>
            <GroupDashboard style={draftDashboardStyles.groupDashboard} />
            <DraftNavBar style={draftDashboardStyles.draftNavBar} />
        </View>
    );
};

export default DraftDashboard;

const draftDashboardStyles = StyleSheet.create({
    view: {
    },

    groupDashboard: {
    },

    draftNavBar: {
        width: "100%"
    }
});
