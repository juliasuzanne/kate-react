import { useRef } from "react";
import { useEffect } from "react";

export function Landing() {
  const ref = useRef(null);

  const handleOpenPage = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    handleOpenPage();
  });

  return (
    <div>
      <img
        className="background"
        src="https://res.cloudinary.com/dygjz8yhp/image/upload/v1688165009/HOME_o5kzxy.jpg
          "
      />

      <a href="/home" className="heading-enter">
        enter
      </a>

      <div ref={ref} id="scrollto"></div>
    </div>
  );
}
