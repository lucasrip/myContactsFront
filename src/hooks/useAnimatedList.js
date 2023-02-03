
import { useCallback, useState, useRef, createRef, useEffect } from 'react';

export default function useAnimatedList(initialValue = [])
{
    const [items,seItems] = useState(initialValue);
    const [pendingRemovaItemsIds,setPendingRemovalItemsIds] = useState([]);
    
    const animatedRefs = useRef(new Map());
    const animationEndListeners = useRef(new Map());

    const handleAnimationEnd = useCallback((itemId) =>{

        const removeListener = animationEndListeners.current.get(itemId);
        removeListener();

        animationEndListeners.current.delete(itemId);
        animatedRefs.current.delete(itemId);

        setPendingRemovalItemsIds((prevState) => prevState.filter((item) => item.id !== itemId ));
        seItems((prevState) => prevState.filter((id) => itemId !== id ));

    },[]);

    useEffect(()=> {

     pendingRemovaItemsIds.forEach((itemId) => {
        const animatedRef = animatedRefs.current.get(itemId);
        const alreadyHasListener = animationEndListeners.current.has(itemId);
        const animatedElement = animatedRef?.current;

         if(animatedElement && !alreadyHasListener)
         {
            const onAnimationEnd = () => handleAnimationEnd(itemId);   
            const removeListener = () => animatedElement.removeEventListener('animationend', onAnimationEnd);

            animatedElement.addEventListener('animationend', onAnimationEnd)
            animationEndListeners.current.set(itemId, removeListener);

         }
        });

    } ,[pendingRemovaItemsIds,  handleAnimationEnd])

    useEffect(()=>{
        
        const removeListeners =  animationEndListeners?.current;

        return () => {
           removeListeners.forEach((removeListener) => removeListener());
        }
    },[])

    const handleRemoveItem = useCallback((id) =>
    {
        setPendingRemovalItemsIds((prevState) => [...prevState , id])
    },[]);

    const getAnimatedRef = useCallback((itemId)=> {
        let animatedRef = animatedRefs.current.get(itemId);

        if(!animatedRef)
        {
            animatedRef = createRef();
            animatedRefs.current.set(itemId, animatedRef);
        }

        return animatedRef;
    },[]);

    const  renderList = useCallback((renderItem) =>(
        items?.map((item) => {
            
            const isLeaving = pendingRemovaItemsIds.includes(item.id);
            const animatedRef = getAnimatedRef(item.id);

            return  renderItem(item,{ isLeaving, animatedRef });
        })
    ),[items,pendingRemovaItemsIds, getAnimatedRef]);
   

    return {
        renderList,
        items,
        seItems,
        handleRemoveItem,
    }
}