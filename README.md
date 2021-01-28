# Martin's Movies

##### By:
#### Shelby El-rassi | [GitHub](https://github.com/Shelby219) |

---

<div style="width:70%; margin: 0 auto;"><img src="./docs/movies.jpg"/></div>

---

#### Brief

Martin's Movies is a client who reviews movies online. They have moved all of their movies to an online movie database which is only accessible via an API.

They need to:
- build a new listing page to pull all data from their new database
- allow customers to search by different movie attributes which are:
- Keyword
- language (English or Other)
- year
- mark a movie as 'watched' so when they open the listing page again in the same browser it will still be marked as 'watched'

Martin's Movies would like to link the Read More button for each movie off to the IMDB page if the imdb_id is set for a movie.

He would like the design to match a theme he liked but make all make all links a dead link (eg x) for now:

http://klbtheme.com/movify/movie-grid-3/

Deliverables:
- a ReactJS App broken up as you see fit
- feel free to use Redux for state management if need be
- feel free to use any supporting libraries (NPM/Bower)

We are using The Movie Database which is located here:

https://developers.themoviedb.org/3/getting-started/introduction


-----
#### User Stories

* As a user:
    * I can go to the home page and search for movies by:
        * Keyword
        * language (English or Other)
        * year

    * I will be taken to the search page after typing a valid parameter and clicking search.
    I will be taken to a no results page after typing an invalid parameter and clicking search.
    * I can mark a movie as watched.
    * I can unmark a movie as watched.
    * I will be able to click a "Read More" button on a movie listing on the results page and be taken to IMBD if ID present.


-----

#### Target Audience

**Key Demographics**
* **Gender**: Anyone.
* **Age**: 18-50.
* **Family status**: Single, couple or family.
* **Profession**: Students, professionals, homemakers, retired.
* **Language**: English for the site, but ability to search other options.
* **Main interests**: Movies, pop culture.

**Key Psychographics**
* Wants to find out if a movie is good before watching.
* Dislikes mediocre choices.
* Enjoys other opinions on movies.

**Challenges**
* Finds choosing movies difficult.
* Wants to keep track of movies watched.
* Would like to know movies that are available in languages other than English.

**Preferred Channels**
* Follows celebrity actors/actresses on social media.
* Searches for movies on Google.

**Preferred Content Types**
* Social media posts.
* Blogs.
* News Articles.

-----

#### Tech Stack

**Design and Planning**
* **Miro** - Wireframing.
* **xtensio** - Personas.
* **Framer** - Prototyping.
* **Lucid Chart**- Diagramming.

**Tech**
* **React 17.0.1** - An open-source, front end, JavaScript library for building user interfaces or UI components.
* **React-dom 17.0.1** - This package serves as the entry point to the DOM and server renderers for React.
* **React-router-dom 5.2.0** - React Router is a collection of navigational components that compose declaratively with your application, DOM bindings for React Router.
* **React-scripts 4.0.1** - includes scripts and configuration used by Create React App used to initiate the project.
* **React-redux 7.2.2** - Is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.
* **@reduxjs/toolkit** - Is the official, opinionated, batteries-included toolset for efficient Redux development, intended to be the standard way to write Redux logic. It includes utility functions and several Redux add ons.
* **Redux-thunk 2.3.0** - This middleware allows you to write action creators that return a function instead of an action. The inner function receives the store methods dispatch and getState as parameters.
* **Dotenv 8.2.0** -  This loads environment variables from a .env file into process.env.
* **React Styled Components** -
* **Material UI** - Is the most popular React framework, it enables using React components faster development or building a custom design.
* **HTML5**  - A markup language used for structuring and presenting content.
* **CSS3** - A style sheet language used for describing the presentation of a document
* **Axios** - Is a promise-based HTTP client that supports an easy-to-use API and can be used in both the browser and Node. js.
* **The Movie DB API** -

**Other**
* **Heroku**  - Is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud supporting several programming languages. This was used as our server deployment service.
* **GitHub** - Is a provider of Internet hosting for software development and version control using Git and it was my Version Control Host.


-----
#### Functionality/Features

* Home page
* Search for movies via keyword, language and year.
* View movie data via results page.
* Movie listing:
    * Title
    * Overview
    * Image
    * Vote average. eg 6/10
    * Year
* Mark movie as watched.
* Unmark movie as watched.
* "Read More" button linking to IMDB if ID present.
* If no IMDB id present no link.

-----

##### Wireframes

###### Mobile

###### Tablet

###### Desktop

-----

#### Prototypes


-----

#### DFD


-----


#### Implementation Plan

*
*



-----

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
