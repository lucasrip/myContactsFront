import { Container } from "./styles";

import useHome from "./useHome";

import InputSearch from "./components/InputSearch";
import Header from "./components/Header";
import ErrorStatus from "./components/ErrorStatus";
import EmptyList from './components/EmptyList/index';
import SearchNotFound from "./components/SearchNotFound";
import ContactsList from "./components/ContactsList";
import Loader from "../../components/Loader";

export default function Home()
{
  const {
    isLoading,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    handleTryAgain,
    filteredContacts,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const contactsListParams = {
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  }
  
  const hasContacts = contacts.length > 0 ;
  const isListEmpty = !hasError && (!isLoading && !hasContacts) ;
  const isSearchEmpty = !hasError && ( hasContacts && filteredContacts.length < 1) ;


  return (
    <Container>
      <Loader isLoading={ isLoading}/>
     
        {
          hasContacts && (
            
            <InputSearch
             value={searchTerm}
             onChange={handleChangeSearchTerm}
            />
          )
        }

        <Header
         hasError={hasError}
         qtyOfContacts={contacts.length}
         qtyOfFilteredContacts={filteredContacts.length}
        />
  
        {
          hasError && <ErrorStatus onTryAgain={handleTryAgain} />
        }

        { isListEmpty&& <EmptyList/> }

        { isSearchEmpty &&  <SearchNotFound searchTerm={searchTerm}/> }

        { !isSearchEmpty && hasContacts && <ContactsList  contactsListParams={ contactsListParams} /> }
  
  </Container>
  )
}