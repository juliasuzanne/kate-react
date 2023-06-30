export function DrawingsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateDrawing(props.drawing.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyDrawing(props.drawing);
  };

  return (
    <div>
      <p className="handwriting">{props.drawing.name}</p>
      <img className="modal-drawing" src={props.drawing.url} />
      <p id="handwriting" className="handwriting">
        {props.drawing.description}
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.drawing.name} name="name" type="string" />
        </div>
        <div>
          Image Url: <input defaultValue={props.drawing.url} name="url" type="string" />
        </div>
        <div>
          Tags: <input defaultValue={props.drawing.tags} name="tags" type="string" />
        </div>
        <div>
          Description: <input defaultValue={props.drawing.description} name="description" type="string" />
        </div>
        <button type="submit"> Update Drawing </button>
      </form>
      <div className="delete">
        <button onClick={handleClick}>Delete Drawing</button>
      </div>
    </div>
  );
}
