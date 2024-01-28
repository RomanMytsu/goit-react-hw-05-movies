import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BallTriangle
      height={50}
      width={50}
      radius={10}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{ position: 'fixed', top: '30%', left: '40%' }}
      wrapperClass=""
      visible={true}
    />
  );
};
