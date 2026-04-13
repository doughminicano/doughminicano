/* eslint-disable react/no-unknown-property */
import { Environment, Sky } from "@react-three/drei";
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
      <group position={[0, -1, 0]}>
        <Leva hidden />
        <Avatar animation={animation} />
      </group>
    </>
  );
};
