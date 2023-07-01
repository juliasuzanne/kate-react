export function ImagesIndex(props) {
  return (
    <div>
      <h1>All associated images</h1>
      {props.images.map((image) => (
        <div key={image.id}>
          <img className="showingdrawing" src={image.url} />
          <p id="handwriting" className="handwriting">
            {image.description}
          </p>
          <p id="handwriting" className="handwriting">
            Parent: {image.user_id}
          </p>
          <br></br>
        </div>
      ))}
    </div>
  );
}
