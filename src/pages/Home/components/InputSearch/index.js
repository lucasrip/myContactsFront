import { Container } from "./styles";

export default function InputSearch({value , onChange})
{
 
    return (
        <Container>
          <input 
           type="text"
           value={value}
           onChange={(event) => onChange(event)}
           placeholder="Pesquise pelo nome..."
          />
        </Container>
    )
}