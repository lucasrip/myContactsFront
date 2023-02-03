
import styled from "styled-components";

export const Container = styled.div`
margin-top: 1rem;
display: flex;
align-items: center;
.details
{
  margin-left: 1.5rem;
  strong {
    font-size: 1.375rem;
    color:  ${({theme})=> theme.colors.danger.main};
    display: block;
    margin-bottom: 0.5rem;
  }
  
}
`;