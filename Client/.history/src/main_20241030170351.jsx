import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Login from "./components/Login";

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Calendar />
      )}
    </div>
  );
}

export default Main;
