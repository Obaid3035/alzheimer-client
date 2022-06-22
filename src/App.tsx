import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Container/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LawyerRegister from "./Container/Auth/Register/Register";

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
                    <Route path={'/lawyer/register'} element={
                        <React.Fragment>
                            <Header />
                            <LawyerRegister />
                            <Footer />
                        </React.Fragment>
                    } />
                </Routes>
            </Router>
        </React.Fragment>
    );
};

export default App;
