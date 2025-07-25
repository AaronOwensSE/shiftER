"use strict";

// External Dependencies
//import React from "react";
import { View, Button } from "react-native";

const HomePage = ({ navFunction }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="Create User" onPress={ () => navFunction("CreateUser") } />
        </View>
    );
};

export default HomePage;
