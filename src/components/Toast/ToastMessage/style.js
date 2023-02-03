import styled , {css , keyframes} from "styled-components";

const messageIn = keyframes`
from
{
 opacity: 0;
 transform: translateY(-100px);
}

to
{
 opacity: 1;
 transform: translateY(0px);
}

`;

const messageOut = keyframes`
from
{
 opacity: 1;
 transform: translateY(0px);
}

to
{
 opacity: 0;
 transform: translateY(-100px);
}

`;

const containerVariants = {
    default: css`background: ${({ theme }) => theme.colors.primary.main};`,
    success: css`background: ${({ theme }) => theme.colors.success.main};`,
    danger: css`background: ${({ theme }) => theme.colors.danger.main};`,
}


export const Container = styled.div`
padding: 1rem 2rem;
border-radius: 4px ;
color: #fff;
box-shadow: 0px 20px 20px -16px rgba(0,0,0, 0.25);
display: ${ ({display}) => display === "true"?'flex':'none'};
align-items: center;
justify-content: center;
cursor: pointer;
animation: ${messageIn} 0.3s ;

${({ isLeaving }) => isLeaving && css`animation: ${messageOut} 0.2s forwards;` }

${({type}) => containerVariants[type] || containerVariants.default}

& + & {
    margin-top: 12px;
}

img
{
    margin-right: 0.5rem;
}
`;