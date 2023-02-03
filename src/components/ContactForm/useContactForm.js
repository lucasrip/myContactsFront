import { useState , useEffect , useImperativeHandle} from 'react';
import isEmailValid  from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';

import formatPhone from './../../utils/formatPhone';

export default function useContactForm(onSubmit,ref)
{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [categoryId,setCategoryId] = useState('');
    const {setError,removeError,getErrorMessageByFieldName , errors} = useErrors();
 
    const [categories,setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
 
   const [isSubmitting, setIsSubmitting ] = useState(false);
 
    const isFormValid = (name && errors.length === 0);
 
    useImperativeHandle(ref, ()=>
    ({
     setFieldsValues:(contact) => {
      setName(contact?.name ?? '');
      setEmail(contact?.email ?? null);
      setPhone(formatPhone(contact?.phone ?? null));
      setCategoryId(contact?.category.id ?? null);
    },
    resetFields: () => {
     setName('');
     setEmail('');
     setPhone('');
     setCategoryId('');
    },
   
   }),[]);
   
 
    useEffect(()=> {
      const controller = new AbortController();
     async function loadCategories()
     {
       try
       {
         const categoriesList = await CategoriesService.listCategories(controller.signal);
         setCategories(categoriesList);
       }
       catch
       {}
       finally
       {
         setIsLoadingCategories(false);
       }
     }
     loadCategories();

     return () => {
      controller.abort();
     }
    }, []);
 
    async function handleSubmit(event)
    {
     event.preventDefault();
     setIsSubmitting(true);
     
     await onSubmit({name,email,phone,categoryId});
   
     setIsSubmitting(false);
    }
 
    function handleNameChange(event)
    {
     const inputCurrentName = event.target.value;
 
      setName(inputCurrentName)
      if(!inputCurrentName)
      {
        setError({field:'name', message:'Nome é obrigatorio'})
      }
      else
      {
       removeError('name')
      }
    }
 
    function handleEmailChange(event)
    {
     const inputCurrentEmail = event.target.value;
     setEmail(inputCurrentEmail);
 
     if(inputCurrentEmail && !isEmailValid(inputCurrentEmail))
     {
       setError({field:'email', message:'E-mail invalido'});
     }
     else
     {
       removeError('email');
     }
    }
 
    function handlePhoneChange(event)
    {
      setPhone(formatPhone(event.target.value));
    }

    return {
        handleSubmit,
        getErrorMessageByFieldName,
        name,
        handleNameChange,
        isSubmitting,
        email,
        handleEmailChange,
        phone,
        handlePhoneChange,
        isLoadingCategories,
        categoryId,
        setCategoryId,
        categories,
        isFormValid,
     } 
 
}