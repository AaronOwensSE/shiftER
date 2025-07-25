"use strict";

// External Dependencies
import React from "react";
import { View, Text, TextInput, Button } from "react-native";

// Export Component
const CreateUserPage = ({ navFunction }) => {
    // The onPress here needs an arrow function because it's looking for the function itself, not
    // its return.
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <CreateUserForm />
            <Button title="Home" onPress={() => navFunction("Home")} />
        </View>
    );
};

export default CreateUserPage;

// Helper Components
const CreateUserForm = () => {
    const [userId, setUserId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const createUser = async () => {
        // Need to add exception handling. Unclear on whether this function createUser should be
        // awaited. To do so, it would need to be wrapped in another function with await because the
        // event handler has to be passed without any await keyword.
        const response = await fetch(
            "http://192.168.1.198:3000/user",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: userId,
                    password: password,
                    name: name,
                    email: email
                })
            }
        );
    }

    // The naming here gets confusing. It's conventional to pass props down using the names created
    // from useState. However, you can rename if desired. While I prefer prop names that describe
    // what this prop is doing for this element, I can see how renaming would get confusing. For
    // now, I will pass using the useState name.
    return (
        <>
            <Text>Create User</Text>
            <UserIdBox userId={userId} setUserId={setUserId} />
            <PasswordBox password={password} setPassword={setPassword} />
            <NameBox name={name} setName={setName} />
            <EmailBox email={email} setEmail={setEmail} />
            <Button title="Create User" onPress={createUser} />
        </>
    );
};

const UserIdBox = ({ userId, setUserId }) => {
    // onChangeText calling setUserId without an argument works because the new value of the field is
    // implicitly passed to setUserId.
    return(
        <>
            <Text>User ID</Text>
            <TextInput style={{ height: 40, width: 100, backgroundColor: "red" }} value={userId} onChangeText={setUserId} />
        </>
    );
};

const PasswordBox = ({ password, setPassword }) => {
    return(
        <>
            <Text>Password</Text>
            <TextInput style={{ height: 40, width: 100, backgroundColor: "red" }} value={password} onChangeText={setPassword} />
        </>
    );
};

const NameBox = ({ name, setName }) => {
    return(
        <>
            <Text>Name</Text>
            <TextInput style={{ height: 40, width: 100, backgroundColor: "red" }} value={name} onChangeText={setName} />
        </>
    );
};

const EmailBox = ({ email, setEmail }) => {
    return(
        <>
            <Text>Email</Text>
            <TextInput style={{ height: 40, width: 100, backgroundColor: "red" }} value={email} onChangeText={setEmail} />
        </>
    );
};
