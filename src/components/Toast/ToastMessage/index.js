import { Container } from "./style";

import success from '../../../../src/assets/imgs/icons/check.svg'
import danger from '../../../../src/assets/imgs/icons/danger.svg'
import { useEffect, memo, useState } from 'react';

function ToastMessage({ message, onRemoveMessage, isLeaving, animatedRef })
{
 const [display , setDisplay] = useState(true);
 
useEffect(()=>{

    const timeoutId = setTimeout(()=>{
        onRemoveMessage(message.id);
        setDisplay(false)
    }, message?.duration || 4000)

    return () => {
       clearTimeout(timeoutId);
    };

},[message, onRemoveMessage])

 function handleRemoveToast()
 {
   onRemoveMessage(message.id);
   setDisplay(false)

 }

    return (
    <Container 
      display={display.toString()}
      type={message.type} 
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
    >
         {message.type === "danger"&& <img src={danger} alt="icone de problema" />}
         {message.type === "success"&& <img src={success} alt="icone de sucesso" />}
        <strong>
         {message.text}
        </strong>
    </Container>
    )
}

export default memo(ToastMessage)