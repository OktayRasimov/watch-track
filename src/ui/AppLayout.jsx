import styled from "styled-components";
import NavBar from "../features/SearchNavbar/NavBar";

import WatchedMovies from "../features/WatchedMovies/WatchedMovies";
import Box from "../features/RenderedMovies/Box";

const MainPage = styled.section`
  overflow: hidden;
  margin: 2.5rem;
`;

const MainBox = styled.div`
  display: flex;
  gap: 7rem;
  /* background-color: red; */
  justify-content: center;
  overflow-y: hidden;
`;

function AppLayout() {
  return (
    <MainPage>
      <NavBar />
      <MainBox>
        <Box />
        <WatchedMovies />
      </MainBox>
    </MainPage>
  );
}

export default AppLayout;
