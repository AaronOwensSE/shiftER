# Requirements Specification

## Functional Requirements

| ID | Requirement | Priority |
|----|----|----|
| FR1 | The system shall require each user to create and log into a password-protected account associated with a user ID before proceeding to further app functions. | High |
| FR2 | The system shall permit users to recover forgotten passwords. | Medium |
| FR3 | The system shall permit users to form into user groups controlled by group admins. | High |
| FR4 | The system shall permit group admins to run shift drafts for their groups. | High |
| FR5 | The system shall permit group admins to determine the date and time when a shift draft begins and ends. | Medium |
| FR6 | The system shall permit group admins to determine the times of day when a shift draft may proceed. | Medium |
| FR7 | The system's mobile frontend shall send push notifications to inform users when their turn in a shift draft is upcoming or active. | Medium |
| FR8 | The system shall permit a shift draft participant to opt in or out of any further shift selections at any time during a shift draft. | Medium |
| FR9 | The system shall permit a shift draft participant to select a desired shift in advance for automatic acquisition by the system if still available on the participant's next turn. | Medium |
| FR10 | The system's mobile frontend shall send push notifications to inform participants when their pre-selected shift has been acquired, either by the system for the participant or by another participant. | Medium |
| FR11 | The system shall save the results of a completed shift draft to be viewable by all participants and group admins. | High |
| FR12 | The system shall permit group admins to import a shift schedule for use in a shift draft from a Microsoft Excel file. | Medium |
| FR13 | The system shall permit group admins to export a shift schedule to Qgenda. | Medium |

## Non-Functional Requirements

| ID | Requirement | Priority |
|----|----|----|
| NFR1 | The system shall use a hashing algorithm with salts to securely authenticate and store user credentials. | High |
| NFR2 | The system shall use randomized, unique session IDs with cookies or secure mobile storage to securely authenticate and persist sessions. | High |
| NFR3 | The system shall provide an efficient, responsive, intuitively navigable user interface. | Medium |
| NFR4 | The system shall function without noticeable delay for users connected over modern networks. | Low |

## Shift Draft Ruleset

1. Participants are placed in a randomized turn order.
2. Participants take turns selecting shifts.
3. Each participant has an established period of time to select a shift from the list of remaining shifts.
4. If the end of the participant list is reached while shifts remain unselected, the turn order will reverse and the draft will continue.
5. When all shifts have been selected, or when all users have opted out of further shift selection, or when an appointed time has been reached, the draft will end.

## User Stories

| As a(n) ... | I want to ... | so that I can ... | Related Database Entity/Relationship |
|----|----|----|----|
| Nonuser | create an account | become a user. | Session |
| User | log in | use the app. | Session |
| User | recover my password | log in. | Session |
| User | log out | remain secure. | Session |
| User | see my profile | review my information. | User |
| User | update my profile | respond to changes and remain secure. | User |
| User | delete my account | become a nonuser. | User |
| User | create a group | become the admin of a new group. | Group |
| User | see a group's profile | review the information. | Group |
| User | request to join a group | join the group. | Membership |
| User | see a list of pending requests and invitations | review the information. | Membership |
| User | accept/decline an invitation to a group | join/avoid the group. | Membership |
| User | see a list of groups I'm in | select the one I want or review the information. | Membership |
| User | see a group's membership and admin information | review the information. | Membership |
| User | leave a group | end my membership. | Membership |
| User | see a draft's profile | review the information. | Draft |
| User | receive notice of draft start/end | participate. | Draft |
| User | receive notice of draft pause/unpause | participate. | Draft |
| User | see a list of drafts I'm participating in | select the one I want or review the information. | Participation |
| User | see a draft's participation list and turn status information | review the information. | Participation |
| User | toggle whether I am passing in a draft | opt in/out. | Participation |
| User | receive notice of my turn's start/end | participate. | Participation |
| User | take my turn in a draft by selecting an available shift | participate. | Participation |
| User | see a list of active or upcoming schedules I'm on | choose the one I want or review the information. | Schedule |
| User | see all active or upcoming schedules for a group I'm in | choose the one I want or review the information. | Schedule |
| User | see a schedule's profile and shifts | review the information. | Schedule |
| Admin | update my group's profile | respond to changes. | Group |
| Admin | invite a user to my group | create schedules and run drafts with my desired membership. | Membership |
| Admin | decline requests to join my group | moderate membership. | Membership |
| Admin | remove users from my group | moderate membership. | Membership |
| Admin | appoint other admins | share admin privileges or leave my group. | Membership |
| Admin | demote other admins | moderate membership. | Membership |
| Admin | run a draft | create a schedule. | Draft |
| Admin | pause/unpause a draft | referee participation or update the draft profile. | Draft |
| Admin | update a draft profile | respond to changes. | Draft |
| Admin | cancel a draft | respond to changes. | Draft |
| Admin | finalize a schedule | approve of the result of a draft. | Schedule |
| Admin | update a schedule | respond to changes. | Schedule |
| Admin | delete a schedule | clean up my group's records or respond to changes. | Schedule |
| Admin | create a schedule without running a draft | unilaterally produce a schedule. | Schedule |

---

[Back to README](../README.md)
