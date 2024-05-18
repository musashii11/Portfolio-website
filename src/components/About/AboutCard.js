import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashi Kumar </span>
            from <span className="purple"> Kanpur, UttarPradesh, India.</span>
            <br />
            I am currently looking for full time opportunites for SDE and related roles.
            <br />
            I have completed Integrated B.Tech + M.Tech in Information technology (IT) at IIIT Gwalior.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing FPS Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The world is cruel but also very beautiful."{" "}
          </p>
          <footer className="blockquote-footer">AOT'13</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
