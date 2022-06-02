# TRELLO LINK:
[Trello](https://trello.com/invite/b/ItmsD0U3/cd39cbf3790bb67814d83919ab05096d/bookmarkd-scrum)

# MEMBERS:
    Javier Delgado - Backend development (Routes, Merging) and Repo Owner
    Rich Clarke - Backend development (Routes) and Frontend Repo Owner
    Calvin Harris - Backend development (Pseudo code, MongoDb connection, README.md)
    Wendy Ochoa - Frontend development (Was sick and joined 06/01/2022)

# DEPENDENCIES:
    cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "mongoose": "^6.3.5",
    "morgan": "^1.10.0"

# MODELS:
    models/Bookmark.js

| ROUTE    |     METHOD     | PATH           |
|----------|:--------------:|:--------------:|
| INDEX    |  GET           | /bookmarks     |
| DESTROY  |  DELETE        | /bookmarks/:id |
| UPDATE   |  PUT           | /bookmarks/:id |
| CREATE   |  POST          | /bookmarks     |