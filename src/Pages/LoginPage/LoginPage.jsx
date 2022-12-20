import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/authOperations';
import { Box } from '../../components/Box/Box';
import {
  Label,
  Input,
  Button,
  Link,
} from '../RegistrationPage/RegistrationPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const data = {
      email: email.value,
      password: password.value,
    };

    dispatch(authOperations.login(data));
    event.currentTarget.reset();
  };


  return (
    <Box>
      <Box as='form' onSubmit={handleSubmit} autoComplete='off' display='flex' flexDirection='column' maxWidth={500} mx='auto'>
            <Label> Name
              <Input
                name="email"
                type="email"
                id="email"
              />
            </Label>
            <Label> Password
              <Input
                name="password"
                type="password"
                id="password"
              />
            </Label>
            <Button type="submit">Sign In</Button>
            <Link href="/goit-react-hw-08-phonebook/register">
              "Don't have an account? Sign Up"
            </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
