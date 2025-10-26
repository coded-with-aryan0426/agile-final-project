# Kanban Board Setup Guide

## Overview
This guide will help you set up a Kanban board for Agile sprint planning using GitHub Projects.

## Steps to Create Kanban Board

### 1. Create a New Project
1. Navigate to your repository on GitHub
2. Click on the **Projects** tab
3. Click **New Project**
4. Choose a template:
   - **Board** for Kanban-style view
   - **Table** for spreadsheet-style view
5. Name your project (e.g., "Sprint Board" or "Product Backlog")

### 2. Set Up Columns
Create the following columns for your Kanban board:

- **Backlog**: All planned issues waiting to be prioritized
- **To Do**: Issues ready to be worked on in current sprint
- **In Progress**: Issues currently being developed
- **In Review**: Issues awaiting code review
- **Testing**: Issues in QA/testing phase
- **Done**: Completed issues

### 3. Configure Automation (Optional)
Set up automation rules:
- Auto-move issues to "In Progress" when assigned
- Auto-move to "In Review" when PR is opened
- Auto-move to "Done" when PR is merged

### 4. Link Issues to Project
1. Open an issue
2. In the right sidebar, find "Projects"
3. Select your Kanban board
4. The issue will appear in the appropriate column

### 5. Sprint Planning
- **Sprint Duration**: Typically 1-2 weeks
- **Sprint Planning Meeting**: Select issues from Backlog → To Do
- **Daily Standup**: Review board progress
- **Sprint Review**: Move completed items to Done
- **Sprint Retrospective**: Reflect on what went well

## Best Practices

1. **Keep columns moving**: Don't let items stagnate
2. **WIP Limits**: Limit items in "In Progress" column
3. **Regular updates**: Update issue status daily
4. **Clear definitions**: Define what "Done" means
5. **Team visibility**: Ensure all team members have access

## Example Workflow

```
New Issue → Backlog → To Do (Sprint Planning)
→ In Progress (Developer picks up) → In Review (PR created)
→ Testing (QA validates) → Done (Merged & deployed)
```

## Integration with Issues

Use labels to categorize issues:
- `enhancement` - New features
- `technical debt` - Code improvements
- `bug` - Bug fixes
- `documentation` - Documentation updates

## Metrics to Track

- **Velocity**: Number of issues completed per sprint
- **Cycle Time**: Time from "In Progress" to "Done"
- **Lead Time**: Time from "To Do" to "Done"
- **Throughput**: Number of issues completed over time

## Resources

- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [Agile Kanban Guide](https://www.atlassian.com/agile/kanban)
