import { useRef } from "react";
import { useEffect } from "react";

export function Landing() {
  const ref = useRef(null);

  const handleOpenPage = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(handleOpenPage);

  return (
    <div className="background">
      <div />

      <a href="/home" className="heading-enter">
        enter
      </a>

      <div ref={ref} id="scrollto"></div>
    </div>
  );
}
