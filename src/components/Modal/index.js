import { Overlay , Container , Footer} from "./styles";
import Button from '../Button';
import ReactPortal from "../ReactPortal";
import useAnimatedUnmount from './../../hooks/useAnimatedUnmount';

export default function Modal ({
  danger ,
  visible, 
  isLoading,
  title, 
  children , 
  cancelLabel , 
  confirmLabel,
  onCancel,
  onConfirm,
})
{
  const { shouldRender, animetedElementRef } = useAnimatedUnmount(visible);

  if(!shouldRender)return null;

  return (
  <ReactPortal containerId="modal-root">
    <Overlay isLeaving={!visible}  ref={animetedElementRef} >
      <Container danger={danger} isLeaving={!visible} >
       <h1>
        {title}
       </h1>
       <div className="modal-body">
        { children }
       </div>
      <Footer>
        <button 
         type="button" 
         className="cancel-button"
         onClick={onCancel}
         disabled={isLoading}
        >
        { cancelLabel }
       </button>
       <Button 
         type="button" 
         danger={danger}
         onClick={onConfirm}
         isLoading={isLoading}
       >
        { confirmLabel }
       </Button>
      </Footer>
     </Container>

    </Overlay>
</ReactPortal>)
}