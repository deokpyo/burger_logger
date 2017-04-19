# Burger logger app using Node & Express & Handlebars #
### Overview ###

**Eat-Da-Burger!** is a restaurant app that lets users input the names of burgers they'd like to eat. This application is built with **MySQL**, **Node**, **Express**, **Handlebars**, **ORM** and **MVC design pattern**. Node and MySQL are used to query and route data, and Handlebars to render HTML pages.

1. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
2. Each burger in the waiting area also has a ``DEVOUR`` button. 
3. When the user clicks it, the burger will move to the right side of the page.
4. The application stores every burger in a database, whether devoured or not.
- - - -
### Directory Structure ###
```
burger_logger
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
- - - -
### Preview ###
![picture alt](./preview.png?raw=true "Preview")
- - - -
**Live application** [Demo Link](https://burger-logger.herokuapp.com)