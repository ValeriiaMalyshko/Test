import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UsersList from "./pages/tweets/UserList";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
