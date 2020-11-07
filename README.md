# News.Your Way. 
A simple web app that allows users to read the scoop on entertainment, technology, and sports. 

## Table of Contents
* Technologies/Frameworks/Packages
* Features 
* Setup
* What's contained in each of my folder's?
* Troubleshooting

### Technologies/Frameworks/Packages
* React.js
* yarn
* React Analog Clock
* React Semantic-UI (used for most UI, i.e buttons and formatting)
* React Type-It (used for typewriter animation)
* React Router-DOM
* NewsAPI from RapidAPI 
Note: There are some dependencies/technologies in package.json that are not mentioned here since I did not end up needing them in my development. 

### Features
* Landing page features the time in EST, options to choose news in entertainment, technology, or sports
* Users can search for pertaining news based on what topic they chose to read about
* Sleek, simple, fun, news reading application

![alt text](https://github.com/shambhavir/news-app/blob/master/sports.png)

### Setup
* Create a folder in your local directory where you would like to begin/run this project
* cd yourfolder
* yarn create react-app my-app
* yarn add analog-clock-react
* yarn add semantic-ui-react semantic-ui-css
* yarn add typeit
* yarn add react-router-dom
* Business API key is in my api.js file, which can be used for API calls (it is not my personal key, so fine to use)

### Folder Contents
* ####Build file contains code/files from npm build, when I prepared my application for deployment. Does not contain much pertaining code. 
* ####node_modules contains all node packages when I installed npm and yarn for creating my React application. 
   * Can check node/npm/yarn version you have (if already installed) by typing node -v or npm -v or yarn -v in your terminal
* ####protected-falls-74694: does not contain any pertinent information, build files from Heroku deployment.
* ####public contains index.html, favicon.png, and other similar files that are produced when creating a React app. I did not make any changes to these files.
* ####src contains all the code I wrote, which will contain pertinent information. 
* ####package.json and yarn.lock contain information on dependencies/packages I installed for my project

### Troubleshooting
* If you are not building this application and are viewing on Heroku:
    * If you have loading issues, try a different browser.
    * Specifically, if the page displays an "application error", try reloading the Heroku site after 1 minute, sometimes there is an outage/delay. 
    
Enjoy using my application! 






