# Scrum

## Motivation

After approaching this project from several different angles, I have completed a large amount of work and learned a variety of new skills, but I feel as if I am not achieving the early and frequent delivery of value idealized in the Twelve Principles of the Agile Manifesto.

Although this is a solo project, I think adopting the Scrum framework is the correct path forward. I understand Scrum says that modified Scrum is not Scrum. Nonetheless, I think the closest possible adherence to this framework will help me separate roles (even if this is merely a shift of mindset), estimate work, identify obstacles, improve velocity, and reflect upon results.

## Product Backlog

The product backlog is informed by the requirements specification document, but items have been reconceptualized to fit the Scrum structure. On future projects, I may forego the requirements specification and commit to more direct development of the product backlog.

During frontend development (sprint 2), I found it useful to build out a set of user stories in order to create a site map that I was confident could be carried forward with minimal changes. However, at least for this project, at least for now, I prefer broader feature descriptions for the product backlog and will not be inserting user stories directly. They are currently available in a separate markdown file.

| Feature | Priority |
|----|----|
| Database Setup and Model API Completion | High |
| Basic Frontend | High |
| Sign-Up, Authentication, Password Recovery, and Logout | High |
| Basic User Functionality | High |
| Basic Group Functionality | High |
| Basic Draft and Schedule Functionality | High |
| Fine-Grained User Management | Medium |
| Fine-Grained Group Management | Medium |
| Fine-Grained Draft Management | Medium |
| Fine-Grained Schedule Management | Medium |
| Excel Integration | Low |
| Qgenda Integration | Low |

| Not Started | In Progress | Done |
|----|----|----|
| Basic User Functionality | Sign-Up, Authentication, Password Recovery, and Logout | Work as of Start of Scrum |
| Basic Group Functionality |  | Database Setup and Model API Completion |
| Basic Draft and Schedule Functionality |  | Basic Frontend |
| Fine-Grained User Management |  |  |
| Fine-Grained Group Management |  |  |
| Fine-Grained Draft Management |  |  |
| Fine-Grained Schedule Management |  |  |
| Excel Integration |  |  |
| Qgenda Integration |  |  |

## Sprints

Sprints for this project will be 2 weeks in duration. A new Git branch will be used for each sprint.

