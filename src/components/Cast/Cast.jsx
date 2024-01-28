import { getCastId } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ImgCast,
  ImgWrap,
  InfoCast,
  Item,
  List,
  NameCast,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCastId = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getCastId(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCastId();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && !loading && toast.error('Cast not found.')}
      {cast && (
        <List>
          {cast.map(({ name, character, profile_path, id }) => (
            <Item key={id}>
              <ImgWrap>
                <ImgCast
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                />
              </ImgWrap>

              <NameCast>{name}</NameCast>
              <InfoCast>Character: {character}</InfoCast>
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default Cast;
