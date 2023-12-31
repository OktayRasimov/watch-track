import { useSelector } from "react-redux";
import styled from "styled-components";

const MainTitle = styled.h1`
  color: var(--color-light-100);
  padding-left: 2rem;
  text-align: center;
  padding-top: 10%;
`;

function StartSearching() {
  const { isLoading } = useSelector((state) => state.movie);

  return !isLoading && <MainTitle>Start Searching...</MainTitle>;
}

export default StartSearching;
