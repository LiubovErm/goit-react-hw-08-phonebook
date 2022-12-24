import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height:35px;
  border: none;
  border-radius: ${props => props.theme.radii.normal};
  padding: ${props => props.theme.space[3]}px;
  background-color:${props => props.theme.colors.greenpr};
  color:${props => props.theme.colors.white};
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
    background-color:${props => props.theme.colors.orange};
  }
`;

export const Username = styled.p`
  color:${props => props.theme.colors.blue};
  margin-right: ${props => props.theme.space[5]}px;
`;
