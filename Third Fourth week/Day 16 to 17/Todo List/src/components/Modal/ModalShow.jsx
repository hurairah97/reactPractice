import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalShow(props) {
  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete <span style={{ fontWeight: 'bold' }}>{props.todoName}</span> ?</Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="danger" onClick={props.hideTodo}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalShow;
