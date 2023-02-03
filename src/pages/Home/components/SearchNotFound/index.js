import { Container } from "./styles";
import magnifierQuestion from '../../../../assets/imgs/magnifierQuestion.svg';


export default function SearchNotFound({searchTerm})
{
    return (
        <Container>
        <img src={magnifierQuestion} alt="search icon" />
        <span>
         Nenhum resultado foi encontrado para <strong>"{searchTerm}"</strong>.
        </span>
     </Container>
    )
}