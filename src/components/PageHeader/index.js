
import {Container} from './style';
import { Link } from "react-router-dom";

import arrow from '../../assets/imgs/icons/arrow.svg';

export default function PageHeader ({title})
{
 return (
  <Container>
    <Link to="/">
      <img src={arrow} alt="voltar" />
      <span>Voltar</span>
    </Link>
    <h1>
      {title}   
    </h1>
  </Container>
 )
}