export function DrawingsCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDrawing(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 className="heading"> Upload drawing </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="name" type="string" />
        </div>
        <div>
          Tags: <input name="tags" type="string" />
        </div>
        <div>
          Description: <input name="description" type="string" />
        </div>
        <div>
          url: <input name="url" type="string" />
        </div>
        <button type="submit">Upload drawing</button>
      </form>
    </div>
  );
}