A Fibonacci-based points system will be used during sprint planning to estimate backlog feature difficulty. Points should not correlate directly to man-hours. Their purpose is not to make time or cost estimates (which Sutherland emphasizes we're terrible at) but to estimate the *relative difficulty* of tasks (which we do well). I do find value in establishing a baseline so that a task designated a 3 this week won't be arbitrarily designated a 13 next month. I think 3 works well as a baseline estimate of a normal task with added complexity or unknown factors being common grounds for increase.

I anticipate spending some time in each sprint as my own scrum master, clearing obstacles for myself. I expect most obstacles to take the form of external resource acquisition, like setting up a laptop so I can work remotely, or development of new skills, like taking a crash course in Express or Jest.

### Sprint 3: Sign-Up, Authentication, Password Recovery, and Logout

#### Velocity:

#### Backlog

| Feature | Points | Rationale |
|----|----|----|
| Frontend Navigation | 1 | (-) Familiar, (-) Brief |
| Frontend Navigation Testing | 1 | (-) Familiar, (-) Brief |
| Validation Functions | 1 | (-) Familiar, (-) Brief |
| Validation Function Testing | 1 | (-) Familiar, (-) Brief |
| Obstacle: React Native State Refresher | 2 | (-) Familiar |
| Validation Message Component | 3 | (-) Brief, (+) Unknowns |
| Validation Message Component Testing | 2 | (-) Brief |
| Obstacle: HTTP Refresher | 2 | (-) Familiar |
| Obstacle: Fetch API Refresher | 2 | (-) Familiar |
| Obstacle: Routing/Express Refresher | 2 | (-) Familiar |
| Obstacle: Learn Rate Limiting Techniques | 3 |  |
| Sign-Up | 8 | (+) End-to-End, (+) Unknowns |
| Sign-Up Testing | 5 | (+) Unknowns |
| Obstacle: Learn Expo SecureStore | 3 |  |
| Authentication | 8 | (+) End-to-End, (+) Unknowns |
| Authentication Testing | 5 | (+) Unknowns |
| Obstacle: Learn Email | 3 |  |
| Password Recovery | 8 | (+) End-to-End, (+) Unknowns |
| Password Recovery Testing | 5 | (+) Unknowns |
| Logout | 5 | (-) Brief, (+) End-to-End, (+) Unknowns |
| Logout Testing | 3 | (-) Brief, (+) Unknowns |

| Not Started | In Progress | Done | Failed |
|----|----|----|----|
| Obstacle: Learn Rate Limiting Techniques | Authentication | Obstacle: HTTP Refresher |  |
| Obstacle: Learn Email | Authentication Testing | Obstacle: Fetch API Refresher |  |
| Password Recovery |  | Obstacle: Routing/Express Refresher |  |
| Password Recovery Testing |  | Validation Functions |  |
| Logout |  | Validation Function Testing |  |
| Logout Testing |  | Obstacle: React Native State Refresher |  |
|  |  | Frontend Navigation |  |
|  |  | Frontend Navigation Testing |  |
|  |  | Validation Message Component |  |
|  |  | Validation Message Component Testing |  |
|  |  | Sign-Up |  |
|  |  | Sign-Up Testing |  |
|  |  | Obstacle: Learn Expo SecureStore |  |

### Sprint 2: Basic Frontend

#### Velocity: 51

#### Backlog

| Feature | Points | Rationale |
|----|----|----|
| Obstacle: Install Whiteboard | 3 | (-) Prior Preparation, (+) Unknowns |
| Site Map | 5 | (+) Foundational to Navigation |
| Obstacle: Learn Figma | 5 | (+) Unknowns |
| Wireframes | 13 | (+) Foundational to Functionality, (+) Volume, (+) Unknowns |
| Obstacle: React Native Refresher | 2 | (-) Familiar |
| Obstacle: Expo Refresher | 2 | (-) Familiar |
| Obstacle: Navigation Framework Decisions | 5 | (+) Unknowns |
| Code in React Native | 8 | (+) Volume, (+) Unknowns |
| GUI Testing | 8 | (+) Volume, (+) Unknowns |
| Obstacle: Laptop Setup | 3 | (-) Familiar, (+) Volume |

| Not Started | In Progress | Done | Failed |
|----|----|----|----|
|  |  | Obstacle: Install Whiteboard | Obstacle: Laptop Setup |
|  |  | Site Map |  |
|  |  | Obstacle: Learn Figma |  |
|  |  | Wireframes |  |
|  |  | Obstacle: React Native Refresher |  |
|  |  | Obstacle: Expo Refresher |  |
|  |  | Obstacle: Navigation Framework Decisions |  |
|  |  | Code in React Native |  |
|  |  | GUI Testing |  |

### Sprint 1: Database Setup and Model API Completion

#### Velocity: 38

#### Backlog

| Feature | Points |
|----|----|
| User Model Completion | 1 |
| User Model Testing | 1 |
| Obstacle: Jest Setup and Teardown Configuration | 3 |
| Session Model Completion | 1 |
| Session Model Testing | 1 |
| Group Model Completion | 1 |
| Group Model Testing | 1 |
| Membership Model Completion | 1 |
| Membership Model Testing | 1 |
| Obstacle: Physical Whiteboard Setup | 2 |
| Obstacle: Laptop Setup | 3 |
| Draft Model | 3 |
| Draft Model Testing | 1 |
| Participation Model | 3 |
| Participation Model Testing | 1 |
| Schedule Model | 3 |
| Schedule Model Testing | 1 |
| Shift Model | 3 |
| Shift Model Testing | 1 |
| Database Schema Scripts | 3 |
| Database Schema Script Testing | 1 |
| Database Seed Scripts | 3 |
| Database Seed Script Testing | 1 |
| Update Architecture Diagrams | 3 |

| Not Started | In Progress | Done | Failed |
|----|----|----|----|
|  |  | User Model Completion | Obstacle: Physical Whiteboard Setup |
|  |  | User Model Testing | Obstacle: Laptop Setup |
|  |  | Obstacle: Jest Setup and Teardown Configuration |  |
|  |  | Session Model Completion |  |
|  |  | Session Model Testing |  |
|  |  | Group Model Completion |  |
|  |  | Group Model Testing |  |
|  |  | Membership Model Completion |  |
|  |  | Draft Model |  |
|  |  | Participation Model |  |
|  |  | Schedule Model |  |
|  |  | Shift Model |  |
|  |  | Database Schema Scripts |  |
|  |  | Database Schema Script Testing |  |
|  |  | Membership Model Testing |  |
|  |  | Draft Model Testing |  |
|  |  | Participation Model Testing |  |
|  |  | Schedule Model Testing |  |
|  |  | Shift Model Testing |  |
|  |  | Database Seed Scripts |  |
|  |  | Database Seed Script Testing |  |
|  |  | Update Architecture Diagrams |  |

### Work as of Start of Scrum

- Version Control Setup
- Project Management Plan
- Tools and Technologies Decisions
- Requirements Specification
- Architecture Specification
- Development Environment Setup
- Successful End-to-End Test
    - Sparse Frontend
    - Sparse Backend Initialization
    - Sparse Routing
    - Sparse Controller Logic
- Partial Database Setup
- Partial Model API
- Partial Work on User-Centric Controllers
- Jest Setup
- Partial Model Testing

---

[Back to README](../README.md)
