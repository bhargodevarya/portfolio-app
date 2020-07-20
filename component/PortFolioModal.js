import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PortFolioModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClick}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.designation} At {props.org}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.longDesc}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PortFolioModal;
