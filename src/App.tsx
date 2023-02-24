import { useEffect, useState } from "react";
import { AnimationIntro } from "./components/AnimationIntro";
import { Apresentation } from "./components/Apresentation";
import { Footer } from "./components/Footer";
import { Technologies } from "./components/Technologies";
import { ViewProjects } from "./components/ViewProjects";

function App() {
  const [mousePosition, setMousePosition] = useState<any>({
    left: "0",
    top: "0",
  });
  const handleMouseMove = (e: any) => {
    let x = e.clientX;
    let y = e.clientY;
    setMousePosition({
      left: x + "px",
      top: y + "px",
    });
  };

  return (
    <div className="App" onMouseMove={(ev) => handleMouseMove(ev)}>
      <div
        className="cursor"
        style={{ left: mousePosition.left, top: mousePosition.top }}
      ></div>

      {/* <AnimationIntro /> */}
      <Apresentation />
      <ViewProjects />
      <Technologies />
      
      <Footer />
    </div>
  );
}

export default App;
