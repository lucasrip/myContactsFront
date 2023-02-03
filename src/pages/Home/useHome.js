import { useState , useEffect , useMemo, useCallback, useDeferredValue, useRef} from 'react';
import ContactsService from "../../services/ContactsService";
import toast from  '../../utils/toast';

export default function useHome()
{
  
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoadingDelete , setIsLoadingDelete] = useState(false);
  
  const [isDeleteModalVisible , setIsDeleteModalVisible ] = useState(false);
  const [ contactBeingDeleted , setContactBeingDeleted] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

    // useMemo para informações
    const filteredContacts = useMemo(() => contacts.filter((contact) => (contact.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())))
    ,[contacts, deferredSearchTerm]);
  
    
    // useCallback para funções
    const loadContacts = useCallback(async (signal)=> {
      try {
   
        setIsloading(true);
        const contactsList = await ContactsService.listContacts( signal , orderBy);
        
        setHasError(false);
        setContacts(contactsList);
      } 
      catch (error) {
        
        if( error instanceof DOMException && error.name === "AbortError") return;
        
        setHasError(true);
        setContacts([]);
      }
      finally{
        setIsloading(false);
      }
      
    },[orderBy])
    
    
    useEffect(()=> {
      const controller = new AbortController();
      loadContacts(controller.signal)
      
      return () => {
        controller.abort();
      }
    },[loadContacts])
    
    function handleToggleOrderBy()
    {
     setOrderBy((prevState) => (prevState === 'asc'?'desc':'asc'))
    }
    
    function handleChangeSearchTerm(event)
    {
     setSearchTerm(event.target.value);
    }
    
    function handleTryAgain()
    {
      loadContacts();
    }
    
    function handleDeleteContact(contact)
    { 
      setContactBeingDeleted(contact);
      setIsDeleteModalVisible(true);
    }
    function handleCloseDeleteModal()
    {
      setIsDeleteModalVisible(false);
      setContactBeingDeleted(null);
    }
    
    async function handleConfirmDeleteContact()
    {
      try
      {
        setIsLoadingDelete(true);
        await ContactsService.deleteContact(contactBeingDeleted?.id);
        
        setContacts(( prevState )=> 
        prevState.filter((contact)=> contact?.id !== contactBeingDeleted?.id)
        )
        
        toast({
          type: 'success',
         text: 'Contato deletado com sucesso!'
        })
        
        handleCloseDeleteModal();
      }
      catch
      {
        toast({
          type: 'danger',
          text: 'Ocorreu um erro ao deletar o contato!'
        })
      }
      finally
      {
        setIsLoadingDelete(false);
      }
      
    }
    
    return {
      contacts,
      filteredContacts,
      isLoading,
      isLoadingDelete,
      isDeleteModalVisible,
      contactBeingDeleted,
      handleCloseDeleteModal,
      handleConfirmDeleteContact,
      searchTerm,
      handleChangeSearchTerm,
      hasError,
      handleTryAgain,
      orderBy,
      handleToggleOrderBy,
      handleDeleteContact,
  }
}