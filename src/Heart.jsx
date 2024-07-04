import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/assets/heart1.glb");
  return <primitive object={scene} {...props} />
}

const Heart = () => {
  return (
    <div className="min-h-screen max-w-full w-full bg-black pb-24">
    <Canvas dpr={[1,2]} shadows camera={{ fov: 120 }} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1} zoom={.5} global={false} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
    </div>
  );
}

export default Heart;