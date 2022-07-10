# Deploy Client & Server Within Single git repo

Add remote for server & cliet
```
git remote add SERVER-REMOTE-NAME https://----HEROKU GIT SERVER APP GIT LINK
git remote add CLIENT-REMOTE-NAME https://----HEROKU GIT CLIENT APP GIT LINK
```

Push the subfolders path to created remote
git subtree push --prefix server_folder SERVER-REMOTE-NAME master
git subtree push --prefix client_folder CLIENT-REMOTE-NAME master

example

show all git remote
git remote -v