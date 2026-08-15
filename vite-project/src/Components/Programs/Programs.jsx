import React from "react";
import { Link } from "react-scroll";
import "./programs.css";
import RightArrow from "../../assets/rightArrow.png";
import { programsData } from "../../Data/programData";

function Programs({ onSelectProgram }) {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category" key={program.heading}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <Link
              to="join-us"
              spy={true}
              smooth={true}
              offset={-100}
              className="join-now"
              onClick={() => onSelectProgram(program.heading)}
            >
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
