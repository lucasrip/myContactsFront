import { Overlay } from "./styles"
import Spinner from './../Spinner/index';
import ReactPortal from "../ReactPortal";
import useAnimatedUnmount from './../../hooks/useAnimatedUnmount';


export default function Loader ({isLoading})
{
  const {shouldRender, animetedElementRef} = useAnimatedUnmount(isLoading);

  if(!shouldRender)
  {
    return null;
  }

  return (
  <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading}  ref={animetedElementRef} >
        <Spinner size={90}/>
      </Overlay>
    </ReactPortal>
  )  
}