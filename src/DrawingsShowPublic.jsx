export function DrawingsShowPublic(props) {
  return (
    <div>
      <img className="modal-drawing" src={props.drawing.url} />
      <p className="handwriting">{props.drawing.description}</p>
    </div>
  );
}
