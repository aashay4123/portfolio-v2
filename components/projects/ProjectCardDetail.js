import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import { Router } from "../../routes";

const ProjectCardDetail = (props) => {
  const { isOpen, toggle, project } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{project.title}</ModalHeader>
        <ModalBody>
          <p>
            <b>Description: </b>
            {project.description}
          </p>
          <p>
            <b>language: </b>
            {project.language}
          </p>
          <p>
            <b>type: </b>
            {project.typeof}
          </p>

          <p>
            <b>Date: </b>
            {moment(project.Date).format("DD MMMM YYYY")}
          </p>
        </ModalBody>
        <ModalFooter>
          <a
            className="btn btn--green"
            onClick={(e) => {
              e.stopPropagation();
            }}
            target="_blank"
            href={`${project.url}`}
          >
            view
          </a>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProjectCardDetail;
