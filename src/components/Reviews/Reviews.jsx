import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getReviewsId } from 'Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsId = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getReviewsId(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsId();
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 && (
        <p style={{ textAlign: 'center', paddingTop: '20px' }}>
          We don't have any reviews for this movie
        </p>
      )}
      {loading && <Loader />}
      {error && !loading && toast.error('Reviews not found.')}
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
