export function DrawingsIndex(props) {
  return (
    <div>
      <h1>All drawings</h1>
      {props.drawings.map((drawing) => (
        <div key={drawing.id}>
          <h2>{drawing.name}</h2>
          <img height="300px" src={drawing.url} />
          <p>{drawing.description}</p>
        </div>
      ))}
    </div>
  );
}
