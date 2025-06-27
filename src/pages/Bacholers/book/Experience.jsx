import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  // Define the onLoaded function that gets triggered when the Book component is loaded
  const onLoaded = () => {
    console.log('Book is loaded!');
    // Any other logic you want to execute after the Book is loaded can go here
  };

  return (
    <>
      <Book rotation={[0, Math.PI / 2, 0.5]} onLoaded={onLoaded} />

      {/* <OrbitControls /> */}
      <Environment preset="studio" />

      <directionalLight
        position={[5, 10, 5]}
        intensity={-2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
      />

      <mesh position-y={-1.9} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>
    </>
  );
};
