import { useState } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import './App.css'
import LoginPage from './components/LoginPage'
import store  from "./store/store";
import Layout from "./components/Layout";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

function App() {

  return (
    <>
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}
        </Route>
        </Routes>
      </Router>
      {/* <LoginPage/> */}
      </Provider>
    </>
  )
}

export default App
