import styled ,{css} from "styled-components";


export const StyledButton = styled.button`
 height: 3.25rem ;
 padding: 0 1rem;
 border: none ;
 background: ${({theme}) => theme.colors.primary.main} ;
 font-size: 1rem ;
 box-shadow: 0rem 0.25rem 0.625rem rgba(0,0,0,0.04) ;
 font-weight: bold ;
 color: #fff ;
 border-radius: 0.25rem ;
 transition: background 0.2s ease-in;
display: flex;
align-items: center;
justify-content: center;
 &:hover
 {
  background: ${({theme}) => theme.colors.primary.light} ;
 }

 &:active
 {
  background: ${({theme}) => theme.colors.primary.dark} ;
 }
 
 &[disabled]
 {
   background: #ccc !important;
   cursor: default !important;
 }

 ${({  theme , danger }) => danger && css`
   background: ${theme.colors.danger.main};

   &:hover
   {
    background: ${({theme}) => theme.colors.danger.light} ;
   }

   &:active
   {
    background: ${({theme}) => theme.colors.danger.dark} ;
   }

 `}
`