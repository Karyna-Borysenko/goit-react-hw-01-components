import styled from '@emotion/styled';

export const Container = styled.section`
  width: 500px;
  background-color: white;
  margin: 30px auto;
  border-radius: 4px;
`;

export const Title = styled.h2`
  padding: 40px;
  text-align: center;
  text-transform: uppercase;
  color: lightslategray;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #f5f0f0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;

  height: 100px;
  width: calc(100% / 5);

  border: 1px solid lightgray;
`;

export const StatisticsText = styled.span`
  font-size: 20px;
`;

export const Percentage = styled.span`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
`;
