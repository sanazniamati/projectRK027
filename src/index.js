import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, RegularPolygon } from "react-konva";

const App = () => {
  const [show, setShow] = useState(false);
  const handelShowClick = () => {
    setShow(true);
  };
  const handelHideClick = () => {
    setShow(false);
  };

  return (
    <>
      <button onClick={handelShowClick}>show</button>
      <button onClick={handelHideClick}>hide</button>

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <RegularPolygon
            x={180}
            y={200}
            sides={5}
            radius={70}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            visible={show}
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
