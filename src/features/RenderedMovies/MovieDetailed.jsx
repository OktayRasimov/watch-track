import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addSelectedMovie } from "../SearchNavbar/movieSlice";
import { getMoviesFullData } from "../../services/useMovies";

const Img = styled.img`
  height: 40%;
  margin-bottom: 0.6rem;
  border-radius: 10px;
  transition: all 0.6s;
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledLi = styled.li`
  margin-top: 2rem;
  transition: all 0.4s;
  text-align: center;

  padding-bottom: 1rem;
  cursor: pointer;
`;

const MovieTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

function MovieDetailed({ movie }) {
  const dispatch = useDispatch();
  const { Title, Poster } = movie;

  async function handleAddSelectedMovie() {
    const x = await getMoviesFullData(movie.imdbID);
    dispatch(addSelectedMovie(x));
  }

  return (
    <StyledLi onClick={handleAddSelectedMovie}>
      <Img src={Poster} />

      <MovieTitle>{Title}</MovieTitle>
    </StyledLi>
  );
}

export default MovieDetailed;
