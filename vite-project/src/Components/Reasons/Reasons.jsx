import React from "react";
import "./reasons.css";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";

function Reasons() {
  return (
    <div className="reasons" id="reaonsId">
      <div className="leftHand">
        <img src={image1} alt="Body Images1" />
        <img src={image2} alt="Body Images2" />
        <img src={image3} alt="Body Images3" />
        <img src={image4} alt="Body Images4" />
      </div>
      <div className="rightHand">
        <span>Some Reasons</span>
        <div>
          <span className="strokeText">why</span>
          <span> choose us?</span>
        </div>

        <div className="detailsRightSide">
          <div>
            <img src={tick} alt="Tick icon"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="Tick icon" />
            <span>TRAIN SMARTER AND FASTER THEN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="Tick icon" />
            <span>FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="Tick icon" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="spanWord">OUR PARTNERS</span>
        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
}
export default Reasons;
