import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 7], fov: 30 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.2}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Experience />
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <LoadingScreen />
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}

export default App;
