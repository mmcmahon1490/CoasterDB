# CoasterDB

# Overview
## Roller Coaster DB is a tool for the coaster enthusiast community. Something most coaster enthusiasts want to do is track their "credits" - which coasters they've been on, where those coasters are, and how many they've ridden. Roller Coaster Database can help with that. On this site, users will be able to look up coasters by park and view information about individual roller coasters. They will also be able to edit any information that may be incorrect, as well as adding new coasters when they open, and deleting coasters as they become defunct. 


# MVP

  Users will be able to:
- Search for specific parks
- View a list of that park's roller coaster lineup
- Search for specific roller coasters
- View information about individual roller coasters
- Edit existing roller coasters
- Add new roller coasters
- Delete defunt roller coasters



## Goals
- Get to post-MVP for the first time in this cohort
- Create an attractive, funcional website
- Get more comfortable with React, Ruby, Rails, all the languages involved

## Libraries and Dependencies

Library	          Description
React             for the basic layout of the site
React Router      so that the navigation goes smoothly
Ruby on Rails     to create an interactive database


## Client (Front End)
Wireframes
Desktop: https://wireframe.cc/pro/pp/5f536f666385111
Tablet: https://wireframe.cc/pro/pp/0c275909e385109
Phone: https://wireframe.cc/pro/pp/468eea82f385114


## Component Tree

https://whimsical.com/RvR2TAUgGsXfP5KHUZQqpa

## Component Hierarchy

src
|__ assets/
      |__ fonts
      |__ images
|
|__ components/
      |__ Header.jsx
      |__ CoasterCards.jsx
      |__ Parks.jsx
      |__ ReviewForm.jsx
      |__ Reviews.jxs
      |__ SearchBar.jsx
      |__ SearchResults.jsx
      |__ shared
          |__ Footer.jsx
          |__ HomeLayout.jsx
          |__ Layout.jsx
          |__ Nav.jsx
|
|__ screens/
    |__ Home.jsx
    |__ CoasterDetails.jsx
    |__ CoasterCreate.jsx
    |__ ParkCard.jsx

|          
|__ services
    |__ api-config.js
    |__ coasters.js
    |__ parks.js


## Component Breakdown

Component	      Type	      state	  props	  Description
CoasterCards    class       y       y       CoasterCards will display clickable pathways to information about individual coasters
CoasterCreate   functional  n       n       CoasterCreate will allow the user to create a new entry
CoasterDetails  class       y       n       CoasterDetails will display information about a specific coaster
Footer          functional  n       n       Footer will show info about the site and dummy contact information
Header          functional  n       n       The header will contain navigation and a site logo
Home            functional  n       y       Will show the main layout, as well as a random sampling of a picture
Nav             functional  n       n       Nav will display features such as the search bar
Parks           class       y       n       Parks will display the parks available for selection
Reviews         class       y       n       Reviews will display review information about the ride
ReviewForm      functional  n       n       ReviewForm will allow users to create a review of the ride
SearchBar       functional  n       n       SearchBar will allow the user to search for a specific coaster
SearchResults   class       y       y       SearchResults will display the coasters that match a given search query


## Time Estimates

Task	                                        Priority	Estimated Time	Time Invested	Actual Time
Create Basic Architecture                     H         7 hrs
Create Database                               H         3 hrs
Create CRUD Functionality                     H         3 hrs
Create Services (search, etc)                 H         2 hrs
Functional Components (Edit, Delete, etc)     H         4 hrs
Roadblocks                                    h         6 hrs
Render Data to Components (Cards, etc)        H         5 hrs
Create Reviews                                L         2 hrs
Styling                                       H         8 hrs
Other Features                                M-L       8 hrs
Deployment                                    H         2 hrs

TOTAL                                                   50 hrs		                                                           


## Server (Back End)
ERD Model: https://lucid.app/invitations/accept/7ef16794-d3d9-48c2-bf8e-a812dbbaccdc


## Post-MVP
- Create user login
- Allow users to keep their lists on the site, instead of creating it separately
- More robust search feature (sort by things like make and model)
- Review the coasters (starr rating and comments)
- Fill in any dummy sections/components with functionality

## Code Showcase

## Code Issues & Resolutions
