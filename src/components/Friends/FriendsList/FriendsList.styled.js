import styled from '@emotion/styled';

export const FriendList = styled.ul`
  width: 300px;
  margin: 30px auto;
  border-radius: 4px;
`;

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
