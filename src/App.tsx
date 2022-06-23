import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Container/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LawyerRegister from "./Container/Lawyer/Pages/Register/Register";
import CareGiverRegister from "./Container/CareGiver/Pages/Register/Register";
import About from "./Container/Pages/About/About";

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path={'/'} element={
                        <React.Fragment>
                            <Header />
                            <Home />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/about'} element={
                        <React.Fragment>
                            <Header />
                            <About />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/lawyer/register'} element={
                        <React.Fragment>
                            <Header />
                            <LawyerRegister />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/caregiver/register'} element={
                        <React.Fragment>
                            <Header />
                            <CareGiverRegister />
                            <Footer />
                        </React.Fragment>
                    } />
                </Routes>
            </Router>
        </React.Fragment>
    );
};
export default App;