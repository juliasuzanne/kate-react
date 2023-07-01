import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
          <button onClick={() => props.onShowImagesIndex(props.drawing)}> add-ons </button>
        </section>
      </div>
    );
  }
}
