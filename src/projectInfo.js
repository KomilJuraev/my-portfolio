const projects = [
    {
        id: 1,
        projectTitle: "Personal Website",
        projectImg: "./images/Screenshot 2022-04-27 174236.png",
        description: "This website is a personal portfolio website. It showcases my skills and accomplishments. It lists my technical skills and areas of expertise.",
        githubrepo: "https://github.com/KomilJuraev/my-portfolio",
        websiteUrl: "#header"
    },
    {
        id: 2,
        projectTitle: "Calculator App",
        projectImg: "./images/calculator.png",
        description: "A simple calculator app that performs basic arithmetic operations and displays an error message if one or both of the input fields are empty. The app checks the inputs before performing the calculation and informs the user if the inputs are invalid.",
        githubrepo: "https://github.com/KomilJuraev/calculator-app",
        websiteUrl: "https://komiljuraev.github.io/calculator-app/"
    },
    {
        id: 3,
        projectTitle: "People Counter App",
        projectImg: "./images/people counter.png",
        description: "A people counter app is a software application that allows users to keep track of the number of people entering or exiting the location.",
        githubrepo: "https://github.com/KomilJuraev/people-counter-web-app",
        websiteUrl: "https://komiljuraev.github.io/people-counter-web-app/"
    },
    {
        id: 4,
        projectTitle: "Black Jack App",
        projectImg: "./images/blackJack.png",
        description: "A blackjack app is a digital version of the popular casino card game that allows players to experience the excitement of the game through the internet.",
        githubrepo: "https://github.com/KomilJuraev/black-jack-app/tree/main",
        websiteUrl: "https://komiljuraev.github.io/black-jack-app/"
    },
    {
        id: 5,
        projectTitle: "Chrome Extension",
        projectImg: "./images/chromeExt.png",
        description: "Chrome extension that allows you to save important links for reviewing them later.",
        githubrepo: "https://github.com/KomilJuraev/chrome-extension",
        websiteUrl: "https://komiljuraev.github.io/chrome-extension/"
    },
        {
        id: 6,
        projectTitle: "Shopping List",
        projectImg: "./images/Shopping-list-pic.png",
        description: "The shopping list app allows users to create multiple lists, add item prices, and calculate the total cost at the end. It also allows users to delete lists and go back to previous purchase history for easy tracking and organization.",
        githubrepo: "https://github.com/KomilJuraev/Shopping-List",
        websiteUrl: "https://komiljuraev.github.io/shopping-list-app/"
    },
    {
        id: 7,
        projectTitle: "Daily-Journal-APP",
        projectImg: "./images/daily-journal-img.png",
        description: "This website helps user to document his/her daily activities. Using this app user can add new post and update or delete existing posts. "
        + "This app is build using Node.js, express, mongoDB, mongoose and react. "
        + "Wait for a bit after opening the app for it to start on the server.",
        githubrepo: "https://github.com/KomilJuraev/Daily-Journal",
        websiteUrl: "https://mern-daily-journal-frontend.onrender.com/"
    },
    {
        id: 8,
        projectTitle: "Book-Store-App",
        projectImg: "./images/Book list screenshot.png",
        description: "This is fullstack bookstore app. Stor owner can add new books, edit existing book, or delete ana update the status of the book."
        + " Also user will be able to see more information about the book by clicking more info icon. It is fullstack app. Developed using"
        + " Node.js, express, mongoDB, mongoose and react."
        + "Wait for a bit after opening the app for it to start on the server.",
        githubrepo: "https://github.com/KomilJuraev/Book_Store",
        websiteUrl: "https://mern-book-store-frontend.onrender.com/books"
    },
    {
        id: 9,
        projectTitle: "Login-App",
        projectImg: "./images/loginapp.png",
        description: "This is fullstack login app. This app allows user to create new account using signup function and user will be able to login"
        + " to the application using valid credentials. Also this app implements jwt to create token to communicate between backend and front end"
        + " and once the token is expired, user will be logged out automatically.",
        githubrepo: "https://github.com/KomilJuraev/Login-App",
        websiteUrl: "https://mern-login-frontend.onrender.com/"
    },
    {
        id: 10,
        projectTitle: "TopSecret",
        projectImg: "./images/topSecretProject.png",
        description: "This is fullstack login app that helps user keep secrets. Once the use successfully register with the application and logs in, user will be able to "
        + "add secrets and only this user will be able to see the secret everytime user logs into the application. Logic of the application is similar with login-app, "
        + "which implements jwt to wait until token expires or user logs out to log out the user. One of the difference of this application from login-app is that "
        + "I am using postGres database to store user data insteag of mongoDB.",
        githubrepo: "https://github.com/KomilJuraev/TopSecret",
        websiteUrl: "https://top-secret-fronend.onrender.com/"
    },
];

export default projects;