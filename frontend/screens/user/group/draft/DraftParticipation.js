"use strict";

import { View, ScrollView, StyleSheet } from "react-native";

import DraftDashboard from "../../../../components/navigation/DraftDashboard";
import ShifterButton from "../../../../components/ShifterButton";
import H1 from "../../../../components/headings/H1";
import H2 from "../../../../components/headings/H2";
import H3 from "../../../../components/headings/H3";
import Card from "../../../../components/cards/Card";
import TitleRow from "../../../../components/cards/TitleRow";
import TextRow from "../../../../components/cards/TextRow";
import RightAlignedRow from "../../../../components/cards/RightAlignedRow";

const DraftParticipation = () => {
    return(
        <View style={draftParticipationStyles.screenView}>
            <DraftDashboard style={draftParticipationStyles.draftDashboard} />
            <ShifterButton style={draftParticipationStyles.backButton} text="Back" />

            <ScrollView
                style={draftParticipationStyles.scrollView}
                contentContainerStyle={draftParticipationStyles.scrollViewContentContainer}
            >
                <H1 style={draftParticipationStyles.h1} text="Group Name (Group ID)" />
                <H2 style={draftParticipationStyles.h2} text="Draft ID" />
                <H3 style={draftParticipationStyles.h3} text="Participation" />

                <Card style={draftParticipationStyles.card}>
                    <TitleRow
                        style={draftParticipationStyles.titleRow}
                        titleText="User 1"
                        tagText="Playing"
                    />

                    <TextRow
                        style={draftParticipationStyles.textRow} leftText="Turn Order" rightText="1"
                    />

                    <RightAlignedRow style={draftParticipationStyles.rightAlignedRow}>
                        <ShifterButton
                            style={draftParticipationStyles.shifterButton} text="Play/Pass"
                        />
                    </RightAlignedRow>
                </Card>

                <Card style={draftParticipationStyles.card}>
                    <TitleRow
                        style={draftParticipationStyles.titleRow}
                        titleText="User 2"
                        tagText="Passing"
                    />

                    <TextRow
                        style={draftParticipationStyles.textRow} leftText="Turn Order" rightText="2"
                    />

                    <RightAlignedRow style={draftParticipationStyles.rightAlignedRow}>
                        <ShifterButton
                            style={draftParticipationStyles.shifterButton} text="Play/Pass"
                        />
                    </RightAlignedRow>
                </Card>

                <Card style={draftParticipationStyles.card}>
                    <TitleRow
                        style={draftParticipationStyles.titleRow}
                        titleText="User 3"
                        tagText="Playing"
                    />

                    <TextRow
                        style={draftParticipationStyles.textRow} leftText="Turn Order" rightText="3"
                    />

                    <RightAlignedRow style={draftParticipationStyles.rightAlignedRow}>
                        <ShifterButton
                            style={draftParticipationStyles.shifterButton} text="Play/Pass"
                        />
                    </RightAlignedRow>
                </Card>

                <Card style={draftParticipationStyles.card}>
                    <TitleRow
                        style={draftParticipationStyles.titleRow}
                        titleText="User 4"
                        tagText="Playing"
                    />

                    <TextRow
                        style={draftParticipationStyles.textRow} leftText="Turn Order" rightText="4"
                    />

                    <RightAlignedRow style={draftParticipationStyles.rightAlignedRow}>
                        <ShifterButton
                            style={draftParticipationStyles.shifterButton} text="Play/Pass"
                        />
                    </RightAlignedRow>
                </Card>
            </ScrollView>
        </View>
    );
};

export default DraftParticipation;

const draftParticipationStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "white"
    },

    draftDashboard: {
        marginTop: 30
    },

    backButton: {
        alignSelf: "flex-start"
    },

    scrollView: {
    },

    scrollViewContentContainer: {
        alignItems: "center"
    },

    h1: {
    },

    h2: {
    },

    h3: {
    },

    card: {
        width: "85%",
        margin: 5
    },

    titleRow: {
    },

    textRow: {
    },

    rightAlignedRow: {
    },

    shifterButton: {
        margin: 5
    }
});
