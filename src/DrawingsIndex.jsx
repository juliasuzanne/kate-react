export function DrawingsIndex(props) {
  return (
    <div>
      <h1>All drawings</h1>
      {props.drawings.map((drawing) => (
        <div key={drawing.id}>
          <h2 className="handwriting">{drawing.name}</h2>
          <img height="300px" src={drawing.url} />
          <p id="handwriting" className="handwriting">
            {drawing.description}
          </p>
          <br></br>
          <br></br>

          <br></br>
        </div>
      ))}
    </div>
  );
}
