# Kanban Board Setup

This document provides guidance on setting up and using a Kanban board for the agile-final-project.

## Overview

A Kanban board is a visual tool for managing work. It helps the team see the status of all work items at a glance and manage work in progress (WIP).

## Recommended Columns

### 1. Backlog / To Do
**Purpose**: All new issues and user stories that haven't been started

**Criteria for entry:**
- Issue has been created and prioritized
- Acceptance criteria are defined (if applicable)
- Issue is ready to be worked on (no blockers)

**Example items:**
- User stories from stories.md
- Enhancement requests
- Bug reports not yet assigned

---

### 2. In Progress
**Purpose**: Work currently being developed

**Criteria for entry:**
- Developer has started working on the issue
- Issue is assigned to a team member
- Branch has been created (optional)

**WIP Limit**: Recommended 2-3 items per developer

**Example items:**
- Feature being coded
- Bug being investigated and fixed
- Documentation being written

---

### 3. In Review / Code Review
**Purpose**: Work completed but awaiting review

**Criteria for entry:**
- Pull request has been opened
- Code is complete and passes all tests
- Ready for peer review

**Example items:**
- Pull requests awaiting review
- Documentation awaiting approval
- Design proposals awaiting feedback

---

### 4. Testing / QA
**Purpose**: Code merged but needs testing before release

**Criteria for entry:**
- Code has been reviewed and merged
- Deployed to staging/test environment
- Ready for quality assurance testing

**Example items:**
- Features deployed to staging
- Bug fixes awaiting verification
- Integration testing in progress

---

### 5. Done
**Purpose**: Work completed, tested, and deployed to production

**Criteria for entry:**
- All acceptance criteria met
- Tested and verified working
- Deployed to production
- No known issues

**Example items:**
- Released features
- Resolved and verified bugs
- Completed documentation

---

## Optional Additional Columns

### Blocked
**Purpose**: Work that cannot proceed due to dependencies or issues

**Use when:**
- Waiting for external dependency
- Technical blocker discovered
- Needs clarification from stakeholder

### Ready for Deployment
**Purpose**: Completed work awaiting scheduled deployment

**Use when:**
- Using scheduled deployment windows
- Batching releases
- Coordinating with other teams

---

## Setting Up GitHub Projects Board

### Option 1: Basic Kanban Board (GitHub Classic Projects)

1. Go to your repository on GitHub
2. Click on "Projects" tab
3. Click "New project"
4. Choose "Classic project"
5. Name it "Product Catalog Development"
6. Choose "Basic kanban" template
7. Customize columns as described above

### Option 2: Advanced Board (GitHub Projects Beta)

1. Go to your repository on GitHub
2. Click on "Projects" tab
3. Click "New project"
4. Choose "Board" view
5. Name it "Product Catalog Development"
6. Add custom columns (To Do, In Progress, In Review, Testing, Done)
7. Configure automation rules:
   - Auto-move to "In Progress" when issue is assigned
   - Auto-move to "In Review" when PR is opened
   - Auto-move to "Done" when PR is merged

---

## Best Practices

### 1. Keep Cards Updated
- Move cards as work progresses
- Add comments with progress updates
- Update card status daily

### 2. Limit Work in Progress (WIP)
- Don't start new work until current work moves forward
- Recommended WIP limit: 2-3 items per person
- Focus on completing work rather than starting new items

### 3. Regular Board Reviews
- Daily standup: Quick review of board status
- Weekly planning: Prioritize backlog items
- Sprint review: Clear completed items, celebrate progress

### 4. Use Labels Effectively
- Apply labels (enhancement, bug, technical debt) to cards
- Filter board by labels to focus on specific work types
- Use priority labels (high, medium, low) if needed

### 5. Link Related Items
- Link issues to pull requests
- Reference related user stories
- Connect dependencies between issues

### 6. Add Acceptance Criteria
- Every card should have clear definition of done
- Use checklists within issues for sub-tasks
- Mark items complete only when criteria are met

---

## Sample Board Layout

```
┌─────────────┬──────────────┬─────────────┬──────────┬──────────┐
│   Backlog   │ In Progress  │  In Review  │  Testing │   Done   │
├─────────────┼──────────────┼─────────────┼──────────┼──────────┤
│ Story #7    │ Story #1     │ Story #2    │ Story #4 │ Story #5 │
│ List All    │ Create       │ Retrieve    │ Delete   │ Project  │
│ Products    │ Product      │ Product     │ Product  │ Setup    │
│             │              │             │          │          │
│ Story #8    │ Story #3     │             │          │          │
│ Query       │ Update       │             │          │          │
│ Products    │ Product      │             │          │          │
│             │              │             │          │          │
│ Story #6    │              │             │          │          │
│ Dislike     │              │             │          │          │
│ Product     │              │             │          │          │
└─────────────┴──────────────┴─────────────┴──────────┴──────────┘
```

---

## Integration with User Stories

Each user story from `stories.md` should become an issue on the Kanban board:

- **Story 1**: Create a Product → Issue #1
- **Story 2**: Retrieve a Product → Issue #2
- **Story 3**: Update a Product → Issue #3
- **Story 4**: Delete a Product → Issue #4
- **Story 5**: Like a Product → Issue #5
- **Story 6**: Dislike a Product → Issue #6
- **Story 7**: List All Products → Issue #7
- **Story 8**: Query Products → Issue #8
- **Story 9**: Cloud Hosting → Issue #9
- **Story 10**: Deployment Automation → Issue #10

---

## Metrics to Track

- **Cycle Time**: Time from "In Progress" to "Done"
- **Lead Time**: Time from "Backlog" to "Done"
- **Throughput**: Number of items completed per week/sprint
- **WIP**: Number of items in progress at any time
- **Blocked Items**: Number and duration of blocked items

Track these metrics to identify bottlenecks and improve team efficiency.
