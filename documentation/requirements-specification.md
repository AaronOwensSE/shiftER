# Requirements Specification

## Functional Requirements

| ID | Requirement | Priority |
|----|----|----|----|
| FR1 | The system shall require each user to create and log into a password-protected account associated with a user ID or email address before proceeding to further app functions. | High |
| FR2 | The system shall perform appropriate salting and hashing of stored user credentials. | High |
| FR3 | The system shall utilize randomized, unique session IDs with cookies for persistent user sessions. | High |
| FR4 | The system shall permit users to recover forgotten passwords by email. | Medium |
| FR5 | The system shall permit users to form into user groups controlled by group admins. | High |
| FR6 | The system shall permit group admins to run shift drafts for their groups. (The shift draft ruleset is detailed elsewhere in this document.) | High |
| FR7 | The system shall permit group admins to determine the date and time when a shift draft begins and ends. | Medium |
| FR8 | The system shall permit group admins to determine the times of day when a shift draft may proceed. | Medium |
| FR9 | The system shall send push notifications to inform users when their turn in a shift draft is upcoming or active. | Medium |
| FR10 | The system shall permit a shift draft participant to opt in or out of any further shift selections at any time during a shift draft. | Medium |
| FR11 | The system shall permit a shift draft participant to select a desired shift in advance for automatic acquisition by the system if still available on the participant's next turn. | Medium |
| FR12 | The system shall send push notifications to inform participants when their pre-selected shift has been acquired, either by the system for the participant or by another participant. | Medium |
| FR13 | The system shall save the results of a completed shift draft to be viewable by all participants and group admins. | High |
| FR14 | The system shall permit group admins to import a shift schedule for use in a shift draft from a Microsoft Excel file. | Medium |
| FR15 | The system shall permit group admins to export a shift schedule to Qgenda. | Medium |

## Non-Functional Requirements

| ID | Requirement | Priority | Status |
|----|----|----|----|
| NFR1 | The system shall provide secure user and session authentication. | High | In Progress |
| NFR2 | The system shall provide an efficient, responsive, intuitively navigable user interface. | Medium | Not Started |
| NFR3 | The system shall function without noticeable delay for users connected over modern networks. | Low | Not Started |

## Shift Draft Ruleset

1. Participants are placed in a randomized turn order.
2. Participants take turns selecting shifts.
3. Each participant has an established period of time to select a shift from the list of remaining shifts.
4. If the end of the participant list is reached while shifts remain unselected, the turn order will reverse and the draft will continue.
5. When all shifts have been selected, or when all users have opted out of further shift selection, or when an appointed time has been reached, the draft will end.

---

[Back to README](../README.md)
