# User Stories

I did not begin either the project or the project's shift over to Scrum with a set of user stories, but I found it useful to create this set to visualize a site map for the project's frontend. Currently, these user stories are not being inserted directly into the product backlog. On future projects, I may take that approach.

An additional column for a related database entity or relationship is added to help organize the list.

| As a . . . | I want to . . . | so that I can . . . | Related Database Entity/Relationship |
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
