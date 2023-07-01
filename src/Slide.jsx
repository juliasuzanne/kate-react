import React from "react";
import ReactDOM from "react-dom";
import "./Slide.css";

export function Slide() {
  const ImageURL = [
    "https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163406/14_copy_21_fipelf.jpg",
    "https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163457/FITZGERRELL_1_s5simw.jpg",
    "https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163393/10_L_abbq28.jpg",
    "https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163416/SP_12_kfybif.jpg",
    "  https://res.cloudinary.com/dygjz8yhp/image/upload/v1688163392/17_L_bxkamz.jpg",
  ];

  let count = ImageURL.length - 1;

  class ImageGallery extends React.Component {
    constructor(props) {
      super(props);
      this.state = { currentIndex: 0, slideshow: false, fullscreen: false };
      //this.prevHandler=this.prevHandler.bind(this);
      //this.nextHandler=this.nextHandler.bind(this);
      //this.dotHandler=this.dotHandler.bind(this);
      //this.slideshowHandler=this.slideshowHandler.bind(this);
      this.exitfullScreen = this.exitfullScreen.bind(this);
      //this.enterfullScreen=this.enterfullScreen.bind(this);
      this.slideTransition = this.slideTransition.bind(this);
      this.updateImage = this.updateImage.bind(this);
      this.left = 0;
      //this.myImage = React.createRef();
    }
    slideTransition = (slider) => {
      if (this.state.currentIndex == count) {
        this.left = 0;
        slider.style.left = this.left + "px";
      } else {
        this.left = this.left - 60;
        console.log(this.left);
        slider.style.left = this.left + "px";
      }
    };

    componentDidMount() {
      setInterval(() => {
        if (this.state.slideshow === true) {
          var slider = document.getElementById("slider-img-container");
          var index = this.state.currentIndex === count ? 0 : this.state.currentIndex + 1;

          this.slideTransition(slider);

          this.setState((prevState) => ({
            currentIndex: prevState.currentIndex === count ? 0 : prevState.currentIndex + 1,
          }));
        }
      }, 2000);
    }

    slideshowHandler = (event) => {
      this.setState((prevState) => ({
        slideshow: prevState.slideshow === false ? true : false,
      }));
    };

    exitfullScreen = (event) => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      var i = document.getElementsByClassName("gallery-img-container ")[0];
      i.getElementsByClassName("gallery-img")[0].style.height = "300px";
      i.getElementsByClassName("gallery-img")[0].style.width = "100%";
      this.setState((prevState) => ({
        fullscreen: prevState.fullscreen === false ? true : false,
      }));
    };

    enterfullScreen = (event) => {
      var i = document.getElementsByClassName("gallery-img-container ")[0];
      console.log("fullscreen" + this.state.fullscreen + i);

      if (i.requestFullscreen) {
        i.requestFullscreen();
      } else if (i.mozRequestFullScreen) {
        i.mozRequestFullScreen();
      } else if (i.webkitRequestFullscreen) {
        i.webkitRequestFullscreen();
      }

      i.getElementsByClassName("gallery-img")[0].style.height = "100%";
      i.getElementsByClassName("gallery-img")[0].style.width = "100%";

      this.setState((prevState) => ({
        fullscreen: prevState.fullscreen === false ? true : false,
      }));
    };

    dotHandler = (event) => {
      var imgIndex = event.target.id;

      var slider = document.getElementById("slider-img-container");
      this.left = parseInt(imgIndex) * -60;
      slider.style.left = this.left + "px";

      this.setState({ currentIndex: parseInt(imgIndex) });
    };

    updateImage = (event) => {
      var imgIndex = event.target.id;

      var slider = document.getElementById("slider-img-container");
      this.left = parseInt(imgIndex) * -60;
      slider.style.left = this.left + "px";

      this.setState({ currentIndex: parseInt(imgIndex) });
    };

    prevHandler = (event) => {
      var slider = document.getElementById("slider-img-container");
      var index = this.state.currentIndex === 0 ? count : this.state.currentIndex - 1;

      this.slideTransition(slider);

      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex === 0 ? count : prevState.currentIndex - 1,
      }));
    };

    nextHandler = (event) => {
      var slider = document.getElementById("slider-img-container");
      var index = this.state.currentIndex === count ? 0 : this.state.currentIndex + 1;

      this.slideTransition(slider);

      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex === count ? 0 : prevState.currentIndex + 1,
      }));
    };

    render() {
      //class="material-icons"
      var i = this.state.currentIndex;
      console.log(i);
      var dotNumbers = Array.from(Array(ImageURL.length).keys());
      const carouselDots = dotNumbers.map((n, index) => (
        <div
          className={["carousel-dot", index === this.state.currentIndex ? "active" : ""].join(" ")}
          key={n}
          id={n}
          onClick={this.dotHandler}
        >
          &#9679;
        </div>
      ));
      const ImgItem = (
        <div className="gallery-img-container">
          <img className="gallery-img" src={ImageURL[i]} />
          <button className="prev-carousel-button" onClick={this.prevHandler}>
            &#9664;
          </button>
          <div className="next-carousel-button" onClick={this.nextHandler}>
            &#9654;
          </div>
          {this.state.slideshow === false ? (
            <button className="slideshow-button" onClick={this.slideshowHandler}>
              &#9654;
            </button>
          ) : (
            <button className="slideshow-button" onClick={this.slideshowHandler}>
              &#9646;&#9646;
            </button>
          )}
          {this.state.fullscreen === false ? (
            <button className="fullscreen-button" onClick={this.enterfullScreen}>
              &#9635;
            </button>
          ) : (
            <button className="fullscreen-button" onClick={this.exitfullScreen}>
              &#9635;
            </button>
          )}
        </div>
      );
      var imgId = 0;

      const sliderImages = ImageURL.slice(0, 10).map((n, index) => (
        <img
          className={["slider-img", index === this.state.currentIndex ? "active" : ""].join(" ")}
          src={n}
          key={n}
          id={imgId++}
          onClick={this.updateImage}
        />
      ));

      return (
        <div id="root">
          <div ref={this.myImage}>
            {ImgItem}
            <div id="slider-img-container" ref={this.mySlider}></div>
          </div>
        </div>
      );
    }
  }
  const element = <ImageGallery />;
  ReactDOM.render(element, document.getElementById("root"));
}
