import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0); // setting section to be able to refrence them later
  const [menuOpened, setMenuOpened] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  // Simulate loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  // Show the loading screen until loading is complete
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 7], fov: 30 }}>
        <ScrollControls pages={5} damping={0.2}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}

export default App;
