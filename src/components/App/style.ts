import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1024px;
  min-height: 640px;
  display: flex;
`;

export const Sidebar = styled.div`
  flex-basis: 200px;
  flex-shrink: 0;
  background-color: #fff;
`;

export const Main = styled.div`
  flex-grow: 1;
`;
