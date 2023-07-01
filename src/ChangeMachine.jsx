import axios from "axios";
import { useState, useEffect } from "react";
import { Submit } from "./Submit";
import { Login } from "./Login";
import { DrawingsCreate } from "./DrawingsCreate";
import { Modal } from "./Modal";
import { DrawingsShow } from "./DrawingsShow";
import { SearchFilter } from "./SearchFilter";
import { FooterContact } from "./FooterContact";
import { LogoutLink } from "./Logout";

export function ChangeMachine() {
  // const drawings = [
  //   {
  //     id: 1,
  //     name: "First",
  //     description: "Description",
  //     url: "https://www.gardnermuseum.org/sites/default/files/styles/portrait_large/public/images/slides/1708/Organization_Rentals_Cloisters_04.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Second",
  //     description: "Description",
  //     url: "https://www.chemicals.co.uk/wp-content/uploads/2021/09/close-up-of-sea-water.jpeg",
  //   },
  // ];
  const [drawings, setDrawings] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentDrawing, setCurrentDrawing] = useState({});

  const handleShowModal = (drawing) => {
    console.log("handleShowModal", drawing);
    setIsModalVisible(true);
    setCurrentDrawing(drawing);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsModalVisible(false);
  };

  const handleCreateDrawing = (params, successCallback) => {
    console.log("handleCreatePhoto", params);
    axios.post("http://localhost:3000/drawings.json", params).then((response) => {
      setDrawings([...drawings, response.data]);
      successCallback();
    });
  };

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get("http://localhost:3000/drawings.json").then((response) => {
      console.log(response.data);
      setDrawings(response.data);
    });
  };

  const handleUpdateDrawing = (id, params, successCallback) => {
    console.log("handleUpdateDrawing", params);
    axios.patch(`http://localhost:3000/drawings/${id}.json`, params).then((response) => {
      setDrawings(
        drawings.map((drawing) => {
          if (drawing.id === response.data.id) {
            return response.data;
          } else {
            return drawing;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyDrawing = (drawing) => {
    console.log("handleDestroyDrawing", drawing);
    axios.delete(`http://localhost:3000/drawings/${drawing.id}.json`).then((response) => {
      setDrawings(drawings.filter((d) => d.id !== drawing.id));
      handleClose();
    });
  };

  useEffect(handleIndexDrawings, []);

  return (
    <div>
      {localStorage.jwt === undefined ? (
        <Login />
      ) : (
        <>
          <DrawingsCreate onCreateDrawing={handleCreateDrawing} />
          <br></br>
          <br></br>
          <div id="logout" className="handwriting">
            <LogoutLink />
          </div>
          <br></br>
          <br></br>

          <h1 className="heading">Drawings</h1>

          <SearchFilter drawings={drawings} onShowDrawing={handleShowModal} />
          <Modal show={isModalVisible} onClose={handleClose}>
            <DrawingsShow
              drawing={currentDrawing}
              onUpdateDrawing={handleUpdateDrawing}
              onDestroyDrawing={handleDestroyDrawing}
            />
          </Modal>
          <FooterContact />
        </>
      )}
    </div>
  );
}
