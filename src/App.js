import Button from "./components/UI/Button";
import Logos from "./components/Logos";
import Nav from "./components/Nav";

import Logo from './assets/logo.svg'; 
import HeroImageMobile from './assets/heromobile.png';
import HeroImageDesktop from './assets/herodsktp.png';
import classes from './App.module.css';
import './variables.css'; 

const App = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="Snap logo"/>
        </div>
        <Nav/>
      </header>
      <main>
        <div className={classes.heroImage}>
          <picture>
          <source
            media="(min-width: 700px)"
            srcSet={HeroImageDesktop}
          />
          <img
            src={HeroImageMobile}
            alt="Man on laptop"
          />
          </picture>
        </div>
        <div className={classes.textSection}>
          <h1>Make remote work</h1>
          <p className={classes.description}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Button bgColor='hsl(0, 0%, 8%)' color='hsl(0, 0%, 98%)' text='Learn more'/>
          <Logos />
        </div>
        
      </main>
    </>
  );
};

export default App;
