import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Research from "./Research/Research";
import Logs from "./Logs/Logs";
import Header from "./Header/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/movies" Component={Research} />
        <Route path="logs" Component={() => <Logs />} />
      </Routes>
    </Router>
  );
};

export default App;
