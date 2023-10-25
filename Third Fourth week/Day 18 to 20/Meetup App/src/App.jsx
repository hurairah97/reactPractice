import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import MainNavbar from "./components/layout/MainNavbar";

function App() {
    return (
    <>
        <MainNavbar/>
        <Routes>
          <Route exact path="/" element={<AllMeetup />} />
          <Route  path="favourites" element={<Favourites />} />
          <Route  path='new-meetup' element={<NewMeetup />} />
        </Routes>
    </>
  );
}

export default App;
