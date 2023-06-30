import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Mobile
const Computers = ({ isMobile }) => {
  // Load the GLTF model file and store the result in the 'computer' variable
  const computer = useGLTF("./iMac/iMac.gltf");

  return (
    <mesh>
      {/* Add ambient lighting with an intensity of 0.15 and a black ground color */}
      <hemisphereLight intensity={0.15} groundColor='black' />

      {/* Add a directional spotlight with the specified position, angle, penumbra, intensity, and shadow settings */}
      <spotLight
        position={[-20, 50, 10]} // Sets the position of the spotlight in 3D space
        angle={0.12} // Specifies the angle of the spotlight's cone in radians
        penumbra={1} // Controls the softness of the edges of the spotlight's cone
        intensity={1} // Sets the intensity or brightness of the spotlight
        castShadow // Enables the spotlight to cast shadows
        shadow-mapSize={1024} // Specifies the size of the shadow map used for rendering shadows
      />

      {/* Add an omnidirectional light source with an intensity of 1 */}
      <pointLight intensity={1} />

      {/* Render the GLTF model using the 'computer.scene' object as the source.
          Adjust the scale, position, and rotation based on the 'isMobile' prop. */}

      <primitive
        object={computer.scene} // Sets the 3D object to be rendered as a primitive
        scale={isMobile ? 0.7 : 0.6} // Scales the object based on the value of isMobile=0.7 else 0.75
        position={isMobile ? [0, -3, -2.2] : [0, -2.0, -2.5]} // Sets the position of the object in 3D space based on the value of isMobile prop
        rotation={[-0.01, -0.5, -0.1]} // Sets the rotation of the object in Euler angles
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand' // Sets the frame loop mode to 'demand'
      shadows // Enables the rendering of shadows in the scene
      dpr={[1, 2]} // Sets the device pixel ratio for the canvas, controlling the quality of rendering
      camera={{ position: [20, 3, 5], fov: 15 }} // Sets the camera position [x, y, z] and field of view
      gl={{ preserveDrawingBuffer: true }} // Configures the WebGL context options: Set to true to allow saving the canvas image. 
    >
      <Suspense fallback={<CanvasLoader />}> // Provides a fallback UI while the main content is loading
        <OrbitControls
          enableZoom={false} // Disables zooming with the mouse or touchpad
          maxPolarAngle={Math.PI / 2} // Limits the maximum polar angle for camera rotation
          minPolarAngle={Math.PI / 2} // Limits the minimum polar angle for camera rotation
        />
        <Computers isMobile={isMobile} /> // Renders the Computers component with the isMobile prop
      </Suspense>

      <Preload all /> // Preloads and caches all assets used in the scene
    </Canvas>

  );
};

export default ComputersCanvas;