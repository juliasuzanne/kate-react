import { useState } from "react";

export function Submit(props) {
  const [searchFilter, setSearchFilter] = useState("  ");
  const [savedValue, setSavedValue] = useState("");

  const handleChangeList = (event) => {
    event.preventDefault();
    console.log("test" + { savedValue });
    if (savedValue === "" || savedValue === " ") {
      setSavedValue("");
    } else {
      setSearchFilter(savedValue.toLowerCase());
    }
  };

  return (
    <div>
      <div className="containerHeader">
        <form onSubmit={handleChangeList}>
          <h2 className="heading">Search Filter: </h2>
          <input
            className="myform"
            type="string"
            id="test"
            value={savedValue}
            onChange={(e) => setSavedValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="drawings-index">
        {props.drawings
          .filter((drawings) => drawings.tags.toLowerCase().includes(searchFilter))
          .map((drawing) => (
            <div key={drawing.id} id="drawing">
              <h5 className="handwriting"> {drawing.name} </h5>
              <img height="300px" className="showingdrawing" src={drawing.url} alt="" />
              <p className="handwriting"> {drawing.description} </p>
              {/* <button onClick={() => props.onReturndrawing(drawing)}> Return drawing, no refunds!</button> */}
            </div>
          ))}
      </div>
    </div>
  );
}
