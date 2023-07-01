import "./Modal.css";
import { Slide } from "./Slide";

export function ModalSlide(props) {
  if (props.show) {
    return (
      <div className="modal-background-slide">
        <div className="modal-main-slide">
          <Slide />
          <button className="modal-slide-close" type="button" onClick={props.onClose}>
            X
          </button>
        </div>
      </div>
    );
  }
}
