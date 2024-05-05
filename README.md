# Express-o

The title is a play on the word _espresso_, which is commonly mispronounced as _ex-press-o_, and embodies what I hope this app will acheive: an _express_ path into the world of coffee.

## Overview

This app is to help users learn about different types of coffee varieties and coffee drinks. Users can create a profile, then take a quiz to receive recommendations for a variety of coffee and coffee drink based on their preferences.

### Problem

When coffee is brought up in a casual conversation, most people don't even know that there are different roast levels (i.e. light, medium, dark, etc.). They know that there are different brands of coffee, and some may know about different roast levels, but that is usually the limit of their knowledge. As an avid coffee lover, I want to create an app that is easy to use and provides guidance for people who have no knowledge about coffee, and would like to explore the wonderful world of coffee. When I first started my coffee journey, there weren't any sites that had the functionality that I wanted, and I learned most of what I know from watching hours of Youtube videos. I hope Express-o is able to make this hobby more accessible to those who may not want to go down the rabbit hole, but want to learn just enough to appreciate coffee at a deeper level.

### User Profile

Anyone with an interest in coffee can use the app. They will be able to access the app on any device.

### Features

- Users can browse through the app to learn about coffee, such as origins, varieties, flavours, etc.
- Quiz to determine their preferences for coffee (i.e. nutty vs fruity, sour vs rich, etc.), where at the end they are given a recommendation for a type of coffee
- Quiz to determine their preferences for coffee drinks (i.e. hot vs cold, milk vs water, etc.), where at the end they are given a recommendation for a coffee drink
- Users can create a profile to save their preferences and recommendations
- Creating a profile & taking the quizzes are optional

## Implementation

### Tech Stack

- HTML
- Tailwind CSS
- Daisy UI
- React
- Node
- Express
- Knex
- mySQL

### APIs

All APIs are contained in the backend server.

### Sitemap

Home Page

- Not much will be here, only the app name, logo, and navigation

Sign up/log in Page

Profile Page

- Displays user information i.e. name, preferences, etc.

Beans Page

- This page will have information about coffee in general
- One card for each type/variety of coffee
- Clicking on a card will navigate to detailed information about that coffee

Drinks Page

- This page will have information about different types of coffee drinks
- One card for each drink
- Clicking on a card will navigate to detailed information about that drink

Quiz Page

- 2 options, either beans or drinks
- Clicking on either option will navigate to the appropriate quiz
- Users will be shown a recommendation at the end, where they can click the card to learn more

### Mockups

Primary colors:

- White #fdfdfb
- Beige #f7eedd
- Medium Brown #946947
- Brown Black #3a2728

Secondary colors:

- Light Brown #c59567
- Dark Brown #482c28
- Black #2b2728
- Red #ad253e

![rough mockup drawing](mockup.JPG)

### Data

Coffee table:

- coffee_id (primary key)
- coffee_type
- history
- countries
- acidity
- flavor
- roast_profile

Quiz Questions table:

- question_id (primary key)
- question
- type (i.e. coffee_preferences or drink_preferences)

Quiz Response table: each response is associated with a quiz question

- response_id (primary key)
- question_id (foreign key)
- options

User Preferences table: each user preference is associated with a user

- user_id (primary and foreign key)
- preference_type (i.e. coffee_flavour, drink_type)
- preference_value (i.e. nutty, fruit, hot, cold, etc.)

### Endpoints

Coffee endpoints:

- GET coffee : fetch all coffee information
- GET coffee/:id : fetch information for one type of coffee

- https://coffeeapi-doc.com

Quiz endpoints:

- GET quiz/questions/:type : fetch quiz questions for quiz type (i.e. coffee or drinks)
- POST quiz/responses : submit quiz responses
- GET quiz/recommendation ; fetch recommendations based on responses

Auth endpoints:

- POST auth/register : register new user
- POST auth/login : existing user log in and generate auth token
- GET auth/user : fetch user details
- GET auth/logout : invalidate auth token

User endpoints:

- GET user/profile : fetch user profile information
- PUT user/profile : update user profile information
- GET user/preferences : fetch user preferences
- POST user/preferences : save user preferences
- PUT user/preferences : update user preferences

### Auth

Auth will be added if time permits. Users can create a profile and log in using a username and password. JSON Web Tokens will be used for authentication.

## Roadmap

Build structure of the app

- Create React app, generate all required assets for the project, build out file structure for front end (2)
- Create backend using Node, build out file structure for back end (2)

Build the back end

- Create PostgreSQL database (3)
- Use Knex.js migrations to create table for storing information in the database (5)
- Create API endpoints using Express.js (5)

Build the front end

- Create structure for each page and component (5)
- Map out routes and paths for each page & components (2)
- Use Axios to make requests to backend (3)
- Implement logic to handle form submissions and process data returned from the backend (5)

Handle user authentication (3)

## Nice-to-haves

- Users can create a profile and log in using a username and password. JSON Web Tokens will be used for authentication.
- Deeper dive into grinders, grind size, brewing methods, temperatures, etc.
- Map to find coffee shops near you
