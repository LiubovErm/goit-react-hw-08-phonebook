import { useSelector, useDispatch } from 'react-redux';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { isOpen } from '../../redux/modalSlice';
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
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.modal.isOpen);


  const onDeleteContact = event => {
    deleteContact(event.currentTarget.parentElement.id);
    Notiflix.Notify.success(`Видалено`);
  };

  const onUpdateContact = () => {
    dispatch(isOpen('editContact'));
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
          onClick={onUpdateContact}
          disabled={isLoading}
        >
          <ImPencil2 />
        </ButtonEdit>
        <ButtonDelete type="button" onClick={onDeleteContact}>
          <ImCross />
        </ButtonDelete>
      </ContactItem>
      {modalOpen === 'editContact' && <Modal id={id}></Modal>}
    </>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
