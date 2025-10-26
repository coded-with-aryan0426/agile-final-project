# GitHub Setup Instructions

This guide provides step-by-step instructions for completing the GitHub setup for this project.

## Step 1: Create "technical debt" Label

1. Navigate to your repository on GitHub
2. Click on **Issues** tab
3. Click on **Labels**
4. Click **New label**
5. Fill in the details:
   - **Name:** `technical debt`
   - **Description:** `Code improvements and refactoring tasks`
   - **Color:** Choose a color (suggestion: `#fbca04` - yellow)
6. Click **Create label**

## Step 2: Create Issues from User Stories

Use the user stories defined in `USER_STORIES.md` to create 10 GitHub issues. Here's how:

### For Each User Story:

1. Go to **Issues** tab
2. Click **New issue**
3. Copy the title and body from USER_STORIES.md
4. Add appropriate labels:
   - Issues 1-9: Add `enhancement` label
   - Issue 10: Add both `enhancement` and `technical debt` labels
5. Click **Submit new issue**

### Quick Reference for Issues:

| # | Title | Labels |
|---|-------|--------|
| 1 | Implement Create Product Endpoint | enhancement |
| 2 | Implement Get All Products Endpoint | enhancement |
| 3 | Implement Get Product by ID Endpoint | enhancement |
| 4 | Implement Update Product Endpoint | enhancement |
| 5 | Implement Delete Product Endpoint | enhancement |
| 6 | Implement Product Like Functionality | enhancement |
| 7 | Implement Product Dislike Functionality | enhancement |
| 8 | Implement Product Query and Filter Functionality | enhancement |
| 9 | Implement Product Search Functionality | enhancement |
| 10 | Configure Cloud Hosting and Automated Deployment | enhancement, technical debt |

## Step 3: Create Kanban Board

1. Go to **Projects** tab
2. Click **New project**
3. Choose **Board** template
4. Name it "Sprint Board" or "Product Backlog"
5. Add columns:
   - Backlog
   - To Do
   - In Progress
   - In Review
   - Testing
   - Done

## Step 4: Link Issues to Project

For each issue created:
1. Open the issue
2. In the right sidebar, click **Projects**
3. Select your project board
4. The issue will be added to the board

## Step 5: Set Up Automation (Optional)

1. In your project board, click on column menu (⋯)
2. Select **Manage automation**
3. Configure automation rules:
   - **To Do**: When items are added
   - **In Progress**: When items are assigned
   - **In Review**: When pull request is opened
   - **Done**: When pull request is merged

## Alternative: Use GitHub CLI

If you have GitHub CLI installed, you can create issues using commands:

```bash
# Create technical debt label
gh label create "technical debt" --description "Code improvements and refactoring tasks" --color fbca04

# Create issues (example for issue 1)
gh issue create --title "Implement Create Product Endpoint" \
  --body "As a **catalog manager**, I need **the ability to add new products to the catalog**, so that **customers can browse and purchase new items**." \
  --label "enhancement"
```

Repeat for all 10 issues using the content from USER_STORIES.md.

## Verification

After completing these steps, verify:
- [ ] "technical debt" label exists
- [ ] 10 issues are created
- [ ] All issues have appropriate labels
- [ ] Project board is created
- [ ] Issues are linked to project board
- [ ] Columns are properly set up

## Notes

- The USER_STORIES.md file contains the complete text for all issues
- Issues can be created in any order
- Consider adding milestone dates for sprint planning
- Assign issues to team members as needed
- Add issue dependencies where applicable
