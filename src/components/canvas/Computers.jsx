import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

useGLTF.preload("./robot/animated_robot_sdc.glb");

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./robot/animated_robot_sdc.glb");
  const { actions, clips } = useAnimations(computer.animations, computer.scene);

  useEffect(() => {
    actions["ArmatureAction"].play();
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={8.9} groundColor="black" />
      <pointLight position={[0, -1, -3]} intensity={10} />
      <pointLight position={[0, -1, 2]} intensity={1} />
      <pointLight position={[0, 2, -3]} intensity={40} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.4}
        position={isMobile ? [0, -3, -2.2] : [0, -2.6, 0]}
        rotation={[0, -0.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 500px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
      
    </Canvas>
  );
};

export default ComputersCanvas;
