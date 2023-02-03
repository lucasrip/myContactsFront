import styled from "styled-components";

export default styled.select`
 width: 100% ;
 background: #fff ;
 border: none;
 box-shadow: 0rem 0.25rem 0.625rem rgba(0,0,0, 0.04) ;
 height: 3.25rem ;
 border-radius: 0.25rem;
 outline: none ;
 padding: 0 1rem ;
 font-size: 1rem ;
 font-family: 'Sora', sans-serif ;
 border:0.125rem solid #fff ;
 transition: border-color 0.2s ease-in ;
 appearance: none; 
 &:focus
 {
  border: 0.125rem solid ${({theme})=> theme.colors.primary.main};
 }

 &[disabled]
{
    background-color: ${({theme})=> theme.colors.gray[100]};
    border-color: ${({theme})=> theme.colors.gray[200]};
    opacity: 1;
}
`