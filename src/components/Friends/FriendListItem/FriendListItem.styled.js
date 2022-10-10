import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 2px solid lightgray;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

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
