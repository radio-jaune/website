# About Radio Jaune and the Git Flow

## The Git Worflow

At the Radio Jaune Cloud Team, We use `Git`, and the `Git Flow`, `AVH` Edition : https://github.com/petervanderdoes/gitflow-avh

> `WARNING`! : The Git Flow, `AVH Edition` :
> * is an Edition of the well known original Git Flow,
> * is THE only one to use : because it is the only one maintained by the community since years (so it's got a lot of improvement)
> * see https://github.com/petervanderdoes/gitflow-avh


## Initialiazing  the git flow in an empty repository

```bash
touch README.md
git add -A && git commit -m "init git flow" && git push -u origin master
git flow init --defaults
git push -u origin --all

```

## Work on a new feature

```bash

export FEATURE_ALIAS=improve-blue-button
git flow feature start ${FEATURE_ALIAS}

#
# now a new git branch exists on github.com, named feature/${FEATURE_ALIAS}
#

# then edit the source code files, and git commit them

git add -A && git commit -m "I did this and that in the src code" && git push -u origin HEAD

# then edit and commit again if necessary

# then you just create a PR

# then the collaborator who will validate or
# reject your PR, will "finish" the feature :

git flow feature finish ${FEATURE_ALIAS} && git push -u origin --all

# finishing the feature merges the feature branch into the develop git branch


```


## Work on a new bug fix



```bash
export BUGFIX_ALIAS=issue-67-non-responive-menu
# --- # --- # --- #
# same as features, but :

git flow bugfix start ${BUGFIX_ALIAS}

git flow bugfix finish ${BUGFIX_ALIAS}

# created and merged branch : [bugfix/issue-67-non-responive-menu]
```


## Make a new release

Only reserved to robots: no human will ever make a release.
