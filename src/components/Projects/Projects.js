import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gesture from "../../Assets/Projects/gesture.jpg";
import loan from "../../Assets/Projects/loan.jpg";
import medical from "../../Assets/Projects/medical.jpg";
import airline from "../../Assets/Projects/airline.jpg";
import cat from "../../Assets/Projects/catdog.jpg";
import bigmartsale from "../../Assets/Projects/bigmart.jpg";

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
              imgPath={airline}
              isBlog={false}
              title="Airline-Satisfaction-Predictor"
              description="The Airline Satisfaction Predictor is a machine learning-based system designed to predict passenger satisfaction levels based on various factors such as flight experience, service quality, and personal preferences. This model analyzes structured customer feedback, flight details, and other key parameters to classify whether a passenger is satisfied or dissatisfied with their airline experience"
              ghLink="https://github.com/RishabhYAdav123/Airline-Satisfaction-Predictor"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigmartsale}
              isBlog={false}
              title="Big-Mart-sale-Predictor"
              description="The Big Mart Sale Predictor is a machine learning-based system designed to predict the sales of various products across multiple Big Mart stores. This predictive model analyzes historical sales data, product attributes, and store-related factors to estimate future sales, helping businesses optimize inventory, pricing, and promotions.My personal blog page build with Next.js and Tailwind Css"
              ghLink="https://github.com/RishabhYAdav123/Big_mart_sales_prediction"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Medical-Insurance_Predictor"
              description="The Medical Insurance Cost Predictor is a machine learning-based system that estimates the insurance premium a person needs to pay based on various factors such as age, BMI, smoking habits, and medical history. By analyzing these factors, the model helps insurance companies assess risks and allows individuals to understand potential insurance costs"
              ghLink="https://github.com/RishabhYAdav123/medical_insurance_prediction"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gesture}
              isBlog={false}
              title="Nexagestura"
              description="NexaGestura is a gesture-based system for controlling volume and brightness using hand movements. It uses OpenCV, MediaPipe, and Python to track gestures in real-time, providing a seamless, touch-free experience. No extra hardware is needed—just a webcam! Future plans include custom gestures and voice integration. 🚀."
              ghLink="https://github.com/RishabhYAdav123/Nexagestura"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat}
              isBlog={false}
              title="Cat-Dog Classifier"
              description="Cat-Dog Classifier is a deep learning model that classifies images as cats or dogs using Convolutional Neural Networks (CNNs). Built with TensorFlow, Keras, and OpenCV, it processes images, extracts features, and predicts with high accuracy. The model is trained on a labeled dataset and supports real-time classification. 🐱🐶🚀"
              ghLink="https://github.com/RishabhYAdav123/Cat_Dog_classification"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan}
              isBlog={false}
              title="Loan Approval Prediction"
              description="Loan Approval Prediction is a machine learning model that predicts loan approval based on applicant data. Built using Python, Scikit-Learn, Pandas, and Flask, it processes factors like income, credit score, and loan amount to classify approvals. It supports real-time predictions and can be integrated into financial systems. 💰📊🚀"
              ghLink="https://github.com/18Prachi/Loan-Approval-Prediction-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
