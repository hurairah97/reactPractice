import { useState } from "react";
import ModalShow from "../Modal/ModalShow";

function Todo(props) {
  const [openModal, setModal] = useState(false);

  const Delete = () => setModal(true);
  const hideModal = () => setModal(false);

  return (
    <div className="card col-3 mt-4 p-4">
      <h4>{props.text}</h4>
      <div className="actions mt-2">
        <button className="btn btn-danger" onClick={Delete}>
          Delete
        </button>
      </div>
      {openModal ? (
        <ModalShow showModal={Delete} closeModal={hideModal} todoName = {props.text} hideTodo = {props.hide}/>
      ) : null}
    </div>
  );
}
export default Todo;
