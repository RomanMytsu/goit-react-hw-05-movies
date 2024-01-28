import { Info, Span, Wrap } from './MovieInfo.styled';

const MovieInfo = ({
  movie: { genres, title, overview, poster_path, runtime, vote_average },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const elements = genres.map(({ id, name }) => <span key={id}>{name}</span>);

  return (
    <Wrap>
      <img src={posterUrl} alt={title} />
      <Info>
        <h2>{title}</h2>
        <p>
          <Span>User score: {vote_average}</Span>
        </p>
        <p>
          <Span> Duration: {runtime} minutes</Span>
        </p>
        <p>
          <Span>{overview}</Span>
        </p>
        <p>
          <Span>Genres: {elements}</Span>
        </p>
      </Info>
    </Wrap>
  );
};

export default MovieInfo;
