export function ImagesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateImage(props.image.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onImageDestroy(props.image);
  };

  return (
    <div>
      <img className="modal-drawing-private" src={props.image.url} />
      <p id="handwriting" className="handwriting">
        {props.image.description}
      </p>
      <p id="user_id" className="handwriting">
        {props.image.user_id}
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          Parent: <input defaultValue={props.image.user_id} name="user_id" type="integer" />
        </div>
        <div>
          Image Url: <input defaultValue={props.image.url} name="url" type="string" />
        </div>
        <div>
          Description: <input defaultValue={props.image.description} name="description" type="string" />
        </div>
        <button type="submit"> Update Drawing </button>
      </form>
      <div className="delete">
        <button onClick={handleClick}>Delete Drawing</button>
      </div>
    </div>
  );
}
