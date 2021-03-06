# **myFlix App Client Side**

## **Objective**

To create the client-side component of a movie web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.

---
**To view the live app visit:**  
Netlify Link: https://myflix-app-react.netlify.app  
Use the following credentials, or register with your own profile  
- Username: TestUser  
- Password: TestUser

---

## **Essential Views and Features**

#### **Main View**

- Returns a list of ALL movies to the user (each listed item with an image, title, and description)
- Sorting and filtering
- Ability to select a movie for more details  
<a href="img/Main-View.png" target="_blank">View Sample of Main View</a>

#### **Single Movie View**
- Returns data (description, genre, director, image) about a single movie to the user
- Allows users to add a movie to their list of favorites  
<a href="img/SingleMovie-View.png" target="_blank">View Sample of Single Movie View</a>

#### **Login View**
- Allows users to log in with a username and password
- Registration view
- Allows new users to register (username, password, email, birthday)  


#### **Genre View**
- Returns data about a genre, with a name and description
- Displays example movies  
<a href="img/Genre-View.png" target="_blank">View Sample of Genre View</a>

#### **Director View**
- Returns data about a director (name, bio, birth year, death year)
- Displays example movies  
<a href="img/Director-View.png" target="_blank">View Sample of Director View</a>

#### **Profile view**
- Allows users to update their user info (username, password, email, date of birth)
- Allows existing users to deregister
- Displays favorite movies
- Allows users to remove a movie from their list of favorites  
<a href="img/Profile-View.png" target="_blank">View Sample of Profile View</a>

---

## **Built with**

- Visual Studio Code
- React
- React-Bootstrap
- React-Redux

---

## **Dependencies**

- "axios": "^0.21.1",
- "parcel": "^2.0.0-beta.3.1",
- "parcel-bundler": "^1.12.5",
- "prop-types": "^15.7.2",
- "react": "^17.0.2",
- "react-bootstrap": "^1.6.1",
- "react-dom": "^17.0.2",
- "react-redux": "^7.2.4",
- "react-router-dom": "^5.2.0",
- "redux": "^4.1.0",
- "redux-devtools-extension": "^2.13.9"

---

### **How to run the app locally**
To build the project in the terminal, run `parcel src/index.html`  
Open webpage and use, `http://localhost:1234/`