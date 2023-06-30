import { useState } from "react";

export function Submit(props) {
  const [searchFilter, setSearchFilter] = useState("  ");
  const [savedValue, setSavedValue] = useState("");

  const handleChangeList = (event) => {
    event.preventDefault();
    console.log("test" + { savedValue });
    if (savedValue === "" || savedValue === " " || savedValue.length < 4) {
      setSavedValue("");
    } else {
      setSearchFilter(savedValue.toLowerCase());
    }
  };

  return (
    <div>
      <div className="containerHeader">
        <form className="center" onSubmit={handleChangeList}>
          <input id="myform-main" type="string" value={savedValue} onChange={(e) => setSavedValue(e.target.value)} />
          {/* <button className="handwriting" id="button" type="button">
            show
          </button> */}
        </form>
      </div>

      <div id="drawings-index">
        {props.drawings
          .filter((drawings) => drawings.tags.toLowerCase().includes(searchFilter))
          .map((drawing) => (
            <div key={drawing.id} id="drawing">
              <img
                onClick={() => props.onShowDrawing(drawing)}
                height="300px"
                className="showingdrawing"
                src={drawing.url}
                alt=""
              />

              {/* <button onClick={() => props.onReturndrawing(drawing)}> Return drawing, no refunds!</button> */}
            </div>
          ))}
      </div>
    </div>
  );
}
