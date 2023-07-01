import { useState, useEffect } from "react";
import { ModalQuestion } from "./ModalQuestion";

export function Submit(props) {
  const [searchFilter, setSearchFilter] = useState("  ");
  const [savedValue, setSavedValue] = useState("");
  let [count, setCount] = useState(1);
  let [text, setText] = useState("   ");
  let [checked, setChecked] = useState(false);

  const [isQuestionModalVisible, setIsQuestionModalVisible] = useState(false);

  const handleQuestion = () => {
    console.log("handleShowQuestion");
    setIsQuestionModalVisible(true);
  };

  const handleCloseQuestion = () => {
    console.log("handleClose");
    setIsQuestionModalVisible(false);
  };

  const handleChangeList = (event) => {
    event.preventDefault();
    console.log("test" + { savedValue });
    if (savedValue === "" || savedValue === " " || savedValue.length < 4) {
      setSavedValue("");
    } else {
      setSearchFilter(savedValue.toLowerCase());
      countSearchFilter();
      setChecked(true);
    }
  };

  const checkCount = () => {
    if (count == 0 && checked == true) {
      setText("No Results : (");
    } else {
      setText("   ");
    }
  };

  const countSearchFilter = () => {
    {
      let newVar = props.drawings
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
        )).length;

      setCount(newVar);
    }
  };

  useEffect(countSearchFilter);
  useEffect(checkCount);

  return (
    <div>
      <div className="containerHeader">
        <form className="center" onSubmit={handleChangeList}>
          <input
            autoFocus
            id="myform-main"
            type="string"
            value={savedValue}
            onChange={(e) => setSavedValue(e.target.value)}
          />
        </form>
      </div>

      <div>
        <button className="pregunta" onClick={() => handleQuestion()}>
          ?
        </button>
      </div>

      <ModalQuestion show={isQuestionModalVisible} onClose={handleCloseQuestion}></ModalQuestion>

      <h2 className="heading-noresults">{text}</h2>

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
