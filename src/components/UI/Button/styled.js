import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.mode === 'dark' ? 'yellow' : 'blue'};
  font-weight: bold;
  color: '#0000ff';
  padding: ${props => props.size === 'lg' ? '16px' : '8px'};
`;