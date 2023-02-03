import styled , { keyframes, css } from "styled-components";

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const fadeOut = keyframes`
from {
  opacity: 1;
}

to {
  opacity: 0;
}
`;

const scaleIn = keyframes`
from {
  transform: scale(0);
}

to {
  transform: scale(1);
}
`;

const scaleOut = keyframes`
from {
  transform: scale(1);
}

to {
  transform: scale(0);
}
`;

export const Overlay = styled.div`
  background: rgba(0,0,0, 0.6) ;
  backdrop-filter:blur(0.3125rem);
  position: fixed ;
  width:100% ;
  height:100% ;
  left:0 ;
  top: 0 ;
  display: flex ;
  justify-content: center ;
  align-items: center ;
  animation: ${ fadeIn } 0.3s ;

  ${({ isLeaving}) => isLeaving && css` animation: ${ fadeOut } 0.2s forwards ; ` }
`

export const Container = styled.div`
  max-width: 28.125rem ;
  width: 95%;
  background: #fff;
  border-radius:0.25rem;
  padding: 1.5rem ;
  box-shadow: 0rem 0.25rem 0.625rem rgba(0,0,0,0.04) ;

  ${({ isLeaving}) => isLeaving && css` animation: ${ scaleOut } 0.2s forwards ; ` }

  > h1
  {
    font-size: 1.375rem ;
    color: ${({theme , danger})=>(
      danger ? theme.colors.danger.main : theme.colors.gray[900]
    )}
  }

  .modal-body 
  {
    margin-top: 2rem;
  }

  animation: ${ scaleIn } 0.3s ;
`

export const Footer = styled.footer`
 margin-top: 2rem ;
 display:flex ;
 align-items: center ;
 justify-content: flex-end ;

 .cancel-button
 {
  background: transparent;
  border: none ;
  font-size: 1rem ;
  margin-right: 1.5rem ;
  color: ${({theme})=> theme.colors.gray[200]};

  &[disabled]
  {
    cursor: pointer;
  }

 }
`