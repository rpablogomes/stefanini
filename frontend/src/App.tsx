import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes.json";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          const Page = require(`./pages/${route.page}/${route.page}`).default;
          return <Route key={index} path={route.path} Component={Page} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
