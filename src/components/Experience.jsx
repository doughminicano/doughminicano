/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Leva, useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Standing",
      options: [
        "Waving",
        "Falling",
        "Standing",
        "PointingTopLeft",
        "PointTopRight",
        "PointingBottomLeft",
        "PointingBottomRight",
        "CockyHeadTurn",
        "Typing",
      ],
    },
  });

  

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky 
          turbidity={2}
          rayleigh={0.017}
          mieCoefficient={0.005}
          mieDirectionalG={-1.5}
          elevation={5}
          azimuth={166.7}
          exposure={0.2993}
      />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Leva hidden />
        <Avatar animation={animation} />
        {/* <ambientLight intensity={4} /> */}
      </group>
    </>
  );
};
