import { useSelector, useDispatch } from 'react-redux';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { isOpen, contactId } from '../../redux/modalSlice';
import { Modal } from '../Modal/Modal';
import { ContactItem, TextWrapper, Name, Number, ButtonDelete, ButtonEdit } from './ListItem.styled';
import { ImCross } from "react-icons/im";
import { ImPencil2 } from "react-icons/im";
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export const ListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.modal.isOpen);
  const modalId = useSelector(state => state.modal.contactId);
  console.log(modalId);
  console.log(modalOpen);

  const onDeleteContact = event => {
    deleteContact(event.currentTarget.parentElement.id);
    Notiflix.Notify.success(`Видалено`)
  }

  const onUpdateContact = event => {
    const id = event.currentTarget.parentElement.id;
    dispatch(contactId(id));
    // console.log(modalId);
    // console.log(id);
    dispatch(isOpen('editContact'));
 
  };

  return (
    <>
      <ContactItem id={id}>
        <TextWrapper>
          <Name>{name}:</Name> 
          <Number>{number}</Number> 
        </TextWrapper>
        <ButtonEdit type="button" onClick={onUpdateContact} disabled={isLoading}><ImPencil2 /></ButtonEdit>
        <ButtonDelete type="button" onClick={onDeleteContact}><ImCross/></ButtonDelete>
      </ContactItem>
     {modalOpen === 'editContact' && id === modalId && (<Modal id={id}></Modal>)}
    </>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};