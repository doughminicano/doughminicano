/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useAnimations, useFBX, useGLTF, } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export function Avatar(props) {
  const { animation } = props;

  const { headFollow, pointerFollow, wireframe } = useControls({
    headFollow: false,
    pointerFollow: false,
    wireframe: false,
  });

  const group = useRef();

  //loading original glb file for avatart
  const { nodes, materials } = useGLTF("models/675d0953dbf606b25e15763b.glb");

  //loading animations
  const { animations: wavingAnimation } = useFBX("animations/waving.fbx");
  const { animations: fallingAnimation } = useFBX("animations/falling.fbx");
  const { animations: standingAnimation } = useFBX("animations/standing.fbx");
  const { animations: pointTLAnimation } = useFBX("animations/pointTL.fbx");
  const { animations: pointTRAnimation } = useFBX("animations/pointTR.fbx");
  const { animations: pointBLAnimation } = useFBX("animations/pointBL.fbx");
  const { animations: pointBRAnimation } = useFBX("animations/pointBR.fbx");
  const { animations: cockyHeadAnimation } = useFBX("animations/cockyHeadTurn.fbx");
  const { animations: typingAnimation } = useFBX("animations/typing.fbx");

  wavingAnimation[0].name = "Waving"; //renames animation, [default name: mixamo.com]
  fallingAnimation[0].name = "Falling"; //renames animation, [default name: mixamo.com]
  standingAnimation[0].name = "Standing"; //renames animation, [default name: mixamo.com]
  pointTLAnimation[0].name = "PointingTopLeft"; //renames animation, [default name: mixamo.com]
  pointTRAnimation[0].name = "PointTopRight"; //renames animation, [default name: mixamo.com]
  pointBLAnimation[0].name = "PointingBottomLeft"; //renames animation, [default name: mixamo.com]
  pointBRAnimation[0].name = "PointingBottomRight"; //renames animation, [default name: mixamo.com]
  cockyHeadAnimation[0].name = "CockyHeadTurn"; //renames animation, [default name: mixamo.com]
  typingAnimation[0].name = "Typing"; //renames animation, [default name: mixamo.com]

  const { actions } = useAnimations(
    [
      wavingAnimation[0],
      fallingAnimation[0],
      standingAnimation[0],
      pointTLAnimation[0],
      pointTRAnimation[0],
      pointBLAnimation[0],
      pointBRAnimation[0],
      cockyHeadAnimation[0],
      typingAnimation[0],
    ],
    group
  ); //useAnimations {actions} allows animation to play

  // this makes it to where avatar always stares at camera, calling it out by the Head from the 3dObject
  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (pointerFollow) {
      const target = new THREE.Vector3(state.pointer.x, state.pointer.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  });

  //plays animation on start
  useEffect(() => {
    actions[animation].play();
    // return () => {
    //   actions[animation].reset().fadeOut(0.5);
    // };
  }, [actions, animation]);

  // makes a cool wire frame avatar, cycles through 3dbjects
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
      if (wireframe) {
        material.color = new THREE.Color(0x0000ff);
      }
    });
  }, [materials, wireframe]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          frustumCulled={false} //stop from zooming in and loosing head details
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="Wolf3D_Beard"
          geometry={nodes.Wolf3D_Beard.geometry}
          material={materials.Wolf3D_Beard}
          skeleton={nodes.Wolf3D_Beard.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          frustumCulled={false}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/675d0953dbf606b25e15763b.glb");
