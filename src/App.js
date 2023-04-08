import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/common/heading/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Team from './components/team/Team'
import Price from './components/pricing/Price'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'

function App() {
  return (
   <>
   <Router>
   <Header/>
    <Routes>
    <Route path="/" element={<Header/>}></Route>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/courses" element={<CourseHome/>}></Route>
    <Route path="/team" element={<Team/>}></Route>
    <Route path="/pricing" element={<Price/>}></Route>
    <Route path="/journal" element={<Blog/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default App;