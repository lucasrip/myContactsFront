import styled from "styled-components";

export const ListHeader = styled.header`
 margin-top:1.5rem ;
 margin-bottom: 0.5rem;

   button
  {
    background: transparent;
    border: none;
    display:flex ;
    align-items: center ;
    
    span
    {
      margin-right: 0.5rem ;
      font-weight: bold;
      color: ${({theme})=>theme.colors.primary.main};

    }
    img {
      transform: ${({orderBy}) => orderBy === 'asc' ? 'rotate(180deg)':'rotate(0deg)'};
      transition: transform 0.2s ease-in;
    }
 }

`;

export const Card = styled.div`
    background: #fff;
    box-shadow: 0rem 0.25rem 0.625rem rgba(0,0,0, 0.04) ;
    padding: 1rem ;
    border-radius:0.25rem ;
    display:flex ;
    align-items: center ;
    justify-content: space-between ;

    & + &
    {
     margin-top: 1rem ;
    }

    .info
    {
      .contact-name
      {
        display: flex ;
        align-items: center ;

        small
        {
          background: ${({theme})=> theme.colors.primary.lighter};
          color: ${({theme})=> theme.colors.primary.main};
          font-weight: bold ;
          text-transform: uppercase ;
          padding: 0.25rem ;
          border-radius:0.25rem;
          margin-left:0.5rem ;
        }
      }
    }

    span
    {
      display: block ;
      font-size:0.875rem ;
      ${({theme})=> theme.colors.gray[200]}
    }

    .actions
    {
      display: flex ;
      align-items: center ;

      button
      {
        background: transparent;
        border: none;
        margin-left: 0.5rem ;
      }
    }
`;

