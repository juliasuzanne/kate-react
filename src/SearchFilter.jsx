import { useState } from "react";

export function SearchFilter(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <div className="containerHeader">
        <h2> Your Items: </h2>
        Search Filter:
        <input
          defaultValue="none"
          className="myform"
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />{" "}
      </div>

      <div id="drawings-index">
        {props.drawings
          .filter(
            (drawings) =>
              drawings.tags.toLowerCase().includes(searchFilter.toLowerCase()) ||
              drawings.name.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .map((drawing) => (
            <div key={drawing.id} id="drawing">
              <h5> {drawing.name} </h5>
              <img
                onClick={() => props.onShowDrawing(drawing)}
                height="300px"
                className="showingdrawing"
                src={drawing.url}
                alt=""
              />
              <p className="descript"> {drawing.description} </p>
              {/* <button onClick={() => props.onReturndrawing(drawing)}> Return drawing, no refunds!</button> */}
            </div>
          ))}
      </div>
    </div>
  );
}
