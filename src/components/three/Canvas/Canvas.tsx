//@ts-ignore
import { MotionCanvas } from "framer-motion/three";

const Canvas: React.FC = ({ children }) => {
  return (
    <MotionCanvas
      style={{ background: "#1a1d2f", height: "100%", width: "100%" }}
      shadows
    >
      {children}
    </MotionCanvas>
  );
};

export default Canvas;
