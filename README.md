# OC-Projet 12 - Développez un tableau de bord d'analytics avec React 

## SportSee
SportSee, a startup dedicated to sports coaching. In full growth, the company will launch today a new version of the user profile page. This page will allow the user to track the number of sessions and the number of calories burned.

![logo](file:///Users/ceciliabernard/Bureau/Exercices\ Formations/Formation\ Openclassrooms/projet12/src/assets/logo.svg)
⁩ 
## Install and run the projet

### With API

#### Install and Launch the back-end
* Clone this repository `git clone  https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`
* Install the dependencies with NPM `npm install`
* Launch the back end on PORT=3001 `npm start`

#### Install and Launch the front-end
* Clone this repository `git clone https://github.com/CeciliaBdev/OC-Projet12.git`
* Install the dependencies `npm install`
*Launch the front-end on PORT=3000 `npm start`

### With datas mocked
* Stop the back-end 
* Open theses files in the folder /components : ProfilPages.js, BarChart.js, LineChart.js, RadarChart.js, RadialBarChart.js
*Comment the line under // ** call API ** //
*Uncomment the line under // ** call dataMocked ** //
* The app turns with the data mocked !

## Possible endpoints
This project includes four endpoints that you will be able to use:

* http://localhost:3001/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
* http://localhost:3001/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
* http://localhost:3001/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
* http://localhost:3001/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

# Examples of queries

* http://localhost:3001/user/12/performance - Retrieves the performance of the user with id 12
* http://localhost:3001/user/18 - Retrieves user 18's main information.

