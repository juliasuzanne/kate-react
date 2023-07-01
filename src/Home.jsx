import axios from "axios";
import { useState, useEffect } from "react";
import { Submit } from "./Submit";
import { DrawingsCreate } from "./DrawingsCreate";
import { Modal } from "./Modal";
import { DrawingsShowPublic } from "./DrawingsShowPublic";
import { Footer } from "./Footer";
import { Slide } from "./Slide";
import { ModalSlide } from "./ModalSlide";

export function Home() {
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

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get("http://localhost:3000/drawings.json").then((response) => {
      console.log(response.data);
      setDrawings(response.data);
    });
  };

  useEffect(handleIndexDrawings, []);

  return (
    <div>
      <Submit drawings={drawings} onShowDrawing={handleShowModal} />
      <ModalSlide show={isModalVisible} onClose={handleClose}>
        {/* <DrawingsShowPublic drawing={currentDrawing} /> */}
      </ModalSlide>
      <Footer />
    </div>
  );
}
