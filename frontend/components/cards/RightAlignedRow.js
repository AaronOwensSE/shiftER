"use strict";

import { View, StyleSheet } from "react-native";

const RightAlignedRow = ({ style, children }) => {
    return(
        <View style={[ rightAlignedRowStyles.view, style ]}>
            {children}
        </View>
    );
};

export default RightAlignedRow;

const rightAlignedRowStyles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
});
