import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const Item = styled.li`
  width: calc((100% - 230px) / 6);
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
