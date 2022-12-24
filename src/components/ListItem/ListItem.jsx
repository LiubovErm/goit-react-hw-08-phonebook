import { useState } from 'react';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { Modal } from '../Modal/Modal';
import {
  ContactItem,
  TextWrapper,
  Name,
  Number,
  ButtonDelete,
  ButtonEdit,
} from './ListItem.styled';
import { ImCross } from 'react-icons/im';
import { ImPencil2 } from 'react-icons/im';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';


export const ListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [addContact, setAddContact] = useState(false);
  
  const toggleModal = () => {
    setAddContact(prevState => !prevState);
  };

  const onDeleteContact = event => {
    deleteContact(event.currentTarget.parentElement.id);
    Notiflix.Notify.success(`Видалено`);
  };

  return (
    <>
      <ContactItem id={id}>
        <TextWrapper>
          <Name>{name}:</Name>
          <Number>{number}</Number>
        </TextWrapper>

        <ButtonEdit
          type="button"
          onClick={toggleModal}
          disabled={isLoading}>
          <ImPencil2 />
        </ButtonEdit>

        <ButtonDelete
          type="button"
          onClick={onDeleteContact}>
          <ImCross />
        </ButtonDelete>

      </ContactItem>
       {addContact && <Modal toggleModal={toggleModal} id={id}></Modal>}
    </>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
