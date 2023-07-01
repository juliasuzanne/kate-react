import { Slide } from "./Slide";

export function ImagesIndex(props) {
  return (
    <div>
      <h1>All associated images</h1>
      <Slide images={props.images} drawing={props.drawing} />
      {props.images.map((image) => (
        <div key={image.id}>
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
