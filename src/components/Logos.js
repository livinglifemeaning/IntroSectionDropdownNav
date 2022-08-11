import Databiz from "../assets/databiz.svg";
import Audiophile from "../assets/audiophile.svg";
import Meet from "../assets/meet.svg";
import Maker from "../assets/maker.svg";

import classes from "./Logos.module.css";

const Logos = () => {
  return (
    <div className={classes.logos}>
      <span>
        <img src={Databiz} alt="Databiz logo" />
      </span>
      <span>
        <img src={Audiophile} alt="Audiophile logo" />
      </span>
      <span><img src={Meet} alt="Meet logo" /></span>
      <span><img src={Maker} alt="Maker logo" /></span>
    </div>
  );
};

export default Logos;
