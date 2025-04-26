import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Kishan Kumar </span> 
          from <span className="purple">Gorakhpur, U.P, India.</span>
          <br /> I am currently working as a <span className="purple">Systems Engineer</span> at <span className="purple">Tata Consultancy Services (TCS)</span>.
          <br />
          Apart from coding, some other activities that I love to do!

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Netflix Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Observe the contrast between old and new Things !"{" "}
          </p>
          <footer className="blockquote-footer">Kishan Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;