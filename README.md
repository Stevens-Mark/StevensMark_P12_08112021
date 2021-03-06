![SportSee](/src/assets/logo/sportsSee_logo.svg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5960d81c-ee20-4b01-b854-d1227e809ba0/deploy-status)](https://app.netlify.com/sites/sportsee2021/deploys)

# OPENCLASSROOMS PROJECT 12 

# SportSee

Open website at [Sportsee](https://sportsee2021.netlify.app/)

## Develop an analytics dashboard with React

At SportSee, a startup dedicated to sports coaching. In full growth, the company will launch a new version of the user's profile page. This page will allow the user to track the number of sessions completed as well as the number of calories burned.

## Objective
Work on the new user profile page of the site. Use the Figma mock-ups and the Kanban with the User Stories.. For this sprint, integrate the US of the TODO part (the rest will be in the next sprint).

- The goal is to redo the profile page with React.
- The project integrates graphics on the user's sport activity so use either D3 or Recharts. 
- Ensure the project can be read on screens of at least 1024 by 780 pixels (doesn't need to be responsive).
- Concerning the data, a backend using NodeJS is used (see installation details below). This allows HTTP calls to be made and to retrieve example data.
- For the management of the calls themselves, use either Fetch or Axios
- It is important that the calls are made outside of the React components.
- Create a separate service that will take care of making these calls.
- Start the project with data that you have mocked. As soon as your project is functional,  integrate the API.
- Finally, it is important that the project is documented so that everyone can work on it
- All your documentation must be done in English.


## Resources
- [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)
- [Kaban- User stories](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)
- Further information can be found in  the folder `SportSee Briefs`

## Skills

- [x] Produce technical documentation for an application
- [x] Ensure data quality of an application
- [x] Develop advanced graphical elements using JavaScript libraries
- [x] Interact with a Web service


# Installation *(English)*

## Prerequisites

- [NodeJS](https://nodejs.org/en/)  Version 16.13.0 
- [Yarn](https://yarnpkg.com/) Version 1.22.11
- [Visual Studio Code](https://code.visualstudio.com/) or another IDE of your choice

## Dependencies

- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) Version 5.2.0
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.7.2
- [Styled-components](https://styled-components.com/) Version 5.3.3
- [Recharts](https://recharts.org/en-US/) Version 2.1.6


## Installing and running the project

### First - Backend Api

- Clone the Backend Api onto your computer :  
`git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`
or :  
`git clone https://github.com/Stevens-Mark/P12-front-end-dashboard.git`

- Inside this repository, install the packages/dependencies : `yarn`

- Run the Backend Api, which will then listen on port 3000 by default : `yarn start`

You will see the message `Magic happens on port 3000` in the terminal window.


### Second - Frontend App

- Clone this repository onto your computer:

  `git clone https://github.com/Stevens-Mark/stevens_mark_p12_08112021-.git`

- Inside this repository, install the packages/dependencies: `yarn`

- Run the Frontend App: `yarn start`

- You will see the message :

  `? something is already running on port 3000.`
  `Would you like to run the app on another port instead >> (Y/n)`

- Answer: Y

The App normally runs on http://localhost:3001/

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

# OPENCLASSROOMS PROJET 12

# SportSee

Ouvrir le site web ?? [Sportsee](https://sportsee2021.netlify.app/)

## D??veloppez un tableau de bord d'analytics avec React

Chez SportSee, une startup d??di??e au coaching sportif. En pleine croissance, l???entreprise va lancer une nouvelle version de la page profil de l???utilisateur. Cette page va notamment permettre ?? l???utilisateur de suivre le nombre de sessions r??alis??es ainsi que le nombre de calories br??l??es.


## Objectif
Travailler sur la nouvelle page de profil utilisateur du site. Utiliser les maquettes Figma et le Kanban avec les User Stories . Pour ce sprint, int??grer l'US de la partie TODO (le reste sera dans le prochain sprint).

- L'objectif est de refaire la page de profil avec React.
- Le projet int??gre des graphiques sur l'activit?? sportive de l'utilisateur donc utiliser soit D3 soit Recharts. 
- S'assurer que le projet puisse ??tre lu sur des ??crans d'au moins 1024 par 780 pixels (pas besoin d'??tre responsive).
- En ce qui concerne les donn??es, un backend utilisant NodeJS est utilis?? (voir les d??tails de l'installation ci-dessous). Cela permet d'effectuer des appels HTTP et de r??cup??rer les donn??es de l'exemple.
- Pour la gestion des appels eux-m??mes, on utilise soit Fetch soit Axios.
- Il est important que les appels soient effectu??s en dehors des composants React.
- Cr??ez un service s??par?? qui se chargera d'effectuer ces appels.
- D??marrez le projet avec des donn??es que vous avez simul??es. D??s que votre projet est fonctionnel, int??grez l'API.
- Enfin, il est important que le projet soit document?? afin que tout le monde puisse travailler dessus.
- Toute votre documentation doit ??tre faite en anglais.


## Ressources

- [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)
- [Kaban- User stories](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)
- Vous trouverez plus d'informations dans le dossier `SportSee Briefs`.


## Skills

- [x] Produire de la documentation technique pour une application
- [x] Assurer la qualit?? des donn??es d'une application
- [x] D??velopper des ??l??ments graphiques avanc??s ?? l'aide de biblioth??ques JavaScript
- [x] Interagir avec un service Web


# Installation *(fran??ais)*


## Pr??requis

- [NodeJS](https://nodejs.org/en/)  Version 16.13.0 
- [Yarn](https://yarnpkg.com/) Version 1.22.11
- [Visual Studio Code](https://code.visualstudio.com/) ou un autre IDE de votre choix

## D??pendances

- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) Version 5.2.0
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.7.2
- [Styled-components](https://styled-components.com/) Version 5.3.3
- [Recharts](https://recharts.org/en-US/) Version 2.1.6


## Installation et ex??cution du projet

### Premi??rement - Backend Api

- Clonez l'Api Backend sur votre ordinateur :

  `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`
ou :
  `git clone https://github.com/Stevens-Mark/P12-front-end-dashboard.git`

- Dans ce d??p??t, installez les paquets/d??pendances : `yarn`

- Ex??cutez l'Api Backend, qui ??coutera sur le port 3000 par d??faut. : `yarn start`

Vous verrez le message `Magic happens on port 3000` dans la fen??tre du terminal.


### Second - Frontend App

- Clonez ce r??f??rentiel sur votre ordinateur :

  `git clone https://github.com/Stevens-Mark/stevens_mark_p12_08112021-.git`

- Dans ce d??p??t, installez les paquets/d??pendances : `yarn`

- Ex??cutez l'application frontale : `yarn start`

- Vous verrez le message :

  `? something is already running on port 3000.`
  `Would you like to run the app on another port instead >> (Y/n)`

- r??pondre: Y

L'application fonctionne normalement sur http://localhost:3001/


**Attention, actuellement seulement deux utilisateurs ont ??t?? simul??s. Ils ont respectivement les userId 12 et 18.**