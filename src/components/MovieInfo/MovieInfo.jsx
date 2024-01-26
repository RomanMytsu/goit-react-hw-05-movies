const MovieInfo = ({
  movie: {
    genres,
    original_title,
    overview,
    poster_path,
    runtime,
    vote_average,
  },
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const elements = genres.map(({ id, name }) => <span key={id}>{name}</span>);

  return (
    <>
      <div>
        <h2>{original_title}</h2>
        <img src={posterUrl} alt={original_title} />
        <p>User score: {vote_average}</p>
        <span>{runtime} minutes</span>
        <p>{overview}</p>
        <p>{elements}</p>
      </div>
    </>
  );
};

export default MovieInfo;
