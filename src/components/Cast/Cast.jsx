import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { getCastId } from 'Api/Api';
import { Loader } from 'components/Loader/Loader';
import {
  ImgCast,
  ImgWrap,
  InfoCast,
  Item,
  List,
  NameCast,
} from './Cast.styled';
import defaultImgCast from '../Image/default-cast.jpg';

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
      {cast.length === 0 && (
        <p style={{ textAlign: 'center', paddingTop: '20px' }}>
          We don't have any cast for this movie
        </p>
      )}
      {loading && <Loader />}
      {error && !loading && toast.error('Cast not found.')}
      {cast && (
        <List>
          {cast.map(({ name, character, profile_path, id }) => (
            <Item key={id}>
              <ImgWrap>
                <ImgCast
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : defaultImgCast
                  }
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
