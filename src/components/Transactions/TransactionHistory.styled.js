import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  background-color: white;
  margin: 30px auto;
  border-radius: 4px;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #30d6ec;
  height: 30px;
  color: white;
  font-size: 16px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  color: grey;
  height: 30px;
  text-align: center;
  font-size: 14px;

  :nth-of-type(2n) {
    background-color: #c6dfd8c0;
  }
`;

export const TableType = styled.td`
  text-transform: capitalize;
`;
