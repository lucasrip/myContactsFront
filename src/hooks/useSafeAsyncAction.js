import { useCallback } from "react";
import useIsMounted from "./useIsMounted";

export default function useSafeAsyncAction(){
 
    const isMounted = useIsMounted();

    const runSafeAsyncAction = useCallback((calback)=>{
        if(isMounted())
        {
            calback();
        }
    },[isMounted])

    return runSafeAsyncAction;
}