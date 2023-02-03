import styled from "styled-components";

export const Container = styled.div`
 & + &
 {
  margin-top: 1rem ;
 }

 small {
    color: ${({theme} )=> theme.colors.danger.main};
    font-size: 0.75rem;
    display: block;
    margin-top: 0.5rem;
 }

 .formItem{
   position: relative;
   .loader
   {
     position: absolute;
     top: 18px;
     right: 1rem;
   }
 }
`