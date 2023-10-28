import styled from "styled-components";

export const Container = styled.section`
margin-top: 80px;
margin-bottom: 80px;
text-align: center;

`

export const StatList = styled.ul`
display: flex;
min-width: 480px;
margin-top: 20px;
`

export const StatItem = styled.li`
display: flex;
  flex-wrap: wrap;
width: 120px;
  height: 120px;
justify-content: center;
color: white;
background-color: ${props => props.$color};
`

