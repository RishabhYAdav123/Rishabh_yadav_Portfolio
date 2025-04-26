import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishabh Yadav </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I am currently pursuing a BTech at PSIT Kanpur.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> listening to music
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Smiling is the best reaction in all critical situations!"{" "}
          </p>
          <footer className="blockquote-footer">Rishabh Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
