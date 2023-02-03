import styled  from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;

  span
  {
    color:  ${({theme})=> theme.colors.gray[200]}; 
    margin-left: 1.5rem;
    word-break: break-word
  }
`;
