# Deploy Client & Server Within Single git repo

### Add remote for server & cliet
```
git remote add SERVER-REMOTE-NAME https://----HEROKU GIT SERVER APP GIT LINK
git remote add CLIENT-REMOTE-NAME https://----HEROKU GIT CLIENT APP GIT LINK
```

### Push the subfolders path to created remote
```
git subtree push --prefix server_folder SERVER-REMOTE-NAME master
git subtree push --prefix client_folder CLIENT-REMOTE-NAME master
```
**example**
```
git subtree push --prefix server heroku-server master
git subtree push --prefix client heroku-server master
```

### Show all git remote
```
git remote -v
```

### Git create branch with subtree
```
git subtree push --prefix client origin client   
```

### Better seprate the server and client into different git repo for better mangement
