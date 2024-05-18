import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import saathi from "../../Assets/Projects/saathi.png";
import bwall from "../../Assets/Projects/bwall.png";
import cnn from "../../Assets/Projects/cnn_hand.png";
import covid from "../../Assets/Projects/covid.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
  <ProjectCard
    imgPath={saathi}
    isBlog={false}
    title="Saathi"
    description={[
      "It is an AI powered agriculture utility platform.",
      "Implemented crop recommendation system and plant disease identification in a web platform.",
      "Used random forest for classification task with an accuracy of 99.7%.",
      "Implemented EfficientNetV2 image classification with an accuracy of 95.4%.",
      "Deployed webapp using Flask in a containerized environment using Docker."
    ]}
    ghLink="https://github.com/shashi7952/crop-recommendation"
    // demoLink="https://plant49-ai.herokuapp.com/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={bwall}
    isBlog={false}
    title="bWall"
    description={[
      " Created a 4chan like website where users can post images anonymously and comment on other users posts.",
      " Created the project with proper software development life cycle (SDLC) and performed backend unit testing",
    ]}
    ghLink="https://github.com/shashi7952/software-engineering"
    // demoLink="https://plant49-ai.herokuapp.com/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={covid}
    isBlog={false}
    title="CovidRecognizer"
    description={[
      " Created a image processing pipeline for biomedical image classification and segmentation.",
      "  Used image processing techniques such as CLAHE, binarization, dilation, etc.",
      "Implemented UNet for segmentation and achieved an accuracy of 82%."
    ]}
    ghLink="https://github.com/shashi7952/CovidRecognizer"
    // demoLink="https://plant49-ai.herokuapp.com/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={cnn}
    isBlog={false}
    title="Handwritten-Equation-Recognition"
    description={[
      " A WebApp for Solve Handwritten Equations using Convolutional Neural Networks.",
      "It works with any digit from 0-9 and the symbols +,-,x.",
      "White blackground and black digits are necessary."
    ]}
    ghLink="https://github.com/shashi7952/Handwritten-Equation-Solver"
    // demoLink="https://plant49-ai.herokuapp.com/"
  />
</Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
