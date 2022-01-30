import React, { useContext } from 'react';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import PoemsContext from '../utils/PoemsContext';


const Commenteditmodal = (props) => {
  const { editComment } = useContext(PoemsContext);
  const { show, setShow, poemId, comment, profileId } = props;
  console.log({ comment });

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editComment(e, poemId, comment._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Comment
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="comment" defaultValue={comment.comment} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={(e) => setShow(false)}>
            Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default Commenteditmodal;
