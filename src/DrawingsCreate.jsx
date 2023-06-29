export function DrawingsCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDrawing(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 className="heading"> Upload drawing </h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div>
          Title: <input id="myform" name="name" type="string" />
        </div>
        <div>
          Tags: <input id="myform" name="tags" type="string" />
        </div>
        <div>
          Description: <input id="myform" name="description" type="string" />
        </div>
        <div>
          url: <input id="myform" name="url" type="string" />
        </div>
        <button id="button" type="submit">
          Upload drawing
        </button>
      </form>
    </div>
  );
}
