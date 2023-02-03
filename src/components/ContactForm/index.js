import { Form , ButtonContainer } from './style';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select'
import Button from '../Button';
import { forwardRef } from 'react';
import useContactForm from './useContactForm';

export default forwardRef(({buttonLabel, onSubmit},ref) =>
{
  const {
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
  } = useContactForm(onSubmit, ref);

 return (
  <Form method='post' onSubmit={handleSubmit} noValidate>
    
    <FormGroup error={getErrorMessageByFieldName('name')} >
      <Input 
       error={getErrorMessageByFieldName('name')}
       value={name} 
       onChange={handleNameChange} 
       placeholder="Nome *" 
       disabled={isSubmitting}
       />
    </FormGroup>

    <FormGroup  error={getErrorMessageByFieldName('email')}>
    <Input
     error={getErrorMessageByFieldName('email')}
     value={email}
     type="email"
     onChange={handleEmailChange} 
     placeholder="E-mail"
     disabled={isSubmitting}
     />
    </FormGroup>

    <FormGroup>
      <Input 
       value={phone} 
       onChange={handlePhoneChange} 
       placeholder="Telefone" 
       maxLength='15'
       disabled={isSubmitting}
       />
    </FormGroup>

    <FormGroup isLoading={isLoadingCategories}>
      <Select
       value={categoryId}
       onChange={(event)=> setCategoryId(event.target.value)} 
       disabled={isLoadingCategories || isSubmitting}
      >
        <option value=" ">Categoria</option>
        {
         categories.map(({id,name})=>(<option key={id} value={id}>{name}</option>))
        }
      </Select>
    </FormGroup>
     
    <ButtonContainer>
     <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
       {buttonLabel}
     </Button>
    </ButtonContainer>

  </Form>
 )
})