import Spinner from "../Spinner";
import { Container } from "./style";
export default function FormGroup({ children, error = null, isLoading = false}) {
  return (
    <Container>
      <div className="formItem">
      {children}

      {isLoading && (
        <div className="loader" >
         <Spinner size={16} />
        </div>
      )
        }
      </div>    
      {error && <small>{error}</small>}
    </Container>
  );
}
