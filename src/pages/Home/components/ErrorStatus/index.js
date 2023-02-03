import { Container } from "./styles";
import sad from  '../../../../assets/imgs/sad.svg';
import Button from "../../../../components/Button";

export default function ErrorStatus({onTryAgain})
{
    return  (
        <Container>
        <img src={sad} alt="Sad" />
        <div className="details">
          <strong>
            Ocorreu um erro ao obeter os seus contatos
          </strong>
          <Button type="button" onClick={onTryAgain}>
              Tentar novamente
          </Button>
        </div>
      </Container>
    )
}