import styled from '@emotion/styled';

export const OnlineMarker = styled.span`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : '#e04e4e;';
  }};
`;

export const UserImage = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 10%;
  background-color: burlywood;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
