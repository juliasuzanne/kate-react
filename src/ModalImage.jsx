import "./Modal.css";

export function ModalImage(props) {
  if (props.show) {
    return (
      <div className="modal-background-slide">
        <section className="modal-main-slide">
          {props.children}
          <button className="modal-slide-close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
