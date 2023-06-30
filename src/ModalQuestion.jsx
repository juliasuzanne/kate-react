import "./Modal.css";

export function ModalQuestion(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <div className="modal-main">
          <button className="modal-question-close" type="button" onClick={props.onClose}>
            OK
          </button>
          <p id="handwriting">Try "blue"</p>
        </div>
      </div>
    );
  }
}
