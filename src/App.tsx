import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Container/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LawyerAuth from "./Container/Lawyer/Pages/Register/Register";
import CareAuth from "./Container/CareGiver/Pages/Register/Register";
import About from "./Container/Pages/About/About";
import ForgetPassword from "./Container/Auth/ForgotPassword/ForgetPassword";
import ResetPassword from "./Container/Auth/ResetPassword/ResetPassword";
import SearchLawyer from "./Container/Pages/SearchLawyer/SearchLawyer";
import LawyerProfile from "./Container/Pages/SearchLawyer/LawyerProfile/LawyerProfile";
import PrivacyPolicy from "./Container/Pages/PrivacyPolicy/PrivacyPolicy";
import { ToastContainer, Slide } from 'react-toastify';

const App = () => {
    return (
        <React.Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                transition={Slide}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Router>
                <Routes>
                    <Route path={'/'} element={
                        <React.Fragment>
                            <Header />
                            <Home />
                            <Footer />
                        </React.Fragment>} />
                    <Route path={'/about'} element={
                        <React.Fragment>
                            <Header />
                            <About />
                            <Footer />
                        </React.Fragment>} />
                    <Route path={'/search'} element={
                        <React.Fragment>
                            <Header />
                            <SearchLawyer />
                            <Footer />
                        </React.Fragment>} />
                    <Route path={'/privacy-policy'} element={
                        <React.Fragment>
                            <Header />
                            <PrivacyPolicy />
                            <Footer />
                        </React.Fragment>} />
                    <Route path={'/lawyer-profile'} element={
                        <React.Fragment>
                            <Header />
                            <LawyerProfile />
                            <Footer />
                        </React.Fragment>} />
                    <Route path={'/lawyer/register'} element={<React.Fragment>
                        <Header />
                        <LawyerAuth />
                        <Footer />
                    </React.Fragment>} />
                    <Route path={'/caregiver/register'} element={<React.Fragment>
                        <Header />
                        <CareAuth />
                        <Footer />
                    </React.Fragment>} />
                    <Route path={'/lawyer/login'} element={<React.Fragment>
                        <Header />
                        <LawyerAuth />
                        <Footer />
                    </React.Fragment>} />
                    <Route path={'/caregiver/login'} element={<React.Fragment>
                        <Header />
                        <CareAuth />
                        <Footer />
                    </React.Fragment>} />
                    <Route path={'/forgot-password'} element={<ForgetPassword />} />
                    <Route path={'/reset-password'} element={<ResetPassword />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
};
export default App;