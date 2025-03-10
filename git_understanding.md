# Git Understanding

## Tried Merge Conflict:

(base) saicharan@Venkatas-MacBook-Pro SaiCharan99-intern-repo % git merge new-branch
Auto-merging new.txt  
CONFLICT (add/add): Merge conflict in new.txt  
Automatic merge failed; fix conflicts and then commit the result.

Resolved it using Git Desktop.

## Reflections

Merge conflicts happen when the same file is modified in different branches. Since Git is unsure which changes to keep when merging one branch with another, a conflict arises.

The Git Desktop client is an easy way to manage merge conflicts, as I tried, but it can also be resolved using VS Code (based on prior experience). This exercise helped me understand how to resolve merge conflicts and why they arise in the first place.

# Git Concept: Stagin vs committing

Observed the difference between staging and committing.  
`git add` is used to add a particular file and its changes to the staging area before committing. If a commit is attempted without staging, an error occurs: "Changes not staged for commit."

Staging and committing are separated to allow developers to review changes before committing them.

We might stage changes without committing when we want to batch commits logically instead of committing one by one or when we need to review changes before finalizing them.
