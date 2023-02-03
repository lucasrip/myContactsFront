import styled from "styled-components";


export const Container = styled.header`
display: flex;
align-items: center ;
justify-content: ${({justifyContent}) => justifyContent} ;
margin-top: 2rem;
border-bottom: 2px solid  ${({theme}) => theme.colors.gray[100]};
padding-bottom: 1rem;
 strong
 {
   display:  ${({hasError}) => (hasError?'none':'flex')};
    font-size:1.5rem ;
 }

 a
 {
   color: ${({theme})=>theme.colors.primary.main};
   text-decoration: none ;
   font-weight: bold ;
   border: 0.125rem solid ${({theme})=>theme.colors.primary.main};
   padding: 0.5rem 1rem;
   border-radius:0.25rem;
   transition: all 0.2 ease-in ;

   &:hover
   {
     background: ${({theme})=>theme.colors.primary.main};
     color: #fff;
   }
 }
`