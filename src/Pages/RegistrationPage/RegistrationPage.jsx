import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/authOperations';
// import * as yup from 'yup';
import { Box } from '../../components/Box/Box';
import {
  Label,
  Input,
  Button,
  Link,
} from './RegistrationPage.styled';

const RegistratinPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.currentTarget.elements;

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(authOperations.register(data));
    event.currentTarget.reset();
  };

  return (
    <Box>
      <Box
        as="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        display="flex"
        flexDirection="column"
        maxWidth={500}
        mx="auto"
        // validationSchema={schema}
      >
        <Label>
          {' '}
          Name
          <Input
            name="name"
            type="text"
            id="name"
          />
        </Label>
        <Label>
          {' '}
          Email
          <Input
            name="email"
            type="email"
            id="email"
          />
        </Label>
        <Label>
          {' '}
          Password
          <Input
            name="password"
            type="password"
            //   required
            id="password"
          />
        </Label>
        <Button type="submit">Sign Up</Button>
        <Link href="/goit-react-hw-08-phonebook/login">
          Already have an account? Sign in
        </Link>
      </Box>
    </Box>
  );
};

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     )
//     .required('Треба ввести імя'),
//   email: yup
//     .string()
//     .nullable()
//     .email()
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'no valid email'
//     )
//     .required('Треба ввести email'),
//   password: yup
//     .string()
//     .min(7)
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'no valid password'
//     )
//     .required('Треба ввести пароль'),
// });

export default RegistratinPage;
