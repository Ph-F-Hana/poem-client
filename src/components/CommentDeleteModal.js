import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';

const Commentdeletemodal = (props) => {
  const { deleteComment } = useContext(PoemsContext);
  const { show, setShow, poemId, comment, profileId } = props;
  
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this comment ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={(e) => {
          deleteComment(e, poemId, comment._id);
          setShow(false);
        }}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Commentdeletemodal;
