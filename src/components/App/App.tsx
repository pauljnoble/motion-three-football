import Scene from "src/components/three/Scene";
import Canvas from "src/components/three/Canvas";
import { Main, Root, Sidebar } from "./style";
import { useCallback, useState } from "react";

const initialState = { zoom: false };

const App = () => {
  const [state, setState] = useState(initialState);

  const handleClick = useCallback(
    () => setState({ ...state, zoom: !state.zoom }),
    [state]
  );

  return (
    <Root>
      <Sidebar>
        <button style={{ margin: "100px 20px" }} onClick={handleClick}>
          Toggle
        </button>
      </Sidebar>
      <Main>
        <Canvas>
          <Scene state={state} />
        </Canvas>
      </Main>
    </Root>
  );
};

export default App;
