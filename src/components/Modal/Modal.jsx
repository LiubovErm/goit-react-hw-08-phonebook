import { BackDrop } from './Modal.styled';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { UpdateForm } from '../UpdateForm/UpdateForm';

export const Modal = () => {
  const { data: contact } = useGetContactsQuery();

  return (
    <>
      <BackDrop>
        {contact &&
          <UpdateForm initialFormValues={contact} />}
      </BackDrop>
    </>
  );
};
