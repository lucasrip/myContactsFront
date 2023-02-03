import { useParams , useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ContactsService from "../../services/ContactsService";
import toast from  '../../utils/toast';
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";

export default function useEditContact()
{
    
  const [isLoading, setIsLoading] = useState();
  const [ contactName , setContactName] = useState();
  const contactFormRef = useRef(null);

  const {id} = useParams();
  // const history = useHistory();
    
  // const isMounted = useIsMounted();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact()
    {
      
      try
      {
        const contact = await ContactsService.getContactById(id, controller.signal);
      
        safeAsyncAction(()=>{
         
         contactFormRef.current.setFieldsValues(contact);
         setContactName(contact.name);
         setIsLoading(false);
        
        })
       
      }
      catch (error)
      {
        if( error instanceof DOMException && error.name === "AbortError") return;

        safeAsyncAction(()=>{
         
            // history.push('/');
            navigate('/', { replace:true });
            toast({
            type: 'danger',
            text: 'contato não encontrado!'
           })
         
         })
    
      }

    }
    loadContact();

    return () => {
      controller.abort();
    }

  },[id, navigate, safeAsyncAction])

  async function handleSubmit(contact)
  {
    try
    {
      
      const contactData = await ContactsService.updateContact(id,contact);
      setContactName(contactData?.name);
  
       toast({
        type: 'success',
        text: 'Contato editado com sucesso',
      })
  
    }
    catch{
  
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato',
      })
  
    }
  }
    return {
        isLoading,
        contactName,
        contactFormRef,
        handleSubmit,
      };
}