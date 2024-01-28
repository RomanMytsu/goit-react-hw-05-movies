import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

export const ImgWrap = styled.div`
  width: 120px;
  height: 200px;
  display: flex;
`;

export const ImgCast = styled.img`
  object-fit: cover;
`;

export const NameCast = styled.p`
  text-align: center;
  font-weight: 500;
`;

export const InfoCast = styled.p`
  text-align: center;
`;
