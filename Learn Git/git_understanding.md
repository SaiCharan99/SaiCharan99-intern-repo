# Git Understanding

## Tried Merge Conflict

(base) saicharan@Venkatas-MacBook-Pro SaiCharan99-intern-repo % git merge new-branch
Auto-merging new.txt  
CONFLICT (add/add): Merge conflict in new.txt  
Automatic merge failed; fix conflicts and then commit the result.

Resolved it using Git Desktop.

## Reflections

Merge conflicts happen when the same file is modified in different branches. Since Git is unsure which changes to keep when merging one branch with another, a conflict arises.

The Git Desktop client is an easy way to manage merge conflicts, as I tried, but it can also be resolved using VS Code (based on prior experience). This exercise helped me understand how to resolve merge conflicts and why they arise in the first place.

## Git Concept: Staging vs Committing

Observed the difference between staging and committing.  
`git add` is used to add a particular file and its changes to the staging area before committing. If a commit is attempted without staging, an error occurs: "Changes not staged for commit."

Staging and committing are separated to allow developers to review changes before committing them.

We might stage changes without committing when we want to batch commits logically instead of committing one by one or when we need to review changes before finalizing them.

## Git Concept: Branching & Team Collaboration

Pushing directly to `main` is problematic as it bypasses the review process and increases the risk of bugs. Additionally, `main` is meant to be a stable version of the software, so new changes should be handled in a separate branch. Only after ensuring that the changes are stable and free of bugs should they be merged into the `main` branch.

Branches help with reviewing code through pull requests. When merging a sub-branch into `main`, we can see all the new changes. If any bugs arise, we know these changes are the cause and can focus on fixing them.

If two people edit the same file on different branches, Git will try to merge the changes automatically, but if the changes overlap, a merge conflict happens. Then, we need to manually resolve the conflict before merging.

## Git Concept: Advanced Git Commands

### `git checkout main -- <file>`

Restores a specific file from `main` without affecting other file changes in the current branch.  
Useful when you've made a lot of unwanted changes to a particular file and want to restore it.  
Surprising: How quick and easy it is to restore just one file with a single command.

### `git cherry-pick <commitCode>`

Applies a specific commit’s changes to the current branch.  
Useful when working in a team and you want to pick another person's commit to check in your branch.  
Surprising: It only applies the selected commit's changes, and those changes immediately reflect in the files.

### `git log`

Displays the commit history of a repository.  
Useful for tracking changes and identifying what might have caused an issue.  
Surprising: The amount of detailed information it provides in the terminal.

### `git blame <file>`

Shows information on who modified each line of a file and when.  
Helps to track which change might have caused an issue.  
Surprising: The level of detail it provides for even each line of code.

## Git Concept: Git Bisect

Bisect can be used when we know a bug has been introduced but do not know the exact commit. We check and mark commits as either good or bad to identify the exact commit that caused the issue.

Bisect is faster because it eliminates the manual task of checking all intermediate commits and uses binary search to pinpoint the exact commit efficiently.

## Git Concept: Meaningful Commit

A good commit message is concise and self-explanatory. It provides clarity and makes debugging easier. Unclear and ambiguous commit messages can hinder team performance by making it difficult to find commits if issues arise and make it tougher to go back through commits.

## Git Concept: Pull Requests

PRs ensure collaboration, code review, and quality control, preventing bugs and maintaining code quality before merging. They improve team communication and help track changes.

A good PR has a clear title, focused changes, relevant issue links, testing details, and meaningful commit messages for better review and understanding.

Reviewing an open-source PR shows best practices in code quality, problem-solving, and collaboration, helping improve both technical and communication skills.
