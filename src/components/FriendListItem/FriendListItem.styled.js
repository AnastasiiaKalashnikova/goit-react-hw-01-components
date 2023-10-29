import styled from 'styled-components';

export const Item = styled.li`
  width: 280px;
  height: 80px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 16px;
  margin-bottom: 8px;
`;

export const StatusLight = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 20px;
  background-color: ${props => {
    if (props.$status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
