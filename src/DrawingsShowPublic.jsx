export function DrawingsShowPublic(props) {
  return (
    <div>
      <p className="handwriting">{props.drawing.name}</p>
      <img className="modal-drawing" src={props.drawing.url} />
      <p className="handwriting">{props.drawing.description}</p>
    </div>
  );
}
