"use strict";

// External Dependencies
import React from "react";

// Internal Modules
import HomePage from "./HomePage.js";
import CreateUserPage from "./CreateUserPage.js";

const App = () => {
  // Give App a variable called currentPage and a setter for that variable called setCurrentPage.
  // The default value is "HomePage".
  const [currentPage, setCurrentPage] = React.useState("Home");

  // Superfluous? Could we just pass setCurrentPage?
  // This function is made available to the components representing pages to be rendered.
  /*const navigateTo = (page) => {
    setCurrentPage(page);
  };*/

  // The value of currentPage determines which page component will be rendered.
  const renderContent = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage navFunction={ setCurrentPage } />;
      case "CreateUser":
        return <CreateUserPage navFunction={ setCurrentPage } />;
      default:
        return null;
    }
  };

  return renderContent();
};

export default App;
