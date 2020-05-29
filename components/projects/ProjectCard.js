import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";
import ProjectCardDetail from "./ProjectCardDetail";

const ProjectCard = (props) => {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    setisOpen(!isOpen);
  };

  const { project, children } = props;
  return (
    <span onClick={handleToggle}>
      <ProjectCardDetail
        toggle={handleToggle}
        project={project}
        isOpen={isOpen}
      />

      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">
          {project.title}
        </CardHeader>
        <CardBody>
          <p className="portfolio-card-city">{project.typeof}</p>
          <CardTitle className="portfolio-card-title">
            {project.language}
          </CardTitle>
          <CardText className="portfolio-card-text mb-psm">
            {project.description}
          </CardText>
          <div className="readMore">{children}</div>
        </CardBody>
      </Card>
    </span>
  );
};
export default ProjectCard;
