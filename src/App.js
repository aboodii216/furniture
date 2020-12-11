import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Header from './components/header/Header';
import SideMenu from './components/sideMenu/SideMenu';
import { MenuProvier } from './Context/menuContext';
import TopNav from './components/header/topNav/TopNav';
import { TopMenuProvier } from './Context/topMenuContext';
import SideMenuFromTop from './components/sideMenu/SideMenuFromTop';
import About from './components/about/About';
import Gallery from './components/gallary/Gallery';
import Special from './components/special/Special';
import Tetimonials from './components/testimonials/Tetimonials';
import Brands from './components/brands/Brands';
import Contact from './components/contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import Footer from './components/footer/Footer';
import { ThemeProvider, ThemeStyle } from './Context/darkMode';

function App() {
  const themeStyle = useContext(ThemeStyle)
    

  let theme = {}
  
  if(themeStyle.themee === "light"){
    theme = {
      background: "#FFF",
      color: "#1F1F25"
    }
  }
  else {
    theme = {
      background: "#1F1F25",
      color:"#FFF"
    }
  }
  return (
    <Router>
      <Link to="/furniture">
        <div className="App text-capitalize" style={theme}> 
        <TopMenuProvier>
          <TopNav />
          <SideMenuFromTop />
        </TopMenuProvier>
        <MenuProvier>
          <Header />
          <SideMenu />
        </MenuProvier>      
        <About />
        <Gallery />
        <Special />
        <Tetimonials />
        <Brands />
        <Contact />
        <Footer />
        <ScrollToTop smooth top color={themeStyle.themee === "light" ?  "white": "#1F1F25"} style={{
          width:"50px",
          height: '50px',
          borderRadius: '50%',
          background : themeStyle.themee === "light" ?"#1F1F25": "white"
        }} />
      </div>
      </Link>
      <Switch>
        <Route path="/furniture">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

function AppWithContext(){
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default AppWithContext;
