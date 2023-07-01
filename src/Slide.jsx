import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import "./Slide.css";

export function Slide() {
  const images = [
    "https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163393/10_L_abbq28.jpg",
    "https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163397/Scanned_Image_1_qvkgb5.jpg",
    "https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163392/17_L_bxkamz.jpg",
  ];

  const rotateAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";
    let slideStyle = {
      display: "block",
      minHeight: "100%",
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      transform: `rotate(0)`,
      position: state.previousItem === state.selectedItem ? "relative" : "absolute",
      inset: "0 0 0 0",
      zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
      opacity: state.previousItem === state.selectedItem ? "1" : "0",
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        position: "relative",
        zIndex: 2,
        filter: `blur(0)`,
      },
      prevStyle: {
        ...slideStyle,
        transformOrigin: " 0 100%",
        transform: `rotate(${state.previousItem > state.selectedItem ? "-45deg" : "45deg"})`,
        opacity: "0",
        filter: `blur( ${state.previousItem === state.selectedItem ? "0px" : "5px"})`,
      },
    };
  };
  return (
    <div className="box">
      <Carousel
        showIndicators
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="right-button" onClick={clickHandler}>
                &#8594;
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="left-button">
                &#8592;
              </button>
            )
          );
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li onClick={clickHandler} className={`ind ${isSelected ? "active" : ""}`} key={index} role="button" />
          );
        }}
        transitionTime={310}
        swipeable={false}
      >
        {images.map((URL, index) => (
          <div id="slide-small">
            <img alt="sample_file" src={URL} key={index} />
            <p>description</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
