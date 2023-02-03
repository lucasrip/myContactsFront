import { Link } from "react-router-dom"

import arrow from  '../../../../assets/imgs/icons/arrow.svg';
import edit from  '../../../../assets/imgs/icons/edit.svg';
import trash from  '../../../../assets/imgs/icons/trash.svg';

import Modal from "../../../../components/Modal";

import { Card , ListHeader} from './styles';

export default function ContactsList({ contactsListParams })
{

    const { 
      isLoadingDelete,
      isDeleteModalVisible,
      contactBeingDeleted,
      handleCloseDeleteModal,
      handleConfirmDeleteContact,
      filteredContacts,
      orderBy,
      handleToggleOrderBy,
      handleDeleteContact,} = contactsListParams ;

  return (
   <>
       <ListHeader orderBy={orderBy}>
        <header>
         <button type="button" onClick={handleToggleOrderBy} >
          <span> Nome </span>
          <img src={arrow} alt="ordenar lista pelo nome" />
         </button>
        </header>
       </ListHeader>

       {
        filteredContacts?.map((contact) => (
          <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact?.name}</strong>
              {
                contact?.category.name && (
                  <small>{contact?.category.name}</small>
                )
              }
            </div>
            <span>{contact?.email}</span>
            <span>{contact?.phone}</span>
          </div>
    
          <div className="actions">
            <Link to={`/edit/${contact?.id}`}>
                <img src={edit} alt="Edit" />
            </Link>
            <button 
             type="button" 
             onClick={() => handleDeleteContact(contact)}
             >
                <img src={trash} alt="Delete" />
             </button>
          </div>
    
        </Card>
        ))
       }

       <Modal 
         danger
         visible={isDeleteModalVisible}
         isLoading={isLoadingDelete}
         title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"`}
         confirmLabel="Deletar"
         cancelLabel="Cancelar"
         onCancel={handleCloseDeleteModal}
         onConfirm={handleConfirmDeleteContact}
        >
        <p>Esta ação não podera ser desfeita</p>
       </Modal>
   </>
  )
}