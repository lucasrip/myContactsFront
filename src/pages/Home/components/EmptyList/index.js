import { Container } from "./styles";
import emptyBox from '../../../../assets/imgs/emptyBox.svg';


export default function EmptyList()
{
    return (
        <Container>
        <img src={emptyBox} alt="Empty box" />
        <p>
         Você ainda não tem nenhum contato cadastrado!
         Clique no botão <strong>”Novo contato” </strong> 
         à cima para cadastrar o seu primeiro!
        </p>
     </Container>
    )
}