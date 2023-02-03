
import { useState, useRef, useEffect } from 'react';
export default function useAnimatedUnmount(visible)
{
    const [shouldRender, setShouldRender] = useState(visible);
    const animetedElementRef = useRef(null);
    
    useEffect(() => {
  
         const elementRef = animetedElementRef.current;
        function handleAnimationEnd()
        {
         setShouldRender(false);
        }
  
        if(visible)
        {
          setShouldRender(true);
        }
  
        if(!visible &&  elementRef)
        {
          elementRef.addEventListener('animationend', ()=>{
            handleAnimationEnd();
          });
        }
  
        return () => {
          if( elementRef )
          {
            elementRef.removeEventListener('animationEnd',handleAnimationEnd)
          }
        }
  
    }, [visible]);

    return { shouldRender, animetedElementRef }
}