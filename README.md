
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

### Design Decisions
![Project Requirements](https://github.com/JediahDizon/BurgerBlock/blob/master/doc/Requirements.png "Project Requirements")

The aspect of this project that interest me the most is the fact that the application requirements includes 
management of burger orders, displaying different burger offerings like different sizes, combo meals, and sandwiches, 
all of which <b>requires a database backend</b> that stores all these necessary information. However, the project 
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
and front-end like getting weather data from OpenWeatherMap and posting to a MongoDB database, but finding an API that 
specifically serves Hamburger data coupled with an order manager is just not very practical. In scenarios like these, 
it is expected for the programmer to manually implement the backend designed specifically for the project requirements.

### Dependencies
- [Node JS](https://nodejs.org/en/) - Node JS with Express is used to serve the web application.
- [AngularJS](https://angularjs.org) - Angular JS is the framework that the web application runs in.

### Database Schema
This is a front-end web application and the reuqirements does not expect a backend/database implementation.

## Install
- Install Node JS in the link provided above
- Navigate to the root of the project
- Using a command line, type in `node app.js`
  - This will serve the AnguleJS web application using Node JS
- Using your browser, you are able to use the web application in this link: `localhost:3000`

### Sample Run


## IDE
Any IDE would work on this project by importing it as a "Generic Project."

## Security
Considering the scope of this project and the time limit of the project, security is not implemented in the application.

## Contribute
PRs accepted.
