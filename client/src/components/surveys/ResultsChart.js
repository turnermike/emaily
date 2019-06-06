import React from "react";
import { Canvas } from "react-canvas-js";

// class Example extends Component {
//   render() {
//     return <Canvas options={particleOptions} />;
//   }
// }

const Chart = props => {

  const particleOptions = {
    maxParticles: 50,
    colors: ["#2E1D62", "#513D91", "#487EEF", "#11A887", "#fc5c65", "#fed330"],
    shapes: ["circle", "square"],
    size: 10,
    minSpeed: 0.05,
    maxSpeed: 0.2,
    alpha: 0.7,
    backgroundColor: "#1E1F29"
  };

  return (
    <div>
      <Canvas options={particleOptions} />
    </div>
  );

};

export default Chart;
