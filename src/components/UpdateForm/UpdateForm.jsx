import { useDispatch } from 'react-redux';
import { useUpdateContactMutation } from '../../redux/contactsApi';
import { isOpen } from '../../redux/modalSlice';
import {
  FormBox,
  StyleUpdateForm,
  Input,
  Label,
  CloseButton,
  EditButton,
} from './UpdateForm.styled';
import { Formik } from 'formik';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

export const UpdateForm = ({ initialFormValues }) => {
  const [name, setName] = useState(initialFormValues[0]?.name);
  const [number, setNumber] = useState(initialFormValues[0]?.number);

  const [editContact] = useUpdateContactMutation();
  const dispatch = useDispatch();

  const handleChange = event => {
    const contact = event.target;
    switch (contact.name) {
      case 'name':
        return setName(contact.value);
      case 'number':
        return setNumber(contact.value);
      default:
        return;
    }
  };

  const onEditContact = async ({ resetForm }) => {
    try {
      console.log('initialFormValues', initialFormValues);
      await editContact({ id: initialFormValues[0].id, name, number });
      resetForm();
      dispatch(isOpen(false));
    } catch (error) {
      console.log(error);
      dispatch(isOpen(false));
    }
  };

  const onClose = () => {
    dispatch(isOpen(false));
  };

  return (
    <FormBox>
      <Formik initialValues={initialFormValues} onSubmit={onEditContact}>
        <StyleUpdateForm>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </Label>
          <EditButton type="submit">Update contact</EditButton>
        </StyleUpdateForm>
      </Formik>
      <CloseButton onClick={onClose}>
        <GrClose />
      </CloseButton>
    </FormBox>
  );
};