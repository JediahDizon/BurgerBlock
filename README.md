
![Burger Block](https://github.com/JediahDizon/BurgerBlock/blob/master/doc/Logo.png "Logo")

# Burger Block
A new Burger joint in town has opened and needs a web=based front-end to process online orders for customers.

## Table of Contents
- [Documentation](#documentation)
- [Install](#install)
- [IDE](#ide)
- [Security](#security)
- [Contribute](#contribute)

## Documentation
### Overview
This is a front-end web application that is able to display a menu of burgers in the Burger Block restaurant, as well as
manage orders made by users, the kind which allows online ordering. Users are also capable of making their own custom
burger if they wish to do so. The application uses AngualrJS to manage all front-end functionalities.

![Wireframe](https://github.com/JediahDizon/BurgerBlock/blob/master/doc/Wireframe.png "Wireframe")

### Project Requirements
![Project Requirements](https://github.com/JediahDizon/BurgerBlock/blob/master/doc/Requirements.png "Project Requirements")

### Design Decisions
1. Node JS is used to serve the front-end web application.
2. Hard Coded burger data (e.g. Types of vegetables, sauces, and meal).
3. HTML5 Local Browser Storage is used to store order data.

The aspect of this project that interest me the most is the fact that the application requirements includes 
management of burger orders, displaying different burger offerings like different sizes, combo meals, and sandwiches, 
all of which <b>requires a database back-end</b> that stores all these necessary information. However, the project 
requirements states that this project must be implemented in React JS/Angular JS, both of which aren't in the
same realm of storing information like a databases does. I was intrigued on figuring out just how I can approach this project.

Basically, what I have to do is to implement a robust front-end web application but somehow expected to add functionalities
that needs a database, without actually having access to a database. I don't believe this is possible nor practical unless 
handcoding is considered okay. In that case, it gives the impression that this application isn't aimed to be robust, 
which I don't think is the case.

The requirements also states that I must use a public API for order management. I'm not exactly sure what kind of API 
the project requirements expect. There are tons of APIs, all of which caters to a very specific use case and expects
real data. Considering the scope of this project, I don't believe I am able to grab hold of real data and introduce it to
an API that specializes in management of burger orders. I am more than capable of handling REST API from both back-end 
and front-end like getting weather data from OpenWeatherMap and posting to a MongoDB database, as well as make my own REST API 
with the help of a server, but finding an API that specifically serves Hamburger data coupled with an order manager is just 
not very practical. In scenarios like these, it is expected for the programmer to manually implement the back-end designed 
specifically for the project requirements.

### Dependencies
- [Node JS](https://nodejs.org/en/) - Node JS with Express is used to serve the web application.
- [AngularJS](https://angularjs.org) - Angular JS v1.6.4 is the framework that the web application runs in.
- [MD Bootstrap](https://mdbootstrap.com) - Bootstrap 4 coupled with Material design is used to make the website look clean and responsive.

### Database Schema
This is a front-end web application and the requirements does not expect a back-end/database implementation. However, due to
the nature of the requirements, a form of data storage is needed, so the web application takes advantage of the browser's
local storage to save data like "Order History."

![Database Schema](https://github.com/JediahDizon/BurgerBlock/blob/master/doc/Database Schema.png "Database Schema")

## Install
- Install Node JS in the link provided above
- Navigate to the root of the project
- Using a command line, type in `node app.js`
  - This will serve the Angular JS web application using Node JS
- Using your browser, you are able to use the web application in this link: `http://localhost:3000`

### Sample Run
#### Create Your Own Burger
![Create Your Own Burger](https://github.com/JediahDizon/BurgerBlock/blob/master/doc/Sample Run/Create.png "Create Your Own Burger")

#### My Cart
![My Cart](https://github.com/JediahDizon/BurgerBlock/blob/master/doc/Sample Run/My Cart.png "My Cart")

## IDE
Any IDE would work on this project by importing it as a "Generic Project."

## Security
Considering the scope of this project and the time limit of the project, security is not implemented in the application.

## Contribute
PRs accepted.
