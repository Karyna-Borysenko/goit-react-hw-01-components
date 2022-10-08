import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  background-color: white;
  margin: 30px auto;
  border: 2px solid lightgray;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  text-align: center;
  padding: 40px;
`;

export const ProfileImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: burlywood;
`;

export const ProfileInfo = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: grey;
`;

export const ProfileName = styled.p`
  font-size: 34px;
  font-weight: 500;
  color: black;
`;

export const ProfileTag = styled.p`
  padding: 10px;
`;

export const ProfileLocation = styled.p``;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #f5f0f0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 100px;
  width: calc(100% / 3);

  border: 1px solid lightgray;
`;

export const StatsText = styled.span`
  font-size: 20px;
  color: grey;
`;

export const StatsQuantities = styled.span`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
`;
